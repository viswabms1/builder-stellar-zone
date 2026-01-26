# School-to-Department Mapping (Authoritative)

This is the correct mapping based on actual school pages and Navigation structure.

## 1. School of Engineering

### Main Departments (CS Cluster)
- B.Tech Computer Science & Engineering (CSE)
- B.Tech CSE (AI & ML)
- B.Tech CSE (AI & Data Science)
- B.Tech CSE (Data Science)
- B.Tech CSE (Cybersecurity)
- B.Tech CSE (AI & Robotics)
- Computer Science & Technology

### Other Engineering Disciplines
- B.Tech Electronics & Communication Engineering (ECE)
- B.Tech Mechanical Engineering
- B.Tech Aerospace Engineering
- B.Tech Computer Science and Medical Engineering

### Postgraduate (M.Tech)
- M.Tech Computer Science & Engineering
- M.Tech Artificial Intelligence & Machine Learning
- M.Tech Artificial Intelligence & Data Science
- M.Tech Artificial Intelligence & Robotics
- M.Tech Embedded Systems
- M.Tech Design Engineering

### Foundation/Supporting Departments (Under SOE)
- **Physics** ← Foundation department
- **Chemistry** ← Foundation department
- **Mathematics** ← Foundation department

---

## 2. School of Health Sciences

### Nursing
- B.Sc Nursing
- Post Basic B.Sc Nursing
- M.Sc Nursing

### Pharmacy
- B.Pharm
- Pharm.D
- M.Pharm

### Physiotherapy
- BPT (Bachelor of Physiotherapy)
- MPT (Masters of Physiotherapy)

### Allied Health Sciences (CAHS)
- B.Sc. Allied Health Sciences
- MPH (Master of Public Health)

---

## 3. School of Law

### Undergraduate
- LLB (3-Year)

### Postgraduate
- LLM in Law & Technology
- LLM in Corporate Law

---

## 4. School of Commerce & Management

### Commerce
- B.Com

### Management
- BBA (Bachelor of Business Administration)
- MBA (Master of Business Administration)

### Executive Education
- Center for Executive Education

---

## 5. School of Basic & Applied Sciences

### Undergraduate
- B.Sc. Triple Major (Physics, Chemistry, Mathematics, etc.)

### Postgraduate
- M.Sc. Specializations

---

## 6. School of Design & Digital Trans-Media

### Undergraduate
- B.Design

---

## 7. School of Arts, Design & Humanities

### Undergraduate
- B.A. Journalism & Mass Communication

---

## 8. Computer Applications (Standalone School)

### Undergraduate
- B.C.A. (Bachelor of Computer Applications)
- B.Sc. Data Science

### Postgraduate
- M.C.A. (Master of Computer Applications)
- M.Sc. Data Science

---

## Important Notes

1. **Foundation Departments**: Physics, Chemistry, and Mathematics are **supporting departments under School of Engineering**. All engineering students must complete these courses.

2. **Data Isolation**: News, events, and announcements should filter by:
   - School (primary filter)
   - Department (optional secondary filter if user is viewing a specific program)

3. **URL Routes**: The routes like `/academics/engineering/computer-science`, `/academics/health-sciences/pharmacy` determine which school/department should be shown.

4. **Program vs Department**:
   - A **program** is a degree (e.g., "B.Tech CSE")
   - A **department** is the academic unit (e.g., "CSE")
   - Some pages refer to both, so be careful with terminology

---

## How to Use This Mapping

### For useContentContext.ts (Route Detection)
```typescript
const schoolMap = {
  "/engineering": "Engineering",
  "/physics": "Engineering",  // Foundation dept under SOE
  "/chemistry": "Engineering",  // Foundation dept under SOE
  "/mathematics": "Engineering",  // Foundation dept under SOE
  
  "/health-sciences": "Health Sciences",
  "/pharmacy": "Health Sciences",
  "/nursing": "Health Sciences",
  
  "/law": "Law",
  "/commerce-and-management": "Commerce & Management",
  // ... etc
};

const departmentMap = {
  "cse": "CSE",
  "ai-ml": "AI & ML",
  "mechanical": "Mechanical",
  "aerospace": "Aerospace",
  "ece": "ECE",
  
  "pharmacy": "Pharmacy",
  "nursing": "Nursing",
  "physiotherapy": "Physiotherapy",
  "allied-health": "Allied Health Sciences",
  
  "physics": "Physics",  // Foundation
  "chemistry": "Chemistry",  // Foundation
  "mathematics": "Mathematics",  // Foundation
  
  // ... etc
};
```

### For News/Events/Announcements Data
Create items with correct school + department mapping:
```typescript
{
  id: "...",
  title: "...",
  school: "Engineering",  // Primary school
  department: "CSE",  // Optional specific department
  // ... rest of item
}
```

This ensures:
- Content shows on `/academics/engineering` AND `/academics/engineering/computer-science`
- Content for "Physics" shows on Engineering school page (since it's a supporting department)

---

## Version History
- Created based on: Navigation.tsx, Engineering.tsx, HealthSciences.tsx
- Date: 2025-01-26
- Authority: Actual page structure and navigation menus
