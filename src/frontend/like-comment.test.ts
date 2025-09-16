import { test, describe } from "node:test";
import assert from "node:assert";

// Mock DOM elements and localStorage for testing
const mockLocalStorage = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

// Mock DOM elements
const mockDOM = {
  getElementById: (id: string) => {
    return {
      textContent: "",
      innerHTML: "",
    };
  },
};

// Mock global objects
(globalThis as any).localStorage = mockLocalStorage;
(globalThis as any).document = mockDOM;
(globalThis as any).prompt = (message: string) => "Test comment text";

// Issue interface matching the main app
interface Issue {
  id?: string;
  title: string;
  description: string;
  category: string;
  hashtags: string[];
  status: "open" | "in-progress" | "resolved";
  createdAt: string;
  author: string;
  likes?: number;
  comments?: Comment[];
}

interface Comment {
  id: string;
  text: string;
  author: string;
  createdAt: string;
}

// Mock WukkieApp class methods for testing
class MockWukkieApp {
  private session = { handle: "testuser.bsky.social" };

  public likeIssue(issueId: string): void {
    const stored = localStorage.getItem("wukkie_issues");
    const issues: Issue[] = stored ? JSON.parse(stored) : [];
    const issue = issues.find((i) => i.id === issueId);

    if (issue) {
      issue.likes = (issue.likes || 0) + 1;
      localStorage.setItem("wukkie_issues", JSON.stringify(issues));
    }
  }

  public commentOnIssue(issueId: string): void {
    const comment = (globalThis as any).prompt("Add your comment:");

    if (comment && comment.trim()) {
      const stored = localStorage.getItem("wukkie_issues");
      const issues: Issue[] = stored ? JSON.parse(stored) : [];
      const issue = issues.find((i) => i.id === issueId);

      if (issue) {
        if (!issue.comments) {
          issue.comments = [];
        }

        issue.comments.push({
          id: Date.now().toString(),
          text: comment.trim(),
          author: this.session?.handle || "Anonymous",
          createdAt: new Date().toISOString(),
        });

        localStorage.setItem("wukkie_issues", JSON.stringify(issues));
      }
    }
  }
}

