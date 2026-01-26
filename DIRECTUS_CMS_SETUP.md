# Directus CMS Setup Guide
## News, Events & Announcements Management

---

## 🎯 Overview

This guide shows how to:
1. Set up Directus collections (News, Events, Announcements)
2. Configure fields with relationships
3. Create API tokens
4. Connect to your React app

---

## 📋 Part 1: Create Collections in Directus

### **Step 1: Access Directus Admin**

1. Go to your Directus instance (e.g., `https://your-directus-url/admin`)
2. Login with your admin credentials
3. Click **"Data Studio"** in the sidebar

---

### **Step 2: Create "Schools" Collection** (Reference Data)

This will be used to link News, Events, and Announcements to schools.

1. Click **"+"** next to Collections
2. **Collection Name:** `Schools`
3. **Create Collection**

**Add Fields:**
| Field Name | Type | Notes |
|---|---|---|
| `id` | UUID | Primary Key (Auto) |
| `name` | String | School name (e.g., "Engineering", "Health Sciences") |
| `slug` | String | URL slug (e.g., "engineering") |
| `description` | Text | School description |
| `created_at` | Timestamp | Auto (System field) |
| `updated_at` | Timestamp | Auto (System field) |

**Add Sample Data:**
```
- Engineering
- Health Sciences
- Commerce & Management
- Law
- Design
```

---

### **Step 3: Create "Departments" Collection**

1. Click **"+"** next to Collections
2. **Collection Name:** `Departments`
3. **Create Collection**

**Add Fields:**
| Field Name | Type | Notes |
|---|---|---|
| `id` | UUID | Primary Key (Auto) |
| `name` | String | Department name (e.g., "CSE", "Nursing") |
| `slug` | String | URL slug |
| `school_id` | Many-to-One | Link to Schools collection |
| `description` | Text | Department description |
| `created_at` | Timestamp | Auto |
| `updated_at` | Timestamp | Auto |

---

### **Step 4: Create "Announcements" Collection**

1. Click **"+"** next to Collections
2. **Collection Name:** `Announcements`
3. **Create Collection**

**Add Fields:**

| Field Name | Type | Notes |
|---|---|---|
| `id` | UUID | Primary Key |
| `title` | String | Announcement title |
| `content` | Text | Full announcement content |
| `type` | String (Dropdown) | Options: "circular", "announcement" |
| `category` | String (Dropdown) | Options: "Academic", "Administrative", "Event", "Urgent", "General" |
| `priority` | String (Dropdown) | Options: "high", "medium", "low" |
| `date` | Date | Published date |
| `expiry_date` | Date | Expiration date (optional) |
| `status` | String (Dropdown) | Options: "active", "archived" |
| `school_id` | Many-to-One | Link to Schools (required for school-level) |
| `department_id` | Many-to-One | Link to Departments (optional for department-level) |
| `image` | Image | Featured image |
| `attachments` | JSON | File attachments array |
| `created_at` | Timestamp | Auto |
| `updated_at` | Timestamp | Auto |

**Attachment Field Schema:**
```json
[
  {
    "id": "string",
    "fileName": "string",
    "fileUrl": "string",
    "fileType": "string",
    "fileSize": "string"
  }
]
```

---

### **Step 5: Create "News" Collection**

1. Click **"+"** next to Collections
2. **Collection Name:** `News`
3. **Create Collection**

**Add Fields:**

| Field Name | Type | Notes |
|---|---|---|
| `id` | UUID | Primary Key |
| `title` | String | News headline |
| `content` | Text | Full news article |
| `excerpt` | Text | Short summary (100 chars) |
| `date` | Date | Publication date |
| `status` | String (Dropdown) | Options: "published", "draft" |
| `school_id` | Many-to-One | Link to Schools |
| `department_id` | Many-to-One | Link to Departments (optional) |
| `category` | String (Dropdown) | Options: "Achievement", "Research", "Placement", "Accreditation", "General" |
| `image` | Image | Featured image |
| `link` | String | External link (optional) |
| `author` | String | Author name |
| `tags` | JSON | Array of tags |
| `created_at` | Timestamp | Auto |
| `updated_at` | Timestamp | Auto |

---

### **Step 6: Create "Events" Collection**

1. Click **"+"** next to Collections
2. **Collection Name:** `Events`
3. **Create Collection**

**Add Fields:**

| Field Name | Type | Notes |
|---|---|---|
| `id` | UUID | Primary Key |
| `title` | String | Event name |
| `description` | Text | Event details |
| `date` | Date | Start date |
| `time` | Time | Start time |
| `end_date` | Date | End date (optional) |
| `end_time` | Time | End time (optional) |
| `location` | String | Physical location |
| `status` | String (Dropdown) | Options: "upcoming", "ongoing", "completed" |
| `school_id` | Many-to-One | Link to Schools |
| `department_id` | Many-to-One | Link to Departments (optional) |
| `category` | String (Dropdown) | Options: "Workshop", "Seminar", "Conference", "Hackathon", "Sports", "Cultural", "Academic" |
| `image` | Image | Event poster/image |
| `link` | String | Event link |
| `registration_required` | Boolean | Registration needed? |
| `registration_link` | String | Registration URL |
| `capacity` | Number | Max attendees |
| `registered` | Number | Current registrations |
| `tags` | JSON | Event tags |
| `created_at` | Timestamp | Auto |
| `updated_at` | Timestamp | Auto |

