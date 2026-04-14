# Site Discovery & Block Analysis: Qulipta, Qulipta HCP, Rinvoq, and Rinvoq HCP

## Overview

Discovery of all pages, layout templates, and block patterns across four AbbVie pharmaceutical websites (two patient-facing DTC and two HCP sites). This document catalogs **~178 HTML pages** and identifies **~41 unique block types** with variants, complexity ratings, and effort estimates.

---

## Cross-Site Page Inventory

| Site | HTML Pages | Unique Templates | PDFs/Docs |
|------|-----------|-----------------|-----------|
| **qulipta.com** | 13 | ~10 | 0 |
| **quliptahcp.com** | 10 | ~8 | 3 |
| **rinvoq.com** | ~114 | ~18 | 0 |
| **rinvoqhcp.com** | ~41 | ~11 | ~25 |
| **TOTAL** | **~178** | — | **~28** |

---

## Complete Block Catalog

### Complexity & Effort Legend

| Rating | Description | Effort (per block) |
|--------|------------|-------------------|
| **Low** | Static content, minimal JS, CSS-only styling | 0.5–1 day |
| **Medium** | DOM manipulation, responsive behavior, moderate interactivity | 1–2 days |
| **High** | Complex interactivity, state management, multiple variants, API integration | 2–4 days |
| **Very High** | Third-party integration, heavy JS, animation, multi-state UI | 4–6 days |

---

### 1. Navigation & Chrome Blocks

| # | Block Name | Variants | Sites Used | Complexity | Effort | Description |
|---|-----------|----------|-----------|------------|--------|-------------|
| 1 | **Header / Navigation** | 4 variants | All 4 sites | High | 3–4 days | Sticky header with logo, mega-menu dropdowns, mobile hamburger, utility links (phone, search, sign-up). DTC variants have condition selectors; HCP variants have specialty selectors and sample request CTAs. |
| 2 | **Footer** | 4 variants | All 4 sites | Medium | 1–2 days | Multi-column footer with legal links, social media icons, AbbVie branding, copyright, promo codes. DTC has social icons; HCP has prescribing info links. |
| 3 | **Sticky Utility Bar** | 2 variants | All 4 sites | Medium | 1 day | Persistent top/bottom bar with phone number, savings CTA, sample request (HCP). Opacity toggles based on ISI visibility. |
| 4 | **Breadcrumb / Section Nav** | 2 variants | rinvoq.com, rinvoqhcp.com | Low | 0.5 day | Sub-navigation within indication sections. Horizontal pill-style or tab-style links. |

### 2. Hero Blocks

| # | Block Name | Variants | Sites Used | Complexity | Effort | Description |
|---|-----------|----------|-----------|------------|--------|-------------|
| 5 | **Hero (Full-width Image)** | 6+ variants | All 4 sites | Medium | 2 days | Full-width responsive background image with headline, subhead, CTA button. Responsive image sets (desktop/tablet/mobile). Variants: with wave SVG divider (Qulipta), with badge icon (Rinvoq HCP), with gradient overlay, text-only hero. |
| 6 | **Hero (Carousel/Rotating)** | 1 variant | rinvoq.com | High | 3 days | Auto-rotating hero banners with multiple condition-specific slides, dot indicators, swipe support. |
| 7 | **Hero (Video)** | 1 variant | rinvoq.com | Medium | 1.5 days | Hero with embedded video player and play button overlay. |

### 3. Content & Text Blocks

| # | Block Name | Variants | Sites Used | Complexity | Effort | Description |
|---|-----------|----------|-----------|------------|--------|-------------|
| 8 | **Text Block (Default Content)** | 3 variants | All 4 sites | Low | 0.5 day | Standard rich text with headings, paragraphs, lists, links. Variants: centered, left-aligned, with background color. |
| 9 | **Columns (Multi-column Text)** | 3 variants | All 4 sites | Low | 0.5 day | 2-column or 3-column text layouts. Variants: equal columns, icon+text columns, image+text columns. |
| 10 | **Image + Text (50/50)** | 4 variants | All 4 sites | Low | 1 day | Side-by-side image and text. Variants: image-left, image-right, with CTA button, with quote overlay. Used for product info, patient spotlights, savings card promos. |
| 11 | **Blockquote / Testimonial** | 2 variants | All 4 sites | Low | 0.5 day | Patient or doctor quote with attribution, photo, and disclaimer. Variants: with image, text-only. |
| 12 | **Statistics / Callout** | 3 variants | All 4 sites | Low | 1 day | Highlighted percentage or number with supporting text. Variants: single stat, dual stat side-by-side, stat with chart icon. Used heavily in efficacy sections. |

