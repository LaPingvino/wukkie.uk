import { AtpAgent, BskyAgent, RichText } from '@atproto/api';
import { LocationPrivacySystem, PrivacyLocation, extractGeoHashtags } from './location-privacy';

export interface WukkieIssue {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  location: PrivacyLocation;
  hashtags: string[];
  media?: Blob[];
  createdAt: string;
  blueskyUri?: string; // Link to Bluesky post
  blueskyReplyUri?: string; // For threaded discussions
}

export interface BlueskyPostOptions {
  linkToIssue?: boolean;
  includeLocation?: boolean;
  customHashtags?: string[];
  threadReply?: string; // URI to reply to
}

export interface IssueSearchOptions {
  geoHashtags?: string[];
  category?: string;
  status?: string;
  hashtags?: string[];
  nearLocation?: PrivacyLocation;
  radius?: number; // in km
}

// Custom lexicon for Wukkie issues
export const WUKKIE_LEXICON = {
  lex: 1,
  id: 'uk.wukkie.issue',
  defs: {
    main: {
      type: 'record',
      description: 'A public issue report with privacy-friendly location',
      key: 'tid',
      record: {
        type: 'object',
        required: ['title', 'description', 'location', 'category', 'createdAt'],
        properties: {
          title: {
            type: 'string',
            maxLength: 200,
            description: 'Issue title'
          },
          description: {
            type: 'string',
            maxLength: 2000,
            description: 'Detailed issue description'
          },
          location: {
            type: 'object',
            required: ['geoHashtag'],
            properties: {
              geoHashtag: {
                type: 'string',
                description: 'Privacy-friendly geo hashtag (#geoXXXXXX)'
              },
              label: {
                type: 'string',
                maxLength: 100,
                description: 'Optional human-readable location label'
              },
              precision: {
                type: 'number',
                description: 'Approximate precision in kilometers'
              }
            }
          },
          category: {
            type: 'string',
            enum: ['infrastructure', 'environment', 'safety', 'transport', 'community', 'other']
          },
          priority: {
            type: 'string',
            enum: ['low', 'medium', 'high', 'critical'],
            default: 'medium'
          },
          status: {
            type: 'string',
            enum: ['open', 'in_progress', 'resolved', 'closed'],
            default: 'open'
          },
          hashtags: {
            type: 'array',
            items: { type: 'string' },
            description: 'Subject hashtags for categorization'
          },
          media: {
            type: 'array',
            items: { type: 'blob' },
            maxItems: 4,
            description: 'Photos or other media'
          },
          createdAt: {
            type: 'string',
            format: 'datetime'
          },
          externalUri: {
            type: 'string',
            description: 'Link to full issue on wukkie.uk'
          }
        }
      }
    }
  }
};

export class ATProtoIssueManager {
  private agent: BskyAgent;
  private readonly baseUrl: string;

  constructor(agent: BskyAgent, baseUrl: string = 'https://wukkie.uk') {
    this.agent = agent;
    this.baseUrl = baseUrl;
  }

  /**
   * Create a new issue and optionally post to Bluesky
   */
  async createIssue(
    issue: Omit<WukkieIssue, 'id' | 'createdAt' | 'blueskyUri'>,
    postToBluesky: boolean = true,
    blueskyOptions: BlueskyPostOptions = {}
  ): Promise<WukkieIssue> {
    const newIssue: WukkieIssue = {
      ...issue,
      id: this.generateIssueId(),
      createdAt: new Date().toISOString()
    };

    // Store issue locally (you'd implement your storage mechanism here)
    await this.storeIssue(newIssue);

    // Post to Bluesky if requested
    if (postToBluesky && this.agent.session) {
      try {
        const blueskyUri = await this.postIssueToBluesky(newIssue, blueskyOptions);
        newIssue.blueskyUri = blueskyUri;
        await this.updateIssue(newIssue);
      } catch (error) {
        console.error('Failed to post to Bluesky:', error);
        // Issue is still created locally even if Bluesky posting fails
      }
    }

    return newIssue;
  }

