# Strapi Vision & Mission Page - Content Entry Form

**Instructions:** Print this form and fill it out before entering data into Strapi, or use it as a reference while creating content.

---

## 🔴 REQUIRED FIELDS (Must be filled)

### Page Basic Fields

```
Title: _______________________________________________

Slug (URL identifier, must be unique):
vision-mission
(MUST NOT CHANGE)

Description (meta description):
________________________________________________
________________________________________________
```

---

## 🟠 HERO SECTION

### Hero Image
- [ ] Upload image OR
- [ ] Use URL: _____________________________________

**Recommended image:**
- Size: 1200x600 pixels (16:9 aspect ratio)
- File: vision-mission.jpg

### Badge (Top-right corner)
```
Badge Icon:  [✓ compass  ] [ target ] [ eye ] [ heart ]

Badge Text:
Our Direction
```

### Hero Heading
```
Vision, Mission and Values
```

### Hero Subtitle
```
Guiding DSU's transition from a legacy institution 
to a future-ready, AI-first university
```

### Hero Description
```
Throwing light on the way forward
```

---

## 🔵 CONTENT SECTIONS

### SECTION 1: Vision & Mission Block

#### Vision Part
```
Title:
Vision

Description:
To be a centre of excellence in education, research 
& training, innovation & entrepreneurship and to 
produce citizens with exceptional leadership qualities 
to serve national and global needs.

Icon: [✓ eye  ] [ target ] [ compass ] [ heart ]
```

#### Mission Part
```
Title:
Mission

Description:
To achieve our objectives in an environment that 
enhances creativity, innovation and scholarly pursuits 
while adhering to our vision.

Icon: [ eye ] [✓ target ] [ compass ] [ heart ]
```

---

### SECTION 2: Action Items Block

```
Title:
How We Translate Vision into Action

Items (one per line):
□ AI-infused curricula and interdisciplinary learning
□ Research-driven teaching and innovation culture
□ Strong industry, startup and societal partnerships
```

---

### SECTION 3: Core Values Block

```
Title:
Values

Description:
The principles that guide our decisions, actions, 
and interactions

VALUES (4 total):

VALUE 1:
Icon: [✓ lightbulb ] [ award ] [ target ] [ heart ]
Title: The Pursuit of Excellence
Description: Continuous improvement in teaching, 
research, infrastructure and institutional practices.

VALUE 2:
Icon: [ lightbulb ] [✓ award ] [ target ] [ heart ]
Title: Fairness
Description: Commitment to equity, inclusiveness, 
and unbiased academic and administrative processes.

VALUE 3:
Icon: [ lightbulb ] [ award ] [✓ target ] [ heart ]
Title: Leadership
Description: Developing responsible leaders capable 
of guiding change in education, research and industry.

VALUE 4:
Icon: [ lightbulb ] [ award ] [ target ] [✓ heart ]
Title: Integrity and Transparency
Description: Upholding ethical conduct, accountability 
and openness in governance and academics.
```

---

### SECTION 4: CTA (Call To Action) Block

```
Title:
Join Our Community

Description:
Be part of a university community shaping future-ready 
professionals, innovators and leaders.

PRIMARY BUTTON:
Label: Apply Now
URL: https://admissions.dsu.edu.in/

SECONDARY BUTTON:
Label: Back to About
URL: /about
```

---

## 📝 OPTIONAL FIELDS

### SEO Metadata (Optional but Recommended)

```
Meta Title:
Vision, Mission and Values | Dayananda Sagar University

Meta Description:
Learn about DSU's vision, mission and core values 
guiding our journey as India's AI-first university.

Keywords:
vision, mission, values, excellence, innovation, leadership

OG Image (for social media sharing):
[Upload or link to image URL]
```

---

## ✅ ENTRY CHECKLIST

Before publishing, verify:

- [ ] Title filled: "Vision, Mission and Values"
- [ ] Slug: "vision-mission" (exact match)
- [ ] Hero image uploaded or linked
- [ ] Badge shows compass icon
- [ ] Vision title & description filled
- [ ] Mission title & description filled
- [ ] All 3 action items added
- [ ] Core Values title & description filled
- [ ] All 4 core values added with icons
- [ ] CTA title & description filled
- [ ] Both buttons (Apply Now, Back to About) added
- [ ] All required fields have content (red asterisks)
- [ ] No spelling errors in key fields
- [ ] Ready to publish? YES / NO

---

## 🎨 FIELD REFERENCE

### Icon Options (Use exact names)
```
compass        (for "Our Direction")
target         (for "Target", "Mission", "Leadership")
eye            (for "Vision")
heart          (for "Values", "Integrity")
lightbulb      (for "The Pursuit of Excellence")
award          (for "Fairness")
```

### Button Types
```
primary        (bright/main action)
secondary      (outline/alternative action)
```

### Component Names (in Strapi)
```
vision-mission      (for Vision & Mission block)
action-items        (for Action Items block)
core-values         (for Core Values block)
cta-section         (for CTA block)
```

---

## 📸 VISUAL FIELD MAP

```
PAGE VIEW IN STRAPI ADMIN:

┌─────────────────────────────────────────┐
│  HERO SECTION (Top of page)            │
│  ┌───────────────────────────────────┐  │
│  │ Image                             │  │
│  └───────────────────────────────────┘  │
│  [compass] Our Direction (badge)        │
│  Vision, Mission and Values (heading)   │
│  Subtitle text...                       │
│  Description text...                    │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  SECTION 1: Vision & Mission           │
│  [Vision Card] [Mission Card]          │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  SECTION 2: Action Items               │
│  How We Translate Vision into Action   │
│  • Item 1                              │
│  • Item 2                              │
│  • Item 3                              │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  SECTION 3: Core Values                │
│  [Value 1] [Value 2]                   │
│  [Value 3] [Value 4]                   │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  SECTION 4: Call to Action             │
│  [Apply Now Button] [Back to About]    │
└─────────────────────────────────────────┘
```

---

## 🚀 READY TO START?

1. Print this form (or keep it open)
2. Open Strapi Admin: http://localhost:1337/admin
3. Go to Content Manager > Page > Create new entry
4. Follow this form to fill in fields
5. Save draft after each section
6. Publish when complete
7. Test at: http://localhost:3000/vision-mission

---

## 💾 BACKUP COPY

Keep a copy of this filled form for reference:

```
Filled by: _________________________
Date: ______________________________
Strapi Instance: ___________________
Status: [ ] Draft [ ] Published
Last Updated: _______________________
```

---

## 🔗 RELATED DOCUMENTS

- **STRAPI_CONTENT_CREATION_GUIDE.md** - Detailed step-by-step with screenshots
- **STRAPI_VISION_MISSION_DATA.json** - Example API response
- **STRAPI_IMPLEMENTATION_GUIDE.md** - Full technical guide
- **STRAPI_QUICK_START.md** - Quick reference

---

**Questions?** Check the detailed guide or Strapi docs: https://docs.strapi.io
