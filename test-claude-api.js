// test-claude-api.js
const API_BASE = "http://localhost:3000/api/claude";
const API_KEY = "9BJsFLu7GCXUZ/IHhfzZgrvIuvuYS7BwwJgWO8VkqVM="; // Replace with your actual key

async function testClaudeAPI() {
  console.log("🧪 Testing Claude API Integration...\n");

  // Test 1: Artists endpoint
  try {
    console.log("1️⃣ Testing Artists endpoint...");
    const artistsResponse = await fetch(`${API_BASE}/artists?format=summary`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (artistsResponse.ok) {
      const artistsData = await artistsResponse.json();
      console.log("✅ Artists endpoint working");
      console.log(`   Found ${artistsData.metadata.totalArtists} artists`);
      console.log(
        `   Sample: ${artistsData.data[0]?.artistName || "No artists found"}\n`
      );
    } else {
      console.log("❌ Artists endpoint failed:", artistsResponse.status);
      const errorText = await artistsResponse.text();
      console.log("   Response:", errorText, "\n");
    }
  } catch (error) {
    console.log("❌ Artists endpoint error:", error.message, "\n");
  }

  // Test 2: Submissions endpoint
  try {
    console.log("2️⃣ Testing Submissions endpoint...");
    const submissionsResponse = await fetch(
      `${API_BASE}/submissions?format=summary&limit=5`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (submissionsResponse.ok) {
      const submissionsData = await submissionsResponse.json();
      console.log("✅ Submissions endpoint working");
      console.log(`   Found ${submissionsData.stats.total} submissions`);
      console.log(`   Pending: ${submissionsData.stats.byStatus.pending}`);
      console.log(`   Urgent: ${submissionsData.stats.byPriority.urgent}\n`);
    } else {
      console.log(
        "❌ Submissions endpoint failed:",
        submissionsResponse.status
      );
      const errorText = await submissionsResponse.text();
      console.log("   Response:", errorText, "\n");
    }
  } catch (error) {
    console.log("❌ Submissions endpoint error:", error.message, "\n");
  }

  console.log("🎉 Testing complete!");
}

// Run the test
testClaudeAPI().catch(console.error);
