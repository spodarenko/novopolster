# NovoPolster — Design System

Upholstery, mattress and car-interior cleaning service (*chemische Reinigung von Polstermöbeln*) launching in **Munich, Germany**, serving the city plus a 30&nbsp;km radius. Premium positioning, private clients, quality over price. This design system was first built from the logo alone (see git history / `readme.md` v1 reasoning below where noted); it has since been reconciled against a full client intake brief, competitive research, an information architecture, and a reference-site review — all attached and summarized here.

## Source material

- `uploads/brief.md` — client intake brief (from the [intake form](https://docs.google.com/spreadsheets/d/1LSPg94-2_2_wAQYc6TR5V2c52-1cGv95CFu0QCe7jxg/edit?gid=0#gid=0)): company info, full price list, contact channels, social links, slogan, positioning, open questions.
- `uploads/research.md` — competitive analysis of 5 Munich competitors (Octoputz, Polsterblitz, BIO Clean Team, Polsterando, Tiut), 4 customer personas, 3 usage scenarios, a prioritized feature table (Must/Should/Nice).
- `uploads/ia.md` — information architecture: the fixed 9-section landing-page structure, conversion path, multilingual rules.
- `uploads/design-brief.md` — condensed design brief distilled from the above for direct use here (brand voice, color rule, section order, CTA rule).
- `uploads/references.md` — 4 reference sites (Sparkles, Cleanora, Kleno, Fomic) reviewed against the IA and design system, with explicit "use"/"don't copy" notes.
- `uploads/NovoPolster.png` — the only supplied visual asset: the logo lockup (menthol "N" + black "P" monogram, wordmark below). No codebase, Figma file, or existing site exists — this is a new build. Menthol (`#0CA194`) and ink (`#131413`) were sampled directly from this file and independently match the client's stated brand colors ("чорний і ментоловий").

No logo other than the supplied PNG exists, no hero/team/before-after photography was supplied, and no real customer reviews exist yet — all three are explicitly flagged as open/pending in the brief and are treated as **placeholders to fill later**, never invented content (see "Deliberately unfilled" below).

## Components

All in `components/<group>/`, one folder per family, each with `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and a `*.card.html` demo.

- **core/** — `Button`, `IconButton`, `Badge`
- **forms/** — `Input` (incl. file/photo variant), `Select`, `Textarea`
- **marketing/** — `ServiceCard`, `PricingTable`, `PricingTabs`, `ProcessSteps`, `FAQAccordion`, `PlaceholderPanel`
- **navigation/** — `Header`, `Footer`, `LanguageSwitcher`
- **contact/** — `WhatsAppButton`

### Asset paths from nested pages
A handful of components carry a built-in icon (`Select`, `LanguageSwitcher`, `FAQAccordion`, `WhatsAppButton`, `Header`'s/`Footer`'s default logo) rather than taking it as a prop. Those read `window.NP_ASSETS_BASE` (default `''`) as a prefix. If your page lives somewhere other than the project root, set it before mounting — e.g. `window.NP_ASSETS_BASE = '../../';` for a page two folders deep (see any `*.card.html` or `ui_kits/marketing-website/App.jsx` for the pattern).

### Intentional additions
No source defined a component inventory (from-scratch build), so this is a standard set sized to the one landing page the brief specifies — deliberately **not** a full app kit. Purpose-built additions beyond the usual primitives, each tied to a specific brief/IA requirement:
- **PricingTable** / **PricingTabs** — the brand's #1 differentiator (transparent from–to pricing) needed real components. `PricingTabs` groups the 5 price categories (Sofa/Matratze/Stühle & Sessel/Teppiche/Auto) behind tabs — the "tabbed pricing" pattern called out from the Cleanora reference (`references.md`, priority 2).
- **ProcessSteps** — the "Wie es funktioniert" 3-step section every competitor pattern-matches on (`research.md` §1, UX pattern #2).
- **PlaceholderPanel** — an explicit, visually-honest "content pending from client" panel (dashed border, no invented copy) for the before/after gallery and testimonials slot in section 5 — see "Deliberately unfilled".
- **WhatsAppButton** — the primary contact channel gets a dedicated component (floating + inline variants) rather than being just another `Button` variant, since it carries the WhatsApp brand color and deep-link logic.

## UI kit

`ui_kits/marketing-website/` — the one product this brand needs: the public marketing landing page, built to the fixed 9-section order from `ia.md`:

1. Hero (slogan + zone/language confirmation + WhatsApp CTA, no scroll needed)
2. Benefits/USP (transparent pricing, DE/EN/UA/IT, HWK membership, experience — marked TBD)
3. Services + pricing (tabbed from–to price table, add-on services, Autoaufbereitung premium-car note)
4. How it works (3 steps, WhatsApp CTA at step 1)
5. Trust & proof (HWK badge, premium-materials principle, explicit pending-content placeholders)
6. FAQ (chemical safety, response time, payment, service radius, multiple items at once)
7. Service area (Munich + 30&nbsp;km, yacht/plane note as a callout, not a full section)
8. Final CTA (WhatsApp + fallback form: Name, Telefonnummer, Beschreibung, Foto)
9. Footer (contact, social links, language switcher, Impressum/Datenschutz — always German)

Interactive: language switching re-renders all real (non-placeholder) copy in DE/EN/UA/IT, the pricing tabs switch category, FAQ accordion toggles, and the fallback contact form validates and shows a success state.

## Foundations (Design System tab)

Specimen cards live in `guidelines/`, grouped as **Brand**, **Colors**, **Type**, **Spacing**, **Effects**. See sections below for the reasoning behind each.

## Assets

- `assets/logo/` — `novopolster-logo-transparent.png` / `-white.png` (full lockup), `novopolster-mark.png` / `-white.png` (N/P monogram only). All derived from the single supplied PNG (background removed, cropped) — no logo content was redrawn or invented.
- `assets/icons/` — Lucide icon set (see Iconography below) + WhatsApp/Instagram/Facebook/TikTok brand glyphs, copied in as SVGs.
- `assets/fonts/` — self-hosted Golos Text `.woff2` files (Latin + Cyrillic subsets — see Typography note below).

## Tokens

`tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/effects.css`, `tokens/fonts.css`, `tokens/base.css` — all imported by the root `styles.css`. Reference the semantic aliases (`--color-brand`, `--text-base`, `--space-6`, `--radius-lg`, …) in product code, not the raw ramps, so a future re-theme only touches the token files.

---

## Content fundamentals

**Slogan:** **"Keine Zeit? Ruf uns an."** (client-specified, `brief.md`). Per `design-brief.md`, this is **transcreated per language, never translated literally** — the German pun on "no time" doesn't carry over word-for-word. EN/UA/IT versions in `i18n.js` capture the same "too busy to deal with this — just call/message us" feeling in each language's own idiom.

**Tone:** Premium, calm, quality-first — explicitly **not** a "cheap/discount" tone (`design-brief.md`). The audience is private clients who prioritize quality over price, not bargain-hunters. Copy leans on concrete facts (a price range, the 30&nbsp;km radius, HWK membership) rather than superlatives.

**Formality:** German copy uses **"Sie"**. Never "Du".

**The TBD rule — do not publish unconfirmed numbers:** The client's brief lists "10+ years experience" and a "24h response time" but flags both as unconfirmed/incomplete (`brief.md` "Відкриті питання"). Two direct competitors (Tiut: 28 years; Polsterando: Allianz-backed guarantee) are stronger on paper — publishing a weak or inaccurate number would backfire. Until the client confirms exact figures, these are shown as a **muted "wird noch bestätigt" (to be confirmed) badge**, never a fabricated number. This is a hard rule, not a placeholder to quietly fill with a guess.

**The price-forward promise:** Every price category shows a real from–to range from the brief's price list — never "Preis auf Anfrage." This is the brand's strongest differentiator: 3 of 5 competitors hide pricing behind a contact form (`research.md` §1).

**Multilingual, not translated-feeling:** DE (primary) → EN → UA (the owner is Ukrainian; Munich's Ukrainian community) → IT (a real market gap — zero competitors serve Italian, `research.md` §1 Opportunities). Order and rationale are fixed by `ia.md`. Auto-detect by browser language, fallback to DE. **Impressum/Datenschutz stay German regardless of selected language** — a hard legal requirement (TMG), not a design choice.

**Emoji:** Not used in body copy or UI — same as before. The WhatsApp/Instagram/Facebook/TikTok glyphs are real brand marks, not decorative emoji.

---

## Visual foundations

**Color:** Client-specified brand colors are **black + menthol** (`brief.md`), matching what was already sampled from the logo (menthol `--teal-500` `#0CA194`, ink `--neutral-950` `#131413`). **Explicit client constraint: do not saturate the design in black+menthol together** — that reads overloaded/cheap. In practice: ink is a text/UI-chrome color, menthol is reserved for the WhatsApp CTA and small highlights/icons, and the dominant surface everywhere is a neutral light background (`--color-bg`, warm off-white) — "give the composition air" per the brief. No third accent color was added.

**Type, spacing, backgrounds, motion, hover/press states, borders, shadows, radius, cards, transparency/blur, layout rules:** unchanged from the original foundations — see the specimen cards in `guidelines/` for the full system. (No brandbook or typeface was ever supplied — Sora + Inter remain Google Fonts substitutes; see the flag below.)

**Reference sites (`references.md`) — what to borrow, what to avoid:**
- **Sparkles** (priority 1) — closest structural match to our 9 sections; use as the base for section order and page rhythm.
- **Cleanora** (priority 2) — before/after imagery pattern for section 5 (once the client supplies photos); tabbed pricing UI for section 3 (→ `PricingTabs`). **Do not copy** its hero stats ("20+ years", "98% satisfaction") — violates the TBD rule above.
- **Kleno** — style reference only for teal/turquoise icon treatment and CTA buttons; structurally weak (no pricing, no FAQ — both Must-haves here), not a structural reference.
- **Fomic** — avoid entirely. Navy+yellow palette doesn't match this DS, and its stats-driven hero is the exact anti-pattern the TBD rule exists to prevent.

---

## Deliberately unfilled (do not invent content here)

Per `brief.md`'s open questions and `ia.md` §5, three things are explicitly **not** fabricated anywhere in this system:
1. **Hero background photo/video** — none supplied. Placeholder only.
2. **Before/after project photos** — none exist yet; this is the single biggest trust gap vs. all 5 competitors (`research.md`), but the fix is real photos from the client, not stock images or generated ones.
3. **Customer testimonials** — none exist yet. No fake names, quotes, or star ratings appear anywhere in this system (an earlier draft of this UI kit had 3 invented testimonials — removed once the real brief arrived; do not reintroduce placeholder reviews).

All three render as a single labeled `PlaceholderPanel` in the "Trust & proof" section: "Fotos und Bewertungen folgen, sobald der Kunde Material bereitstellt" (+ EN/UA/IT). Same rule for exact years-of-experience and response-time numbers (see Content fundamentals → TBD rule).

---

## Iconography

**System:** [Lucide](https://lucide.dev) (MIT-licensed, CDN-available) for all functional/UI icons — geometric, stroke-based, matches the brand's precise/minimal visual language. Curated subset copied into `assets/icons/`: `sofa`, `bed`, `car`, `sparkles`, `sparkle`, `droplets`, `shield-check`, `shield`, `clock`, `map-pin`, `map`, `phone`, `message-circle`, `mail`, `star`, `check`, `check-circle-2`, `chevron-down`, `chevron-right`, `menu`, `x`, `globe`, `languages`, `leaf`, `badge-check`, `calendar-check`, `camera`, `image`, `handshake`. Add more from the same CDN (`https://unpkg.com/lucide-static@latest/icons/<name>.svg`) as needed, matching stroke weight.

**Brand glyphs (the one exception):** `assets/icons/whatsapp.svg`, `instagram.svg`, `facebook.svg`, `tiktok.svg` (via Simple Icons, MIT-licensed) — real third-party brand marks, used only for their respective contact/social links (`brief.md` lists all three social profiles + WhatsApp as the CTA channel). This is the one place brand marks other than NovoPolster's own are intentional.

**Color:** Icons render via CSS `filter` (brightness/invert for white-on-ink, hue-rotate for the one menthol-tinted use in service-card icon chips) — never re-colored by hand-editing SVG source.

**Emoji / Unicode glyphs:** Not used as icons anywhere in the product UI.

---

## Typography substitution — please confirm

No font files were supplied with the brand mark (`brief.md`: "Брендбук: немає"). **Golos Text** (client-requested) now serves both display and body roles — a Google Fonts pick matching the geometric, clean-minimal sans feel of the logo. Not a confirmed licensed brand typeface. If NovoPolster has (or wants) a different licensed typeface, share the files and this system will be updated throughout.

## Index

```
NovoPolster Design System/
├─ styles.css                   → import-only entry point
├─ readme.md                    → this file
├─ SKILL.md                     → Claude Code–portable skill wrapper
├─ uploads/                     → brief.md, design-brief.md, ia.md, research.md, references.md
├─ tokens/
│  ├─ colors.css  typography.css  spacing.css  effects.css  fonts.css  base.css
├─ assets/
│  ├─ logo/       → novopolster-logo-{transparent,white}.png, novopolster-mark-{color,white}.png
│  ├─ icons/      → Lucide SVGs + whatsapp/instagram/facebook/tiktok.svg
│  └─ fonts/      → Golos Text .woff2 (Latin + Cyrillic)
├─ components/
│  ├─ core/        → Button, IconButton, Badge
│  ├─ forms/       → Input, Select, Textarea
│  ├─ marketing/    → ServiceCard, PricingTable, PricingTabs, ProcessSteps, FAQAccordion, PlaceholderPanel
│  ├─ navigation/   → Header, Footer, LanguageSwitcher
│  └─ contact/      → WhatsAppButton
├─ ui_kits/
│  └─ marketing-website/  → index.html + 9-section landing page (App.jsx, sections/, i18n.js)
└─ guidelines/     → foundation specimen cards (Brand, Colors, Type, Spacing, Effects)
```
