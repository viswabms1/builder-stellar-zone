# Complete Working Example: Announcements with Directus

This is a **step-by-step walkthrough** for integrating Announcements from Directus into your React app.

---

## 📋 Part 1: Directus Setup (UI Steps)

### **Step 1.1: Create Announcements Collection**

1. Open Directus Admin Panel
2. Click **"+ Create Collection"**
3. Name: `announcements`
4. Click **"Create"**

### **Step 1.2: Add Fields**

In the collection editor, add these fields:

| Field | Type | Settings |
|-------|------|----------|
| `id` | UUID | Primary key (auto) |
| `title` | String | Required |
| `content` | Text | Required |
| `type` | String (Dropdown) | Values: `circular`, `announcement` |
| `category` | String (Dropdown) | Values: `Academic`, `Administrative`, `Event`, `Urgent`, `General` |
| `priority` | String (Dropdown) | Values: `high`, `medium`, `low` |
| `date` | Date | Required |
| `expiry_date` | Date | Optional |
| `status` | String (Dropdown) | Values: `active`, `archived` (Default: `active`) |
| `school_id` | Many-to-One | Link to "Schools" collection |
| `department` | String | Department name (e.g., "Nursing", "CSE") |
| `image` | Image | Optional |
| `created_at` | Timestamp | System field (auto) |
| `updated_at` | Timestamp | System field (auto) |

### **Step 1.3: Add Sample Data**

Click **"+ Create Item"** and add:

```
Title: "B.Tech Project Submission Guidelines"
Content: "Final year B.Tech project submissions must follow the new standardized format. Deadline: March 31, 2025"
Type: circular
Category: Academic
Priority: high
Date: 2025-01-22
Status: active
School: Engineering
Department: CSE
```

Add another:

```
Title: "Clinical Internship Batch Assignments"
Content: "Clinical internship batch assignments for Spring 2025 have been released."
Type: circular
Category: Academic
Priority: high
Date: 2025-01-21
Status: active
School: Health Sciences
Department: Nursing
```

### **Step 1.4: Create API Token**

1. Go to **Settings** (gear icon, bottom left)
2. Click **"API Tokens"**
3. Click **"Create Token"**
4. Fill in:
   - Name: `Frontend Read API`
   - Status: `Active`
   - Type: `Static`
5. Scroll down to **Permissions**
6. Enable **Read** for `announcements` collection
7. Click **"Save"**
8. **Copy the token** (you'll need this)

Example token: `abc123xyz_your_token_here_xyz789abc123`

---

## 💻 Part 2: React Code Integration

### **Step 2.1: Update Environment Variables**

Update your `.env` file:

```env
VITE_DIRECTUS_URL=https://your-directus-instance.directus.app
VITE_DIRECTUS_API_TOKEN=abc123xyz_your_token_here_xyz789abc123
```

**Where to get these:**
- **URL**: Your Directus instance URL (e.g., `https://my-dsu-cms.directus.app`)
- **Token**: From Step 1.4 above

---

### **Step 2.2: Create Directus API Client**

Create file: `client/lib/directus-announcements.ts`

```typescript
// Fetch announcements from Directus
const DIRECTUS_URL = import.meta.env.VITE_DIRECTUS_URL;
const API_TOKEN = import.meta.env.VITE_DIRECTUS_API_TOKEN;

export interface DirectusAnnouncement {
  id: string;
  title: string;
  content: string;
  type: "circular" | "announcement";
  category: "Academic" | "Administrative" | "Event" | "Urgent" | "General";
  priority: "high" | "medium" | "low";
  date: string;
  expiry_date?: string;
  status: "active" | "archived";
  school_id?: { id: string; name: string };
  department?: string;
  image?: { id: string; url: string };
}

/**
 * Fetch announcements by school and optional department
 * @param school School name (e.g., "Engineering")
 * @param department Optional department name (e.g., "CSE")
 * @returns Array of announcements
 */
export async function fetchAnnouncementsBySchool(
  school: string,
  department?: string
): Promise<DirectusAnnouncement[]> {
  try {
    // Build filter query
    let filter = `[status][_eq]=active&[school_id][name][_eq]=${encodeURIComponent(school)}`;
    
    // Add department filter if provided
    if (department) {
      filter += `&[department][_eq]=${encodeURIComponent(department)}`;
    }

    // Construct URL with REST API
    const url = `${DIRECTUS_URL}/items/announcements?${filter}&sort=-date&limit=10`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Directus API error:", response.statusText);
      return [];
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching announcements:", error);
    return [];
  }
}

/**
 * Fetch single announcement by ID
 */
export async function fetchAnnouncementById(
  id: string
): Promise<DirectusAnnouncement | null> {
  try {
    const url = `${DIRECTUS_URL}/items/announcements/${id}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching announcement:", error);
    return null;
  }
}