  /**
   * Post an issue to Bluesky with proper formatting
   */
  async postIssueToBluesky(
    issue: WukkieIssue,
    options: BlueskyPostOptions = {}
  ): Promise<string> {
    if (!this.agent.session) {
      throw new Error('Not authenticated with Bluesky');
    }

    // Build the post text
    let postText = `🚨 New Issue: ${issue.title}\n\n${issue.description}`;

    // Add location if requested
    if (options.includeLocation !== false) {
      const locationText = issue.location.label
        ? `📍 ${issue.location.geoHashtag} (${issue.location.label})`
        : `📍 ${issue.location.geoHashtag}`;
      postText += `\n\n${locationText}`;
    }

    // Add hashtags
    const allHashtags = [
      '#wukkie',
      `#${issue.category}`,
      issue.location.geoHashtag,
      ...issue.hashtags,
      ...(options.customHashtags || [])
    ];

    const uniqueHashtags = [...new Set(allHashtags)];
    postText += '\n\n' + uniqueHashtags.join(' ');

    // Add link to full issue if requested
    if (options.linkToIssue !== false) {
      postText += `\n\nView full issue: ${this.baseUrl}/issue/${issue.id}`;
    }

    // Create rich text with proper facets for hashtags and links
    const rt = new RichText({ text: postText });
    await rt.detectFacets(this.agent);

    // Prepare the record
    const record = {
      $type: 'app.bsky.feed.post',
      text: rt.text,
      facets: rt.facets,
      createdAt: new Date().toISOString(),
    };

    // Add reply if this is part of a thread
    if (options.threadReply) {
      const replyRef = this.parseAtUri(options.threadReply);
      record.reply = {
        root: replyRef,
        parent: replyRef
      };
    }

    // Add images if available (Bluesky supports up to 4 images)
    if (issue.media && issue.media.length > 0) {
      const images = await this.uploadImages(issue.media.slice(0, 4));
      if (images.length > 0) {
        record.embed = {
          $type: 'app.bsky.embed.images',
          images: images
        };
      }
    }

    // Post to Bluesky
    const response = await this.agent.post(record);
    return response.uri;
  }

  /**
   * Search for issues by various criteria
   */
  async searchIssues(options: IssueSearchOptions): Promise<WukkieIssue[]> {
    // This would integrate with your actual issue storage/search system
    // For now, this is a placeholder that shows the interface
    const allIssues = await this.getAllIssues();

    let filteredIssues = allIssues;

    // Filter by geo hashtags
    if (options.geoHashtags && options.geoHashtags.length > 0) {
      filteredIssues = filteredIssues.filter(issue =>
        options.geoHashtags!.includes(issue.location.geoHashtag)
      );
    }

    // Filter by location proximity
    if (options.nearLocation && options.radius) {
      const nearbyHashtags = LocationPrivacySystem.getNearbyGeoHashtags(
        options.nearLocation.geoHashtag,
        options.radius
      );
      filteredIssues = filteredIssues.filter(issue =>
        nearbyHashtags.includes(issue.location.geoHashtag)
      );
    }

    // Filter by category
    if (options.category) {
      filteredIssues = filteredIssues.filter(issue =>
        issue.category === options.category
      );
    }

    // Filter by status
    if (options.status) {
      filteredIssues = filteredIssues.filter(issue =>
        issue.status === options.status
      );
    }

    // Filter by hashtags
    if (options.hashtags && options.hashtags.length > 0) {
      filteredIssues = filteredIssues.filter(issue =>
        options.hashtags!.some(tag => issue.hashtags.includes(tag))
      );
    }

    return filteredIssues;
  }

  /**
   * Search Bluesky for posts with specific geo hashtags
   */
  async searchBlueskyByLocation(geoHashtags: string[]): Promise<any[]> {
    if (!this.agent.session) {
      throw new Error('Not authenticated with Bluesky');
    }

    const searchQueries = geoHashtags.map(hashtag => hashtag);
    const results: any[] = [];

    for (const query of searchQueries) {
      try {
        const searchResult = await this.agent.app.bsky.feed.searchPosts({
          q: query,
          limit: 25
        });
        results.push(...searchResult.data.posts);
      } catch (error) {
        console.error(`Failed to search for ${query}:`, error);
      }
    }

    return results;
  }

  /**
   * Update an existing issue and optionally post update to Bluesky
   */
  async updateIssue(
    issue: WukkieIssue,
    postUpdate: boolean = false,
    updateMessage?: string
  ): Promise<WukkieIssue> {
    // Update issue in storage
    await this.storeIssue(issue);

    // Post update to Bluesky if requested
    if (postUpdate && this.agent.session && issue.blueskyUri) {
      try {
        const updateText = updateMessage || `📄 Issue Updated: ${issue.title}`;
        const fullText = `${updateText}\n\nStatus: ${issue.status}\n${issue.location.geoHashtag}\n\nView: ${this.baseUrl}/issue/${issue.id}`;

        const rt = new RichText({ text: fullText });
        await rt.detectFacets(this.agent);

        const replyRef = this.parseAtUri(issue.blueskyUri);

        await this.agent.post({
          $type: 'app.bsky.feed.post',
          text: rt.text,
          facets: rt.facets,
          reply: {
            root: replyRef,
            parent: replyRef
          },
          createdAt: new Date().toISOString()
        });
      } catch (error) {
        console.error('Failed to post update to Bluesky:', error);
      }
    }

    return issue;
  }

