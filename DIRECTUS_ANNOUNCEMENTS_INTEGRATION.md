# Directus Announcements Integration

## ✅ **YES! It will work automatically for ALL departments without additional coding**

The integration is designed to work seamlessly across all departments in your university.

## How It Works

### 1. **Automatic Department Code Resolution**
The system automatically converts department names to Directus department codes using:

- **Exact matches**: "Aerospace" → "aero"
- **Case-insensitive matches**: "aerospace" → "aero", "AEROSPACE" → "aero"
- **Common variations**: "CSE" → "cse", "Computer Science & Engineering" → "cse"
- **Fallback**: Unknown names are normalized (e.g., "New Dept" → "newdept")

### 2. **Supported Departments**

#### **Engineering**
| Department Name | Code | Variations Supported |
|----------------|------|---------------------|
| Computer Science & Engineering | `cse` | "CSE", "Computer Science" |
| Electronics & Communication | `ece` | "ECE", "Electronics and Communication" |
| Data Science | `ds` | - |
| Mechanical Engineering | `mech` | "Mechanical" |
| Aerospace Engineering | `aero` | "Aerospace" |
| AI & ML | `aiml` | "AIML" |
| AI & DS | `aids` | "AIDS" |
| AI & Robotics | `airo` | "AI and Robotics" |
| Cybersecurity | `cyber` | - |
| Computer Technology | `ct` | "CT" |
| Mechatronics | `meeng` | - |
| MCA | `mca` | - |
| MS Data Science | `msds` | - |

#### **Basic & Applied Sciences**
| Department Name | Code |
|----------------|------|
| Physics | `phys` |
| Chemistry | `chem` |
| Mathematics | `math` |
| Physics (Engineering) | `phys-eng` |
| Chemistry (Engineering) | `chem-eng` |
| Mathematics (Engineering) | `math-eng` |
| HSS (Engineering) | `hss-eng` |

#### **Health Sciences**
| Department Name | Code | Variations |
|----------------|------|-----------|
| Nursing | `nurs` | - |
| Physiotherapy | `phys` | - |
| Pharmacy | `pharm` | - |
| Allied Health Sciences | `ahs` | "Allied Health" |

#### **Law**
| Department Name | Code | Variations |
|----------------|------|-----------|
| BA LLB | `ballb` | - |
| BBA LLB | `bballb` | - |
| LLB 3 Year | `llb3y` | - |
| LLM Corporate Commercial | `llm-cc` | "LLM Corporate" |
| LLM Law Technology | `llm-tech` | "LLM Tech" |

#### **Commerce & Management**
| Department Name | Code | Variations |
|----------------|------|-----------|
| BBA | `bba` | - |
| BBA BFSI | `bba-bfsi` | - |
| BBA RO | `bba-ro` | - |
| BCom Standard | `bcom-std` | "BCom" |
| BCom ACCA | `bcom-acca` | - |
| BCom CMA | `bcom-cma` | - |
| BCom CA | `bcom-ca` | - |
| MBA | `mba` | - |

#### **Design**
| Department Name | Code |
|----------------|------|
| Product Design | `des-prod` |
| Graphic Design | `des-graph` |

#### **Computer Applications**
| Department Name | Code |
|----------------|------|
| BCA | `bca` |
| BSc Data Science | `bsc-ds` |
| MSc Data Science | `msc-ds` |

#### **Journalism**
| Department Name | Code | Variations |
|----------------|------|-----------|
| Journalism & Mass Communication | `jmc` | "Journalism" |

## Usage Examples

### In Department Pages

All department pages using `<DepartmentNoticeBoard>` will automatically fetch announcements:

```tsx
// DeptAerospace.tsx
<DepartmentNoticeBoard department="Aerospace" />
// Fetches from: .../announcements?filter[department_code][_eq]=aero

// DeptCSE.tsx
<DepartmentNoticeBoard department="CSE" />
// Fetches from: .../announcements?filter[department_code][_eq]=cse

// DeptMechanical.tsx
<DepartmentNoticeBoard department="Mechanical Engineering" />
// Fetches from: .../announcements?filter[department_code][_eq]=mech
```

### Adding Announcements in Directus

To add announcements for a specific department:

1. **Go to Directus Admin** → Announcements collection
2. **Create new item**:
   - `title`: "Important Update"
   - `description`: "Description text here"
   - `department_code`: Select from dropdown (e.g., "aero", "cse", "mech")
   - `status`: "active"
   - `expiry_date`: Set future date
   - `attachment`: (Optional) Upload file

3. **Save** - The announcement will automatically appear on the department page!

## API Endpoints

### Direct Directus API (used by client):
```
https://dsu-website-headless-cms.directus.app/items/announcements?filter[department_code][_eq]=aero&sort=-expiry_date
```

### Server Proxy (with caching):
```
/api/directus/announcements
```

## Components That Use This

1. **`<DepartmentNoticeBoard>`** - Department-specific notice boards
2. **`<AnnouncementBanner>`** - Banner announcements (school-level)
3. **`useAnnouncements`** hook - For custom implementations
4. **`useDepartmentAnnouncements`** hook - For department-specific announcements

## Data Schema

The Directus announcement schema:

```typescript
interface Announcement {
  id: string;
  title: string;
  description: string;
  department_code?: string; // e.g., "aero", "cse", "mech"
  school_code?: string; // e.g., "ENG", "HS", "LAW"
  status: "active" | "archived";
  priority?: "high" | "medium" | "low";
  category?: "Academic" | "Administrative" | "Event" | "Urgent" | "General";
  date?: string;
  expiry_date?: string;
  attachment?: string; // File ID in Directus
}
```

## Testing

Visit `/test-announcements` to:
- See live data from Directus for Aerospace department
- View raw API response
- Verify the integration is working

## No Additional Coding Required! ✅

**The system is fully automatic:**
- ✅ All existing department pages will fetch their announcements
- ✅ New departments can be added without code changes
- ✅ Department name variations are handled automatically
- ✅ Fallback logic prevents errors for unknown departments
- ✅ Empty states handled gracefully (shows "No items to display")

## Next Steps for Content Team

1. **Add announcements in Directus** with the correct `department_code`
2. **Set status to "active"** for announcements to appear
3. **Set expiry_date** for automatic sorting and filtering
4. **Upload attachments** if needed (PDFs, documents, etc.)

That's it! The integration is complete and ready to use across all departments.