/**
 * Convert Directus announcement to app format
 */
export function directusToAppFormat(directusAnnouncement: DirectusAnnouncement) {
  return {
    id: directusAnnouncement.id,
    title: directusAnnouncement.title,
    content: directusAnnouncement.content,
    type: directusAnnouncement.type,
    category: directusAnnouncement.category,
    priority: directusAnnouncement.priority,
    date: directusAnnouncement.date,
    expiryDate: directusAnnouncement.expiry_date,
    status: directusAnnouncement.status,
    school: directusAnnouncement.school_id?.name,
    department: directusAnnouncement.department,
    image: directusAnnouncement.image?.url,
  };
}
```

---

### **Step 2.3: Update content-manager.ts**

Modify `client/lib/content-manager.ts` to use Directus:

```typescript
// Add at the top of the file
import { 
  fetchAnnouncementsBySchool, 
  directusToAppFormat 
} from "./directus-announcements";

// Replace the hardcoded getAnnouncementsBySchool function with:
export async function getAnnouncementsBySchool(
  school: string | undefined
): Promise<Announcement[]> {
  if (!school) return [];
  
  try {
    const directusAnnouncements = await fetchAnnouncementsBySchool(school);
    return directusAnnouncements.map((da) => {
      const converted = directusToAppFormat(da);
      return {
        id: converted.id,
        title: converted.title,
        content: converted.content,
        type: converted.type,
        category: converted.category,
        priority: converted.priority,
        date: converted.date,
        expiryDate: converted.expiryDate,
        status: converted.status,
        school: converted.school,
        attachments: [], // Add if Directus has files
        image: converted.image,
      };
    });
  } catch (error) {
    console.error("Error loading announcements:", error);
    return [];
  }
}

// Replace getAnnouncementsByDepartment function with:
export async function getAnnouncementsByDepartment(
  school: string | undefined,
  department: string | undefined
): Promise<Announcement[]> {
  if (!school || !department) return [];
  
  try {
    const directusAnnouncements = await fetchAnnouncementsBySchool(school, department);
    return directusAnnouncements.map((da) => {
      const converted = directusToAppFormat(da);
      return {
        id: converted.id,
        title: converted.title,
        content: converted.content,
        type: converted.type,
        category: converted.category,
        priority: converted.priority,
        date: converted.date,
        expiryDate: converted.expiryDate,
        status: converted.status,
        school: converted.school,
        attachments: [],
        image: converted.image,
      };
    });
  } catch (error) {
    console.error("Error loading department announcements:", error);
    return [];
  }
}
```

---

### **Step 2.4: Update DepartmentNoticeBoard Component**

Update `client/components/DepartmentNoticeBoard.tsx` to handle async data:

```typescript
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCategoryStyles, type CarouselItem } from "@/lib/content-manager";
import { getDepartmentContent } from "@/lib/content-manager";
import { Download } from "lucide-react";

