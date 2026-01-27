# Directus Schools & Departments Schema Guide

This document provides standardized short codes and naming conventions for creating Schools and Departments collections in Directus.

---

## 1. SCHOOLS - Short Names & Codes

Use these exact names in Directus and React code for consistency:

| Short Name | Full Name | Code | Usage |
|-----------|-----------|------|-------|
| Engineering | School of Engineering | ENG | 12+ engineering departments |
| Health Sciences | School of Health Sciences | HS | 5 health-related departments |
| Law | School of Law | LAW | 4 law programs |
| Commerce & Management | School of Commerce & Management | CAM | 3 commerce programs |
| Basic & Applied Sciences | School of Basic & Applied Sciences | BAS | Science programs |
| Computer Applications | School of Computer Applications | CCA | CS-related programs |
| Arts, Design & Humanities | School of Arts, Design & Humanities | ADH | Design, Journalism, humanities |
| Medicine | School of Medicine | MED | Medical programs |

---

## 2. DEPARTMENTS - By School

### 🏭 Engineering School (ENG)

| Department | Code | Full Name | Type |
|-----------|------|-----------|------|
| CSE | cse | Computer Science Engineering | UG |
| ECE | ece | Electronics & Communication Engineering | UG |
| Data Science | ds | B.Tech Data Science Engineering | UG |
| Mechanical | mech | Mechanical Engineering | UG |
| Aerospace | aero | Aerospace Engineering | UG |
| AIML | aiml | AI & Machine Learning | UG |
| AIDS | aids | Artificial Intelligence & Data Science | UG |
| AI Robotics | airo | AI & Robotics | UG |
| Cybersecurity | cyber | Cybersecurity | UG |
| Computer Technology | ct | Computer Technology | UG |
| Medical Engineering | meeng | Medical Engineering | UG |
| MCA | mca | Master of Computer Applications | PG |
| M.Sc Data Science | msds | M.Sc Data Science | PG |

### 🏥 Health Sciences School (HS)

| Department | Code | Full Name | Type |
|-----------|------|-----------|------|
| Nursing | nurs | B.Sc Nursing | UG |
| Physiotherapy | phys | B.P.T Physiotherapy | UG |
| Pharmacy | pharm | B.Pharm & M.Pharm | UG/PG |
| Allied Health Sciences | ahs | B.Sc Allied Health Sciences | UG |
| M.Sc Nursing | msc-nurs | Master of Nursing | PG |
| M.Sc Physiotherapy | mpt | Master of Physiotherapy | PG |
| M.Pharm | mpharm | Master of Pharmacy | PG |

### ⚖️ Law School (LAW)

| Department | Code | Full Name | Type |
|-----------|------|-----------|------|
| BA.LLB (Hons) | ballb | BA Bachelor of Legislative Law Honors | UG |
| BBA.LLB (Hons) | bballb | BBA + Bachelor of Legislative Law Honors | UG |
| LLB (3 Year) | llb3y | 3-Year LLB Program | UG |
| LLM Corporate & Commercial | llm-cc | LLM Corporate & Commercial Law | PG |
| LLM Law & Technology | llm-tech | LLM Law & Technology | PG |

### 💼 Commerce & Management School (CAM)

| Department | Code | Full Name | Type |
|-----------|------|-----------|------|
| BBA | bba | Bachelor of Business Administration | UG |
| BBA BFSI | bba-bfsi | BBA Banking, Financial Services & Insurance | UG |
| BBA RO | bba-ro | BBA Retail Operations | UG |
| B.Com (Standard) | bcom-std | B.Com Standard | UG |
| B.Com ACCA | bcom-acca | B.Com with ACCA Coaching | UG |
| B.Com CMA | bcom-cma | B.Com with USA-CMA Coaching | UG |
| B.Com CA | bcom-ca | B.Com with CA Foundation Coaching | UG |
| MBA | mba | Master of Business Administration | PG |

### 📚 Basic & Applied Sciences School (BAS)

| Department | Code | Full Name | Type |
|-----------|------|-----------|------|
| Physics | phys | Physics | UG |
| Chemistry | chem | Chemistry | UG |
| Mathematics | math | Mathematics | UG |
| Science | sci | B.Sc Science | UG |

### 💻 Computer Applications School (CCA)

| Department | Code | Full Name | Type |
|-----------|------|-----------|------|
| BCA | bca | Bachelor of Computer Applications | UG |
| B.Sc Data Science | bsc-ds | B.Sc Data Science | UG |
| M.Sc Data Science | msc-ds | M.Sc Data Science | PG |

### 🎨 Arts, Design & Humanities School (ADH)

| Department | Code | Full Name | Type |
|-----------|------|-----------|------|
| Product Design | des-prod | B.Design Product Design | UG |
| Graphic Design | des-graph | B.Design Graphic Design | UG |
| Journalism & Mass Communication | jmc | BA Journalism & Mass Communication | UG |
| Humanities & Social Sciences | hss | Various humanities programs | UG |

