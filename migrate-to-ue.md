# AbbVie Universal Editor Migration Plan

## Overview

This plan evaluates migrating all 8 AbbVie brand websites from **Document Authoring (DA)** to **Universal Editor (crosswalk/xwalk)** authoring. Universal Editor provides component-based authoring with structured content models, block-level editing in a visual WYSIWYG editor, and JCR-based content storage.

---

## Universal Editor Support

Yes, Universal Editor (UE) development is supported. The key differences from DA authoring:

| Aspect | Document Authoring (DA) | Universal Editor (UE/Crosswalk) |
|--------|------------------------|-------------------------------|
| **Content format** | HTML in DA (da.live) | JCR content in AEM as a Cloud Service |
| **Authoring UI** | DA editor (da.live/edit) | Universal Editor (visual WYSIWYG) |
| **Block models** | Implicit from HTML table structure | Explicit `component-models.json` + `component-definition.json` + `component-filters.json` |
| **Content hinting** | Not needed | `data-aue-*` attributes on HTML elements |
| **Content source** | `markup:` prefix in fstab | AEM content repository |
| **Block JS/CSS** | Same | Same (blocks work identically) |
| **head.html** | Same | Needs UE script includes |
| **Deployment** | Code Sync from GitHub | Code Sync from GitHub + AEM content pipeline |

---

## What Changes for Universal Editor

### 1. New Files Required

| File | Purpose |
|------|---------|
| `component-models.json` | Defines editable fields per block (text, image, link, select, etc.) |
| `component-definition.json` | Maps block names to models, defines allowed components per container |
| `component-filters.json` | Controls which blocks are available in which sections/templates |
| `fstab.yaml` | Points to AEM content source instead of DA |

### 2. Block Code Changes

Each block needs **field hinting** attributes for UE to know what's editable:

```html
<!-- DA block (no hints needed) -->
<div class="hero">
  <div><picture>...</picture></div>
  <div><h1>Headline</h1><p>Body text</p></div>
</div>

<!-- UE block (needs data-aue-* hints) -->
<div class="hero" data-aue-resource="..." data-aue-type="component">
  <div data-aue-prop="image" data-aue-type="media"><picture>...</picture></div>
  <div>
    <h1 data-aue-prop="heading" data-aue-type="text">Headline</h1>
    <p data-aue-prop="body" data-aue-type="richtext">Body text</p>
  </div>
</div>
```

### 3. Component Models (per block)

Each block needs a model definition. Example for Hero:

```json
{
  "id": "hero",
  "fields": [
    { "component": "aem-content", "name": "image", "label": "Background Image", "valueType": "string" },
    { "component": "text", "name": "heading", "label": "Headline", "valueType": "string" },
    { "component": "richtext", "name": "body", "label": "Body Text", "valueType": "string" },
    { "component": "aem-content", "name": "ctaLink", "label": "CTA Link", "valueType": "string" },
    { "component": "text", "name": "ctaText", "label": "CTA Text", "valueType": "string" },
    { "component": "select", "name": "variant", "label": "Variant", "valueType": "string",
      "options": [
        { "name": "Default", "value": "" },
        { "name": "Wave", "value": "wave" },
        { "name": "Gradient", "value": "gradient" },
        { "name": "Clinical", "value": "clinical" },
        { "name": "Badge", "value": "badge" }
      ]
    }
  ]
}
```

### 4. What Stays the Same

- **All block JS and CSS** -- decoration logic is identical
- **Brand token system** -- `qulipta-base/`, `skyrizi-base/`, `rinvoq/`, `rinvoqhcp/` unchanged
- **`head.html` brand detection** -- same `brandMap` approach
- **`styles/styles.css`** -- global base unchanged
- **Block file structure** -- `blocks/{name}/{name}.js + .css`
- **Three-phase loading** -- eager/lazy/delayed unchanged

---

## Migration Scope: DA to UE for All 8 Sites

### Blocks Requiring Component Models

All existing + planned blocks need models:

| Block | Fields | Priority |
|-------|--------|----------|
| **Hero** | image, heading, body, ctaLink, ctaText, variant (wave/gradient/clinical/badge) | P1 |
| **Header** | brand logo, nav items (nested), CTA | P1 |
| **Footer** | link groups (nested), copyright, logo | P1 |
| **Cards** | title, description, image, link, badge (per card) | P2 |
| **Accordion/FAQ** | question, answer (repeatable) | P2 |
| **Tabs** | tab label, tab content (repeatable) | P2 |
| **Data Table** | headers, rows (nested) | P2 |
| **Video Embed** | videoUrl, thumbnail, transcript | P2 |
| **ISI** | content (richtext), expandable (boolean) | P2 |
| **Columns** | content per column (repeatable) | P2 |
| **Image + Text** | image, heading, body, ctaLink, imagePosition (left/right) | P2 |
| **Statistics/Callout** | number, label, description | P2 |
| **Blockquote** | quote, attribution, image | P2 |
| **Before/After Gallery** | beforeImage, afterImage, caption | P3 |
| **Sign-Up Form** | fields config (form definition) | P3 |
| **Doctor Finder** | specialty, zipPlaceholder | P3 |
| **Infusion Locator** | searchRadius, mapConfig | P3 |
| All others (48 total) | Per-block field definitions | P3-P4 |

### Estimated Additional Effort for UE

| Work Item | Effort |
|-----------|--------|
| Create `component-models.json` (all 48 blocks) | 3-4 days |
| Create `component-definition.json` | 1 day |
| Create `component-filters.json` (per template/brand) | 1-2 days |
| Add `data-aue-*` hints to all block JS decorators | 5-7 days |
| Create/update `fstab.yaml` for AEM content source | 0.5 day |
| Update `head.html` with UE script includes | 0.5 day |
| Testing and validation with UE | 3-5 days |
| **TOTAL additional for UE** | **~14-20 days** |

---

## Recommended Approach

### Option A: UE from the Start (Recommended)

Build all new SKYRIZI blocks with UE support from day one, then retrofit existing Qulipta/Rinvoq blocks.

**Pros:** No rework, content models designed alongside blocks
**Cons:** Slightly more upfront work per block

### Option B: DA First, Then Convert

Continue with DA for now, convert to UE later.

**Pros:** Faster initial delivery
**Cons:** Rework needed -- all blocks need model definitions and hinting added later

### Recommendation: **Option A** -- The block JS/CSS is identical either way. Adding `component-models.json` entries and `data-aue-*` attributes during initial block development adds ~30 minutes per block. Retrofitting later costs more.

---

## Updated Total Effort (All 8 Sites + UE)

| Phase | Work | Effort |
|-------|------|--------|
| Qulipta + Rinvoq (existing, DA) | Already partially done | ~20 days remaining |
| SKYRIZI theme + code setup | Base theme + brand detection | 1.5 days |
| SKYRIZI content migration | ~126 pages | 15-20 days |
| SKYRIZI new blocks | 5 new blocks | 8-10 days |
| **Universal Editor integration** | Models, definitions, filters, hinting | **14-20 days** |
| **TOTAL** | | **~59-72 days** |