### 4. Card & Grid Blocks

| # | Block Name | Variants | Sites Used | Complexity | Effort | Description |
|---|-----------|----------|-----------|------------|--------|-------------|
| 13 | **Cards (Standard)** | 5 variants | All 4 sites | Medium | 2 days | Grid of clickable cards with icon/image, title, description, CTA. Variants: 2-col, 3-col, with badge ("NOW APPROVED"), icon-only, image-card. Used for indication selectors, related content, resources. |
| 14 | **Cards (Patient Stories)** | 2 variants | qulipta.com, rinvoq.com | Medium | 1.5 days | Story cards with patient photo, name, quote excerpt, video link, disclaimer. Variants: grid layout, carousel layout. |
| 15 | **Cards (Resource/Download)** | 2 variants | quliptahcp.com, rinvoqhcp.com | Medium | 1 day | Download cards with PDF icon, title, description, download button. Variants: list view, grid view. |
| 16 | **Cards (Support Services)** | 1 variant | rinvoq.com | Medium | 1 day | Three-column service cards with icon, role title (Nurse Ambassador, Resource Specialist, Insurance Specialist), description. |

### 5. Interactive & Data Blocks

| # | Block Name | Variants | Sites Used | Complexity | Effort | Description |
|---|-----------|----------|-----------|------------|--------|-------------|
| 17 | **Tabs** | 3 variants | All 4 sites | High | 2–3 days | Horizontal tab switcher revealing different content panels. Variants: efficacy data tabs (HCP), dosing/lab monitoring tabs (HCP), results timeframe tabs (DTC). Contains charts, tables, and text. |
| 18 | **Accordion / FAQ** | 2 variants | All 4 sites | Medium | 1 day | Expand/collapse sections. Variants: FAQ Q&A format (DTC), study details collapsible (HCP). |
| 19 | **Data Table** | 4 variants | All 4 sites | Medium | 2 days | Clinical data tables. Variants: adverse events comparison table, lab monitoring thresholds table, dosing table, insurance cost comparison table. Responsive with horizontal scroll on mobile. |
| 20 | **Chart / Data Visualization** | 3 variants | rinvoq.com, rinvoqhcp.com | Medium | 1.5 days | Clinical results charts (delivered as responsive images with alt text). Variants: bar chart, line chart over time, comparison chart. Interactive toggle between timeframes on DTC. |
| 21 | **Interactive Decision Tree** | 1 variant | qulipta.com | Very High | 4–5 days | Branching selector ("What are you currently taking?") with 5 options revealing contextual messaging and CTAs. Complex state management and conditional content display. |
| 22 | **Quick Poll / Survey** | 1 variant | rinvoq.com | High | 2–3 days | Single-question poll with radio options, conditional response messaging, and contextual CTA based on answer. |
| 23 | **Interactive Quiz / Assessment** | 1 variant | rinvoq.com | High | 3 days | Multi-question assessment tool (e.g., RAPID3-RA, appointment pre-check, eczema burden quiz). Form with scoring logic and result display. |

### 6. Media Blocks

| # | Block Name | Variants | Sites Used | Complexity | Effort | Description |
|---|-----------|----------|-----------|------------|--------|-------------|
| 24 | **Video Embed** | 2 variants | All 4 sites | Medium | 1 day | Embedded video player with thumbnail, play button, transcript link. Variants: inline video, hero-overlay video. |
| 25 | **Before/After Gallery** | 1 variant | rinvoq.com (AD) | High | 2–3 days | Clinical photo comparison gallery with slider or toggle between before and after images. Disclaimers and study context. |
| 26 | **Image Gallery / Carousel** | 1 variant | rinvoq.com | Medium | 1.5 days | Horizontal scroll or swipeable image carousel for patient photos or product images. |

