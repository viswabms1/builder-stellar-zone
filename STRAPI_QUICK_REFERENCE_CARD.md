# Strapi Content Creation - Quick Reference Card

**Keep this open while creating content in Strapi Admin**

---

## 🎯 Page Basic Fields

| Field | Value | Notes |
|-------|-------|-------|
| **title** | Vision, Mission and Values | Required |
| **slug** | vision-mission | Unique, lowercase, case-sensitive |
| **description** | Guiding DSU's transition from a legacy institution to a future-ready, AI-first university | Meta description |

---

## 🎨 Hero Section

### Hero Image
```
URL: https://www.dsu.edu.in/images/Home/vision-mission.jpg
Size: 1200x600 (16:9 aspect ratio)
```

### Hero Fields
| Field | Value |
|-------|-------|
| heading | Vision, Mission and Values |
| subtitle | Guiding DSU's transition from a legacy institution to a future-ready, AI-first university |
| description | Throwing light on the way forward |
| badgeIcon | compass |
| badgeText | Our Direction |

---

## 🔵 Section 1: Vision & Mission Block

### Add Component
- Click: `+ Add a component to Sections`
- Select: `Vision-mission`

### Vision Part
| Field | Value |
|-------|-------|
| vision_title | Vision |
| vision_description | To be a centre of excellence in education, research & training, innovation & entrepreneurship and to produce citizens with exceptional leadership qualities to serve national and global needs. |
| vision_icon | eye |

### Mission Part
| Field | Value |
|-------|-------|
| mission_title | Mission |
| mission_description | To achieve our objectives in an environment that enhances creativity, innovation and scholarly pursuits while adhering to our vision. |
| mission_icon | target |

---

## 🔷 Section 2: Action Items Block

### Add Component
- Click: `+ Add a component to Sections`
- Select: `Action-items`

### Fields
| Field | Value |
|-------|-------|
| title | How We Translate Vision into Action |
| items[0] | AI-infused curricula and interdisciplinary learning |
| items[1] | Research-driven teaching and innovation culture |
| items[2] | Strong industry, startup and societal partnerships |

---

## 🟢 Section 3: Core Values Block

### Add Component
- Click: `+ Add a component to Sections`
- Select: `Core-values`

### Header
| Field | Value |
|-------|-------|
| title | Values |
| description | The principles that guide our decisions, actions, and interactions |

### Values (Add 4)

**Value 1**
| Field | Value |
|-------|-------|
| icon | lightbulb |
| title | The Pursuit of Excellence |
| description | Continuous improvement in teaching, research, infrastructure and institutional practices. |

**Value 2**
| Field | Value |
|-------|-------|
| icon | award |
| title | Fairness |
| description | Commitment to equity, inclusiveness, and unbiased academic and administrative processes. |

**Value 3**
| Field | Value |
|-------|-------|
| icon | target |
| title | Leadership |
| description | Developing responsible leaders capable of guiding change in education, research and industry. |

**Value 4**
| Field | Value |
|-------|-------|
| icon | heart |
| title | Integrity and Transparency |
| description | Upholding ethical conduct, accountability and openness in governance and academics. |

---

## 🟠 Section 4: CTA Block

### Add Component
- Click: `+ Add a component to Sections`
- Select: `Cta-section`

### CTA Header
| Field | Value |
|-------|-------|
| title | Join Our Community |
| description | Be part of a university community shaping future-ready professionals, innovators and leaders. |

### Primary Button
| Field | Value |
|-------|-------|
| label | Apply Now |
| url | https://admissions.dsu.edu.in/ |
| type | primary |

### Secondary Button
| Field | Value |
|-------|-------|
| label | Back to About |
| url | /about |
| type | secondary |

---

## 🔤 Icon Reference

Copy exact spelling (case-sensitive):

```
compass        (for badges, "Our Direction")
target         (for Mission, Leadership)
eye            (for Vision)
heart          (for Values, Integrity)
lightbulb      (for Pursuit of Excellence)
award          (for Fairness)
```

---

## 🔵 Button Types

```
primary        (bright/main action - Apply Now)
secondary      (outline/alternative - Back to About)
```

---

## ✅ Save & Publish Checklist

As you work:
- [ ] After hero → Click "Save"
- [ ] After Vision/Mission block → Click "Save"
- [ ] After Action Items → Click "Save"
- [ ] After Core Values → Click "Save"
- [ ] After CTA block → Click "Save"

