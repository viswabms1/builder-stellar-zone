# Strapi Content Creation Guide - Vision & Mission Page

## Overview

This guide walks you through creating the "Vision, Mission and Values" page content in Strapi, step by step.

**Time Required:** ~20 minutes  
**Strapi Admin:** http://localhost:1337/admin (or your Strapi URL)

---

## Table of Contents

1. [Log Into Strapi](#log-into-strapi)
2. [Create New Page Entry](#create-new-page-entry)
3. [Fill Hero Section](#fill-hero-section)
4. [Add Vision & Mission Block](#add-vision--mission-block)
5. [Add Action Items Block](#add-action-items-block)
6. [Add Core Values Block](#add-core-values-block)
7. [Add CTA Block](#add-cta-block)
8. [Publish the Page](#publish-the-page)

---

## Step 1: Log Into Strapi

1. Open **http://localhost:1337/admin** (development) or your Strapi Cloud URL
2. Enter your **Email** and **Password**
3. Click **Sign in**

You should see the Strapi dashboard.

---

## Step 2: Create New Page Entry

### 2.1 Navigate to Pages Collection

1. In the left sidebar, click **Content Manager**
2. You should see **Page** in the list (if not, refresh the page)
3. Click **Page**

### 2.2 Create New Entry

1. Click the **+ Create new entry** button (top right, blue button)
2. You'll see a blank form

---

## Step 3: Fill Hero Section

### 3.1 Basic Fields

**Title Field:**
```
Vision, Mission and Values
```

**Slug Field** (must be unique):
```
vision-mission
```

**Description Field:**
```
Guiding DSU's transition from a legacy institution to a future-ready, AI-first university
```

### 3.2 Hero Component

Click on the **Hero** section to expand it.

#### Hero Image

1. Click **Add an entry**
2. Click the **Upload** button in the "image" field
3. Upload this image (from your project):
   ```
   https://www.dsu.edu.in/images/Home/vision-mission.jpg
   ```
   
   **Or:** Use this placeholder for now:
   ```
   https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop
   ```

#### Hero Heading

```
Vision, Mission and Values
```

#### Hero Subtitle

```
Guiding DSU's transition from a legacy institution to a future-ready, AI-first university
```

#### Hero Description

```
Throwing light on the way forward
```

#### Badge Icon

Select from dropdown: **compass**

#### Badge Text

```
Our Direction
```

---

## Step 4: Add Vision & Mission Block

### 4.1 Expand Sections (Dynamic Zone)

1. Scroll down to **Sections** field
2. Click **+ Add a component to Sections**
3. Select **Vision-mission** from the list

### 4.2 Fill Vision Section

#### Vision Title
```
Vision
```

#### Vision Description
```
To be a centre of excellence in education, research & training, innovation & entrepreneurship and to produce citizens with exceptional leadership qualities to serve national and global needs.
```

#### Vision Icon
Select: **eye**

### 4.3 Fill Mission Section

#### Mission Title
```
Mission
```

#### Mission Description
```
To achieve our objectives in an environment that enhances creativity, innovation and scholarly pursuits while adhering to our vision.
```

#### Mission Icon
Select: **target**

---

## Step 5: Add Action Items Block

### 5.1 Add New Component to Sections

1. In **Sections**, click **+ Add a component to Sections** (below the Vision-Mission block)
2. Select **Action-items**

### 5.2 Fill Action Items

#### Title
```
How We Translate Vision into Action
```

#### Items (Repeatable)

Click **+ Add an entry to items** for each item:

**Item 1:**
```
AI-infused curricula and interdisciplinary learning
```

**Item 2:**
```
Research-driven teaching and innovation culture
```

**Item 3:**
```
Strong industry, startup and societal partnerships
```

---

## Step 6: Add Core Values Block

### 6.1 Add New Component to Sections

1. In **Sections**, click **+ Add a component to Sections**
2. Select **Core-values**

### 6.2 Fill Core Values Header

#### Title
```
Values
```

#### Description
```
The principles that guide our decisions, actions, and interactions
```

### 6.3 Add Core Values (Repeatable)

Click **+ Add an entry to values** for each value:

#### Value 1: The Pursuit of Excellence

```
Icon:        lightbulb
Title:       The Pursuit of Excellence
Description: Continuous improvement in teaching, research, infrastructure and institutional practices.
```

#### Value 2: Fairness

```
Icon:        award
Title:       Fairness
Description: Commitment to equity, inclusiveness, and unbiased academic and administrative processes.
```

#### Value 3: Leadership

```
Icon:        target
Title:       Leadership
Description: Developing responsible leaders capable of guiding change in education, research and industry.
```

#### Value 4: Integrity and Transparency

```
Icon:        heart
Title:       Integrity and Transparency
Description: Upholding ethical conduct, accountability and openness in governance and academics.
```

---

## Step 7: Add CTA Block

### 7.1 Add New Component to Sections

1. In **Sections**, click **+ Add a component to Sections**
2. Select **Cta-section**

### 7.2 Fill CTA Content

#### Title
```
Join Our Community
```

#### Description
```
Be part of a university community shaping future-ready professionals, innovators and leaders.
```

### 7.3 Add Primary Button

Click on **Primary Button** field:

```
Label: Apply Now
URL:   https://admissions.dsu.edu.in/
Type:  primary
```

### 7.4 Add Secondary Button

Click on **Secondary Button** field:

```
Label: Back to About
URL:   /about
Type:  secondary
```

---

## Step 8: Publish the Page

### 8.1 Save Draft

1. Click **Save** button (top right)
2. You should see a success message

### 8.2 Publish

1. Click the **Publish** button (top right, usually next to Save)
2. Confirm by clicking **Publish** in the modal

---

## ✅ Verification Checklist

After publishing, verify all fields are correct:

- [ ] **Slug:** `vision-mission`
- [ ] **Hero Image:** Shows correctly
- [ ] **Hero Badge:** Shows "compass" icon with "Our Direction" text
- [ ] **Vision Title & Description:** Visible
- [ ] **Mission Title & Description:** Visible
- [ ] **Action Items:** All 3 items show
- [ ] **Core Values:** All 4 values show with correct icons
- [ ] **CTA Buttons:** "Apply Now" and "Back to About" visible
- [ ] **Status:** Shows "Published" (not "Draft")

---

## 🧪 Test in Your App

### 8.1 Check API Response

Open your browser and test the API:

```
http://localhost:8080/api/page/vision-mission
```

You should see JSON response with all your content.

### 8.2 View Page in App

1. Navigate to `http://localhost:3000/vision-mission`
2. Verify all sections render correctly
3. Check for any console errors (F12 > Console tab)

---

## 📸 Content Structure Preview

Here's how your published content should look in Strapi:

```
Page: Vision, Mission and Values
├── slug: vision-mission
├── Hero
│   ├── image: (uploaded)
│   ├── heading: Vision, Mission and Values
│   ├── subtitle: Guiding DSU's transition...
│   ├── description: Throwing light on the way forward
│   ├── badgeIcon: compass
│   └── badgeText: Our Direction
└── Sections
    ├── [0] Vision-Mission Block
    │   ├── vision_title: Vision
    │   ├── vision_description: To be a centre of excellence...
    │   ├── vision_icon: eye
    │   ├── mission_title: Mission
    │   ├── mission_description: To achieve our objectives...
    │   └── mission_icon: target
    ├── [1] Action-Items Block
    │   ├── title: How We Translate Vision into Action
    │   └── items: [3 items]
    ├── [2] Core-Values Block
    │   ├── title: Values
    │   ├── description: The principles that guide...
    │   └── values: [4 values with icons]
    └── [3] CTA Block
        ├── title: Join Our Community
        ├── description: Be part of a university community...
        ├── primaryButton: (Apply Now)
        └── secondaryButton: (Back to About)
```

---

## 🐛 Common Issues & Solutions

### Issue: "slug field already exists"

**Solution:** Change the slug to something unique, e.g., `vision-mission-2024`

### Issue: Image upload fails

**Solution:** 
1. Check Strapi upload folder permissions
2. Or use external image URL instead

### Issue: Icon not rendering in app

**Solution:** 
1. Verify icon name matches ICON_MAP in component
2. Check exact spelling (case-sensitive)

### Issue: Sections not showing

**Solution:**
1. Make sure dynamic zone components are added (not just the field)
2. Fill in all required fields marked with red asterisk
3. Save draft before adding new sections

---

## 🎨 Content Sources

All content above is extracted from the current **VisionMission.tsx** component:
- Hero text from page heading section
- Vision/Mission from Card components
- Action items from hardcoded array
- Core values from `coreValues` array
- CTA from button section

If you want to customize, you can edit any text to your preference.

---

## 📝 Tips

1. **Save frequently** - Click Save after each major section
2. **Use Rich Text** - For description fields, you can use bold, italic, links
3. **Test locally first** - Before deploying to production
4. **Translations** - Once working, create versions for `kn` (Kannada) and `hi` (Hindi) locales
5. **Images** - Strapi stores images in `/uploads` folder

---

## ⏭️ Next Steps

After creating this page:

1. ✅ Update `client/App.tsx` to use `VisionMissionStrapi` component
2. Test the page in your local app
3. Deploy to production
4. Create content for other pages (About, History, etc.)

---

## 🆘 Still Need Help?

1. Check Strapi Docs: https://docs.strapi.io
2. Review STRAPI_IMPLEMENTATION_GUIDE.md for API details
3. Check component type definitions in `shared/api.ts`
