# Directus Field Naming Convention
## Matching Your React Code

---

## 🎯 The Issue

Your React code uses **camelCase** (e.g., `expiryDate`, `registrationLink`), but Directus uses **snake_case** (e.g., `expiry_date`, `registration_link`).

**Solution:** Use **snake_case in Directus** and convert to camelCase in your API layer.

---

## 📋 ANNOUNCEMENTS Collection

### **Directus Field Names (snake_case)**

```
✅ Use these exact names in Directus:

id                    (UUID - Primary Key, auto)
title                 (String)
content               (Text)
type                  (String - Dropdown)
category              (String - Dropdown)
priority              (String - Dropdown)
date                  (Date)
expiry_date           (Date) ← snake_case
status                (String - Dropdown)
school_id             (Many-to-One → Schools)
department            (String)
image                 (Image)
created_at            (Timestamp - System)
updated_at            (Timestamp - System)
```

### **React Code Mapping**

```typescript
// In your code (camelCase):
interface Announcement {
  id: string;
  title: string;
  content: string;
  type: "circular" | "announcement";
  category: "Academic" | "Administrative" | "Event" | "Urgent" | "General";
  priority: "high" | "medium" | "low";
  date: string;
  expiryDate?: string;        ← Converted from expiry_date
  status: "active" | "archived";
  school?: string;
  image?: string;
  attachments?: Array<{id, fileName, fileUrl, fileType, fileSize}>;
}
```

### **Conversion Function (REQUIRED)**

```typescript
// In directus-announcements.ts
function convertAnnouncementFromDirectus(directusData: any): Announcement {
  return {
    id: directusData.id,
    title: directusData.title,
    content: directusData.content,
    type: directusData.type,
    category: directusData.category,
    priority: directusData.priority,
    date: directusData.date,
    expiryDate: directusData.expiry_date,      // ← Convert snake_case to camelCase
    status: directusData.status,
    school: directusData.school_id?.name,      // ← Extract name from relationship
    image: directusData.image?.url,             // ← Extract URL from image
    attachments: directusData.attachments,
  };
}
```

### **Enum Values (EXACT MATCH)**

These values MUST match exactly in Directus dropdowns:

| Field | Values |
|-------|--------|
| **type** | `circular`, `announcement` |
| **category** | `Academic`, `Administrative`, `Event`, `Urgent`, `General` |
| **priority** | `high`, `medium`, `low` |
| **status** | `active`, `archived` |

---

## 📰 NEWS Collection

### **Directus Field Names (snake_case)**

```
✅ Use these exact names in Directus:

id                    (UUID - Primary Key)
title                 (String)
content               (Text)
excerpt               (Text)
date                  (Date)
status                (String - Dropdown)
school_id             (Many-to-One → Schools)
department            (String)
category              (String - Dropdown)
image                 (Image)
link                  (String)
author                (String)
tags                  (JSON Array)
created_at            (Timestamp)
updated_at            (Timestamp)
```

### **Conversion Function**

```typescript
function convertNewsFromDirectus(directusData: any): NewsItem {
  return {
    id: directusData.id,
    title: directusData.title,
    content: directusData.content,
    excerpt: directusData.excerpt,
    date: directusData.date,
    status: directusData.status,
    school: directusData.school_id?.name,
    department: directusData.department,
    category: directusData.category,
    image: directusData.image?.url,
    link: directusData.link,
    author: directusData.author,
    tags: directusData.tags,
  };
}
```

### **Enum Values**

| Field | Values |
|-------|--------|
| **status** | `published`, `draft` |
| **category** | `Achievement`, `Research`, `Placement`, `Accreditation`, `General` |

---

## 🎪 EVENTS Collection

### **Directus Field Names (snake_case)**

