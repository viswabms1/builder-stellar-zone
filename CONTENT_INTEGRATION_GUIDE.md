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

Display Components
├── AnnouncementBanner (3 variants: banner, card, list)
├── NewsSection (3 variants: grid, list, featured)
└── EventsSection (3 variants: grid, list, upcoming)
```

## Usage Examples

### 1. Display Announcements on Engineering School Page

```typescript
// client/pages/Engineering.tsx

import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { NewsSection } from "@/components/NewsSection";
import { EventsSection } from "@/components/EventsSection";

export default function EngineeringPage() {
  return (
    <div className="space-y-12">
      {/* High-priority announcements (circulars, notices, etc.) */}
      <section>
        <AnnouncementBanner 
          school="Engineering"
          priority="high"
          variant="banner"
          dismissible={true}
        />
      </section>

      {/* Engineering school news */}
      <section>
        <NewsSection 
          school="Engineering"
          limit={6}
          variant="grid"
          title="Engineering News"
        />
      </section>

      {/* Engineering school events */}
      <section>
        <EventsSection 
          school="Engineering"
          limit={5}
          variant="upcoming"
          title="Upcoming Events"
        />
      </section>
    </div>
  );
}
```

### 2. Display Department-Specific Content

```typescript
// client/pages/DeptCSE.tsx

import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { NewsSection } from "@/components/NewsSection";
import { EventsSection } from "@/components/EventsSection";

export default function CSEDepartmentPage() {
  const SCHOOL = "Engineering";
  const DEPARTMENT = "CSE";

  return (
    <div className="space-y-12">
      {/* CSE department announcements */}
      <AnnouncementBanner 
        school={SCHOOL}
        priority="high"
        variant="card"
        limit={3}
      />

      {/* CSE-specific news */}
      <NewsSection 
        school={SCHOOL}
        department={DEPARTMENT}
        limit={4}
        variant="list"
        title="Department Updates"
      />

      {/* CSE-specific events */}
      <EventsSection 
        school={SCHOOL}
        department={DEPARTMENT}
        limit={5}
        variant="grid"
        title="Department Events"
      />
    </div>
  );
}
```

### 3. Display School-Wide News with Department Filter

```typescript
// Example: Show top 3 news items from Engineering
<NewsSection 
  school="Engineering"
  limit={3}
  variant="featured"
/>

// Example: Show only workshop events from CSE
<EventsSection 
  school="Engineering"
  department="CSE"
  category="Workshop"
  limit={5}
  variant="list"
/>
```

## Component Props

### AnnouncementBanner

```typescript
interface AnnouncementBannerProps {
  priority?: "high" | "medium" | "low";        // Filter by priority
  category?: "Academic" | "Administrative" | "Event" | "Urgent" | "General";
  school?: string;                              // Filter by school
  limit?: number;                               // Max items to show
  dismissible?: boolean;                        // Allow users to close
  variant?: "banner" | "card" | "list";         // Display style
}
```

**Variants:**
- `banner` — Single announcement at top (with attachments)
- `card` — Grid of announcement cards
- `list` — Simple list view

### NewsSection

```typescript
interface NewsSectionProps {
  school?: string;                              // Filter by school
  department?: string;                          // Filter by department
  limit?: number;                               // Max items (default: 6)
  variant?: "grid" | "list" | "featured";       // Display style
  title?: string;                               // Section title
  description?: string;                         // Section description
  showViewAll?: boolean;                        // Show "View All" button
}
```

**Variants:**
- `featured` — Large cards with images (2 per row)
- `grid` — Standard card grid (3 per row)
- `list` — Compact list with thumbnails

### EventsSection

```typescript
interface EventsSectionProps {
  school?: string;                              // Filter by school
  department?: string;                          // Filter by department
  limit?: number;                               // Max items (default: 6)
  variant?: "grid" | "list" | "upcoming";       // Display style
  title?: string;                               // Section title
  description?: string;                         // Section description
  showViewAll?: boolean;                        // Show "View All" button
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

## Next Steps

- Add these sections to your existing school/department pages
- Update file paths as needed for your project structure
- Test filtering with different school/department combinations
- When ready, connect to Directus CMS (no component changes needed)
