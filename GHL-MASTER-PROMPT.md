# Master Prompt — GoHighLevel AI Builder

Copy everything inside the box below and paste it into the GoHighLevel AI builder.

---

```text
You are rebuilding a finished, approved website inside GoHighLevel.
Do NOT redesign it. CLONE it, page by page and section by section.

SOURCE REPOSITORY (public):
https://github.com/opshomedirective/roof-renew-website

══════════════════════════════════════════════════════════════════
1. STUDY THE PROJECT FIRST
══════════════════════════════════════════════════════════════════
Read the whole repository before you build anything:
  1) README.md
  2) GHL-IMAGE-GUIDE.md   ← which image goes in every section
  3) src/index.css        ← the full design system
  4) src/data/site.ts     ← business info, promises, process, seasons,
                            health-check questions, service areas, FAQ
  5) src/data/services.ts ← every word of the 5 service pages
  6) src/pages/*.tsx      ← every page, section by section, in order
  7) src/components/*.tsx ← header, footer, cards, slider, diagrams, form, map

Use all the text WORD FOR WORD. Do not rewrite, shorten or add copy.

══════════════════════════════════════════════════════════════════
2. PAGES (same URLs)
══════════════════════════════════════════════════════════════════
/                                   Home
/services                           Services hub
/services/roof-replacement
/services/roof-repair
/services/roof-inspections
/services/storm-wind-damage
/services/ice-dams-ventilation
/michigan-roofs                     West Michigan roof guide (educational)
/about
/service-area
/contact
404 page

All 5 service pages share ONE template (src/pages/ServiceDetail.tsx):
Hero (photo + title + tagline + 2 buttons + 3 badges + curved swoosh at the
bottom) → Intro (headline, 2 paragraphs, 2 overlapping photos) → "Know the
signs" grid of 6 cards → "What's included" checklist + 4-step timeline +
sticky multi-step form → city marquee → FAQ → 3 related services → CTA card.

Home sections in order: Hero slideshow → 4 trust cards → Services grid
(5 cards + blue "Not sure what you need?" card) → Before/After slider →
Seasons tabs → Ice-dam diagram → "You talk to the owner" (navy) →
4-step process → 60-second Roof Health Check → Grand Rapids skyline band +
city marquee → Service area radar map (navy) → FAQ → Lead form section.

══════════════════════════════════════════════════════════════════
3. DESIGN SYSTEM (src/index.css): keep it identical
══════════════════════════════════════════════════════════════════
Colors (taken from the logo):
  Night (deepest navy: info bar, footer)   #050B1A
  Navy (dark sections, header)             #0A1733
  Navy card                                 #11234A
  BRAND ELECTRIC BLUE                       #1F6BFF  (deep #0F4FD6)
  BRAND CYAN highlight                      #2FC6FF
  Ice (light sections)                      #EEF4FF
  Frost (light borders)                     #DFE9FB
  Steel (muted text on light)               #52617D
  Mist (muted text on dark)                 #9FB0CF
  Silver                                    #C9D3E0
  Page background                           #FFFFFF

Fonts (Google Fonts):
  "Archivo" (width 112–125%, weight 800–900) → all headings, extra-wide
  "Manrope" 400–800                          → body, buttons, labels

Signature elements:
  • The "RENEW SWOOSH": a curved blue→cyan line with a thin silver line
    above it, taken from the arcs in the logo. It sits at the bottom of every
    hero and blends into the next section. The word "renewed." in the Home
    headline is underlined with an animated swoosh.
  • Headline accent words use a blue→cyan gradient text ("renewed.",
    "the first time.", "They're a warning.").
  • Eyebrow labels: small uppercase blue text with a glowing round dot.
  • Pill buttons: primary is a blue gradient with a blue glow, glass
    (translucent white outline) on dark, outline on light.
  • White cards with 24px radius, soft shadows and light frost borders. A
    subtle blue dot-grid background on ice sections and a white dot-grid on
    navy sections.
  • Rhythm: white → ice → navy, alternating.

Interactive pieces. Rebuild each one in GHL with custom code/HTML if needed.
They're the heart of the site, so do NOT drop them:
  • HOME HERO: 4 background photos crossfading every 6.5s with a slow zoom,
    indicator bars, headline revealed word by word, and a floating glass card
    on the right ("Owner-led inspections · Bill Roberson").
  • BEFORE/AFTER SLIDER (src/components/BeforeAfter.tsx): drag handle.
    Left = photo of mossy shingles. Right = SVG drawing of new shingles. Keep
    the caption that says the right side is an illustration.
  • SEASON TABS (SeasonTabs.tsx): Winter / Spring / Summer / Fall buttons
    that swap the photo, the big season word, and the text + 3 checks.
  • ICE DAM DIAGRAM (IceDamDiagram.tsx): animated SVG cross-section with a
    toggle "Without protection / With a Roof-Renew system", numbered markers
    on the drawing that match a numbered list beside it, rising heat, melting
    water and leak animation vs. cold airflow from soffit to ridge vent.
  • ROOF HEALTH CHECK (HealthCheck.tsx): 4 questions with point values,
    progress bar, then a result (green / amber / red) with CTA buttons. Use
    the same questions, points and result copy.
  • 4-STEP PROCESS with a dashed blue swoosh line connecting the numbered
    circles, drawn on scroll.
  • SERVICE AREA RADAR MAP (AreaMap.tsx): cyan dashed 50-mile circle around
    ZIP 49512, rotating radar sweep, pulsing center, Lake Michigan shoreline
    shaded in blue on the left, and city dots from real coordinates
    (src/data/site.ts → AREAS). City names appear on hover.
  • Infinite marquee of city names separated by small cyan swooshes.
  • Sections fade up on scroll.

══════════════════════════════════════════════════════════════════
4. HEADER, FOOTER, MOBILE (on every page)
══════════════════════════════════════════════════════════════════
Info bar (night navy): "Free roof inspections — done by the owner" on the
left; "Open 7AM – 8PM" and "(616) 265-9270" on the right.

Header (transparent over the hero, solid navy after scrolling):
  • Logo roof-renew-logo.png (with a soft cyan glow)
  • Nav: Services (dropdown card listing the 5 services with icon + short
    line) · Michigan Roofs · About · Service Area · Contact
  • Blue pill button "Free Inspection"

Mobile: a hamburger opens a full-screen navy menu (pages + 5 services +
call button), plus a sticky bottom bar that's always visible with
"Call now" (tel:+16162659270) and "Free inspection".

Footer (night navy): logo, short description, "Book a free inspection"
button, Services links, Company links, Serving (cities), Contact (phone,
hours, service area) and a giant faint "ROOF-RENEW" wordmark.

══════════════════════════════════════════════════════════════════
5. IMAGES
══════════════════════════════════════════════════════════════════
I've uploaded every image to the GHL Media Library with the EXACT same
filenames as /public/images in the repo. Follow GHL-IMAGE-GUIDE.md: it lists
the file for every page and section. Find each file by name in the Media
Library and use its GHL URL. No GHL stock, AI images or placeholders.

══════════════════════════════════════════════════════════════════
6. FORMS, CALENDAR & CRM
══════════════════════════════════════════════════════════════════
src/components/LeadForm.tsx is a design reference. Replace it with a NATIVE
GHL multi-step Form/Survey with the same questions in the same order,
styled to match (white card, blue→cyan progress bar, option tiles):
  Step 1 "What's going on with your roof?"
         Leak or water stain / Missing or damaged shingles /
         Storm or wind damage / Ice dams or big icicles /
         Thinking about a new roof / Just want an inspection
  Step 2 "Tell us about the property."
         Home I live in / Rental property / Home I'm buying or selling / Other
  Step 3 "How would you like to start?"
         Free on-site inspection / Phone consultation first
  Step 4 "When do you want it handled?"
         ASAP — it's urgent / Within 2 weeks / Within a month /
         Just planning ahead
  Step 5 "Where can we reach you?"  Full name, Phone, Email,
         Property address, Best time to call (Morning 7–11AM /
         Midday 11AM–2PM / Afternoon 2–5PM / Evening 5–8PM)
  Button: "Request my free inspection"

Map every answer to custom contact fields so Bill sees them on the contact
and on the appointment. Phone appointments are supported, so "Phone
consultation first" should book a phone-call appointment type.
After submit, show the confirmation from the code or redirect to the
calendar. Every "Free inspection / Book" button opens that form or
calendar. Every phone link uses tel:+16162659270. Timezone: US/Eastern.

══════════════════════════════════════════════════════════════════
7. BUSINESS DATA (use exactly; do not add anything)
══════════════════════════════════════════════════════════════════
Business name: Roof-Renew
Owner / inspector: Bill Roberson
Phone: (616) 265-9270
Hours: 7AM – 8PM (Eastern)
Service area: Grand Rapids & West Michigan, 50-mile radius around ZIP 49512
Services: roofing only (the 5 services above)

DO NOT publish anywhere on the site: the legal entity name, EIN, any street
address, or any personal email address. Leave them out on purpose. No street
address is shown.
DO NOT add offers, discounts, financing, insurance-claim assistance,
warranties, reviews/star ratings, license numbers, years in business or any
claim that isn't already in the repository. The client hasn't provided them yet.

══════════════════════════════════════════════════════════════════
8. SEO
══════════════════════════════════════════════════════════════════
Use the page title and meta description from each page's useSEO({...}) call.
One H1 per page, keep the H2/H3 hierarchy, alt text on every image (from the
code), favicon = roof-renew-favicon.png.

══════════════════════════════════════════════════════════════════
9. QUALITY CHECK BEFORE YOU FINISH
══════════════════════════════════════════════════════════════════
□ Every page above exists, with the same section order, on desktop and mobile.
□ Home hero slideshow works (background is never blank).
□ Before/After slider, season tabs, ice-dam toggle, health check and radar
  map all work.
□ No street address, legal name, EIN or email address appears anywhere.
□ No invented offers, reviews, warranties or financing.
□ No placeholder text, no broken links, no missing images.
□ All CTAs open the GHL form/calendar; all phone links work on mobile.
□ At 375px wide: no horizontal scroll, the sticky bottom bar shows, and the
  menu works.
```
