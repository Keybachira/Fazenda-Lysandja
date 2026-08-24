# Fazenda Lysandja — Cinematic Safari Editorial Design

## Overview

Upgrade the Fazenda Lysandja website's artistic direction to a **cinematic safari editorial** aesthetic — think luxury safari lodge meets high-end coffee table book. The current design has strong bones (parallax, transitions, scroll reveals) but the typography, color usage, textures, and hero section need to feel more dramatic, more cinematic, and more premium.

## Guiding References

- **Singita** luxury safari lodges (dramatic photography + bold serif type)
- **AndBeyond** African travel brand (editorial layout, warm tones)
- **Kinfolk / Cereal Magazine** (editorial whitespace, oversized type)
- **Aman Resorts** (cinematic dark sections, restrained luxury)

---

## 1. Typography Overhaul

### Current State
- Hero title: `clamp(44px, 9vw, 148px)` — too restrained for cinematic impact
- Section headings: 40–72px — undersized for editorial feel
- All-caps everywhere — feels corporate, not editorial
- Line-height: 0.82–0.85 — tight but not dramatic enough

### Target State

| Element | Current | New |
|---------|---------|-----|
| Hero title | `clamp(44px, 9vw, 148px)` | `clamp(56px, 11vw, 200px)` |
| Hero line-height | 0.82 | 0.78 |
| Section headings | 40–72px | `clamp(48px, 7vw, 120px)` |
| Section line-height | 0.85–0.9 | 0.82 |
| Kicker labels | 11px | 12px, tracking 0.32em |
| Body text | 14–18px | 16–18px, leading 7–8 |
| CTA links | 11px uppercase | 12px uppercase, bolder weight |

### Typography Rules
- **Hero title**: Always use `text-[clamp(56px,11vw,200px)]` with `leading-[0.78]` and `tracking-[-0.05em]`
- **Section headings**: Use `text-[clamp(48px,7vw,120px)]` with `leading-[0.82]`
- **Mixed case for editorial feel**: Keep uppercase for kickers/labels but use **title case** for section headings where appropriate (e.g., "A nossa terra" instead of "A NOSSA TERRA")
- **Emphasis words**: Rosa-colored words in headings get `font-[300]` italic weight for contrast
- **Letter-spacing**: Tighter on display type (`-0.05em` to `-0.06em`), wider on labels (`0.28em–0.32em`)

---

## 2. Color & Palette Refinement

### Current State
- Rosa is used as section backgrounds (CTA Final, rosa blocks)
- Verde backgrounds dominate dark sections
- Madeira gold is underused
- No warm dark neutral — only pure blacks and greens

### Target State

**New CSS custom properties to add:**

```css
/* Warm dark — replaces pure black overlays */
--lys-dark: #0A0F0D;
--lys-dark-warm: #141210;

/* Sepia overlay for cinematic images */
--lys-sepia: rgba(10, 15, 13, 0.55);

/* Film grain opacity tokens */
--lys-grain-opacity: 0.04;
--lys-grain-dark: 0.06;
```

**Color usage changes:**

| Element | Current | New |
|---------|---------|-----|
| Hero overlay | `from-[var(--lys-verde)] via-35%` | `from-[var(--lys-dark)] via-50%` — darker, more cinematic |
| Dark section backgrounds | `var(--lys-verde)` only | Alternate between `var(--lys-verde)` and `var(--lys-dark-warm)` |
| Rosa as accent | Section backgrounds | **Text highlights only** — no more rosa background sections |
| Madeira gold | Sparse | **Used for kicker labels, accent lines, decorative elements** |
| Image overlays | Light gradients | **Darker, warmer gradients** — cinematic shadow feel |

**Hero image color treatment:**
- Add sepia-toned overlay: `bg-gradient-to-t from-[#0A0F0D] via-[#0A0F0D]/50 to-transparent`
- Add warm color wash: `mix-blend-multiply` with a subtle warm tone
- Reduce original image saturation slightly via CSS filter: `filter: saturate(0.85) contrast(1.05)`

---

## 3. Hero Section Redesign

### Current State
- Standard full-bleed image with gradient overlay
- Title bottom-aligned
- Simple scroll indicator (line + text + arrow)
- Parallax on background image

### Target State

**Layout changes:**
- Keep full-bleed, but make the gradient overlay **dramatically darker** — 70–80% opacity at bottom
- Title positioned at bottom 15% of viewport (more breathing room)
- Add a **subtle warm vignette** effect via radial gradient overlay
- Hero meta bar (top) uses madeira gold instead of white/60

**Typography in hero:**
- "Fazenda Lysandja" kicker in madeira gold with wider tracking
- Main title: "Onde a terra" / "ganha propósito." — each line on its own, massive type
- "propósito" in rosa with `font-[300]` italic — the emotional anchor
- Description text: slightly larger (14px), warmer white (white/75)

**Scroll indicator refinement:**
- Remove the arrow (↓)
- Keep: thin line (w-12, bg-white/25) + "Scroll" text (10px, tracking 0.3em)
- Add subtle CSS pulse animation: opacity oscillates between 0.4 and 0.8 over 2s
- Fades out completely on first 80px of scroll

**New element — editorial timestamp:**
- Small "EST. 2024" or year marker near the top, in madeira gold
- Adds editorial/magazine feel

---

## 4. Section Styling Enhancements

### Dark Sections (02 — Terra, 05 — Impacto)
- Background: alternate between `var(--lys-verde)` and `var(--lys-dark-warm)` for variety
- Add subtle grain overlay: `opacity: 0.04` with fractalNoise SVG
- Section number (01, 02...) in `text-[120px]` at `opacity: 0.05` — large watermark effect
- Accent lines: 1px madeira gold lines as section dividers between major blocks

