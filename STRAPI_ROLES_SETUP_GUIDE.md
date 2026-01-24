# Strapi Role-Based Access Control Setup Guide

## Overview

Each department has a dedicated role that can **only edit their own pages**. Public users can read all published pages but cannot edit.

---

## Access Control Matrix

| User Role                        | Read                    | Edit                                | Delete |
| -------------------------------- | ----------------------- | ----------------------------------- | ------ |
| **Public**                       | ✅ Published pages only | ❌                                  | ❌     |
| **University**                   | ✅ All                  | ✅ University pages only            | ❌     |
| **Engineering**                  | ✅ All                  | ✅ Engineering pages only           | ❌     |
| **Health Sciences**              | ✅ All                  | ✅ Health Sciences pages only       | ❌     |
| **Commerce & Management**        | ✅ All                  | ✅ Commerce & Management pages only | ❌     |
| **Applied Sciences**             | ✅ All                  | ✅ Applied Sciences pages only      | ❌     |
| **Humanities & Social Sciences** | ✅ All                  | ✅ HSS pages only                   | ❌     |
| **Law**                          | ✅ All                  | ✅ Law pages only                   | ❌     |
| **Journalism**                   | ✅ All                  | ✅ Journalism pages only            | ❌     |
| **Mathematics**                  | ✅ All                  | ✅ Mathematics pages only           | ❌     |
| **Physics**                      | ✅ All                  | ✅ Physics pages only               | ❌     |
| **Chemistry**                    | ✅ All                  | ✅ Chemistry pages only             | ❌     |
| **Library**                      | ✅ All                  | ✅ Library pages only               | ❌     |
| **Administration**               | ✅ All                  | ✅ Administration pages only        | ❌     |

---

## Step-by-Step Setup in Strapi Admin

### Step 1: Create Roles in Strapi Admin

1. Log in to **Strapi Admin Panel** (`http://localhost:1337/admin` or your Strapi URL)
2. Go to **Settings** (⚙️ icon, bottom left)
3. Click **Roles** under the "User & Permissions" section

### Step 2: Create "University" Role

1. Click **Add new role**
2. **Name:** `University`
3. **Description:** `Can manage university-level pages (Vision, Mission, Values, etc.)`
4. Click **Save**

### Step 3: Set Permissions for University Role

1. Click on the **University** role you just created
2. Scroll down to **Permissions** section
3. Find **Page** content type
4. Configure permissions:
   - ✅ **Find** (Read list)
   - ✅ **FindOne** (Read single)
   - ❌ **Create** (cannot create new)
   - ✅ **Update** (can edit their pages)
   - ❌ **Delete** (cannot delete)
5. Click the **Update** permission to set a filter:
   - Click **Add Filter**
   - Field: `contentType`
   - Condition: `equals`
   - Value: `university`
6. Click **Save**

### Step 4: Repeat for Department Roles

Follow the same steps for each department role, changing:

**Engineering Role:**

- Name: `Engineering`
- Description: `Can manage Engineering department pages`
- Update filter: `contentType equals engineering`

**Health Sciences Role:**

- Name: `Health Sciences`
- Description: `Can manage Health Sciences department pages`
- Update filter: `contentType equals health-sciences`

**Commerce & Management Role:**

- Name: `Commerce & Management`
- Description: `Can manage Commerce & Management department pages`
- Update filter: `contentType equals commerce-management`

**Applied Sciences Role:**

- Name: `Applied Sciences`
- Description: `Can manage Applied Sciences department pages`
- Update filter: `contentType equals applied-sciences`

**Humanities & Social Sciences Role:**

- Name: `Humanities & Social Sciences`
- Description: `Can manage Humanities & Social Sciences department pages`
- Update filter: `contentType equals humanities-social-sciences`

**Law Role:**

- Name: `Law`
- Description: `Can manage Law department pages`
- Update filter: `contentType equals law`

**Journalism Role:**

- Name: `Journalism`
- Description: `Can manage Journalism department pages`
- Update filter: `contentType equals journalism`

**Mathematics Role:**

- Name: `Mathematics`
- Description: `Can manage Mathematics department pages`
- Update filter: `contentType equals mathematics`

**Physics Role:**

- Name: `Physics`
- Description: `Can manage Physics department pages`
- Update filter: `contentType equals physics`

**Chemistry Role:**

- Name: `Chemistry`
- Description: `Can manage Chemistry department pages`
- Update filter: `contentType equals chemistry`

**Library Role:**

- Name: `Library`
- Description: `Can manage Library pages`
- Update filter: `contentType equals library`

**Administration Role:**

- Name: `Administration`
- Description: `Can manage Administration pages`
- Update filter: `contentType equals administration`

---

## Step 5: Assign Users to Roles

1. Go to **Settings** → **Users**
2. Click on a user
3. Under **User Details**, select their **Role** from the dropdown
4. Click **Save**

**Example:**

- Assign all Engineering faculty to the **Engineering** role
- Assign all Health Sciences faculty to the **Health Sciences** role
- Assign university leadership to the **University** role
- etc.

---

## Testing the Setup

### Test Case 1: University Role User

1. Log in as a user with the **University** role
2. You should see only **university** pages in the admin panel
3. You can edit them ✅
4. You cannot see or edit department pages ❌

### Test Case 2: Engineering Role User

1. Log in as a user with the **Engineering** role
2. You should see only **engineering** pages
3. You can edit them ✅
4. You cannot see or edit other department pages ❌

### Test Case 3: Public (Frontend)

1. The public website shows all **published** pages
2. Visitors cannot access admin panel ❌
3. Visitors can read all content ✅

---

## API Endpoints for Filtering

### Fetch University Pages Only

```bash
GET /api/pages?contentType=university
Authorization: Bearer <API_TOKEN>
```

### Fetch Engineering Pages Only

```bash
GET /api/pages?contentType=engineering
Authorization: Bearer <API_TOKEN>
```

### Fetch a Single Page by Slug

```bash
GET /api/page/vision-mission
```

---

## Security Notes

✅ **What's Protected:**

- Users can only edit pages for their assigned role
- Filters are enforced at the API level
- Public users cannot access admin panel

⚠️ **What's Not Protected (Manual):**

- File uploads are accessible to all authenticated users
- Consider adding more granular file permissions if needed
- API tokens should have read-only access in production

---

## Troubleshooting

**Q: A user can see pages they shouldn't**

- Check the role assignment: Settings → Users → Select user → Verify role

**Q: A user cannot edit their pages**

- Verify the Update permission has a filter set for their contentType
- Check that the page has the correct contentType value

**Q: API returns permission denied**

- Ensure your API token has the correct role assigned
- Check that filters are applied to the token's permissions

---

## Next Steps

1. ✅ Import `STRAPI_CONFIG_SCHEMA.json` (already done with `contentType` field)
2. ✅ Create roles in Strapi admin (follow steps above)
3. ✅ Assign users to roles
4. ✅ Create sample content tagged with contentType
5. ✅ Test access control

Ready to proceed? 🚀
