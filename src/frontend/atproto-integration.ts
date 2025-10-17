import { AtpAgent, BskyAgent, RichText, XrpcClient } from "@atproto/api";
import {
  LocationPrivacySystem,
  PrivacyLocation,
  extractGeoHashtags,
} from "./location-privacy";

export interface WukkieIssue {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: "low" | "medium" | "high" | "critical";
  status: "open" | "in_progress" | "resolved" | "closed";
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
  id: "uk.wukkie.issue",
  defs: {
    main: {
      type: "record",
      description: "A public issue report with privacy-friendly location",
      key: "tid",
      record: {
        type: "object",
        required: ["title", "description", "location", "category", "createdAt"],
        properties: {
          title: {
            type: "string",
            maxLength: 200,
            description: "Issue title",
          },
          description: {
            type: "string",
            maxLength: 2000,
            description: "Detailed issue description",
          },
          location: {
            type: "object",
            required: ["geoHashtag"],
            properties: {
              geoHashtag: {
                type: "string",
                description: "Privacy-friendly geo hashtag (#geoXXXXXX)",
              },
              label: {
                type: "string",
                maxLength: 100,
                description: "Optional human-readable location label",
              },
              precision: {
                type: "number",
                description: "Approximate precision in kilometers",
              },
            },
          },
          category: {
            type: "string",
            enum: [
              "infrastructure",
              "environment",
              "safety",
              "transport",
              "community",
              "other",
            ],
          },
          priority: {
            type: "string",
            enum: ["low", "medium", "high", "critical"],
            default: "medium",
          },
          status: {
            type: "string",
            enum: ["open", "in_progress", "resolved", "closed"],
            default: "open",
          },
          hashtags: {
            type: "array",
            items: { type: "string" },
            description: "Subject hashtags for categorization",
          },
          media: {
            type: "array",
            items: { type: "blob" },
            maxItems: 4,
            description: "Photos or other media",
          },
          createdAt: {
            type: "string",
            format: "datetime",
          },
          externalUri: {
            type: "string",
            description: "Link to full issue on wukkie.uk",
          },
        },
      },
    },
  },
};

export class ATProtoIssueManager {
  private agent: BskyAgent | null;
  private xrpc: XrpcClient | null;
  private readonly baseUrl: string;
  private userDid: string | null;
  private userHandle: string | null;
  private currentLocation: PrivacyLocation | null;
  private followedTags: Set<string>;
  private tagCloud: Map<string, number>;

  constructor(
    agent: BskyAgent | null = null,
    xrpcOrBaseUrl?: XrpcClient | string,
    baseUrl: string = "https://wukkie.uk",
    userDid?: string,
  ) {
    this.agent = agent;
    this.userDid = userDid || null;
    this.userHandle = null;
    this.currentLocation = null;
    this.followedTags = new Set<string>();
    this.tagCloud = new Map<string, number>();

    // Handle the overloaded constructor parameters
    if (typeof xrpcOrBaseUrl === "string") {
      // Traditional usage: ATProtoIssueManager(agent, baseUrl)
      this.xrpc = null;
      this.baseUrl = xrpcOrBaseUrl;
    } else {
      // OAuth usage: ATProtoIssueManager(null, xrpc, baseUrl, userDid)
      this.xrpc = xrpcOrBaseUrl || null;
      this.baseUrl = baseUrl;
    }
  }

  private getClient(): BskyAgent | XrpcClient {
    if (this.agent) {
      return this.agent;
    } else if (this.xrpc) {
      return this.xrpc;
    } else {
      throw new Error("No ATProto client available (neither agent nor XRPC)");
    }
  }

