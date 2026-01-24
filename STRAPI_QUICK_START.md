# Strapi CMS - Quick Start Checklist

## 🚀 Vision & Mission Page - Complete Implementation

This checklist covers the entire migration of VisionMission.tsx to Strapi.

### Phase 1: Strapi Setup (30 min)

- [ ] Create Strapi instance (Cloud or self-hosted)
- [ ] Log into Strapi Admin Panel
- [ ] Create API Token
  - [ ] Settings > API Tokens
  - [ ] Create "Frontend API" token (Read-only)
  - [ ] Copy token
- [ ] Save token via DevServerControl: `STRAPI_API_TOKEN=xxx`

### Phase 2: Content Models (45 min)

Create the following in Strapi Content-Type Builder:

**Components:**
- [ ] HeroSection
- [ ] VisionMission
- [ ] CoreValue (repeatable)
- [ ] CoreValues
- [ ] ActionItems
- [ ] Button
- [ ] CTASection
- [ ] SEO (optional)

**Collection Types:**
- [ ] Page
  - [ ] Add slug field (unique)
  - [ ] Add dynamic zone with all components above

### Phase 3: Content Creation (30 min)

In Strapi Admin:

- [ ] Create new Page entry
  - [ ] Title: "Vision, Mission and Values"
  - [ ] Slug: "vision-mission"
  - [ ] Hero section with image
  - [ ] Add VisionMission block
  - [ ] Add ActionItems block
  - [ ] Add CoreValues block
  - [ ] Add CTA block
- [ ] Publish the page

### Phase 4: API Endpoints (15 min)

Files already created:
- [ ] ✅ `server/routes/strapi.ts` - API routes
- [ ] ✅ `server/index.ts` - Routes registered
- [ ] ✅ `shared/api.ts` - TypeScript types

Verify:
- [ ] Endpoints registered in Express
- [ ] STRAPI_URL in .env
- [ ] STRAPI_API_TOKEN set via DevServerControl

### Phase 5: React Component (15 min)

Files already created:
- [ ] ✅ `client/pages/VisionMissionStrapi.tsx` - New component

Update routing:
- [ ] Update `client/App.tsx` to import new component:
  ```typescript
  import VisionMission from "./pages/VisionMissionStrapi";
  ```

### Phase 6: Testing (20 min)

- [ ] Restart dev server
- [ ] Test Strapi health check:
  ```bash
  curl http://localhost:8080/api/strapi/health
  ```
- [ ] Fetch page content:
  ```bash
  curl http://localhost:8080/api/page/vision-mission
  ```
- [ ] Visit `/vision-mission` in browser
  - [ ] Hero section loads
  - [ ] All blocks render correctly
  - [ ] Icons display properly
  - [ ] Links work
  - [ ] No console errors

### Phase 7: Deployment (10 min)

- [ ] Push code changes to repo
- [ ] Set `STRAPI_API_TOKEN` in production environment
- [ ] Deploy to production
- [ ] Test on live site

---

## 📁 Files Created/Modified

### New Files
```
server/routes/strapi.ts                    ✅ Created
client/pages/VisionMissionStrapi.tsx        ✅ Created
STRAPI_IMPLEMENTATION_GUIDE.md             ✅ Created
STRAPI_QUICK_START.md                      ✅ Created
```

### Modified Files
```
shared/api.ts                              ✅ Updated with types
server/index.ts                            ✅ Routes registered
.env                                        ✅ Config added
client/App.tsx                             ⏳ Needs updating
```

---

## 🔧 API Endpoints

After deployment, these endpoints become available:

```bash
# Fetch Vision & Mission page
GET /api/page/vision-mission

# With locale support
GET /api/page/vision-mission?locale=kn

# Health check
GET /api/strapi/health

# Webhook for cache invalidation (from Strapi)
POST /api/strapi/webhook/publish
```

---

## 🎨 Strapi Field Mapping Reference

### Enumeration Values (Copy into Strapi)

**Icon Names:**
```
compass
target
eye
lightbulb
award
heart
```

**Button Types:**
```
primary
secondary
```

---

## 💡 Tips

1. **Populate Relations:** Make sure "Populate all" is set in Strapi API settings
2. **Webhook URL:** Use full domain in production (e.g., `https://dsu.edu.in/api/strapi/webhook/publish`)
3. **i18n:** To add translations, install `@strapi/plugin-i18n` and set locales in Strapi
4. **Cache:** Default TTL is 5 minutes. Adjust in `server/routes/strapi.ts` if needed
5. **Images:** Store media in Strapi or link to external URLs

---

## 🐛 Troubleshooting

| Error | Fix |
|-------|-----|
| 404 Page not found | Check slug in Strapi matches URL param exactly |
| Unauthorized | Verify API token has read permissions |
| Empty sections | Ensure components are published and populated in query |
| Icons not showing | Check icon name in Strapi matches `ICON_MAP` |
| Cache issues | Clear browser cache or wait 5 minutes for server cache |

---

## 📊 Progress Tracking

**Overall Progress:** 6/7 phases complete

```
Setup             ████████░░ 80%
Content Models    ████████░░ 80%
Content Creation  ████████░░ 80%
API Endpoints     ██████████ 100%
React Component   ██████████ 100%
Testing           ░░░░░░░░░░ 0%
Deployment        ░░░░░░░░░░ 0%
```

---

## 🎯 Next: Other Pages

After Vision & Mission is working, replicate for:

1. **About.tsx** - Similar structure
2. **History.tsx** - Text-heavy page
3. **Index.tsx** (Homepage) - More complex, multiple sections
4. Faculty pages - Convert to dynamic `/faculty/[id]`

Use this same pattern!

---

## 📞 Support

For questions:
1. Check STRAPI_IMPLEMENTATION_GUIDE.md
2. Review Strapi official docs
3. Check component types in `shared/api.ts`
4. Review component implementation in `VisionMissionStrapi.tsx`