```
✅ Use these exact names in Directus:

id                      (UUID - Primary Key)
title                   (String)
description             (Text)
date                    (Date)
time                    (Time)
end_date                (Date) ← snake_case
end_time                (Time) ← snake_case
location                (String)
status                  (String - Dropdown)
school_id               (Many-to-One → Schools)
department              (String)
category                (String - Dropdown)
image                   (Image)
link                    (String)
registration_required   (Boolean) ← snake_case
registration_link       (String) ← snake_case
capacity                (Number)
registered              (Number)
tags                    (JSON Array)
created_at              (Timestamp)
updated_at              (Timestamp)
```

### **Conversion Function**

```typescript
function convertEventFromDirectus(directusData: any): Event {
  return {
    id: directusData.id,
    title: directusData.title,
    description: directusData.description,
    date: directusData.date,
    time: directusData.time,
    endDate: directusData.end_date,             // ← Convert to camelCase
    endTime: directusData.end_time,             // ← Convert to camelCase
    location: directusData.location,
    status: directusData.status,
    school: directusData.school_id?.name,
    department: directusData.department,
    category: directusData.category,
    image: directusData.image?.url,
    link: directusData.link,
    registrationRequired: directusData.registration_required,  // ← Convert
    registrationLink: directusData.registration_link,          // ← Convert
    capacity: directusData.capacity,
    registered: directusData.registered,
    tags: directusData.tags,
  };
}
```

### **Enum Values**

| Field | Values |
|-------|--------|
| **status** | `upcoming`, `ongoing`, `completed` |
| **category** | `Workshop`, `Seminar`, `Conference`, `Hackathon`, `Sports`, `Cultural`, `Academic` |

---

## 🔄 Quick Reference Table

Use this table when creating fields in Directus:

### **Announcements**

| Directus Field | Type | React Field | Notes |
|---|---|---|---|
| `id` | UUID | `id` | Primary key (auto) |
| `title` | String | `title` | Required |
| `content` | Text | `content` | Required |
| `type` | Dropdown | `type` | Values: circular, announcement |
| `category` | Dropdown | `category` | Academic, Administrative, Event, Urgent, General |
| `priority` | Dropdown | `priority` | high, medium, low |
| `date` | Date | `date` | Required |
| `expiry_date` | Date | `expiryDate` | Convert snake → camel |
| `status` | Dropdown | `status` | active, archived |
| `school_id` | Many-to-One | `school` | Extract `.name` |
| `department` | String | `department` | (no conversion needed) |
| `image` | Image | `image` | Extract `.url` |

### **News**

| Directus Field | Type | React Field | Notes |
|---|---|---|---|
| `id` | UUID | `id` | Primary key |
| `title` | String | `title` | Required |
| `content` | Text | `content` | Required |
| `excerpt` | Text | `excerpt` | Optional summary |
| `date` | Date | `date` | Required |
| `status` | Dropdown | `status` | published, draft |
| `school_id` | Many-to-One | `school` | Extract `.name` |
| `department` | String | `department` | Optional |
| `category` | Dropdown | `category` | Achievement, Research, Placement, Accreditation, General |
| `image` | Image | `image` | Extract `.url` |
| `link` | String | `link` | Optional |
| `author` | String | `author` | Optional |
| `tags` | JSON | `tags` | Array of strings |

### **Events**

| Directus Field | Type | React Field | Notes |
|---|---|---|---|
| `id` | UUID | `id` | Primary key |
| `title` | String | `title` | Required |
| `description` | Text | `description` | Required |
| `date` | Date | `date` | Required |
| `time` | Time | `time` | Optional |
| `end_date` | Date | `endDate` | Convert snake → camel |
| `end_time` | Time | `endTime` | Convert snake → camel |
| `location` | String | `location` | Required |
| `status` | Dropdown | `status` | upcoming, ongoing, completed |
| `school_id` | Many-to-One | `school` | Extract `.name` |
| `department` | String | `department` | Optional |
| `category` | Dropdown | `category` | Workshop, Seminar, Conference, Hackathon, Sports, Cultural, Academic |
| `image` | Image | `image` | Extract `.url` |
| `link` | String | `link` | Optional |
| `registration_required` | Boolean | `registrationRequired` | Convert snake → camel |
| `registration_link` | String | `registrationLink` | Convert snake → camel |
| `capacity` | Number | `capacity` | Max attendees |
| `registered` | Number | `registered` | Current count |
| `tags` | JSON | `tags` | Array of strings |