### 7. Form & Conversion Blocks

| # | Block Name | Variants | Sites Used | Complexity | Effort | Description |
|---|-----------|----------|-----------|------------|--------|-------------|
| 27 | **Sign-Up / Registration Form** | 2 variants | qulipta.com, rinvoq.com | High | 2–3 days | Multi-field enrollment form for savings program or email newsletter. Variants: full enrollment form, simple email capture. |
| 28 | **Doctor Finder / Locator** | 2 variants | qulipta.com, rinvoq.com | Very High | 4–5 days | Embedded provider search tool (Doctor.com integration). ZIP/location input, results display, map or list view. Variants: dermatologist, rheumatologist, gastroenterologist finders. |
| 29 | **Contact a Rep Form** | 1 variant | rinvoqhcp.com | Medium | 1.5 days | HCP contact request form with fields for specialty, institution, request type. |

### 8. Safety & Compliance Blocks

| # | Block Name | Variants | Sites Used | Complexity | Effort | Description |
|---|-----------|----------|-----------|------------|--------|-------------|
| 30 | **ISI (Important Safety Information)** | 2 variants | All 4 sites | Medium | 1.5 days | Full safety disclosure section with structured headings, bullet lists, bold warnings. Variants: collapsible/expandable (DTC), always-visible (HCP). Includes boxed warnings on HCP sites. |
| 31 | **Floating ISI Bar** | 1 variant | All 4 sites | Medium | 1 day | Sticky bottom bar with abbreviated safety message and "See Full ISI" link. Controls opacity of other sticky elements. |
| 32 | **Indication / Uses Block** | 2 variants | rinvoq.com, rinvoqhcp.com | Low | 0.5 day | Structured list of approved indications organized by patient population (adults, children). |

### 9. Modal & Overlay Blocks

| # | Block Name | Variants | Sites Used | Complexity | Effort | Description |
|---|-----------|----------|-----------|------------|--------|-------------|
| 33 | **External Link Modal** | 1 variant | All 4 sites | Medium | 1 day | "You are leaving this site" disclaimer modal with Yes/No buttons. Triggered on all external links. |
| 34 | **HCP Gate Modal** | 1 variant | DTC sites (links to HCP) | Medium | 1 day | Professional verification interstitial ("Are you a healthcare professional?") before accessing HCP content. |
| 35 | **Telemedicine Modal** | 1 variant | qulipta.com | Medium | 1 day | Three-step process modal (questionnaire → provider → prescription) with disclaimer and external link to UpScript. |

### 10. Specialty / One-Off Blocks

| # | Block Name | Variants | Sites Used | Complexity | Effort | Description |
|---|-----------|----------|-----------|------------|--------|-------------|
| 36 | **Glossary** | 1 variant | rinvoq.com (UC, CD) | Low | 1 day | Alphabetical/categorical term definitions with anchor navigation and PDF download option. |
| 37 | **Recipes** | 1 variant | rinvoq.com (UC, CD) | Low | 1 day | Recipe content cards with ingredients, instructions, dietary info. |
| 38 | **Podcast Player** | 1 variant | rinvoq.com (UC) | Medium | 1.5 days | Audio player embed with episode list, descriptions, transcript links. |
| 39 | **App Download** | 1 variant | rinvoq.com | Low | 0.5 day | App Store / Google Play badge links with app description and screenshots. |
| 40 | **Community / Share Story** | 1 variant | rinvoq.com | Low | 0.5 day | CTA block with email and phone for SPEAK Network story submission. |
| 41 | **Anchor Navigation (Jump Links)** | 1 variant | All 4 sites | Low | 0.5 day | In-page anchor link list for jumping to sections (glossary categories, safety sections, dosing vs labs). |
| 42 | **Discussion Guide (Printable)** | 1 variant | qulipta.com, rinvoq.com | Medium | 1 day | Interactive checklist/form that generates a printable discussion guide for doctor visits. |
| 43 | **Savings Card Promo** | 2 variants | All 4 sites | Low | 0.5 day | Savings card image with "$0 a month" messaging and eligibility disclaimers. Variants: inline block, hero-style banner. |