  /**
   * Create a follow-up post for an issue
   */
  async postFollowUp(
    issue: WukkieIssue,
    message: string,
    images?: Blob[]
  ): Promise<string> {
    if (!this.agent.session) {
      throw new Error('Not authenticated with Bluesky');
    }

    if (!issue.blueskyUri) {
      throw new Error('Issue has no associated Bluesky post');
    }

    let postText = `💬 Follow-up on: ${issue.title}\n\n${message}`;
    postText += `\n\n${issue.location.geoHashtag} #wukkie #${issue.category}`;

    const rt = new RichText({ text: postText });
    await rt.detectFacets(this.agent);

    const record: any = {
      $type: 'app.bsky.feed.post',
      text: rt.text,
      facets: rt.facets,
      reply: {
        root: this.parseAtUri(issue.blueskyUri),
        parent: this.parseAtUri(issue.blueskyUri)
      },
      createdAt: new Date().toISOString()
    };

    // Add images if provided
    if (images && images.length > 0) {
      const uploadedImages = await this.uploadImages(images.slice(0, 4));
      if (uploadedImages.length > 0) {
        record.embed = {
          $type: 'app.bsky.embed.images',
          images: uploadedImages
        };
      }
    }

    const response = await this.agent.post(record);
    return response.uri;
  }

  /**
   * Generate unique issue ID
   */
  private generateIssueId(): string {
    return `wukkie_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Parse AT-URI for replies
   */
  private parseAtUri(uri: string) {
    // Parse AT-URI format: at://did:plc:xxx/app.bsky.feed.post/xxxxx
    const parts = uri.replace('at://', '').split('/');
    return {
      uri: uri,
      cid: '', // You'd need to get the CID from the post
    };
  }

  /**
   * Upload images to Bluesky
   */
  private async uploadImages(images: Blob[]): Promise<any[]> {
    const uploadedImages: any[] = [];

    for (const image of images) {
      try {
        const response = await this.agent.uploadBlob(image, {
          encoding: 'image/jpeg' // Adjust based on actual image type
        });

        uploadedImages.push({
          alt: 'Issue photo',
          image: response.data.blob
        });
      } catch (error) {
        console.error('Failed to upload image:', error);
      }
    }

    return uploadedImages;
  }

  /**
   * Store issue (implement with your preferred storage)
   */
  private async storeIssue(issue: WukkieIssue): Promise<void> {
    // This would integrate with your actual storage system
    // localStorage for client-side, or API calls to your backend
    const stored = localStorage.getItem('wukkie_issues') || '[]';
    const issues: WukkieIssue[] = JSON.parse(stored);

    const existingIndex = issues.findIndex(i => i.id === issue.id);
    if (existingIndex >= 0) {
      issues[existingIndex] = issue;
    } else {
      issues.push(issue);
    }

    localStorage.setItem('wukkie_issues', JSON.stringify(issues));
  }

  /**
   * Get all issues from storage
   */
  private async getAllIssues(): Promise<WukkieIssue[]> {
    const stored = localStorage.getItem('wukkie_issues') || '[]';
    return JSON.parse(stored);
  }

  /**
   * Create an issue from current location
   */
  static async createIssueFromCurrentLocation(
    title: string,
    description: string,
    category: string,
    hashtags: string[] = [],
    locationLabel?: string
  ): Promise<Partial<WukkieIssue>> {
    const location = await LocationPrivacySystem.createFromCurrentLocation(locationLabel);

    return {
      title,
      description,
      category: category as any,
      priority: 'medium',
      status: 'open',
      location,
      hashtags: [...hashtags, location.geoHashtag],
    };
  }
}

// Utility functions for easy integration
export function extractLocationFromText(text: string): string[] {
  return extractGeoHashtags(text);
}

export function formatIssueForBluesky(issue: WukkieIssue, baseUrl: string): string {
  let text = `🚨 ${issue.title}\n\n${issue.description}`;

  if (issue.location.label) {
    text += `\n\n📍 ${issue.location.geoHashtag} (${issue.location.label})`;
  } else {
    text += `\n\n📍 ${issue.location.geoHashtag}`;
  }

  const hashtags = ['#wukkie', `#${issue.category}`, ...issue.hashtags].join(' ');
  text += `\n\n${hashtags}`;

  text += `\n\nFull details: ${baseUrl}/issue/${issue.id}`;

  return text;
}

// Export for use in main application
export default ATProtoIssueManager;