describe("Like and Comment Functionality", () => {
  test("TestLikeIssue_IncrementCount", () => {
    // Setup
    localStorage.clear();
    const app = new MockWukkieApp();
    const testIssue: Issue = {
      id: "test-issue-1",
      title: "Test Issue",
      description: "Test description",
      category: "infrastructure",
      hashtags: ["#test"],
      status: "open",
      createdAt: new Date().toISOString(),
      author: "testuser",
      likes: 0,
    };

    localStorage.setItem("wukkie_issues", JSON.stringify([testIssue]));

    // Act
    app.likeIssue("test-issue-1");

    // Assert
    const stored = localStorage.getItem("wukkie_issues");
    const issues: Issue[] = stored ? JSON.parse(stored) : [];
    const updatedIssue = issues.find((i) => i.id === "test-issue-1");

    assert.strictEqual(updatedIssue?.likes, 1, "should increment like count");
  });

  test("TestLikeIssue_MultipleIncrements", () => {
    // Setup
    localStorage.clear();
    const app = new MockWukkieApp();
    const testIssue: Issue = {
      id: "test-issue-2",
      title: "Test Issue 2",
      description: "Test description",
      category: "safety",
      hashtags: ["#test"],
      status: "open",
      createdAt: new Date().toISOString(),
      author: "testuser",
      likes: 5,
    };

    localStorage.setItem("wukkie_issues", JSON.stringify([testIssue]));

    // Act
    app.likeIssue("test-issue-2");
    app.likeIssue("test-issue-2");
    app.likeIssue("test-issue-2");

    // Assert
    const stored = localStorage.getItem("wukkie_issues");
    const issues: Issue[] = stored ? JSON.parse(stored) : [];
    const updatedIssue = issues.find((i) => i.id === "test-issue-2");

    assert.strictEqual(updatedIssue?.likes, 8, "should increment by 3 from initial 5");
  });

  test("TestLikeIssue_FromZero", () => {
    // Setup
    localStorage.clear();
    const app = new MockWukkieApp();
    const testIssue: Issue = {
      id: "test-issue-3",
      title: "Test Issue 3",
      description: "Test description",
      category: "transport",
      hashtags: ["#test"],
      status: "open",
      createdAt: new Date().toISOString(),
      author: "testuser",
      // No likes property set initially
    };

    localStorage.setItem("wukkie_issues", JSON.stringify([testIssue]));

    // Act
    app.likeIssue("test-issue-3");

    // Assert
    const stored = localStorage.getItem("wukkie_issues");
    const issues: Issue[] = stored ? JSON.parse(stored) : [];
    const updatedIssue = issues.find((i) => i.id === "test-issue-3");

    assert.strictEqual(updatedIssue?.likes, 1, "should initialize to 1 when undefined");
  });

  test("TestCommentOnIssue_AddComment", () => {
    // Setup
    localStorage.clear();
    const app = new MockWukkieApp();
    const testIssue: Issue = {
      id: "test-issue-4",
      title: "Test Issue 4",
      description: "Test description",
      category: "infrastructure",
      hashtags: ["#test"],
      status: "open",
      createdAt: new Date().toISOString(),
      author: "testuser",
      comments: [],
    };

    localStorage.setItem("wukkie_issues", JSON.stringify([testIssue]));

    // Act
    app.commentOnIssue("test-issue-4");

    // Assert
    const stored = localStorage.getItem("wukkie_issues");
    const issues: Issue[] = stored ? JSON.parse(stored) : [];
    const updatedIssue = issues.find((i) => i.id === "test-issue-4");

    assert.strictEqual(updatedIssue?.comments?.length, 1, "should add one comment");
    assert.strictEqual(updatedIssue?.comments?.[0].text, "Test comment text", "should have correct comment text");
    assert.strictEqual(updatedIssue?.comments?.[0].author, "testuser.bsky.social", "should have correct author");
    assert.ok(updatedIssue?.comments?.[0].id, "should have comment ID");
    assert.ok(updatedIssue?.comments?.[0].createdAt, "should have timestamp");
  });

  test("TestCommentOnIssue_MultipleComments", () => {
    // Setup
    localStorage.clear();
    const app = new MockWukkieApp();
    const testIssue: Issue = {
      id: "test-issue-5",
      title: "Test Issue 5",
      description: "Test description",
      category: "safety",
      hashtags: ["#test"],
      status: "open",
      createdAt: new Date().toISOString(),
      author: "testuser",
      comments: [
        {
          id: "comment-1",
          text: "Existing comment",
          author: "otheruser",
          createdAt: new Date().toISOString(),
        },
      ],
    };

    localStorage.setItem("wukkie_issues", JSON.stringify([testIssue]));

    // Act
    app.commentOnIssue("test-issue-5");

    // Assert
    const stored = localStorage.getItem("wukkie_issues");
    const issues: Issue[] = stored ? JSON.parse(stored) : [];
    const updatedIssue = issues.find((i) => i.id === "test-issue-5");

    assert.strictEqual(updatedIssue?.comments?.length, 2, "should have 2 comments total");
    assert.strictEqual(updatedIssue?.comments?.[0].text, "Existing comment", "should preserve existing comment");
    assert.strictEqual(updatedIssue?.comments?.[1].text, "Test comment text", "should add new comment");
  });

  test("TestCommentOnIssue_InitializeCommentsArray", () => {
    // Setup
    localStorage.clear();
    const app = new MockWukkieApp();
    const testIssue: Issue = {
      id: "test-issue-6",
      title: "Test Issue 6",
      description: "Test description",
      category: "transport",
      hashtags: ["#test"],
      status: "open",
      createdAt: new Date().toISOString(),
      author: "testuser",
      // No comments array initially
    };

    localStorage.setItem("wukkie_issues", JSON.stringify([testIssue]));

    // Act
    app.commentOnIssue("test-issue-6");

    // Assert
    const stored = localStorage.getItem("wukkie_issues");
    const issues: Issue[] = stored ? JSON.parse(stored) : [];
    const updatedIssue = issues.find((i) => i.id === "test-issue-6");

    assert.ok(Array.isArray(updatedIssue?.comments), "should initialize comments array");
    assert.strictEqual(updatedIssue?.comments?.length, 1, "should have one comment");
  });

  test("TestLikeAndComment_Integration", () => {
    // Setup
    localStorage.clear();
    const app = new MockWukkieApp();
    const testIssue: Issue = {
      id: "test-issue-7",
      title: "Test Issue 7",
      description: "Test description",
      category: "infrastructure",
      hashtags: ["#test", "#geo9c3xgp"],
      status: "open",
      createdAt: new Date().toISOString(),
      author: "testuser",
    };

    localStorage.setItem("wukkie_issues", JSON.stringify([testIssue]));

    // Act
    app.likeIssue("test-issue-7");
    app.likeIssue("test-issue-7");
    app.commentOnIssue("test-issue-7");

    // Assert
    const stored = localStorage.getItem("wukkie_issues");
    const issues: Issue[] = stored ? JSON.parse(stored) : [];
    const updatedIssue = issues.find((i) => i.id === "test-issue-7");

    assert.strictEqual(updatedIssue?.likes, 2, "should have 2 likes");
    assert.strictEqual(updatedIssue?.comments?.length, 1, "should have 1 comment");
    assert.strictEqual(updatedIssue?.hashtags.length, 2, "should preserve original hashtags");
  });

  test("TestInvalidIssueId_HandlesGracefully", () => {
    // Setup
    localStorage.clear();
    const app = new MockWukkieApp();
    const testIssue: Issue = {
      id: "valid-issue",
      title: "Valid Issue",
      description: "Test description",
      category: "infrastructure",
      hashtags: ["#test"],
      status: "open",
      createdAt: new Date().toISOString(),
      author: "testuser",
      likes: 5,
      comments: [],
    };

    localStorage.setItem("wukkie_issues", JSON.stringify([testIssue]));

    // Act - try to like/comment on non-existent issue
    app.likeIssue("invalid-issue-id");
    app.commentOnIssue("invalid-issue-id");

    // Assert - original issue should be unchanged
    const stored = localStorage.getItem("wukkie_issues");
    const issues: Issue[] = stored ? JSON.parse(stored) : [];
    const originalIssue = issues.find((i) => i.id === "valid-issue");

    assert.strictEqual(originalIssue?.likes, 5, "should not affect other issues");
    assert.strictEqual(originalIssue?.comments?.length, 0, "should not affect other issues");
    assert.strictEqual(issues.length, 1, "should not create new issues");
  });

  test("TestEmptyComment_NotAdded", () => {
    // Setup
    localStorage.clear();
    const app = new MockWukkieApp();

    // Mock prompt to return empty string
    (globalThis as any).prompt = () => "";

    const testIssue: Issue = {
      id: "test-issue-8",
      title: "Test Issue 8",
      description: "Test description",
      category: "infrastructure",
      hashtags: ["#test"],
      status: "open",
      createdAt: new Date().toISOString(),
      author: "testuser",
      comments: [],
    };

    localStorage.setItem("wukkie_issues", JSON.stringify([testIssue]));

    // Act
    app.commentOnIssue("test-issue-8");

    // Assert
    const stored = localStorage.getItem("wukkie_issues");
    const issues: Issue[] = stored ? JSON.parse(stored) : [];
    const updatedIssue = issues.find((i) => i.id === "test-issue-8");

    assert.strictEqual(updatedIssue?.comments?.length, 0, "should not add empty comment");

    // Restore original mock
    (globalThis as any).prompt = () => "Test comment text";
  });

  test("TestWhitespaceOnlyComment_NotAdded", () => {
    // Setup
    localStorage.clear();
    const app = new MockWukkieApp();

    // Mock prompt to return whitespace
    (globalThis as any).prompt = () => "   \n\t  ";

    const testIssue: Issue = {
      id: "test-issue-9",
      title: "Test Issue 9",
      description: "Test description",
      category: "safety",
      hashtags: ["#test"],
      status: "open",
      createdAt: new Date().toISOString(),
      author: "testuser",
      comments: [],
    };

    localStorage.setItem("wukkie_issues", JSON.stringify([testIssue]));

    // Act
    app.commentOnIssue("test-issue-9");

    // Assert
    const stored = localStorage.getItem("wukkie_issues");
    const issues: Issue[] = stored ? JSON.parse(stored) : [];
    const updatedIssue = issues.find((i) => i.id === "test-issue-9");

    assert.strictEqual(updatedIssue?.comments?.length, 0, "should not add whitespace-only comment");

    // Restore original mock
    (globalThis as any).prompt = () => "Test comment text";
  });

  test("TestCommentTrimming", () => {
    // Setup
    localStorage.clear();
    const app = new MockWukkieApp();

    // Mock prompt to return comment with leading/trailing whitespace
    (globalThis as any).prompt = () => "  This is a comment with spaces  ";

    const testIssue: Issue = {
      id: "test-issue-10",
      title: "Test Issue 10",
      description: "Test description",
      category: "transport",
      hashtags: ["#test"],
      status: "open",
      createdAt: new Date().toISOString(),
      author: "testuser",
      comments: [],
    };

    localStorage.setItem("wukkie_issues", JSON.stringify([testIssue]));

    // Act
    app.commentOnIssue("test-issue-10");

    // Assert
    const stored = localStorage.getItem("wukkie_issues");
    const issues: Issue[] = stored ? JSON.parse(stored) : [];
    const updatedIssue = issues.find((i) => i.id === "test-issue-10");

    assert.strictEqual(updatedIssue?.comments?.[0].text, "This is a comment with spaces", "should trim whitespace from comment");

    // Restore original mock
    (globalThis as any).prompt = () => "Test comment text";
  });
});