### Light Sections (01 — Manifesto, 03 — Produção, 04 — Pessoas)
- Background: `var(--lys-paper)` with subtle warm tint
- Add paper/linen texture via CSS (very subtle, `opacity: 0.02`)
- Section numbers: `text-[var(--lys-verde)]/[0.06]` — visible but recessive

### CTA Final Section
- Remove rosa background — replace with `var(--lys-verde)` dark
- Keep rosa as accent color on buttons and text highlights only
- Background image overlay: darker, more cinematic
- Title: "Descubra a Lysandja." in massive white type
- Buttons: rosa filled + white outlined (keep current pattern)

### Image Cards
- Border radius: keep `rounded-[18px]` to `rounded-[20px]`
- Add subtle warm shadow: `shadow-[0_8px_40px_-12px_rgba(10,15,13,0.25)]`
- Image hover: `scale(1.03)` with `duration-700` (keep current)
- Caption overlays: darker gradient, text slightly larger

---

## 5. Texture & Grain System

### Film Grain (CSS-based, no images)
Apply to all dark sections via a reusable utility class:

```css
.grain-dark::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,..."); /* existing fractalNoise */
}
```

- Hero: `opacity: 0.06` (visible but subtle)
- Dark sections: `opacity: 0.04`
- Light sections: `opacity: 0.02` or omit
- CTA section: `opacity: 0.03`

### Paper Texture (light sections)
```css
.paper-texture::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.015;
  background-image: url("data:image/svg+xml,..."); /* finer noise */
}
```

### Warm Vignette (hero only)
```css
.vignette::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(10,15,13,0.4) 100%);
}
```

---

## 6. Navigation Refinement

### Current State
- Clean, minimal, working well
- Scrolled state: paper background with blur
- Active indicator: rosa underline

### Changes
- **Scrolled state**: Add subtle bottom border in madeira gold (`border-[var(--lys-madeira)]/20`) instead of line color
- **Logo**: Consider adding a subtle warm filter when on dark sections (invert logic based on scroll position — optional enhancement)
- **CTA button "Contactar"**: Keep verde background, but on hover transition to madeira gold instead of verde-mid
- **Mobile menu**: Keep current — it's well-designed

---

## 7. Footer Enhancement

### Current State
- Verde background, editorial layout, giant wordmark
- Content reveals on scroll, wordmark parallax

### Changes
- **Background**: Change to `var(--lys-dark-warm)` for deeper feel
- **Wordmark**: Increase opacity from `0.04` to `0.06` for more presence
- **Top accent line**: Add a 1px madeira gold line above the footer (instead of just border-t white/10)
- **Contact email**: Highlight in madeira gold on hover

---

## 8. Section Divider Lines

Add full-width editorial hairlines between major sections:

```html
<div className="container-lys py-0">
  <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--lys-madeira)]/30 to-transparent" />
</div>
```

Place between:
- Section 01 → Section 02
- Section 04 → Section 05
- Section 05 → CTA Final

---

## 9. Implementation Steps

### Step 1: Design Tokens (globals.css)
- Add `--lys-dark`, `--lys-dark-warm`, `--lys-sepia` custom properties
- Add grain utility classes (`.grain-dark`, `.grain-light`, `.vignette`)
- Add paper texture utility (`.paper-texture`)
- Update `@theme` block with new tokens

### Step 2: Hero Redesign
- Darken gradient overlay (from-50% to transparent)
- Increase title size to `clamp(56px, 11vw, 200px)`, line-height 0.78
- Add sepia filter + warm overlay on image
- Add vignette overlay
- Refine scroll indicator (remove arrow, add pulse)
- Update kicker/meta colors to madeira gold

### Step 3: Typography Pass (page.tsx + all pages)
- Increase all section heading sizes to `clamp(48px, 7vw, 120px)`
- Update line-heights to 0.82
- Add editorial line-height rules
- Review uppercase vs title case usage

### Step 4: Color Pass (all sections)
- Replace rosa backgrounds with dark backgrounds
- Apply dark-warm alternation on dark sections
- Update CTA Final section from rosa to verde-dark
- Madeira gold on kicker labels and accent lines

### Step 5: Texture & Grain
- Apply grain overlays to hero and dark sections
- Add paper texture to light sections
- Add vignette to hero

### Step 6: Section Dividers
- Add gradient hairlines between major sections

### Step 7: Navigation & Footer
- Update scrolled nav border to madeira gold
- Footer background to dark-warm
- Footer wordmark opacity increase

### Step 8: Build Verification
- `npx next build` — must pass
- Visual check: all sections render correctly

---

## 10. Acceptance Criteria

- [ ] Hero title is dramatically larger (11vw / 200px max) with cinematic dark overlay
- [ ] Film grain visible on hero and dark sections (opacity 0.04–0.06)
- [ ] No rosa section backgrounds — rosa is accent-only
- [ ] Madeira gold used on kicker labels, accent lines, and editorial details
- [ ] Section headings at `clamp(48px, 7vw, 120px)` with `leading-[0.82]`
- [ ] Dark sections alternate between verde and dark-warm
- [ ] Hero image has sepia filter + warm overlay + vignette
- [ ] CTA Final section is verde-dark, not rosa
- [ ] Editorial hairlines between major sections
- [ ] `npx next build` passes
- [ ] `prefers-reduced-motion` still respected (grain/texture OK, parallax off)

---

## 11. Non-Goals

- Changing the font families (Cormorant Garamond + Manrope stay)
- Changing the core color values (rosa #E8467A, verde #0E2B22, madeira #C8A55A stay)
- Adding new JS animation libraries
- Changing the parallax/scroll-reveal infrastructure
- Modifying the page transition system
- Changing the navigation structure or mobile menu
