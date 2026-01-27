# Directus Events Integration

## ✅ **YES! Events integration works automatically for ALL departments**

Just like announcements, the events integration is fully automatic and works across all departments without additional coding.

## API Endpoint

**Directus Events API:**
```
https://dsu-website-headless-cms.directus.app/items/events
```

## How It Works

### 1. **Automatic Department Code Resolution**
The system uses the same department code mapping as announcements:

- **Exact matches**: "Aerospace" → "aero"
- **Case-insensitive**: "CSE" → "cse", "Mechanical Engineering" → "mech"
- **All variations supported** (see DIRECTUS_ANNOUNCEMENTS_INTEGRATION.md for full list)

### 2. **Data Schema**

The Directus event schema:

```typescript
interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  end_date?: string;
  end_time?: string;
  location: string;
  status: "upcoming" | "ongoing" | "completed";
  school_code?: string; // e.g., "ENG", "HS", "LAW"
  department_code?: string; // e.g., "aero", "cse", "mech"
  category?: "Workshop" | "Seminar" | "Conference" | "Hackathon" | "Sports" | "Cultural" | "Academic";
  image?: string;
  link?: string;
  registration_required?: boolean;
  registration_link?: string;
  capacity?: number;
  registered?: number;
  tags?: string[];
}
```

## Usage Examples

### In Department Pages

All department pages using `<DepartmentNoticeBoard>` automatically fetch both announcements AND events:

```tsx
// DeptAerospace.tsx
<DepartmentNoticeBoard department="Aerospace" />
// Fetches announcements: .../announcements?filter[department_code][_eq]=aero
// Fetches events: .../events?filter[department_code][_eq]=aero&filter[status][_in]=upcoming,ongoing

// DeptCSE.tsx
<DepartmentNoticeBoard department="CSE" />
// Fetches announcements: .../announcements?filter[department_code][_eq]=cse
// Fetches events: .../events?filter[department_code][_eq]=cse&filter[status][_in]=upcoming,ongoing

// DeptMechanical.tsx
<DepartmentNoticeBoard department="Mechanical Engineering" />
// Fetches announcements: .../announcements?filter[department_code][_eq]=mech
// Fetches events: .../events?filter[department_code][_eq]=mech&filter[status][_in]=upcoming,ongoing
```

### In Events Page

The dedicated Events page (`/events`) fetches all university-wide events and allows filtering:

```tsx
// Client-side filtering by school, category, status
<Events />
```

## Adding Events in Directus

To add events for a specific department:

1. **Go to Directus Admin** → Events collection
2. **Create new item**:
   - `title`: "AI/ML Workshop"
   - `description`: "Hands-on workshop on machine learning"
   - `date`: "2026-02-15"
   - `time`: "10:00 AM"
   - `location`: "Lab 101"
   - `department_code`: Select "aero" (or "cse", "mech", etc.)
   - `school_code`: Select "ENG"
   - `status`: "upcoming"
   - `category`: "Workshop"
   - `registration_required`: true
   - `registration_link`: "https://forms.example.com/register"
   - `image`: (Optional) Upload event banner

3. **Save** - The event will automatically appear on:
   - The department's Notice Board
   - The university-wide Events page (`/events`)

## API Endpoints

### Direct Directus API (used by client):

**All upcoming/ongoing events:**
```
https://dsu-website-headless-cms.directus.app/items/events?filter[status][_in]=upcoming,ongoing&sort=date
```

**Department-specific events:**
```
https://dsu-website-headless-cms.directus.app/items/events?filter[department_code][_eq]=aero&filter[status][_in]=upcoming,ongoing&sort=date
```

**School-specific events:**
```
https://dsu-website-headless-cms.directus.app/items/events?filter[school_code][_eq]=ENG&filter[status][_in]=upcoming,ongoing&sort=date
```

### Server Proxy (with caching):
```
/api/directus/events
```

## Components That Use This

1. **`<DepartmentNoticeBoard>`** - Shows department-specific events
2. **`<Events>`** page - University-wide events with filtering
3. **`useEvents`** hook - For custom implementations
4. **`useDepartmentEvents`** hook - For department-specific events
5. **`<EventsSection>`** - Homepage events display (if used)

## Filtering Options

### Status-based filtering:
- `upcoming`: Events that haven't started yet
- `ongoing`: Events currently happening
- `completed`: Past events (hidden by default)

### Category-based filtering:
- Workshop
- Seminar
- Conference
- Hackathon
- Sports
- Cultural
- Academic

### Location-based filtering:
- By `school_code`: ENG, HS, LAW, CAM, BAS, CCA, DES, ADH, MED
- By `department_code`: aero, cse, mech, aiml, aids, etc.

## No Additional Coding Required! ✅

**The system is fully automatic:**
- ✅ All existing department pages fetch their events
- ✅ New departments work without code changes
- ✅ Department name variations handled automatically
- ✅ Fallback logic prevents errors
- ✅ Empty states handled gracefully ("No items to display")
- ✅ Automatic sorting by date (earliest first)
- ✅ Only shows upcoming/ongoing events by default

## What's Integrated

| Component | Announcements | Events | News |
|-----------|--------------|--------|------|
| DepartmentNoticeBoard | ✅ Directus | ✅ Directus | ⏳ Static (migrate later) |
| Events Page | N/A | ✅ Directus | N/A |
| useAnnouncements hook | ✅ Directus | N/A | N/A |
| useEvents hook | N/A | ✅ Directus | N/A |
| useDepartmentAnnouncements | ✅ Directus | N/A | N/A |
| useDepartmentEvents | N/A | ✅ Directus | N/A |

## Next Steps for Content Team

1. **Add events in Directus** with the correct `department_code` and `school_code`
2. **Set status to "upcoming"** or "ongoing" for events to appear
3. **Include date and location** for all events
4. **Add registration links** if registration is required
5. **Upload event images** for better visual appeal
6. **Use tags** for additional filtering (optional)

That's it! Both announcements and events are now fully integrated with Directus across all departments! 🎉

## Testing

To verify the integration:

1. Add a test event in Directus with `department_code = "aero"`
2. Visit `/academics/engineering/aerospace-engineering`
3. Scroll to the "Department Notice Board" section
4. The event should appear in the "Events" carousel
5. Visit `/events` to see it in the university-wide events list

## Troubleshooting

**Event not showing?**
- Check `status` is "upcoming" or "ongoing" (not "completed")
- Verify `department_code` matches exactly (case-sensitive in Directus)
- Check `date` is in the future (for upcoming events)
- Clear cache: POST to `/api/directus/cache/clear`

**Wrong department?**
- Double-check the `department_code` field in Directus
- Refer to DIRECTUS_SCHEMA_CHEATSHEET.md for correct codes