---

## ✅ Naming Convention Rules

### **Rule 1: Use snake_case in Directus**
```
❌ Wrong:  expiryDate, registrationLink, endDate
✅ Correct: expiry_date, registration_link, end_date
```

### **Rule 2: Use EXACT enum values**
```
❌ Wrong:  "High" (capital H), "ACTIVE" (all caps)
✅ Correct: "high", "active", "Academic" (exact case)
```

### **Rule 3: Dropdowns vs Freetext**
```
✅ Dropdowns (restricted values):
  - type, category, priority, status

✅ Freetext (any value):
  - title, content, department, author
```

### **Rule 4: Relationships**
```
Directus: school_id (Many-to-One)
Code expects: school (string name, not object)

Solution: Extract in conversion function:
  school: directusData.school_id?.name
```

### **Rule 5: Image fields**
```
Directus: image (Image type)
Code expects: image (URL string)

Solution: Extract in conversion function:
  image: directusData.image?.url
```

---

## 🚀 Implementation Checklist

When creating Directus collection:

### **Field Name Checklist**
- [ ] Use **snake_case** for multi-word fields (expiry_date, registration_link)
- [ ] Use **lowercase** for single-word fields (title, content, status)
- [ ] Relationships end with **_id** (school_id, department_id)
- [ ] Use **existing field names** from interfaces (don't rename)

### **Enum/Dropdown Checklist**
- [ ] **Announcements type**: `circular`, `announcement`
- [ ] **Announcements category**: `Academic`, `Administrative`, `Event`, `Urgent`, `General`
- [ ] **Announcements priority**: `high`, `medium`, `low`
- [ ] **News status**: `published`, `draft`
- [ ] **News category**: `Achievement`, `Research`, `Placement`, `Accreditation`, `General`
- [ ] **Events status**: `upcoming`, `ongoing`, `completed`
- [ ] **Events category**: `Workshop`, `Seminar`, `Conference`, `Hackathon`, `Sports`, `Cultural`, `Academic`

### **Type Checklist**
- [ ] String → Text fields use **Text** type (not String)
- [ ] Multi-select → **JSON** type for tags array
- [ ] Relationships → **Many-to-One** to Schools/Departments
- [ ] Files → **Image** or **File** type

---

## 📝 Example: Adding an Announcement

**In Directus Admin:**
```
Field          | Value
───────────────────────────────────
id             | (auto-generated)
title          | "B.Tech Project Submission"
content        | "Final year projects due..."
type           | "circular"              ← dropdown (exact match)
category       | "Academic"              ← dropdown (exact match)
priority       | "high"                  ← dropdown (exact match)
date           | 2025-01-22              ← date picker
expiry_date    | 2025-03-31              ← date picker (snake_case field name)
status         | "active"                ← dropdown (exact match)
school_id      | Engineering             ← Many-to-One lookup
department     | "CSE"                   ← freetext
image          | (upload or URL)         ← image field
```

**How it reaches React code:**
```
Directus expiry_date: "2025-03-31"
         ↓ (conversion function)
React expiryDate: "2025-03-31"
```

---

## 🐛 Common Mistakes

| ❌ Mistake | ✅ Fix | Why |
|---|---|---|
| Field: `expiryDate` | Field: `expiry_date` | Directus convention is snake_case |
| Value: `"High"` | Value: `"high"` | Enum must match exactly |
| Field: `school` | Field: `school_id` | Must link to Schools collection |
| Field: `category` (String) | Field: `category` (Dropdown) | Prevents invalid values |
| Image: URL only | Image: Use Image type | Better for file management |

---

## 📚 Summary

1. **In Directus:** Use snake_case names and exact enum values
2. **In conversion functions:** Convert snake_case to camelCase
3. **In your code:** Use camelCase as defined in interfaces
4. **Test:** Add one item in Directus, verify it appears in React app

