// export-for-claude.js
// Run this to get current data to share with Claude

const API_BASE = "http://localhost:3000/api/claude"; // Local development
const API_KEY = "9BJsFLu7GCXUZ/IHhfzZgrvIuvuYS7BwwJgWO8VkqVM="; // Replace with your actual key

async function exportDataForClaude() {
  console.log("📊 Exporting current Engeloop data for Claude...\n");

  try {
    // Fetch artists
    const artistsResponse = await fetch(`${API_BASE}/artists?format=detailed`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    // Fetch submissions
    const submissionsResponse = await fetch(
      `${API_BASE}/submissions?format=detailed`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (artistsResponse.ok && submissionsResponse.ok) {
      const artistsData = await artistsResponse.json();
      const submissionsData = await submissionsResponse.json();

      console.log("=== COPY THIS DATA TO CLAUDE ===\n");

      console.log("**CURRENT ARTIST ROSTER:**");
      console.log("```json");
      console.log(JSON.stringify(artistsData, null, 2));
      console.log("```\n");

      console.log("**CURRENT DEMO SUBMISSIONS:**");
      console.log("```json");
      console.log(JSON.stringify(submissionsData, null, 2));
      console.log("```\n");

      console.log("=== END DATA ===");

      console.log(`\n✅ Export complete!`);
      console.log(`📈 Artists: ${artistsData.metadata.totalArtists}`);
      console.log(`📮 Submissions: ${submissionsData.stats.total}`);
      console.log(`⏰ Last updated: ${new Date().toISOString()}`);
    } else {
      console.log("❌ Failed to fetch data");
      console.log("Artists status:", artistsResponse.status);
      console.log("Submissions status:", submissionsResponse.status);
    }
  } catch (error) {
    console.log("❌ Error:", error.message);
  }
}

// Run the export
exportDataForClaude().catch(console.error);

// Usage:
// 1. Replace API_KEY with your actual key
// 2. Run: node export-for-claude.js
// 3. Copy the JSON output and paste into Claude conversation