---

## 🔐 Part 2: Set Up API Access

### **Step 1: Create API Token**

1. Go to **Settings** (bottom left gear icon)
2. Click **"API Tokens"** in the sidebar
3. Click **"Create Token"** button

**Configuration:**
```
Name: Frontend API
Description: Frontend read access for News, Events, Announcements
Status: Active
Token Type: Static
Permissions: Read-only
Collections: News, Events, Announcements, Schools, Departments
```

**Copy the Token** - You'll use this in your `.env` file

---

### **Step 2: Configure Access Rules**

1. In **Settings → Roles & Permissions**
2. Click **"Public"** role
3. Enable **Read** access for:
   - News
   - Events
   - Announcements
   - Schools
   - Departments

---

## 🔗 Part 3: Connect to React App

### **Step 1: Update Environment Variables**

Create/update `.env`:

```env
VITE_DIRECTUS_URL=https://your-directus-url
VITE_DIRECTUS_API_TOKEN=your_api_token_here
```

### **Step 2: Create API Service**

Create `client/lib/directus-client.ts`:

```typescript
const DIRECTUS_URL = import.meta.env.VITE_DIRECTUS_URL;
const API_TOKEN = import.meta.env.VITE_DIRECTUS_API_TOKEN;

export async function fetchFromDirectus(endpoint: string, filters?: Record<string, any>) {
  const url = new URL(`${DIRECTUS_URL}/graphql`);
  
  let query = '';
  
  if (endpoint === 'news') {
    query = `
      query {
        news(filter: ${JSON.stringify(filters || {})}) {
          id
          title
          excerpt
          content
          date
          status
          category
          image { id url }
          school { id name }
          department { id name }
          author
          tags
        }
      }
    `;
  } else if (endpoint === 'events') {
    query = `
      query {
        events(filter: ${JSON.stringify(filters || {})}) {
          id
          title
          description
          date
          time
          status
          category
          location
          image { id url }
          school { id name }
          department { id name }
          registration_required
          registration_link
          capacity
        }
      }
    `;
  } else if (endpoint === 'announcements') {
    query = `
      query {
        announcements(filter: ${JSON.stringify(filters || {})}) {
          id
          title
          content
          type
          category
          priority
          date
          expiry_date
          status
          image { id url }
          school { id name }
          department { id name }
          attachments
        }
      }
    `;
  }

  const response = await fetch(`${DIRECTUS_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`Directus API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.data;
}
```

### **Step 3: Update content-manager.ts**

Modify to fetch from Directus instead of hardcoded data:

```typescript
import { fetchFromDirectus } from './directus-client';

export async function getAnnouncementsBySchool(school: string) {
  const data = await fetchFromDirectus('announcements', {
    school: { name: { _eq: school } },
    status: { _eq: 'active' }
  });
  return data.announcements || [];
}

export async function getNewsByDepartment(school: string, department: string) {
  const data = await fetchFromDirectus('news', {
    school: { name: { _eq: school } },
    department: { name: { _eq: department } },
    status: { _eq: 'published' }
  });
  return data.news || [];
}

export async function getEventsByDepartment(school: string, department: string) {
  const data = await fetchFromDirectus('events', {
    school: { name: { _eq: school } },
    department: { name: { _eq: department } },
    status: { _in: ['upcoming', 'ongoing'] }
  });
  return data.events || [];
}
```

---

## ✅ Verification Checklist

- [ ] All 5 collections created (Schools, Departments, Announcements, News, Events)
- [ ] All fields added with correct types
- [ ] API Token created and saved
- [ ] Public role has read access
- [ ] `.env` file updated with Directus URL and token
- [ ] `directus-client.ts` created with API functions
- [ ] `content-manager.ts` updated to fetch from Directus
- [ ] Test by viewing News/Events/Announcements pages
- [ ] Verify filtering works (school-level & department-level)

---

## 🧪 Testing

### **Manual Test in Directus:**

1. Go to News collection
2. Add test article:
   - Title: "Test News"
   - School: Engineering
   - Department: CSE
   - Status: published
3. Save

4. In your React app, navigate to CSE page
5. Verify the news appears in the notice board

---

## 📚 Useful Directus Links

- **Directus Docs:** https://docs.directus.io
- **GraphQL API:** https://docs.directus.io/reference/graphql
- **Field Types:** https://docs.directus.io/reference/system/fields
- **Directus Cloud:** https://directus.cloud

---

## 🎓 Alternative: REST API

Instead of GraphQL, you can use REST API:

```typescript
async function fetchNews(school: string, department: string) {
  const url = new URL(`${DIRECTUS_URL}/items/news`);
  url.searchParams.append('filter[school][name][_eq]', school);
  url.searchParams.append('filter[department][name][_eq]', department);
  url.searchParams.append('filter[status][_eq]', 'published');

  const response = await fetch(url.toString(), {
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
    },
  });

  return response.json();
}
```

---

## ❓ Need Help?

- Check Directus Discord: https://discord.gg/directus
- Visit Directus Community: https://directus.io/community
