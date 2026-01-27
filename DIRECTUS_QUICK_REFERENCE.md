# Directus Quick Reference - Ready to Copy-Paste

Use this guide to quickly populate Schools and Departments in Directus.

---

## Schools - Copy-Paste JSON

### Instructions:
1. Create a `schools` collection in Directus with fields: `code`, `name`, `full_name`
2. Use "Import" feature to add all records at once, OR
3. Add them one by one using this data

```json
[
  {
    "code": "ENG",
    "name": "Engineering",
    "full_name": "School of Engineering"
  },
  {
    "code": "HS",
    "name": "Health Sciences",
    "full_name": "School of Health Sciences"
  },
  {
    "code": "LAW",
    "name": "Law",
    "full_name": "School of Law"
  },
  {
    "code": "CAM",
    "name": "Commerce & Management",
    "full_name": "School of Commerce & Management"
  },
  {
    "code": "BAS",
    "name": "Basic & Applied Sciences",
    "full_name": "School of Basic & Applied Sciences"
  },
  {
    "code": "CCA",
    "name": "Computer Applications",
    "full_name": "School of Computer Applications"
  },
  {
    "code": "DES",
    "name": "Design",
    "full_name": "School of Design & Digital Trans-Media"
  },
  {
    "code": "ADH",
    "name": "Arts, Design & Humanities",
    "full_name": "School of Arts, Design & Humanities"
  },
  {
    "code": "MED",
    "name": "Medicine",
    "full_name": "School of Medicine"
  }
]
```

---

## Departments - By School (Copy-Paste JSON)

### Engineering School Departments

```json
[
  {
    "code": "cse",
    "name": "CSE",
    "full_name": "Computer Science Engineering",
    "school": "Engineering",
    "type": "UG"
  },
  {
    "code": "ece",
    "name": "ECE",
    "full_name": "Electronics & Communication Engineering",
    "school": "Engineering",
    "type": "UG"
  },
  {
    "code": "ds",
    "name": "Data Science",
    "full_name": "B.Tech Data Science Engineering",
    "school": "Engineering",
    "type": "UG"
  },
  {
    "code": "mech",
    "name": "Mechanical",
    "full_name": "Mechanical Engineering",
    "school": "Engineering",
    "type": "UG"
  },
  {
    "code": "aero",
    "name": "Aerospace",
    "full_name": "Aerospace Engineering",
    "school": "Engineering",
    "type": "UG"
  },
  {
    "code": "aiml",
    "name": "AIML",
    "full_name": "AI & Machine Learning",
    "school": "Engineering",
    "type": "UG"
  },
  {
    "code": "aids",
    "name": "AIDS",
    "full_name": "Artificial Intelligence & Data Science",
    "school": "Engineering",
    "type": "UG"
  },
  {
    "code": "airo",
    "name": "AI Robotics",
    "full_name": "AI & Robotics",
    "school": "Engineering",
    "type": "UG"
  },
  {
    "code": "cyber",
    "name": "Cybersecurity",
    "full_name": "Cybersecurity",
    "school": "Engineering",
    "type": "UG"
  },
  {
    "code": "ct",
    "name": "Computer Technology",
    "full_name": "Computer Technology",
    "school": "Engineering",
    "type": "UG"
  },
  {
    "code": "meeng",
    "name": "Medical Engineering",
    "full_name": "Medical Engineering",
    "school": "Engineering",
    "type": "UG"
  },
  {
    "code": "mca",
    "name": "MCA",
    "full_name": "Master of Computer Applications",
    "school": "Engineering",
    "type": "PG"
  },
  {
    "code": "msds",
    "name": "M.Sc Data Science",
    "full_name": "M.Sc Data Science",
    "school": "Engineering",
    "type": "PG"
  }
]
```

### Health Sciences School Departments

