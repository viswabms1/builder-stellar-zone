# Centralized Content Integration Guide

This guide shows how to use the centralized **News**, **Events**, and **Announcements** system on your school and department pages.

## Architecture Overview

```
One Source of Truth
├── client/data/announcements.ts (University + School-specific)
├── client/data/news.ts (University + School-specific)
└── client/data/events.ts (University + School-specific)

Filtering Hooks
├── useAnnouncements() → filters by priority, category, school
├── useNews() → filters by school, department, category
└── useEvents() → filters by school, department, category

Auto-Detection
└── useContentContext() → automatically detects school/department from URL

Display Components
├── AnnouncementBanner (auto-filters, 3 variants: banner, card, list)
├── NewsSection (auto-filters, 3 variants: grid, list, featured)
└── EventsSection (auto-filters, 3 variants: grid, list, upcoming)
```

## How It Works

The components **automatically detect which school/department page the user is viewing** and filter content accordingly. **No manual props needed!**

The `useContentContext()` hook analyzes the URL and returns:
- `school` — Detected school (e.g., "Engineering", "Health Sciences")
- `department` — Detected department (e.g., "CSE", "Pharmacy")

## Usage Examples

### 1. Engineering School Page (Automatic Filtering)

```typescript
// client/pages/Engineering.tsx

import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { NewsSection } from "@/components/NewsSection";
import { EventsSection } from "@/components/EventsSection";

export default function EngineeringPage() {
  return (
    <div className="space-y-12">
      {/* ✅ Automatically shows only Engineering announcements */}
      <AnnouncementBanner priority="high" variant="banner" />

      {/* ✅ Automatically shows only Engineering news */}
      <NewsSection limit={6} variant="grid" title="Engineering News" />

      {/* ✅ Automatically shows only Engineering events */}
      <EventsSection limit={5} variant="upcoming" title="Upcoming Events" />
    </div>
  );
}
```

### 2. CSE Department Page (Auto-Detects CSE Department)

```typescript
// client/pages/DeptCSE.tsx
// When user visits /deptcse (or any CSE path), the components automatically detect it

import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { NewsSection } from "@/components/NewsSection";
import { EventsSection } from "@/components/EventsSection";

export default function CSEDepartmentPage() {
  return (
    <div className="space-y-12">
      {/* ✅ Automatically shows CSE announcements */}
      <AnnouncementBanner priority="high" variant="card" limit={3} />

      {/* ✅ Automatically shows CSE news only */}
      <NewsSection limit={4} variant="list" title="Department Updates" />

      {/* ✅ Automatically shows CSE events only */}
      <EventsSection limit={5} variant="grid" title="Department Events" />
    </div>
  );
}
```

### 3. Health Sciences Department (Automatic Filtering)

```typescript
// Any Health Sciences page will auto-filter to Health Sciences content
<NewsSection limit={6} variant="featured" title="Health Sciences News" />
<EventsSection limit={5} variant="upcoming" title="Health Sciences Events" />
```

### 4. Homepage or School Listing (No Auto-Filter)

```typescript
// Want to show all content or a specific school? Override the auto-detection
<NewsSection school="Engineering" limit={5} />     // Force Engineering
<NewsSection school="Health Sciences" limit={5} /> // Force Health Sciences
<NewsSection limit={5} />                           // Show all universities news
```

## Component Props

### AnnouncementBanner

```typescript
interface AnnouncementBannerProps {
  priority?: "high" | "medium" | "low";        // Filter by priority (default: "high")
  category?: "Academic" | "Administrative" | "Event" | "Urgent" | "General";
  school?: string;                              // Override auto-detected school
  limit?: number;                               // Max items to show (default: 3)
  dismissible?: boolean;                        // Allow users to close (default: true)
  variant?: "banner" | "card" | "list";         // Display style (default: "banner")
}
```

**How it works:**
- Components **automatically detect** school/department from current URL
- If `school` prop is provided, it **overrides** the auto-detection
- Perfect for showing specific content on any page

**Variants:**
- `banner` — Single announcement at top (with attachments)
- `card` — Grid of announcement cards
- `list` — Simple list view

### NewsSection

```typescript
interface NewsSectionProps {
  school?: string;                              // Override auto-detected school
  department?: string;                          // Override auto-detected department
  limit?: number;                               // Max items (default: 6)
  variant?: "grid" | "list" | "featured";       // Display style (default: "grid")
  title?: string;                               // Section title
  description?: string;                         // Section description
  showViewAll?: boolean;                        // Show "View All" button (default: false)
}
```