Final step:
- [ ] Click "Publish" (top right)
- [ ] Confirm in modal: "Publish"
- [ ] Wait for success notification

---

## 🧪 Verify Steps

After publishing:

```bash
# 1. Test API endpoint
http://localhost:8080/api/page/vision-mission

# 2. View in app
http://localhost:3000/vision-mission

# 3. Check browser console (F12)
# Should see NO red errors
```

---

## ⚡ Common Mistakes

| ❌ Mistake | ✅ Fix |
|-----------|--------|
| Slug is not lowercase | Change to: `vision-mission` |
| Slug has spaces | Change to: `vision-mission` |
| Icon name has typo | Check: exact spelling from Icon Reference above |
| Forgot to Save | Click "Save" button |
| Didn't Publish | Click "Publish" button after saving |
| Missing required field | Fill all fields with red asterisk (*) |

---

## 🚀 Quick Button Guide

**Top Right Buttons (While Creating):**
```
[Save]    ← Click after each section
          
[Publish] ← Click when completely done
```

**While Creating Sections:**
```
[+ Add a component to Sections]  ← Click to add each block
[+ Add an entry to items]         ← Click to add action items
[+ Add an entry to values]        ← Click to add core values
```

---

## 📍 Field Location Map

```
Page Setup (Top of form)
├── title: Vision, Mission and Values
├── slug: vision-mission
└── description: [meta description]

Hero (Expandable section)
├── image: [upload]
├── heading: Vision, Mission and Values
├── subtitle: Guiding DSU's transition...
├── description: Throwing light...
├── badgeIcon: compass
└── badgeText: Our Direction

Sections (Dynamic Zone - Add blocks here)
├── [1] Vision-Mission Block
│   ├── vision_title: Vision
│   ├── vision_description: [text]
│   ├── vision_icon: eye
│   ├── mission_title: Mission
│   ├── mission_description: [text]
│   └── mission_icon: target
├── [2] Action-Items Block
│   ├── title: How We Translate...
│   └── items: [3 items]
├── [3] Core-Values Block
│   ├── title: Values
│   ├── description: The principles...
│   └── values: [4 values]
└── [4] CTA Block
    ├── title: Join Our Community
    ├── description: Be part of...
    ├── primaryButton: Apply Now
    └── secondaryButton: Back to About
```

---

## 💾 Save Points

**Critical save points:**
1. After completing hero section
2. After adding Vision/Mission block
3. After adding Action Items
4. After adding Core Values
5. After adding CTA block
6. **Final:** Click "Publish"

**Strategy:** Save after each major block added!

---

## 🆘 If Something Goes Wrong

| Issue | Check |
|-------|-------|
| Field won't save | Is it marked required (red *)? Fill it! |
| Icon dropdown empty | Refresh page, check permissions |
| Slug "already exists" error | Change slug to something unique |
| Can't add more items | Click the "+ Add" button |
| Content not showing in app | Check API: /api/page/vision-mission |
| No console errors but blank page | Check slug matches: "vision-mission" |

---

## 🎯 Success Checklist

Final verification before considering done:

- [ ] API endpoint returns JSON
- [ ] All sections render in React component
- [ ] Hero image displays
- [ ] Badge shows "compass" icon
- [ ] Vision & Mission cards visible
- [ ] All 3 action items show
- [ ] All 4 core value cards visible with icons
- [ ] CTA buttons "Apply Now" and "Back to About" visible
- [ ] No red errors in browser console
- [ ] All links work
- [ ] Page status shows "Published" in Strapi

---

## 📱 Mobile Test

After publishing, test on mobile:

```
http://localhost:3000/vision-mission

Check on mobile (or browser DevTools):
- ✅ All content readable
- ✅ Images not cut off
- ✅ Buttons tappable
- ✅ No horizontal scroll
```

---

## 🔗 Quick Links

| Link | Purpose |
|------|---------|
| http://localhost:1337/admin | Strapi Admin |
| http://localhost:8080/api/page/vision-mission | API Endpoint |
| http://localhost:3000/vision-mission | App Page |

---

## ⏱️ Timing Guide

- Fill basic fields: 2 min
- Hero section: 3 min
- Vision/Mission: 2 min
- Action Items: 1 min
- Core Values: 3 min
- CTA section: 2 min
- Publish & verify: 2 min
- **Total: ~15 minutes**

---

**Print this page for quick reference while creating content!**

**Last line of this checklist: Click "Publish" when everything is filled!** ✅
