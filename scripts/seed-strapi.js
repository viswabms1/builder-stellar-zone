#!/usr/bin/env node

/**
 * Strapi Setup Script
 *
 * This script automatically creates:
 * 1. Content Type: "Page"
 * 2. All Department Roles
 * 3. Sample Vision & Mission Content
 *
 * Usage: node scripts/seed-strapi.js
 *
 * Environment Variables Required:
 * - STRAPI_URL: Your Strapi instance URL (e.g., https://your-project.strapiapp.com)
 * - STRAPI_API_TOKEN: Your Strapi API token (must have admin/super-admin role)
 */

const readline = require("readline");

// Color codes for terminal output
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
};

function log(color, message) {
  console.log(`${color}${message}${colors.reset}`);
}

function success(message) {
  log(colors.green, `✅ ${message}`);
}

function error(message) {
  log(colors.red, `❌ ${message}`);
}

function info(message) {
  log(colors.blue, `ℹ️  ${message}`);
}

function warning(message) {
  log(colors.yellow, `⚠️  ${message}`);
}

// Get input from user
function askQuestion(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// Check Strapi connection
async function checkStrapiConnection(strapiUrl, apiToken) {
  try {
    const response = await fetch(`${strapiUrl}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });

    if (response.ok) {
      success("Connected to Strapi successfully!");
      return true;
    } else {
      error(`Failed to connect: ${response.status} ${response.statusText}`);
      return false;
    }
  } catch (err) {
    error(`Connection error: ${err.message}`);
    return false;
  }
}

// Create the Page content type
async function createPageContentType(strapiUrl, apiToken) {
  info("Creating Page content type...");

  try {
    const response = await fetch(
      `${strapiUrl}/api/content-type-builder/content-types`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contentType: {
            kind: "collectionType",
            collectionName: "pages",
            singularName: "page",
            pluralName: "pages",
            displayName: "Page",
            description: "Dynamic pages managed in Strapi",
            attributes: {
              title: {
                type: "string",
                required: true,
                minLength: 1,
                maxLength: 255,
              },
              slug: {
                type: "string",
                required: true,
                unique: true,
                minLength: 1,
                maxLength: 255,
              },
              description: {
                type: "text",
              },
              contentType: {
                type: "enumeration",
                enum: [
                  "university",
                  "engineering",
                  "health-sciences",
                  "commerce-management",
                  "applied-sciences",
                  "humanities-social-sciences",
                  "law",
                  "journalism",
                  "mathematics",
                  "physics",
                  "chemistry",
                  "library",
                  "administration",
                ],
                required: true,
                default: "university",
              },
            },
          },
        }),
      },
    );

    if (response.ok) {
      success("Page content type created!");
      return true;
    } else if (response.status === 400) {
      warning("Page content type might already exist (this is OK)");
      return true;
    } else {
      const errorData = await response.json();
      error(
        `Failed to create content type: ${errorData.error?.message || response.statusText}`,
      );
      return false;
    }
  } catch (err) {
    error(`Error creating content type: ${err.message}`);
    return false;
  }
}

// Create roles in Strapi
async function createRoles(strapiUrl, apiToken) {
  info("Creating department roles...");

  const roles = [
    { name: "University", description: "Can manage university-level pages" },
    {
      name: "Engineering",
      description: "Can manage Engineering department pages",
    },
    {
      name: "Health Sciences",
      description: "Can manage Health Sciences department pages",
    },
    {
      name: "Commerce & Management",
      description: "Can manage Commerce & Management pages",
    },
    {
      name: "Applied Sciences",
      description: "Can manage Applied Sciences pages",
    },
    {
      name: "Humanities & Social Sciences",
      description: "Can manage HSS pages",
    },
    { name: "Law", description: "Can manage Law department pages" },
    {
      name: "Journalism",
      description: "Can manage Journalism department pages",
    },
    {
      name: "Mathematics",
      description: "Can manage Mathematics department pages",
    },
    { name: "Physics", description: "Can manage Physics department pages" },
    { name: "Chemistry", description: "Can manage Chemistry department pages" },
    { name: "Library", description: "Can manage Library pages" },
    { name: "Administration", description: "Can manage Administration pages" },
  ];

  let createdCount = 0;

  for (const role of roles) {
    try {
      const response = await fetch(`${strapiUrl}/api/admin/roles`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: role.name,
          description: role.description,
          isDefault: false,
        }),
      });

      if (response.ok) {
        success(`Created role: ${role.name}`);
        createdCount++;
      } else if (response.status === 400) {
        warning(`Role "${role.name}" might already exist (this is OK)`);
      } else {
        error(`Failed to create role "${role.name}": ${response.statusText}`);
      }
    } catch (err) {
      error(`Error creating role "${role.name}": ${err.message}`);
    }
  }

  info(`Total roles processed: ${createdCount}`);
  return true;
}

// Create Vision & Mission sample content
async function createVisionMissionContent(strapiUrl, apiToken) {
  info("Creating Vision & Mission sample content...");

  try {
    const response = await fetch(`${strapiUrl}/api/pages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          title: "Vision, Mission and Values",
          slug: "vision-mission",
          description:
            "Guiding DSU's transition from a legacy institution to a future-ready, AI-first university",
          contentType: "university",
          publishedAt: new Date().toISOString(),
        },
      }),
    });

    if (response.ok) {
      const data = await response.json();
      success(`Created Vision & Mission content (ID: ${data.data.id})`);
      return true;
    } else {
      const errorData = await response.json();
      error(
        `Failed to create content: ${errorData.error?.message || response.statusText}`,
      );
      return false;
    }
  } catch (err) {
    error(`Error creating content: ${err.message}`);
    return false;
  }
}