---

## Block Summary by Complexity

| Complexity | Block Count | Total Variants | Est. Effort Range |
|-----------|------------|---------------|-------------------|
| **Low** | 13 blocks | 20 variants | 7–9 days |
| **Medium** | 18 blocks | 30 variants | 20–28 days |
| **High** | 8 blocks | 13 variants | 18–26 days |
| **Very High** | 2 blocks | 2 variants | 8–10 days |
| **TOTAL** | **41 blocks** | **~65 variants** | **53–73 days** |

---

## Block Reuse Matrix

| Block | qulipta.com | quliptahcp.com | rinvoq.com | rinvoqhcp.com |
|-------|:-----------:|:--------------:|:----------:|:-------------:|
| Header/Nav | X | X | X | X |
| Footer | X | X | X | X |
| Hero (Full-width) | X | X | X | X |
| Text Block | X | X | X | X |
| Columns | X | X | X | X |
| Image + Text | X | X | X | X |
| Cards (Standard) | X | X | X | X |
| Tabs | X | X | X | X |
| Accordion/FAQ | X | X | X | X |
| Video Embed | X | X | X | X |
| ISI | X | X | X | X |
| Floating ISI Bar | X | X | X | X |
| External Link Modal | X | X | X | X |
| Sticky Utility Bar | X | X | X | X |
| Savings Card Promo | X | X | X | X |
| Data Table | — | X | X | X |
| Statistics/Callout | X | X | X | X |
| Blockquote | X | — | X | X |
| Sign-Up Form | X | — | X | — |
| Doctor Finder | X | — | X | — |
| Patient Story Cards | X | — | X | — |
| Decision Tree | X | — | — | — |
| Quick Poll | — | — | X | — |
| Quiz/Assessment | — | — | X | — |
| Before/After Gallery | — | — | X | — |
| Glossary | — | — | X | — |
| Recipes | — | — | X | — |
| Podcast | — | — | X | — |
| Contact Rep Form | — | — | — | X |
| Download Cards | — | X | — | X |
| Chart/Visualization | — | — | X | X |

---

## Recommended Implementation Priority

### Phase 1: Foundation (shared across all sites) — ~15 days

- Header/Navigation (4 variants)
- Footer (4 variants)
- Hero (Full-width, 6 variants)
- Text Block / Default Content
- Columns
- Image + Text (50/50)
- ISI + Floating ISI Bar
- External Link Modal
- Sticky Utility Bar

### Phase 2: Core Content Blocks — ~15 days

- Cards (Standard + Patient Stories + Downloads)
- Tabs
- Accordion/FAQ
- Video Embed
- Statistics/Callout
- Blockquote/Testimonial
- Data Tables
- Savings Card Promo
- Anchor Navigation

### Phase 3: Interactive & Conversion — ~18 days

- Sign-Up / Registration Form
- Doctor Finder / Locator
- Chart / Data Visualization
- Quick Poll / Survey
- Quiz / Assessment Tool
- Discussion Guide (Printable)
- HCP Gate Modal

### Phase 4: Specialty Blocks — ~12 days

- Hero Carousel
- Interactive Decision Tree
- Before/After Gallery
- Glossary
- Recipes
- Podcast Player
- App Download
- Community / Share Story
- Contact a Rep Form
- Telemedicine Modal

---

## Site-Level Page Inventory

### qulipta.com (13 pages)

| # | URL | Template |
|---|-----|---------|
| 1 | `/` | Homepage |
| 2 | `/why-qulipta` | Product Info |
| 3 | `/migraine-education` | Education |
| 4 | `/cost` | Cost / Savings |
| 5 | `/patient-stories` | Patient Stories Hub |
| 6 | `/patient-stories/kelsi-video-transcript` | Video Transcript |
| 7 | `/patient-stories/latoya-video-transcript` | Video Transcript |
| 8 | `/savings-support/qulipta-complete-savings-program` | Savings Program |
| 9 | `/savings-support/qulipta-complete-savings-program/sign-up` | Sign-Up Form |
| 10 | `/savings-support/qulipta-discussion-guide` | Discussion Guide |
| 11 | `/savings-support/frequently-asked-questions` | FAQ |
| 12 | `/savings-support/find-a-doctor` | Doctor Finder |
| 13 | `/savings-support/additional-resources` | Resources |

