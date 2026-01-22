# Strapi Content Creation - Click-by-Click Visual Guide

## Vision & Mission Page Content Entry

**Duration:** ~15 minutes  
**Browser:** Chrome/Firefox (desktop recommended)

---

## 🎬 SCENE 1: Login & Navigation

### Step 1: Open Strapi Admin
```
URL: http://localhost:1337/admin
     (or your Strapi Cloud instance)
```
**Screen:** Login form

### Step 2: Enter Credentials
```
Email:    [your-email@example.com]
Password: [your-password]
```

### Step 3: Click "Sign in"
```
Button: Blue "Sign in" button (bottom right)
```
**Screen:** Strapi Dashboard

### Step 4: Open Content Manager
```
Left Sidebar Menu:
  → "Content Manager" (first option)
  
Screen: List of content types
```

### Step 5: Select Page Collection
```
List of collections:
  → Click "Page" (you should see it listed)

Screen: Pages list (probably empty)
```

### Step 6: Create New Entry
```
Button: Blue "+ Create new entry" (top right)

Screen: Blank form with fields
```

---

## 🎬 SCENE 2: Fill Basic Fields

### Step 7: Enter Title

**Location:** First text field at top

```
[Scroll to top if needed]
Click in field labeled "title"
Type: Vision, Mission and Values
```

### Step 8: Enter Slug

**Location:** Second text field

```
Click in field labeled "slug"
Clear any auto-filled content
Type: vision-mission
(This is case-sensitive, keep it lowercase)
```

### Step 9: Enter Description

**Location:** Below slug (larger text field)

```
Click in field labeled "description"
Type: Guiding DSU's transition from a legacy 
      institution to a future-ready, AI-first university
```

---

## 🎬 SCENE 3: Add Hero Section

### Step 10: Expand Hero Component

**Location:** Below description

```
Click on section titled "Hero"
   → Expands to show sub-fields

You should see:
  - image
  - heading
  - subtitle
  - description
  - badgeIcon
  - badgeText
```

### Step 11: Upload Hero Image

**Location:** First field in Hero section

```
Field: "image"

If you see "+ Add an entry to image":
  Click "+ Add an entry to image"

Then you'll see an upload area:
  Click "Upload" button
  Select file: vision-mission.jpg
  (from: /public or URL)
  
Alternative: Link external image
  Paste URL: https://www.dsu.edu.in/images/Home/vision-mission.jpg
```

### Step 12: Fill Hero Heading

```
Field: "heading" (text field)
Type: Vision, Mission and Values
```

### Step 13: Fill Hero Subtitle

```
Field: "subtitle" (text field)
Type: Guiding DSU's transition from a legacy 
      institution to a future-ready, AI-first university
```

### Step 14: Fill Hero Description

```
Field: "description" (longer text field)
Type: Throwing light on the way forward
```

### Step 15: Select Badge Icon

```
Field: "badgeIcon" (dropdown)
Click dropdown
Select: compass
```

### Step 16: Fill Badge Text

```
Field: "badgeText" (text field)
Type: Our Direction
```

### Step 17: SAVE DRAFT

**Button:** "Save" (top right, blue button)

```
Wait for success notification:
  "Entry saved successfully"
```

---

## 🎬 SCENE 4: Add Vision & Mission Block

### Step 18: Expand Sections

```
Scroll down to find "Sections" field
(Just below Hero section)

This is a "Dynamic Zone" - for adding content blocks
```

### Step 19: Add First Component

```
Click button: "+ Add a component to Sections"

Modal appears with list of components:
  → Click "Vision-mission"
  
A new block appears with fields:
  - vision_title
  - vision_description
  - vision_icon
  - mission_title
  - mission_description
  - mission_icon
```

### Step 20: Fill Vision Fields

**Within the Vision-Mission block:**

```
vision_title:
  Type: Vision

vision_description:
  Type: To be a centre of excellence in education, 
        research & training, innovation & entrepreneurship 
        and to produce citizens with exceptional leadership 
        qualities to serve national and global needs.

vision_icon:
  Click dropdown
  Select: eye
```

### Step 21: Fill Mission Fields

```
mission_title:
  Type: Mission

mission_description:
  Type: To achieve our objectives in an environment 
        that enhances creativity, innovation and 
        scholarly pursuits while adhering to our vision.

mission_icon:
  Click dropdown
  Select: target
```

### Step 22: SAVE DRAFT

```
Click "Save" button (top right)
Wait for success notification
```

---

## 🎬 SCENE 5: Add Action Items Block

### Step 23: Add New Component to Sections

```
Still in "Sections" area
Find button: "+ Add a component to Sections"
(It's below the Vision-Mission block you just created)

Click it

Modal appears:
  → Click "Action-items"
  
New block appears with fields:
  - title
  - items
```

### Step 24: Fill Action Items Title

```
Field: "title"
Type: How We Translate Vision into Action
```

### Step 25: Add First Action Item

```
Field: "items" (repeatable)

You should see: "+ Add an entry to items"
Click it

Text field appears:
Type: AI-infused curricula and interdisciplinary learning
```

### Step 26: Add Second Action Item

```
Click "+ Add an entry to items" again

Text field appears:
Type: Research-driven teaching and innovation culture
```

### Step 27: Add Third Action Item

```
Click "+ Add an entry to items" again

Text field appears:
Type: Strong industry, startup and societal partnerships
```

### Step 28: SAVE DRAFT

```
Click "Save" button (top right)
```

---