---

## 3. How to Use in Directus

### Step 1: Create Schools Collection
Create fields with these exact values:

```json
{
  "id": 1,
  "code": "ENG",
  "name": "Engineering",
  "full_name": "School of Engineering",
  "description": "12+ engineering departments"
}
```

### Step 2: Create Departments Collection
Reference schools with foreign key:

```json
{
  "id": 1,
  "code": "cse",
  "name": "CSE",
  "full_name": "Computer Science Engineering",
  "school_id": 1,
  "type": "UG"
}
```

### Step 3: Reference in Announcements/News/Events
Use the short names in your collections:

```json
{
  "id": "ann-001",
  "title": "Announcement Title",
  "school": "Engineering",
  "department": "CSE",
  "status": "active"
}
```

---

## 4. React Code Mapping

In your React code (`content-manager.ts`), use these exact school/department values:

### Announcements Example:
```typescript
const announcement = {
  id: "cse-ann-1",
  title: "CSE Hackathon",
  content: "...",
  school: "Engineering",      // ← Use short school name
  department: "CSE",           // ← Use short department name
  status: "active"
}
```

### News Example:
```typescript
const news = {
  id: "news-1",
  title: "Engineering Placements",
  school: "Engineering",       // ← School short name
  department: "CSE",           // ← Department short name
}
```

### Events Example:
```typescript
const event = {
  id: "event-1",
  title: "Workshop",
  school: "Health Sciences",
  department: "Nursing"
}
```

---

## 5. Critical Rules for Directus Fields

### Field Name Convention
- Directus: snake_case (e.g., `school_id`, `department_code`, `full_name`)
- React: camelCase (e.g., `schoolId`, `departmentCode`, `fullName`)

### Exact Values (Case-Sensitive)
When creating Directus records, use EXACT values:
- ✅ Correct: `"Engineering"`
- ❌ Incorrect: `"engineering"` or `"ENGINEERING"`

### School Field Mapping
**In Directus:** `school` field should contain short name
```
"school": "Engineering"  // NOT "School of Engineering"
```

**In React:** When fetching from Directus, map to same short names
```typescript
school: data.school  // Will be "Engineering"
```

---

## 6. Filtering Examples

### By School Only
```typescript
// Get all announcements for Engineering school
const getBySchool = (school) => 
  announcements.filter(a => a.school === school)

// Usage:
getBySchool("Engineering")  // Returns all engineering announcements
```

### By School AND Department
```typescript
// Get announcements for CSE department in Engineering school
const getByDept = (school, department) => 
  announcements.filter(a => 
    a.school === school && a.department === department
  )

// Usage:
getByDept("Engineering", "CSE")
```

---

## 7. Common Mistakes to Avoid

| ❌ Mistake | ✅ Correct |
|-----------|-----------|
| `"School of Engineering"` | `"Engineering"` |
| `"cse"` (for school) | Use short name from table |
| `"computer science engineering"` | `"CSE"` |
| `"Mechanical_Engineering"` | `"Mechanical"` |
| No school field | Always include `school` field |
| `"active"` vs `"Active"` | Use exact case: `"active"` |

---

## 8. Migration Checklist

When migrating to Directus:

- [ ] Create Schools collection with short names (code, name, full_name)
- [ ] Create Departments collection with school foreign key
- [ ] Update Announcements to use school short name field
- [ ] Update News items to include school & department
- [ ] Update Events to include school & department
- [ ] Create API filters matching content-manager.ts functions
- [ ] Test announcements filter: `getAnnouncementsBySchool("Engineering")`
- [ ] Test department filter: `getAnnouncementsByDepartment("Engineering", "CSE")`
- [ ] Verify no "School of" prefixes in actual data
- [ ] Update environment variables with Directus URL & API token

---

## 9. Database Schema (SQL Reference)

```sql
-- Schools Table
CREATE TABLE schools (
  id INT PRIMARY KEY AUTO_INCREMENT,
  code VARCHAR(10) UNIQUE NOT NULL,
  name VARCHAR(50) NOT NULL,
  full_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Departments Table
CREATE TABLE departments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  code VARCHAR(20) UNIQUE NOT NULL,
  name VARCHAR(50) NOT NULL,
  full_name VARCHAR(100),
  school_id INT NOT NULL,
  type ENUM('UG', 'PG', 'Certificate') DEFAULT 'UG',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (school_id) REFERENCES schools(id)
);

-- Announcements (add these fields)
ALTER TABLE announcements ADD COLUMN school VARCHAR(50);
ALTER TABLE announcements ADD COLUMN department VARCHAR(50);
```

---

## 10. Summary Table - Quick Reference

**All Schools (Use These Names):**
- Engineering
- Health Sciences
- Law
- Commerce & Management
- Basic & Applied Sciences
- Computer Applications
- Arts, Design & Humanities
- Medicine

**Total Departments:** 50+ across all schools

For detailed department list by school, see Section 2 above.