```json
[
  {
    "code": "nurs",
    "name": "Nursing",
    "full_name": "B.Sc Nursing",
    "school": "Health Sciences",
    "type": "UG"
  },
  {
    "code": "phys",
    "name": "Physiotherapy",
    "full_name": "B.P.T Physiotherapy",
    "school": "Health Sciences",
    "type": "UG"
  },
  {
    "code": "pharm",
    "name": "Pharmacy",
    "full_name": "B.Pharm & M.Pharm",
    "school": "Health Sciences",
    "type": "UG"
  },
  {
    "code": "ahs",
    "name": "Allied Health Sciences",
    "full_name": "B.Sc Allied Health Sciences",
    "school": "Health Sciences",
    "type": "UG"
  },
  {
    "code": "msc-nurs",
    "name": "M.Sc Nursing",
    "full_name": "Master of Nursing",
    "school": "Health Sciences",
    "type": "PG"
  },
  {
    "code": "mpt",
    "name": "M.Sc Physiotherapy",
    "full_name": "Master of Physiotherapy",
    "school": "Health Sciences",
    "type": "PG"
  },
  {
    "code": "mpharm",
    "name": "M.Pharm",
    "full_name": "Master of Pharmacy",
    "school": "Health Sciences",
    "type": "PG"
  }
]
```

### Law School Departments

```json
[
  {
    "code": "ballb",
    "name": "BA.LLB (Hons)",
    "full_name": "BA Bachelor of Legislative Law Honors",
    "school": "Law",
    "type": "UG"
  },
  {
    "code": "bballb",
    "name": "BBA.LLB (Hons)",
    "full_name": "BBA + Bachelor of Legislative Law Honors",
    "school": "Law",
    "type": "UG"
  },
  {
    "code": "llb3y",
    "name": "LLB (3 Year)",
    "full_name": "3-Year LLB Program",
    "school": "Law",
    "type": "UG"
  },
  {
    "code": "llm-cc",
    "name": "LLM Corporate & Commercial",
    "full_name": "LLM Corporate & Commercial Law",
    "school": "Law",
    "type": "PG"
  },
  {
    "code": "llm-tech",
    "name": "LLM Law & Technology",
    "full_name": "LLM Law & Technology",
    "school": "Law",
    "type": "PG"
  }
]
```

### Commerce & Management School Departments

```json
[
  {
    "code": "bba",
    "name": "BBA",
    "full_name": "Bachelor of Business Administration",
    "school": "Commerce & Management",
    "type": "UG"
  },
  {
    "code": "bba-bfsi",
    "name": "BBA BFSI",
    "full_name": "BBA Banking, Financial Services & Insurance",
    "school": "Commerce & Management",
    "type": "UG"
  },
  {
    "code": "bba-ro",
    "name": "BBA RO",
    "full_name": "BBA Retail Operations",
    "school": "Commerce & Management",
    "type": "UG"
  },
  {
    "code": "bcom-std",
    "name": "B.Com (Standard)",
    "full_name": "B.Com Standard",
    "school": "Commerce & Management",
    "type": "UG"
  },
  {
    "code": "bcom-acca",
    "name": "B.Com ACCA",
    "full_name": "B.Com with ACCA Coaching",
    "school": "Commerce & Management",
    "type": "UG"
  },
  {
    "code": "bcom-cma",
    "name": "B.Com CMA",
    "full_name": "B.Com with USA-CMA Coaching",
    "school": "Commerce & Management",
    "type": "UG"
  },
  {
    "code": "bcom-ca",
    "name": "B.Com CA",
    "full_name": "B.Com with CA Foundation Coaching",
    "school": "Commerce & Management",
    "type": "UG"
  },
  {
    "code": "mba",
    "name": "MBA",
    "full_name": "Master of Business Administration",
    "school": "Commerce & Management",
    "type": "PG"
  }
]
```

### Arts, Design & Humanities School Departments