// Main setup function
async function main() {
  console.log("\n");
  log(colors.cyan, "╔════════════════════════════════════════════╗");
  log(colors.cyan, "║     Strapi Content Types & Roles Setup      ║");
  log(colors.cyan, "╚════════════════════════════════════════════╝\n");

  // Get Strapi credentials
  let strapiUrl = process.env.STRAPI_URL;
  let apiToken = process.env.STRAPI_API_TOKEN;

  if (!strapiUrl) {
    strapiUrl = await askQuestion(
      "Enter your Strapi URL (e.g., https://your-project.strapiapp.com): ",
    );
  }

  if (!apiToken) {
    apiToken = await askQuestion(
      "Enter your Strapi API Token (must have admin role): ",
    );
  }

  // Remove trailing slash if present
  strapiUrl = strapiUrl.replace(/\/$/, "");

  console.log("\n");
  info(`Strapi URL: ${strapiUrl}`);
  info(
    `API Token: ${apiToken.substring(0, 10)}...${apiToken.substring(apiToken.length - 10)}`,
  );
  console.log("\n");

  // Check connection
  info("Testing Strapi connection...");
  const connected = await checkStrapiConnection(strapiUrl, apiToken);

  if (!connected) {
    error("Cannot connect to Strapi. Please check your URL and API token.");
    process.exit(1);
  }

  console.log("\n");

  // Step 1: Create content type
  await createPageContentType(strapiUrl, apiToken);
  console.log("\n");

  // Step 2: Create roles
  await createRoles(strapiUrl, apiToken);
  console.log("\n");

  // Step 3: Create sample content
  await createVisionMissionContent(strapiUrl, apiToken);
  console.log("\n");

  log(colors.green, "╔════════════════════════════════════════════╗");
  log(colors.green, "║          Setup Complete! 🎉                 ║");
  log(colors.green, "╚════════════════════════════════════════════╝\n");

  success("Next steps:");
  console.log("  1. Go to your Strapi admin panel");
  console.log("  2. Create more content using the Page collection");
  console.log("  3. Assign users to the department roles");
  console.log("  4. Configure role permissions in Settings > Roles\n");
}

// Run the script
main().catch((err) => {
  error(`Fatal error: ${err.message}`);
  process.exit(1);
});