### quliptahcp.com (10 pages)

| # | URL | Template |
|---|-----|---------|
| 1 | `/` | HCP Homepage |
| 2 | `/continuous-control` | Efficacy Data |
| 3 | `/powerful-reductions` | Efficacy Data |
| 4 | `/moa` | Mechanism of Action |
| 5 | `/dosing` | Dosing Info |
| 6 | `/safety` | Safety Data |
| 7 | `/patient-stories` | Patient Stories |
| 8 | `/support-and-savings/access-and-support` | Access & Support |
| 9 | `/support-and-savings/downloadable-resources` | Resources |

### rinvoq.com (~114 pages)

**Global Pages (15)**

| # | URL | Template |
|---|-----|---------|
| 1 | `/` | Homepage |
| 2 | `/cost` | Cost / Savings |
| 3 | `/side-effects` | Side Effects |
| 4 | `/sign-up` | Sign-Up Form |
| 5 | `/search-results` | Search Results |
| 6 | `/covid19` | Info Page |
| 7 | `/resources/rinvoq-complete` | Support Program |
| 8 | `/resources/save-on-rinvoq-costs` | Savings |
| 9 | `/resources/rinvoq-insurance-explained` | Insurance Guide |
| 10 | `/resources/preparing-for-rinvoq-treatment` | Treatment Prep |
| 11 | `/resources/building-rinvoq-medication-routine` | Medication Routine |
| 12 | `/resources/rinvoq-nurse-ambassador` | Nurse Ambassador |
| 13 | `/resources/caregiver-resources` | Caregiver Resources |
| 14 | `/resources/living-with-chronic-conditions` | Living With Conditions |
| 15 | `/resources/rinvoq-complete-app` | App Info |

**Per-Indication Pages (~99 across 9 indications)**

| Indication | Pages | Sub-pages |
|-----------|-------|-----------|
| Atopic Dermatitis | 13 | Landing, Education (4), Results (5), Product Info, FAQ, Sitemap |
| Rheumatoid Arthritis | 12 | Landing, Education (3), Product Info (2), Results, Stories, FAQ, Doctor (3), Sitemap |
| Psoriatic Arthritis | 11 | Landing, Treatment (2), Product Info (2), Results, Stories, Doctor (3), Sitemap |
| Ankylosing Spondylitis | 12 | Landing, Education, Journey, Product Info, Results, Stories, Getting Started, Doctor (3), Visit Prep, Sitemap |
| nr-axSpA | 11 | Landing, Education, Goals, Product Info, Results, Stories, Getting Started, Doctor (3), Sitemap |
| Ulcerative Colitis | 16 | Landing, Education (4), Product Info (2), MOA, Results, Stories, Taking, Doctor (3), Glossary, Recipes, Sitemap |
| Crohn's Disease | 14 | Landing, Education (2), Product Info (2), MOA, Results, Taking, Stories, Doctor (3), Glossary, Recipes, Sitemap |
| Giant Cell Arteritis | 7 | Landing, Education, Treatment, Product Info, Results, Doctor, Sitemap |
| pJIA/jPsA | 2 | Landing, Sitemap |

### rinvoqhcp.com (~41 pages)

| Section | Pages |
|---------|-------|
| Global | 10 (Home, Search, Sitemap, Safety, Dosing, Support, Resources, Contact, Access, MOA) |
| Rheumatology | 12 (Landing, 3 indications, 4 efficacy, safety, dosing, access, sitemap) |
| Dermatology | 9 (Landing, indication, efficacy, comparator, real patients, safety, dosing, access, sitemap) |
| Gastroenterology | 10 (Landing, 2 indications, 2 efficacy, safety, dosing, access, insights, sitemap) |
