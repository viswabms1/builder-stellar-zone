# Strapi CMS Implementation Guide

## Overview

This document provides a complete guide to implementing Strapi as a headless CMS for DSU's website. We'll use the **Vision & Mission page** as a working example.

## Table of Contents

1. [Strapi Setup](#strapi-setup)
2. [Content Models](#content-models)
3. [API Integration](#api-integration)
4. [React Component Implementation](#react-component-implementation)
5. [Deployment](#deployment)
6. [Cache Invalidation](#cache-invalidation)

---

## Strapi Setup

### 1. Create Strapi Instance

**Option A: Cloud (Recommended for Production)**
```bash
# Use Strapi Cloud: https://strapi.cloud
# Quick setup, automatic backups, no server management
```

**Option B: Self-Hosted**
```bash
# Create new Strapi project
npx create-strapi-app@latest dsu-cms

# Start Strapi
cd dsu-cms
npm run develop
# Available at http://localhost:1337
```

### 2. Create API Token

1. Go to Strapi Admin: http://localhost:1337/admin
2. Navigate to **Settings > API Tokens**
3. Click **Create new API token**
4. Configure:
   - Name: `Frontend API`
   - Description: `Public API for frontend consumption`
   - Type: `Read-only` (for public pages)
   - Start date: Today
   - Duration: `Unlimited`
5. Copy the token and set it in environment:
   ```bash
   # Use DevServerControl tool to set:
   STRAPI_API_TOKEN=your_token_here
   ```

---

## Content Models

### Create Content Type: `Page`

**Steps:**
1. Go to **Content-Type Builder**
2. Click **Create new collection type**
3. Configure:
   - Name: `page`
   - Singular: `page`
   - Plural: `pages`

**Fields:**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| title | Text (Short text) | Yes | Page title |
| slug | Text (Short text) | Yes | Unique URL slug (e.g., `vision-mission`) |
| description | Text (Long text) | No | Page meta description |
| hero | Component | Yes | Hero section component |
| sections | Dynamic Zone | Yes | Content blocks (Vision/Mission, Values, CTA, etc.) |
| seo | Component | No | SEO metadata (title, description, og:image) |
| publishedAt | DateTime | No | Publication date |

### Create Component: `HeroSection`

**Type:** Component (Repeatable: No)

| Field | Type | Required |
|-------|------|----------|
| image | Media | No |
| heading | Text | Yes |
| subtitle | Text | Yes |
| description | Text (Long text) | Yes |
| badgeIcon | Enumeration | No |
| badgeText | Text | No |

**Badge Icon Options:**
```
compass, target, eye, lightbulb, award, heart
```

### Create Component: `VisionMission`

**Type:** Component (Repeatable: No)

| Field | Type | Required |
|-------|------|----------|
| vision_title | Text | Yes |
| vision_description | Rich Text | Yes |
| vision_icon | Enumeration | No |
| mission_title | Text | Yes |
| mission_description | Rich Text | Yes |
| mission_icon | Enumeration | No |

### Create Component: `CoreValue`

**Type:** Component (Repeatable: Yes)

| Field | Type | Required |
|-------|------|----------|
| icon | Enumeration | Yes |
| title | Text | Yes |
| description | Text (Long text) | Yes |

### Create Component: `CoreValues`

**Type:** Component (Repeatable: No)

| Field | Type | Required |
|-------|------|----------|
| title | Text | Yes |
| description | Text (Long text) | Yes |
| values | Component (CoreValue) | Yes |

### Create Component: `ActionItems`

**Type:** Component (Repeatable: No)

| Field | Type | Required |
|-------|------|----------|
| title | Text | Yes |
| items | Text (repeatable) | Yes |

### Create Component: `Button`

**Type:** Component (Repeatable: No)

| Field | Type | Required |
|-------|------|----------|
| label | Text | Yes |
| url | Text | Yes |
| type | Enumeration | Yes |

**Type Options:** `primary`, `secondary`

### Create Component: `CTASection`

**Type:** Component (Repeatable: No)

| Field | Type | Required |
|-------|------|----------|
| title | Text | Yes |
| description | Text (Long text) | Yes |
| primaryButton | Component (Button) | Yes |
| secondaryButton | Component (Button) | No |

### Create Dynamic Zone in `Page`: `sections`

Select these components to allow:
- VisionMission
- CoreValues
- ActionItems
- CTASection

---

## API Integration

### Server Route

**File:** `server/routes/strapi.ts`

Key features:
- ✅ Fetch page content by slug
- ✅ In-memory caching with TTL (5 minutes)
- ✅ Webhook support for cache invalidation
- ✅ Health check endpoint

**Endpoints:**

```
GET  /api/page/:slug              # Fetch page content
POST /api/strapi/webhook/publish  # Webhook for cache invalidation
GET  /api/strapi/health          # Health check
```

### Register Routes

**File:** `server/index.ts`

```typescript
import { getPageBySlug, handleStrapiWebhook, checkStrapiHealth } from "./routes/strapi";

app.get("/api/page/:slug", getPageBySlug);
app.post("/api/strapi/webhook/publish", handleStrapiWebhook);
app.get("/api/strapi/health", checkStrapiHealth);
```

---

## React Component Implementation

### New Component

**File:** `client/pages/VisionMissionStrapi.tsx`

Features:
- ✅ Fetches content from `/api/page/vision-mission`
- ✅ Dynamic block rendering via `ContentBlockRenderer`
- ✅ Loading skeleton
- ✅ Error boundary
- ✅ Icon mapping for dynamic rendering
- ✅ Locale support (add `?locale=kn` for Kannada)

### Usage

Replace old component:
```typescript
// client/App.tsx
import VisionMission from "./pages/VisionMissionStrapi";

// Keep the same route
<Route path="/vision-mission" element={<VisionMission />} />
```

---

## Strapi Configuration

### 1. Populate Relations

Add to API endpoint query:

```typescript
// In server/routes/strapi.ts
const query = new URLSearchParams({
  'filters[slug][$eq]': slug,
  'populate': '*', // Populate all relations
  'populate[hero]': '*',
  'populate[sections]': '*',
  'populate[sections.values]': '*',
});
```

### 2. Set Permissions

**Settings > Roles & Permissions > Public**

Enable for API Access:
- ✅ `Pages: find`
- ✅ `Pages: findOne`

Disable write operations:
- ❌ `Pages: create`
- ❌ `Pages: update`
- ❌ `Pages: delete`

### 3. Enable i18n (Optional)

**Strapi Cloud:**
1. Go to **Settings > Plugins**
2. Search for "Internationalization"
3. Install and configure
4. Set available locales: `en`, `kn`, `hi`

**Self-Hosted:**
```bash
npm install @strapi/plugin-i18n
```

---

## Page-by-Page Migration Plan

### Priority Order

**Phase 1 (Week 1):**
- Vision & Mission ✅ (this guide)
- About
- History

**Phase 2 (Week 2-3):**
- Homepage
- HealthSciences
- Engineering

**Phase 3 (Week 4-5):**
- Faculty pages (convert to dynamic routes)
- Law
- ComputerApplications

**Phase 4 (Week 5-6):**
- Remaining school pages
- i18n integration

### Template Structure

For each page, create:

1. **Strapi Content Type** (custom fields based on page)
2. **API Endpoint** (in `server/routes/`)
3. **React Component** (in `client/pages/`)
4. **Shared Types** (in `shared/api.ts`)

---

## Cache Invalidation

### Automatic via Webhooks

**Setup in Strapi:**

1. Go to **Settings > Webhooks**
2. Click **Add Webhook**
3. Configure:
   - **URL:** `https://your-domain.com/api/strapi/webhook/publish`
   - **Trigger on:**
     - ✅ Entry publish
     - ✅ Entry unpublish
     - ✅ Entry update
4. Click **Save**

### Manual Cache Clear

```typescript
// In your component or service
import { invalidateCache } from './routes/strapi';

// Clear specific page
invalidateCache('vision-mission');

// Or via API
fetch('/api/strapi/webhook/publish', {
  method: 'POST',
  body: JSON.stringify({
    event: 'entry.publish',
    data: { slug: 'vision-mission' }
  })
});
```

---

## Environment Setup

### Development

```bash
# .env
STRAPI_URL=http://localhost:1337
# STRAPI_API_TOKEN=xxx (set via DevServerControl)
```

### Production

```bash
# Set via hosting platform (Netlify/Vercel/etc)
STRAPI_URL=https://your-strapi-instance.com
STRAPI_API_TOKEN=your_production_token
```

---

## Testing

### Test API Endpoint

```bash
# Check health
curl http://localhost:8080/api/strapi/health

# Fetch page
curl http://localhost:8080/api/page/vision-mission

# With locale
curl "http://localhost:8080/api/page/vision-mission?locale=kn"
```

### Browser DevTools

1. Open Network tab
2. Navigate to `/vision-mission`
3. Check `/api/page/vision-mission` request
4. Verify response structure matches `PageContent` type

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| 404 from Strapi | Check slug matches exactly (case-sensitive) |
| Auth errors | Verify API token has correct permissions |
| Empty sections | Ensure components are populated in Strapi query |
| Icon not rendering | Check icon name matches `ICON_MAP` in component |
| Cache not invalidating | Verify webhook URL is publicly accessible |

---

## Next Steps

1. ✅ Set up Strapi instance
2. ✅ Create content models
3. ✅ Configure API permissions
4. ✅ Deploy server changes (routes + env vars)
5. ✅ Create page content in Strapi
6. ✅ Replace old components with Strapi versions
7. ✅ Test on staging
8. ✅ Deploy to production

---

## Resources

- [Strapi Docs](https://docs.strapi.io)
- [Strapi API Documentation](https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html)
- [Headless CMS Best Practices](https://strapi.io/resource-center)
- [API Token Authentication](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/optional/api-tokens.html)