## 🎬 SCENE 6: Add Core Values Block

### Step 29: Add New Component to Sections

```
Find: "+ Add a component to Sections"
(Below Action Items block)

Click it

Modal appears:
  → Click "Core-values"
  
New block appears with:
  - title
  - description
  - values
```

### Step 30: Fill Core Values Header

```
Field: "title"
Type: Values

Field: "description"
Type: The principles that guide our decisions, 
      actions, and interactions
```

### Step 31: Add First Core Value

```
Field: "values"

You should see: "+ Add an entry to values"
Click it

Form appears with fields:
  - icon
  - title
  - description

Fill with:
  icon: lightbulb
  title: The Pursuit of Excellence
  description: Continuous improvement in teaching, 
               research, infrastructure and 
               institutional practices.
```

### Step 32: Add Second Core Value

```
Click "+ Add an entry to values"

Fill with:
  icon: award
  title: Fairness
  description: Commitment to equity, inclusiveness, 
               and unbiased academic and administrative 
               processes.
```

### Step 33: Add Third Core Value

```
Click "+ Add an entry to values"

Fill with:
  icon: target
  title: Leadership
  description: Developing responsible leaders capable 
               of guiding change in education, research 
               and industry.
```

### Step 34: Add Fourth Core Value

```
Click "+ Add an entry to values"

Fill with:
  icon: heart
  title: Integrity and Transparency
  description: Upholding ethical conduct, accountability 
               and openness in governance and academics.
```

### Step 35: SAVE DRAFT

```
Click "Save" button (top right)
```

---

## 🎬 SCENE 7: Add CTA Block

### Step 36: Add New Component to Sections

```
Find: "+ Add a component to Sections"
(Below Core Values block)

Click it

Modal appears:
  → Click "Cta-section"
  
New block appears with:
  - title
  - description
  - primaryButton
  - secondaryButton
```

### Step 37: Fill CTA Title and Description

```
Field: "title"
Type: Join Our Community

Field: "description"
Type: Be part of a university community shaping 
      future-ready professionals, innovators and leaders.
```

### Step 38: Add Primary Button

```
Field: "primaryButton"

You should see: "+ Add an entry to primaryButton"
Click it

Form appears:
  label: Apply Now
  url: https://admissions.dsu.edu.in/
  type: primary (select from dropdown)
```

### Step 39: Add Secondary Button

```
Field: "secondaryButton"

You should see: "+ Add an entry to secondaryButton"
Click it

Form appears:
  label: Back to About
  url: /about
  type: secondary (select from dropdown)
```

### Step 40: SAVE DRAFT

```
Click "Save" button (top right)
```

---

## 🎬 SCENE 8: Final Review & Publish

### Step 41: Scroll to Top

```
Review all your entries:
  ✓ Title: Vision, Mission and Values
  ✓ Slug: vision-mission
  ✓ Description: [filled]
  ✓ Hero: [all fields filled]
  ✓ Sections:
    - Vision-Mission block
    - Action Items block
    - Core Values block (4 values)
    - CTA block
```

### Step 42: Click Publish

```
Button: "Publish" (top right, usually next to Save)

If "Publish" is gray:
  → Click "Save" first, then "Publish"

Modal appears:
  Message: "Are you sure you want to publish this?"
  
Click: "Publish" button in modal
```

### Step 43: Confirm Publication

```
Success notification appears:
  "Entry has been published successfully"

Status indicator changes from "Draft" to "Published"
```

---

## ✅ VERIFICATION STEPS

### Step 44: Test API Endpoint

```
Open new browser tab
URL: http://localhost:8080/api/page/vision-mission

Should see JSON response with all your content
(If error, check browser console for details)
```

### Step 45: Test in App

```
Open: http://localhost:3000/vision-mission

Verify on page:
  ✓ Hero image displays
  ✓ "Our Direction" badge visible
  ✓ Vision & Mission sections show
  ✓ 3 action items visible
  ✓ 4 core value cards visible
  ✓ CTA buttons present
  ✓ No console errors (F12 > Console)
```

### Step 46: Check Browser Console

```
F12 → Console tab

Should show NO red errors
(Yellow warnings are OK)

If red errors:
  → Check API endpoint
  → Verify all fields filled in Strapi
  → Verify slug is "vision-mission"
```

---

## 🎉 COMPLETE!

You've successfully created Vision & Mission content in Strapi!

### Next Steps:
1. ✅ Content created and published
2. ⏳ Update App.tsx to use VisionMissionStrapi component
3. ⏳ Test on staging
4. ⏳ Deploy to production
5. ⏳ Create content for other pages

---

## ⏱️ TIME TRACKER

```
Scenes 1-2: Login & Navigation     [2 min]
Scene 3: Hero Section              [3 min]
Scene 4: Vision & Mission          [2 min]
Scene 5: Action Items              [2 min]
Scene 6: Core Values               [3 min]
Scene 7: CTA Block                 [2 min]
Scene 8: Publish & Verify          [2 min]
                                  ________
Total:                             [16 min]
```

---

## 🆘 STUCK?

1. **Field won't save?** → Make sure it's not marked as required (red asterisk)
2. **Icon dropdown empty?** → Refresh page, check Strapi permissions
3. **Slug error?** → Make sure it's unique and lowercase
4. **Component not appearing?** → Scroll in the block, might be collapsed
5. **Image won't upload?** → Try external URL instead

Check full guide: **STRAPI_CONTENT_CREATION_GUIDE.md**
