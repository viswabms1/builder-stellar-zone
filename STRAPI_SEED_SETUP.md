# Automated Strapi Setup Guide

This guide explains how to use the automated setup script to configure your Strapi instance.

---

## What the Script Does

The `scripts/seed-strapi.js` script automatically:

1. ✅ **Creates the "Page" content type** with all required fields
2. ✅ **Creates all department roles** (University, Engineering, Health Sciences, etc.)
3. ✅ **Creates sample Vision & Mission content** (ready to edit)

---

## Prerequisites

✅ Strapi Cloud account created
✅ Strapi URL available (e.g., `https://your-project.strapiapp.com`)
✅ API Token created in Strapi admin (Settings → API Tokens → Create)

---

## Step 1: Get Your Strapi API Token

1. Log in to your **Strapi admin panel**
2. Go to **Settings** (⚙️ icon, bottom left)
3. Click **API Tokens**
4. Click **Create new API token**
5. **Name:** `Setup Token`
6. **Access level:** `Full access`
7. Click **Save**
8. **Copy the token** (appears only once!)

---

## Step 2: Run the Setup Script

### Option A: Interactive (Recommended)

```bash
npm run seed:strapi
```

The script will ask you for:

- Your Strapi URL
- Your API Token

### Option B: Using Environment Variables

Set environment variables first:

```bash
export STRAPI_URL=https://your-project.strapiapp.com
export STRAPI_API_TOKEN=your-api-token-here
npm run seed:strapi
```

---

## Step 3: Wait for Completion

The script will:

1. ✅ Test Strapi connection
2. ✅ Create Page content type
3. ✅ Create all department roles
4. ✅ Create sample Vision & Mission content

You'll see output like:

```
✅ Connected to Strapi successfully!
✅ Page content type created!
✅ Created role: University
✅ Created role: Engineering
✅ Created role: Health Sciences
... (more roles)
✅ Created Vision & Mission content (ID: 1)
```

---

## Step 4: Verify in Strapi Admin

1. Go to your **Strapi admin panel**
2. Check **Content Manager** → You should see "Page" collection
3. Check **Settings** → **Roles** → You should see all department roles

---

## Next Steps

### Configure Permissions for Each Role

For each role (University, Engineering, etc.):

1. Go to **Settings** → **Roles**
2. Click on the role (e.g., "University")
3. Find the **Page** permission
4. Set:

   - ✅ **Find** (read list)
   - ✅ **FindOne** (read single)
   - ✅ **Update** (edit their pages)
   - ❌ **Create** (cannot create)
   - ❌ **Delete** (cannot delete)

5. Click **Update** to add a **filter**:

   - Field: `contentType`
   - Condition: `equals`
   - Value: `university` (for University role), `engineering` (for Engineering role), etc.

6. **Save**

### Create More Content

1. Go to **Content Manager** → **Pages**
2. Click **Create new entry**
3. Fill in:
   - Title
   - Slug
   - Description
   - **contentType** (select: university, engineering, etc.)
4. Click **Save**

### Assign Users to Roles

1. Go to **Settings** → **Users**
2. Click on a user
3. Select their **Role** (e.g., University, Engineering, etc.)
4. Click **Save**

---

## Troubleshooting

### "Cannot connect to Strapi"

- ✅ Check your Strapi URL is correct
- ✅ Check your API Token is valid
- ✅ Make sure Strapi is running

### "Page content type might already exist"

- This is OK! The script will skip it if it already exists

### "Role already exists"

- This is OK! The script will continue with other roles

### "Permission denied for API"

- Make sure your API Token has `Full access` or admin role

---

## What Gets Created

### Content Type: Page

Fields:

- `title` - String, required
- `slug` - String, unique, required
- `description` - Text
- `contentType` - Enum (university, engineering, health-sciences, etc.)
- Other fields can be added later in Strapi UI

### Roles

- University
- Engineering
- Health Sciences
- Commerce & Management
- Applied Sciences
- Humanities & Social Sciences
- Law
- Journalism
- Mathematics
- Physics
- Chemistry
- Library
- Administration

### Sample Content

- **Vision & Mission** page (contentType: university)

---

## Manual Alternative

If the script doesn't work, you can manually create everything in the Strapi UI:

1. **Content Type Builder** → Create collection type "Page"
2. **Settings** → **Roles** → Create each role manually
3. **Content Manager** → **Pages** → Create Vision & Mission manually

---

## Next: Connect to Frontend

Once Strapi is set up:

1. ✅ Test API endpoint: `https://your-project.strapiapp.com/api/pages`
2. ✅ Update frontend to fetch from Strapi
3. ✅ Deploy to Vercel

See `client/pages/VisionMissionStrapi.tsx` for the frontend component that fetches from Strapi.

---

## Need Help?

- Check Strapi docs: https://docs.strapi.io
- Check the schema file: `STRAPI_CONFIG_SCHEMA.json`
- Check the sample data: `STRAPI_VISION_MISSION_DATA.json`
- Check the roles guide: `STRAPI_ROLES_SETUP_GUIDE.md`