export function DepartmentNoticeBoard({
  school = "Engineering",
  department,
}: {
  school?: string;
  department: string;
}) {
  const [loading, setLoading] = useState(true);
  const [announcements, setAnnouncements] = useState<CarouselItem[]>([]);
  const [newsItems, setNewsItems] = useState<CarouselItem[]>([]);
  const [eventItems, setEventItems] = useState<CarouselItem[]>([]);

  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    async function loadContent() {
      try {
        setLoading(true);
        const content = await getDepartmentContent(school, department);
        setAnnouncements(content.announcements);
        setNewsItems(content.news);
        setEventItems(content.events);
      } catch (error) {
        console.error("Error loading content:", error);
      } finally {
        setLoading(false);
      }
    }

    loadContent();
  }, [school, department]);

  // ... rest of the component remains the same
  // (carousel rendering logic)

  if (loading) {
    return <div className="p-8 text-center">Loading announcements...</div>;
  }

  return (
    // ... render carousels with announcements, news, events
  );
}
```

---

## 🧪 Part 3: Testing

### **Test Case 1: View Announcements on CSE Page**

1. **Start your React app:**
   ```bash
   npm run dev
   ```

2. **Navigate to:** CSE Department page (e.g., `/academics/engineering/cse`)

3. **Check the DepartmentNoticeBoard:**
   - You should see "B.Tech Project Submission Guidelines" announcement
   - Verify it shows the correct date (Jan 22, 2025)
   - Check priority badge shows "high"

4. **Expected Output:**
   ```
   ┌─────────────────────────────────┐
   │ Announcements              1 / 1 │
   ├─────────────────────────────────┤
   │ B.Tech Project Submission...    │
   │ Jan 22, 2025                    │
   │ [Download PDF]                  │
   └─────────────────────────────────┘
   ```

### **Test Case 2: View Announcements on Nursing Page**

1. Navigate to Nursing page
2. You should see "Clinical Internship Batch Assignments" announcement
3. Verify it's NOT showing the CSE announcement

### **Test Case 3: Add New Announcement in Directus**

1. Open Directus Admin
2. Go to Announcements collection
3. Click **"+ Create Item"**
4. Fill in:
   ```
   Title: "Exam Schedule Released"
   Content: "Final exam schedule for Spring 2025..."
   School: Engineering
   Department: CSE
   Status: active
   Priority: high
   ```
5. **Save**
6. Refresh CSE page in React app
7. **Verify new announcement appears**

---

## 🔍 Debugging

### **If announcements don't appear:**

**Check 1: Environment Variables**
```bash
# In terminal, verify .env is set:
echo $VITE_DIRECTUS_URL
echo $VITE_DIRECTUS_API_TOKEN
```

**Check 2: Directus API Token Permissions**
1. Go to Directus Settings → Roles
2. Click Public role
3. Ensure Read access is enabled for announcements

**Check 3: Browser Console**
```javascript
// Open DevTools (F12)
// Check for errors in Console tab
// Should see successful fetch from Directus
```

**Check 4: Test API Directly**
```bash
# In terminal, test Directus API:
curl -H "Authorization: Bearer YOUR_TOKEN" \
  "https://your-directus-url/items/announcements?filter[status][_eq]=active"
```

---

## 📊 Data Flow Diagram

```
┌─────────────────────────────────┐
│  Directus Admin Panel           │
│  Add/Edit Announcements         │
└────────────────┬────────────────┘
                 │
                 ↓
        ┌────────────────┐
        │ Directus API   │
        │ /items/        │
        │ announcements  │
        └────────────────┘
                 │
                 ↓
  ┌──────────────────────────────┐
  │ client/lib/              │
  │ directus-announcements.ts    │
  │ (fetch & convert)            │
  └──────────────────────────────┘
                 │
                 ↓
  ┌──────────────────────────────┐
  │ client/lib/                  │
  │ content-manager.ts           │
  │ (getAnnouncementsBySchool)   │
  └──────────────────────────────┘
                 │
                 ↓
  ┌──────────────────────────────┐
  │ DepartmentNoticeBoard        │
  │ Component                    │
  │ (renders in CSE/Nursing etc) │
  └──────────────────────────────┘
```

---

## ✅ Checklist

- [ ] Created `announcements` collection in Directus
- [ ] Added all required fields
- [ ] Added sample announcements
- [ ] Created API token with read access
- [ ] Updated `.env` file with Directus URL and token
- [ ] Created `directus-announcements.ts`
- [ ] Updated `content-manager.ts`
- [ ] Updated `DepartmentNoticeBoard.tsx` for async
- [ ] Tested on CSE and Nursing pages
- [ ] Verified new announcements appear after adding in Directus

---

## 🎉 Next Steps

1. **For News:** Repeat same process with `news` collection
2. **For Events:** Repeat same process with `events` collection
3. **Add more fields** as needed (attachments, featured image, etc.)
4. **Set up webhooks** for automatic cache invalidation

---

## 📚 Reference

- **Directus REST API:** https://docs.directus.io/reference/rest-api
- **Field Filtering:** https://docs.directus.io/reference/query-parameters
- **Authorization:** https://docs.directus.io/reference/authentication

