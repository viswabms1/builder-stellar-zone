# Directus Schema Cheatsheet

**One-page quick reference for schools and departments**

---

## SCHOOLS (10 Total)

```
ENG  → Engineering
HS   → Health Sciences
LAW  → Law
CAM  → Commerce & Management
DES  → Design
BAS  → Basic & Applied Sciences
CCA  → Computer Applications
ADH  → Arts & Humanities
JMC  → Journalism
MED  → Medicine
```

✅ **Use exact names above in your Directus records**

---

## DEPARTMENTS BY SCHOOL

### ENGINEERING (13 depts)
- **UG:** CSE | ECE | Data Science | Mechanical | Aerospace | AIML | AIDS | AI Robotics | Cybersecurity | Computer Technology | Medical Engineering
- **PG:** MCA | M.Sc Data Science

### HEALTH SCIENCES (7 depts)
- **UG:** Nursing | Physiotherapy | Pharmacy | Allied Health Sciences
- **PG:** M.Sc Nursing | M.Sc Physiotherapy | M.Pharm

### LAW (5 depts)
- **UG:** BA.LLB (Hons) | BBA.LLB (Hons) | LLB (3 Year)
- **PG:** LLM Corporate & Commercial | LLM Law & Technology

### COMMERCE & MANAGEMENT (8 depts)
- **UG:** BBA | BBA BFSI | BBA RO | B.Com (Standard) | B.Com ACCA | B.Com CMA | B.Com CA
- **PG:** MBA

### DESIGN (2 depts)
- **UG:** Product Design | Graphic Design

### COMPUTER APPLICATIONS (3 depts)
- **UG:** BCA | B.Sc Data Science
- **PG:** M.Sc Data Science

### BASIC & APPLIED SCIENCES (3 depts)
- **UG:** Physics | Chemistry | Mathematics

### ARTS & HUMANITIES (1+ depts)
- Various humanities programs

### JOURNALISM (1 dept)
- Journalism

### MEDICINE (1+ depts)
- Medical programs

---

## ANNOUNCEMENT/NEWS/EVENT STRUCTURE

```json
{
  "id": "unique-id",
  "title": "Title",
  "content": "Content",
  "date": "2025-01-27",
  "status": "active|published|upcoming",
  "school": "Engineering",           ← Pick from schools list
  "department": "CSE",               ← Pick from departments list
  "category": "Academic|Event|...",
  "priority": "high|medium|low"
}
```

---

## FIELD NAMING

| Directus (snake_case) | React (camelCase) |
|---|---|
| `school_id` | `schoolId` |
| `department_code` | `departmentCode` |
| `full_name` | `fullName` |
| `created_at` | `createdAt` |
| `expiry_date` | `expiryDate` |

---

## CRITICAL RULES

1. **Always use short school names** (not "School of Engineering")
2. **Match exact case** in all values
3. **Include both school AND department** in content
4. **Department must match its school** (CSE belongs to Engineering, not Health Sciences)
5. **Use snake_case in Directus, camelCase in React**

---

## TESTING CHECKLIST

- [ ] Schools collection created with 10 records
- [ ] All departments added to Departments collection
- [ ] Each department correctly linked to its school
- [ ] Announcements have both `school` and `department` fields
- [ ] News items have both `school` and `department` fields
- [ ] Events have both `school` and `department` fields
- [ ] No "School of" prefixes in actual data values
- [ ] Case matches exactly (e.g., "Engineering" not "engineering")
- [ ] API filters work: `school=Engineering&department=CSE`

---

## QUICK EXAMPLES

### For Announcements
```
school: "Engineering"
department: "CSE"
status: "active"
```

### For News
```
school: "Health Sciences"
department: "Nursing"
status: "published"
```

### For Events
```
school: "Law"
department: "BA.LLB (Hons)"
status: "upcoming"
```

---

## DATABASE CODES (Optional)

If using codes in your database:

**Schools:** ENG, HS, LAW, CAM, DES, BAS, CCA, ADH, JMC, MED

**Department Codes:** cse, ece, ds, mech, aero, aiml, aids, airo, cyber, ct, meeng, mca, msds, nurs, phys, pharm, ahs, ballb, bballb, llb3y, llm-cc, llm-tech, bba, bba-bfsi, bba-ro, bcom-std, bcom-acca, bcom-cma, bcom-ca, mba, des-prod, des-graph, bca, bsc-ds, msc-ds

---

## API FILTER EXAMPLES

```
/items/announcements?filter[school][_eq]=Engineering

/items/announcements?filter[school][_eq]=Engineering&filter[department][_eq]=CSE

/items/departments?filter[school][_eq]=Health Sciences&limit=100

/items/announcements?filter[status][_eq]=active&sort=-date
```

---

## COMMON MISTAKES ❌

| Wrong | Right |
|-------|-------|
| `"School of Engineering"` | `"Engineering"` |
| `"cse"` (school field) | `"Engineering"` |
| `"Active"` | `"active"` |
| Missing department | Always include department |
| `school_name` | `school` |
| `"Mechanical Engineering"` | `"Mechanical"` |
| `"CSE Engineering"` | `"CSE"` |

---

## SHORT ANSWER: What to Use?

**In Directus:** Use exact short names from this cheatsheet
**In React:** Use same exact names
**In API:** Filter using these exact names
**In URLs:** URL-encode spaces if needed

**Example:** 
- Directus value: `"Commerce & Management"`
- React usage: `school === "Commerce & Management"`
- API: `school[_eq]=Commerce%20%26%20Management` (URL-encoded)

---

**Last Updated:** 2025-01-27  
**Version:** 1.0