**Variants:**
- `featured` — Large cards with images (2 per row)
- `grid` — Standard card grid (3 per row)
- `list` — Compact list with thumbnails

### EventsSection

```typescript
interface EventsSectionProps {
  school?: string;                              // Override auto-detected school
  department?: string;                          // Override auto-detected department
  limit?: number;                               // Max items (default: 6)
  variant?: "grid" | "list" | "upcoming";       // Display style (default: "grid")
  title?: string;                               // Section title
  description?: string;                         // Section description
  showViewAll?: boolean;                        // Show "View All" button (default: false)
}
```

**Variants:**
- `upcoming` — Featured events with registration buttons
- `grid` — Standard card grid with event details
- `list` — Compact list view

## Adding New Content

### Add a New Announcement

Edit `client/data/announcements.ts`:

```typescript
const NEW_ANNOUNCEMENTS: Announcement[] = [
  {
    id: "your-school-announce-1",
    title: "Your Announcement Title",
    content: "Your announcement text",
    type: "circular", // or "announcement"
    category: "Academic",
    priority: "high",
    date: "Jan 25, 2025",
    school: "Your School Name", // Must match existing school
    status: "active",
    attachments: [
      {
        id: "att-1",
        fileName: "document.pdf",
        fileUrl: "https://example.com/document.pdf",
        fileType: "pdf",
        fileSize: "1.2 MB",
      },
    ],
  },
];
```

### Add New News

Edit `client/data/news.ts`:

```typescript
const YOUR_SCHOOL_NEWS: NewsItem[] = [
  {
    id: "news-school-1",
    title: "Your News Title",
    excerpt: "Brief summary",
    content: "Full article content",
    date: "Jan 25, 2025",
    status: "published",
    school: "Your School Name",
    department: "Optional Department", // Optional
    category: "Achievement",
    image: "https://example.com/image.jpg",
    author: "Author Name",
    tags: ["tag1", "tag2"],
  },
];
```

### Add New Event

Edit `client/data/events.ts`:

```typescript
const YOUR_SCHOOL_EVENTS: Event[] = [
  {
    id: "event-school-1",
    title: "Your Event Title",
    description: "Event description",
    date: "Feb 1, 2025",
    time: "10:00 AM",
    location: "Event Location",
    status: "upcoming",
    school: "Your School Name",
    department: "Optional Department", // Optional
    category: "Workshop",
    registrationRequired: true,
    registrationLink: "https://example.com/register",
    capacity: 100,
    registered: 75,
    tags: ["tag1"],
  },
];
```

## Key Benefits

✅ **Centralized Management** — All content in one place  
✅ **No Duplication** — Update once, display everywhere  
✅ **School Filtering** — Automatically show relevant content  
✅ **Department Filtering** — Drill down to specific departments  
✅ **Reusable Components** — Use same component on different pages  
✅ **Easy Migration** — Ready to swap with Directus CMS  

## Migration to Directus

When ready to move to Directus CMS, simply:

1. Update the TODO comments in hooks:
   - `client/hooks/useAnnouncements.ts`
   - `client/hooks/useNews.ts`
   - `client/hooks/useEvents.ts`

2. Replace the fetch calls with Directus API endpoints

3. Keep the data structures and components unchanged

## How Auto-Detection Works

The `useContentContext()` hook detects the current page by analyzing the URL:

```typescript
// Examples of auto-detection:
"/engineering"              → school: "Engineering"
"/dept-cse" or "/deptcse"   → school: "Engineering", department: "CSE"
"/pharmacy"                 → school: "Health Sciences", department: "Pharmacy"
"/mba"                      → school: "Commerce & Management", department: "MBA"
```

See `client/hooks/useContentContext.ts` for the complete mapping.

## Adding Support for New Routes

If you add new school or department pages, update the mappings in `client/hooks/useContentContext.ts`:

```typescript
const schoolMap = {
  "/your-new-path": "Your School Name",
  // ... existing mappings
};

const departmentMap = {
  "your-dept": "Your Department Name",
  // ... existing mappings
};
```

## Next Steps

1. **Add to your pages** — Drop components into school/department pages
2. **No props needed** — Components auto-filter based on current page
3. **Override if needed** — Use `school` prop to force specific content
4. **Update route mappings** — Add new routes to `useContentContext.ts` as you add pages
5. **When ready** — Connect to Directus CMS (no component changes needed)