  /**
   * Create a new issue and optionally post to Bluesky
   */
  async createIssue(
    issue: Omit<WukkieIssue, "id" | "createdAt" | "blueskyUri">,
    postToBluesky: boolean = true,
    blueskyOptions: BlueskyPostOptions = {},
  ): Promise<WukkieIssue> {
    const newIssue: WukkieIssue = {
      ...issue,
      id: this.generateIssueId(),
      createdAt: new Date().toISOString(),
    };

    // Store issue locally (you'd implement your storage mechanism here)
    await this.storeIssue(newIssue);

    // Post to Bluesky if requested
    if (postToBluesky && (this.agent?.session || this.xrpc)) {
      try {
        console.log("🔍 [DEBUG] createIssue: About to post to Bluesky");
        const blueskyUri = await this.postIssueToBluesky(
          newIssue,
          blueskyOptions,
        );
        console.log(
          "🔍 [DEBUG] createIssue: Bluesky post successful, URI:",
          blueskyUri,
        );
        newIssue.blueskyUri = blueskyUri;
        await this.updateIssue(newIssue);
      } catch (error) {
        console.error("🚨 [ERROR] Failed to post to Bluesky:", error);
        console.error(
          "🚨 [ERROR] Full error object:",
          JSON.stringify(error, Object.getOwnPropertyNames(error)),
        );
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
    options: BlueskyPostOptions = {},
  ): Promise<string> {
    console.log("🔍 [DEBUG] postIssueToBluesky: Starting", {
      hasAgent: !!this.agent,
      hasXrpc: !!this.xrpc,
    });
    const client = this.getClient();
    if (this.agent && !this.agent.session) {
      throw new Error("Not authenticated with Bluesky");
    }

    // Build the post text with simple, clean formatting
    let postText = `🚨 ${issue.title}\n\n${issue.description}`;

    // Add location if requested
    if (options.includeLocation !== false) {
      const locationText = issue.location.label
        ? `\n\n📍 ${issue.location.geoHashtag} (${issue.location.label})`
        : `\n\n📍 ${issue.location.geoHashtag}`;
      postText += locationText;
    }

    // Add hashtags with proper spacing
    const allHashtags = [
      "#wukkie",
      `#${issue.category}`,
      issue.location.geoHashtag,
      ...issue.hashtags,
      ...(options.customHashtags || []),
    ];

    const uniqueHashtags = [...new Set(allHashtags)];
    if (uniqueHashtags.length > 0) {
      postText += `\n\n${uniqueHashtags.join(" ")}`;
    }

    // Add link back to Wukkie for full issue details
    postText += `\n\nView full issue: https://wukkie.uk/issue/${issue.id}`;

    // Create rich text - let ATProto handle facet detection automatically
    const rt = new RichText({ text: postText });
    console.log(
      "🔍 [DEBUG] postIssueToBluesky: RichText created, detecting facets...",
    );

    if (this.agent) {
      await rt.detectFacets(this.agent);
      console.log("🔍 [DEBUG] postIssueToBluesky: Facets detected with agent");
    } else {
      // For XRPC mode, use simple facet detection or skip facets entirely
      console.log(
        "🔍 [DEBUG] postIssueToBluesky: XRPC mode - skipping complex facet detection",
      );
    }

    // Prepare the record
    const record = {
      $type: "app.bsky.feed.post",
      text: rt.text,
      facets: rt.facets,
      createdAt: new Date().toISOString(),
    };

    // Add reply if this is part of a thread
    if (options.threadReply) {
      const replyRef = this.parseAtUri(options.threadReply);
      record.reply = {
        root: replyRef,
        parent: replyRef,
      };
    }

    // Add images if available (Bluesky supports up to 4 images)
    if (issue.media && issue.media.length > 0) {
      const images = await this.uploadImages(issue.media.slice(0, 4));
      if (images.length > 0) {
        record.embed = {
          $type: "app.bsky.embed.images",
          images: images,
        };
      }
    }

    // Post to Bluesky
    console.log("🔍 [DEBUG] postIssueToBluesky: About to post", {
      hasAgent: !!this.agent,
      hasXrpc: !!this.xrpc,
      userDid: this.userDid,
      recordType: record.$type,
    });
    let response;
    if (this.agent) {
      console.log("🔍 [DEBUG] postIssueToBluesky: Using agent.post()");
      response = await this.agent.post(record);
      console.log(
        "🔍 [DEBUG] postIssueToBluesky: Agent post successful",
        response,
      );
    } else if (this.xrpc) {
      if (!this.userDid) {
        throw new Error("User DID not available for XRPC operation");
      }
      console.log("🔍 [DEBUG] postIssueToBluesky: Using XRPC call");
      response = await this.xrpc.call("com.atproto.repo.createRecord", {
        repo: this.userDid,
        collection: "app.bsky.feed.post",
        record: record,
      });
      console.log(
        "🔍 [DEBUG] postIssueToBluesky: XRPC call successful",
        response,
      );
    } else {
      throw new Error("No client available");
    }
    console.log("🔍 [DEBUG] postIssueToBluesky: Returning URI:", response.uri);
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
      filteredIssues = filteredIssues.filter((issue) =>
        options.geoHashtags!.includes(issue.location.geoHashtag),
      );
    }

    // Filter by location proximity
    if (options.nearLocation && options.radius) {
      const nearbyHashtags = LocationPrivacySystem.getNearbyGeoHashtags(
        options.nearLocation.geoHashtag,
        options.radius,
      );
      filteredIssues = filteredIssues.filter((issue) =>
        nearbyHashtags.includes(issue.location.geoHashtag),
      );
    }

    // Filter by category
    if (options.category) {
      filteredIssues = filteredIssues.filter(
        (issue) => issue.category === options.category,
      );
    }

    // Filter by status
    if (options.status) {
      filteredIssues = filteredIssues.filter(
        (issue) => issue.status === options.status,
      );
    }

    // Filter by hashtags
    if (options.hashtags && options.hashtags.length > 0) {
      filteredIssues = filteredIssues.filter((issue) =>
        options.hashtags!.some((tag) => issue.hashtags.includes(tag)),
      );
    }

    return filteredIssues;
  }

  /**
   * Search Bluesky for posts with specific geo hashtags
   */
  async searchBlueskyByLocation(geoHashtags: string[]): Promise<any[]> {
    const client = this.getClient();
    if (this.agent && !this.agent.session) {
      throw new Error("Not authenticated with Bluesky");
    }

    const searchQueries = geoHashtags.map((hashtag) => hashtag);
    const results: any[] = [];

    for (const query of searchQueries) {
      try {
        let searchResult;
        if (this.agent) {
          searchResult = await this.agent.app.bsky.feed.searchPosts({
            q: query,
            limit: 25,
          });
        } else if (this.xrpc) {
          searchResult = await this.xrpc.call("app.bsky.feed.searchPosts", {
            q: query,
            limit: 25,
          });
        }
        if (searchResult) {
          results.push(...searchResult.data.posts);
        }
      } catch (error) {
        console.error(`Search failed for query ${query}:`, error);
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
    updateMessage?: string,
  ): Promise<WukkieIssue> {
    // Update issue in storage
    await this.storeIssue(issue);

    // Post update to Bluesky if requested
    if (postUpdate && (this.agent?.session || this.xrpc) && issue.blueskyUri) {
      try {
        const updateText = updateMessage || `🔄 Issue updated: ${issue.title}`;

        const rt = new RichText({ text: updateText });
        if (this.agent) {
          await rt.detectFacets(this.agent);
        }

        const replyRef = this.parseAtUri(issue.blueskyUri);

        if (this.agent) {
          await this.agent.post({
            $type: "app.bsky.feed.post",
            text: rt.text,
            facets: rt.facets,
            reply: {
              root: replyRef,
              parent: replyRef,
            },
            createdAt: new Date().toISOString(),
          });
        } else if (this.xrpc) {
          if (!this.userDid) {
            throw new Error("User DID not available for XRPC operation");
          }
          await this.xrpc.call("com.atproto.repo.createRecord", {
            repo: this.userDid,
            collection: "app.bsky.feed.post",
            record: {
              $type: "app.bsky.feed.post",
              text: rt.text,
              facets: rt.facets,
              reply: {
                root: replyRef,
                parent: replyRef,
              },
              createdAt: new Date().toISOString(),
            },
          });
        }
      } catch (error) {
        console.error("Failed to post update to Bluesky:", error);
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
    images?: Blob[],
  ): Promise<string> {
    const client = this.getClient();
    if (this.agent && !this.agent.session) {
      throw new Error("Not authenticated with Bluesky");
    }

    if (!issue.blueskyUri) {
      throw new Error("Issue has no associated Bluesky post");
    }

    let postText = `💬 Follow-up on: ${issue.title}\n\n${message}`;

    const rt = new RichText({ text: postText });
    if (this.agent) {
      await rt.detectFacets(this.agent);
    } else {
      // Manual facet detection for XRPC mode (similar to postIssueToBluesky)
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      let match;
      while ((match = urlRegex.exec(postText)) !== null) {
        const url = match[1];
        const start = match.index;
        const end = start + url.length;

        rt.facets = rt.facets || [];
        rt.facets.push({
          index: { byteStart: start, byteEnd: end },
          features: [{ $type: "app.bsky.richtext.facet#link", uri: url }],
        });
      }

      // Detect hashtags
      const hashtagRegex = /(#[a-zA-Z0-9_]+)/g;
      while ((match = hashtagRegex.exec(postText)) !== null) {
        const hashtag = match[1];
        const start = match.index;
        const end = start + hashtag.length;

        rt.facets = rt.facets || [];
        rt.facets.push({
          index: { byteStart: start, byteEnd: end },
          features: [
            { $type: "app.bsky.richtext.facet#tag", tag: hashtag.slice(1) },
          ],
        });
      }
    }

    const record: any = {
      $type: "app.bsky.feed.post",
      text: rt.text,
      facets: rt.facets,
      reply: {
        root: this.parseAtUri(issue.blueskyUri),
        parent: this.parseAtUri(issue.blueskyUri),
      },
      createdAt: new Date().toISOString(),
    };

    // Add images if provided
    if (images && images.length > 0) {
      const uploadedImages = await this.uploadImages(images.slice(0, 4));
      if (uploadedImages.length > 0) {
        record.embed = {
          $type: "app.bsky.embed.images",
          images: uploadedImages,
        };
      }
    }

    // Create the post
    let response;
    if (this.agent) {
      response = await this.agent.post(record);
    } else if (this.xrpc) {
      if (!this.userDid) {
        throw new Error("User DID not available for XRPC operation");
      }
      response = await this.xrpc.call("com.atproto.repo.createRecord", {
        repo: this.userDid,
        collection: "app.bsky.feed.post",
        record: record,
      });
    } else {
      throw new Error("No client available");
    }

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
    const parts = uri.replace("at://", "").split("/");
    return {
      uri: uri,
      cid: "", // You'd need to get the CID from the post
    };
  }

  /**
   * Upload images to Bluesky
   */
  private async uploadImages(images: Blob[]): Promise<any[]> {
    const uploadedImages: any[] = [];

    for (const image of images) {
      try {
        let response;
        if (this.agent) {
          response = await this.agent.uploadBlob(image, {
            encoding: "image/jpeg", // Adjust based on actual image type
          });
        } else if (this.xrpc) {
          // For XRPC, we need to upload blobs differently
          const formData = new FormData();
          formData.append("blob", image);

          response = await this.xrpc.call(
            "com.atproto.repo.uploadBlob",
            {},
            {
              data: formData,
              encoding: "image/jpeg",
            },
          );
        }

        if (response) {
          uploadedImages.push({
            alt: "Issue photo",
            image: response.data.blob,
          });
        }
      } catch (error) {
        console.error("Failed to upload image:", error);
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
    const stored = localStorage.getItem("wukkie_issues") || "[]";
    const issues: WukkieIssue[] = JSON.parse(stored);

    const existingIndex = issues.findIndex((i) => i.id === issue.id);
    if (existingIndex >= 0) {
      issues[existingIndex] = issue;
    } else {
      issues.push(issue);
    }

    localStorage.setItem("wukkie_issues", JSON.stringify(issues));
  }

  /**
   * Get all issues from storage and network
   */
  private async getAllIssues(): Promise<WukkieIssue[]> {
    // Get local issues
    const stored = localStorage.getItem("wukkie_issues") || "[]";
    const localIssues = JSON.parse(stored);

    // If we don't have network access, return local only
    if (!this.agent && !this.xrpc) {
      return localIssues;
    }

    try {
      // Search for Wukkie posts on the network
      const networkIssues = await this.searchNetworkIssues();

      // Merge local and network, avoiding duplicates
      const allIssues = [...localIssues];
      networkIssues.forEach((networkIssue) => {
        const existsLocally = localIssues.some(
          (local) =>
            local.blueskyUri === networkIssue.blueskyUri ||
            local.id === networkIssue.id,
        );
        if (!existsLocally) {
          allIssues.push(networkIssue);
        }
      });

      return allIssues;
    } catch (error) {
      console.error("Failed to fetch network issues:", error);
      return localIssues;
    }
  }

  /**
   * Search for Wukkie issues on the ATProto network
   */
  private async searchNetworkIssues(): Promise<WukkieIssue[]> {
    // Search for issues on the network using multiple strategies
    try {
      console.log("🔍 Searching for Wukkie issues on ATProto network...");

      const allIssues: WukkieIssue[] = [];

      // Strategy 1: Search own posts first (these will always be visible)
      const ownIssues = await this.searchOwnPosts();
      allIssues.push(...ownIssues);
      console.log(`✅ Found ${ownIssues.length} own issues`);

      // Strategy 2: General hashtag search (limited by network scope)
      const networkIssues = await this.searchByHashtag("#wukkie", 20);

      // Filter out duplicates (own posts already found)
      const newNetworkIssues = networkIssues.filter(
        (networkIssue) =>
          !allIssues.some(
            (ownIssue) =>
              ownIssue.blueskyUri === networkIssue.blueskyUri ||
              ownIssue.id === networkIssue.id,
          ),
      );
      allIssues.push(...newNetworkIssues);
      console.log(
        `✅ Found ${newNetworkIssues.length} additional network issues`,
      );

      // Strategy 3: Search by location tags if we have current location
      if (this.currentLocation) {
        const locationIssues = await this.searchByLocation();
        const newLocationIssues = locationIssues.filter(
          (locationIssue) =>
            !allIssues.some(
              (existing) =>
                existing.blueskyUri === locationIssue.blueskyUri ||
                existing.id === locationIssue.id,
            ),
        );
        allIssues.push(...newLocationIssues);
        console.log(
          `✅ Found ${newLocationIssues.length} location-based issues`,
        );
      }

      // Sort: own issues first, then by recency
      const currentUserHandle = this.agent?.session?.handle || this.userHandle;
      allIssues.sort((a, b) => {
        // Prioritize own posts
        const aIsOwn = a.author === currentUserHandle;
        const bIsOwn = b.author === currentUserHandle;

        if (aIsOwn && !bIsOwn) return -1;
        if (!aIsOwn && bIsOwn) return 1;

        // Then sort by creation date (newest first)
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });

      console.log(`✅ Total unique issues found: ${allIssues.length}`);
      return allIssues;
    } catch (error) {
      console.error("Network search failed:", error);
      return [];
    }
  }

  /**
   * Search for the current user's own posts with #wukkie
   */
  private async searchOwnPosts(): Promise<WukkieIssue[]> {
    try {
      const currentUser = this.agent?.session?.handle || this.userHandle;
      if (!currentUser) return [];

      let searchResults: any;

      if (this.agent) {
        // Search for own posts specifically
        searchResults = await this.agent.api.app.bsky.feed.searchPosts({
          q: `#wukkie from:${currentUser}`,
          limit: 50,
          sort: "latest",
        });
      } else if (this.xrpc) {
        searchResults = await this.xrpc.call("app.bsky.feed.searchPosts", {
          q: `#wukkie from:${currentUser}`,
          limit: 50,
          sort: "latest",
        });
      } else {
        return [];
      }

      return this.parseSearchResults(searchResults);
    } catch (error) {
      console.warn("Failed to search own posts:", error);
      return [];
    }
  }

  /**
   * Search by hashtag with enhanced query strategies
   */
  private async searchByHashtag(
    hashtag: string,
    limit: number = 20,
  ): Promise<WukkieIssue[]> {
    try {
      let searchResults: any;

      if (this.agent) {
        searchResults = await this.agent.api.app.bsky.feed.searchPosts({
          q: hashtag,
          limit,
          sort: "latest",
        });
      } else if (this.xrpc) {
        searchResults = await this.xrpc.call("app.bsky.feed.searchPosts", {
          q: hashtag,
          limit,
          sort: "latest",
        });
      } else {
        return [];
      }

      return this.parseSearchResults(searchResults);
    } catch (error) {
      console.warn(`Failed to search by hashtag ${hashtag}:`, error);
      return [];
    }
  }

  /**
   * Search for issues near current location using geo hashtags
   */
  private async searchByLocation(): Promise<WukkieIssue[]> {
    try {
      if (!this.currentLocation) return [];

      // Generate location-based search queries
      const locationQueries = [
        this.currentLocation.geoHashtag, // Exact location
        // TODO: Add nearby location hashtags based on geo proximity
      ];

      const allLocationIssues: WukkieIssue[] = [];

      for (const locationQuery of locationQueries) {
        const locationIssues = await this.searchByHashtag(
          `#wukkie ${locationQuery}`,
          10,
        );

        // Filter out duplicates
        const newIssues = locationIssues.filter(
          (locationIssue) =>
            !allLocationIssues.some(
              (existing) =>
                existing.blueskyUri === locationIssue.blueskyUri ||
                existing.id === locationIssue.id,
            ),
        );

        allLocationIssues.push(...newIssues);
      }

      return allLocationIssues;
    } catch (error) {
      console.warn("Failed to search by location:", error);
      return [];
    }
  }

  /**
   * Parse search results into WukkieIssue format and update tag cloud
   */
  private parseSearchResults(searchResults: any): WukkieIssue[] {
    const issues: WukkieIssue[] = [];

    for (const post of searchResults.posts || []) {
      try {
        const wukkieIssue = this.parsePostAsWukkieIssue(post);
        if (wukkieIssue) {
          issues.push(wukkieIssue);
          this.updateTagCloud(wukkieIssue);
        }
      } catch (error) {
        console.warn("Failed to parse post as Wukkie issue:", error);
      }
    }

    return issues;
  }

  /**
   * Set current location for location-based search
   */
  setCurrentLocation(location: PrivacyLocation | null): void {
    this.currentLocation = location;
    console.log(
      "🌍 Current location set for ATProto search:",
      location?.geoHashtag,
    );
  }

  /**
   * Set user handle for personalized search
   */
  setUserHandle(handle: string | null): void {
    this.userHandle = handle;
    console.log("👤 User handle set for ATProto search:", handle);
  }

  /**
   * Add a hashtag to the followed tags list
   */
  followTag(tag: string): void {
    this.followedTags.add(tag.startsWith("#") ? tag : `#${tag}`);
    console.log("🏷️ Now following tag:", tag);
  }

  /**
   * Remove a hashtag from the followed tags list
   */
  unfollowTag(tag: string): void {
    this.followedTags.delete(tag.startsWith("#") ? tag : `#${tag}`);
    console.log("🏷️ Unfollowed tag:", tag);
  }

  /**
   * Get the list of followed tags
   */
  getFollowedTags(): string[] {
    return Array.from(this.followedTags);
  }

  /**
   * Update tag cloud with tags from an issue
   */
  private updateTagCloud(issue: WukkieIssue): void {
    const tags = [
      "#wukkie",
      `#${issue.category}`,
      issue.location.geoHashtag,
      ...issue.hashtags,
    ];

    tags.forEach((tag) => {
      const count = this.tagCloud.get(tag) || 0;
      this.tagCloud.set(tag, count + 1);
    });
  }

  /**
   * Get tag cloud data sorted by frequency
   */
  getTagCloud(): Array<{ tag: string; count: number }> {
    return Array.from(this.tagCloud.entries())
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count);
  }

  /**
   * Parse a Bluesky post as a WukkieIssue
   */
  private parsePostAsWukkieIssue(post: any): WukkieIssue | null {
    try {
      const record = post.record;
      const text = record.text || "";

      // Look for Wukkie issue pattern: "🚨 New Issue: TITLE"
      const titleMatch = text.match(/🚨 New Issue:\s*(.+?)(\n|$)/);
      if (!titleMatch) {
        return null; // Not a Wukkie issue post
      }

      const title = titleMatch[1].trim();

      // Extract description (text between title and location/hashtags)
      let description = "";
      const lines = text.split("\n");
      let foundTitle = false;
      let foundLocation = false;

      for (const line of lines) {
        if (line.includes("🚨 New Issue:")) {
          foundTitle = true;
          continue;
        }
        if (foundTitle && !foundLocation) {
          if (
            line.startsWith("📍") ||
            line.startsWith("#") ||
            line.includes("View full issue:")
          ) {
            foundLocation = true;
            break;
          }
          if (line.trim()) {
            description += (description ? " " : "") + line.trim();
          }
        }
      }

      // Extract hashtags
      const hashtags = (text.match(/#\w+/g) || []).filter(
        (tag) => tag !== "#wukkie",
      );

      // Extract geo hashtag
      const geoMatch = text.match(/#geo[a-z0-9]+/);
      const geoHashtag = geoMatch ? geoMatch[0] : "#geo000000";

      // Determine category from hashtags
      const categoryTags = [
        "infrastructure",
        "environment",
        "safety",
        "transport",
        "community",
      ];
      const category =
        hashtags.find((tag) => categoryTags.includes(tag.slice(1))) || "other";

      return {
        id: `network_${post.uri.split("/").pop()}`,
        title: title,
        description: description || "Network issue - description not available",
        category: category.replace("#", "") as any,
        priority: "medium",
        status: "open",
        location: {
          geoHashtag: geoHashtag,
          label: `Network location ${geoHashtag}`,
          precision: 5,
        },
        hashtags: hashtags,
        createdAt:
          post.indexedAt || record.createdAt || new Date().toISOString(),
        blueskyUri: post.uri,
      };
    } catch (error) {
      console.error("Error parsing post as WukkieIssue:", error);
      return null;
    }
  }

  /**
   * Create an issue from current location
   */
  static async createIssueFromCurrentLocation(
    title: string,
    description: string,
    category: string,
    hashtags: string[] = [],
    locationLabel?: string,
  ): Promise<Partial<WukkieIssue>> {
    const location =
      await LocationPrivacySystem.createFromCurrentLocation(locationLabel);

    return {
      title,
      description,
      category: category as any,
      priority: "medium",
      status: "open",
      location,
      hashtags: [...hashtags, location.geoHashtag],
    };
  }
}

// Utility functions for easy integration
export function extractLocationFromText(text: string): string[] {
  return extractGeoHashtags(text);
}

export function formatIssueForBluesky(
  issue: WukkieIssue,
  baseUrl: string,
): string {
  let text = `🚨 ${issue.title}\n\n${issue.description}`;

  if (issue.location.label) {
    text += `\n\n📍 ${issue.location.geoHashtag} (${issue.location.label})`;
  } else {
    text += `\n\n📍 ${issue.location.geoHashtag}`;
  }

  const hashtags = ["#wukkie", `#${issue.category}`, ...issue.hashtags].join(
    " ",
  );
  text += `\n\n${hashtags}`;

  return text;
}

// Export for use in main application
export default ATProtoIssueManager;