```json
[
  {
    "code": "des-prod",
    "name": "Product Design",
    "full_name": "B.Design Product Design",
    "school": "Arts, Design & Humanities",
    "type": "UG"
  },
  {
    "code": "des-graph",
    "name": "Graphic Design",
    "full_name": "B.Design Graphic Design",
    "school": "Arts, Design & Humanities",
    "type": "UG"
  },
  {
    "code": "jmc",
    "name": "Journalism & Mass Communication",
    "full_name": "BA Journalism & Mass Communication",
    "school": "Arts, Design & Humanities",
    "type": "UG"
  }
]
```

### Other Schools (Remaining Departments)

**Basic & Applied Sciences:**
```json
[
  {
    "code": "phys",
    "name": "Physics",
    "school": "Basic & Applied Sciences",
    "type": "UG"
  },
  {
    "code": "chem",
    "name": "Chemistry",
    "school": "Basic & Applied Sciences",
    "type": "UG"
  },
  {
    "code": "math",
    "name": "Mathematics",
    "school": "Basic & Applied Sciences",
    "type": "UG"
  }
]
```

**Computer Applications:**
```json
[
  {
    "code": "bca",
    "name": "BCA",
    "full_name": "Bachelor of Computer Applications",
    "school": "Computer Applications",
    "type": "UG"
  },
  {
    "code": "bsc-ds",
    "name": "B.Sc Data Science",
    "school": "Computer Applications",
    "type": "UG"
  },
  {
    "code": "msc-ds",
    "name": "M.Sc Data Science",
    "school": "Computer Applications",
    "type": "PG"
  }
]
```

---

## Using in Announcements/News/Events

When creating announcements, news, or events, use these field values:

### Example Announcement Record:
```json
{
  "id": "eng-cse-001",
  "title": "CSE Hackathon 2025",
  "content": "Join our 48-hour coding competition...",
  "type": "announcement",
  "category": "Event",
  "priority": "high",
  "date": "2025-02-01",
  "status": "active",
  "school": "Engineering",
  "department": "CSE"
}
```

### Example News Record:
```json
{
  "id": "news-001",
  "title": "Engineering Achieves 96% Placements",
  "content": "...",
  "date": "2025-01-20",
  "status": "published",
  "school": "Engineering",
  "department": "CSE",
  "category": "Placement"
}
```

### Example Event Record:
```json
{
  "id": "event-001",
  "title": "Health Sciences Symposium",
  "description": "...",
  "date": "2025-02-15",
  "location": "Main Campus",
  "status": "upcoming",
  "school": "Health Sciences",
  "department": "Nursing",
  "category": "Seminar"
}
```

---

## Key Rules to Remember

1. **Use Short Names:** Always use short names (e.g., "Engineering", not "School of Engineering")
2. **Exact Case:** Match exact casing ("Active" becomes "active", "Academic" stays "Academic")
3. **School + Department:** Content should have BOTH school and department fields
4. **No Spaces in Codes:** Department codes use lowercase with hyphens (e.g., "llm-cc", "bcom-acca")
5. **School Names:** These 8 schools are definitive:
   - Engineering
   - Health Sciences
   - Law
   - Commerce & Management
   - Basic & Applied Sciences
   - Computer Applications
   - Arts, Design & Humanities
   - Medicine

---

## Testing Your Setup

Once you've created schools and departments in Directus, test with these queries:

### Get All Schools:
```
GET /items/schools?limit=100
```

### Get Engineering Departments:
```
GET /items/departments?filter[school][_eq]=Engineering&limit=100
```

### Get Announcements for Engineering + CSE:
```
GET /items/announcements?filter[school][_eq]=Engineering&filter[department][_eq]=CSE&limit=10
```

### Count by School:
```
GET /items/departments?groupBy[]=school&limit=100
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "School not found" in React | Check exact spelling - use "Engineering" not "engineering" |
| Announcements not showing | Verify both `school` AND `department` fields are populated |
| Wrong announcements appearing | Ensure department filter is added (not just school) |
| Directus returns empty | Check API token permissions and field names match exactly |
| Case sensitivity issues | All school/dept names in content should match the lists above exactly |

