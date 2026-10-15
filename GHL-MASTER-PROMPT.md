# Master Prompt — GoHighLevel AI Builder

Copy everything inside the box below and paste it into the GoHighLevel AI builder.

---

```text
You are rebuilding a finished, approved website inside GoHighLevel.
Do NOT redesign it. CLONE it, page by page and section by section.

SOURCE REPOSITORY (public):
https://github.com/opshomedirective/roof-renew-website

⚠️ CRITICAL — EVERYTHING MUST BE HOSTED IN GHL
The public GitHub repository is TEMPORARY and WILL BE DELETED soon after
the build. Anything that still points to it will break.
  • Download EVERY image, logo and favicon used on the site and upload it to
    the GHL Media Library with the EXACT same filename as /public/images.
    Use ONLY the GHL Media Library URLs on the site.
  • NEVER hotlink: no URL on the site may contain "github.com",
    "raw.githubusercontent.com", "githubusercontent", "unsplash.com" or
    "vercel.app". Not in <img>, not in CSS backgrounds, not in the favicon.
  • Icons, the swoosh, the radar map and every other SVG: rebuild them as
    inline code inside GHL (copy the SVG markup from the components), not as
    links to repo files.
  • Google Fonts (Manrope) is the only allowed external resource.
  • Before you finish, search every page for "github", "githubusercontent",
    "unsplash" and "vercel". The result must be ZERO.

══════════════════════════════════════════════════════════════════
1. STUDY THE PROJECT FIRST
══════════════════════════════════════════════════════════════════
Read the whole repository before you build anything:
  1) README.md
  2) GHL-IMAGE-GUIDE.md   ← which image goes in every section
  3) src/index.css        ← the full design system
  4) src/data/site.ts     ← business info, promises, process, seasons,
                            health-check questions, service areas, FAQ
  5) src/data/services.ts ← every word of the 2 service pages
  6) src/pages/*.tsx      ← every page, section by section, in order
  7) src/components/*.tsx ← header, footer, cards, slider, diagrams, form, map

Use all the text WORD FOR WORD. Do not rewrite, shorten or add copy.

WHAT ROOF-RENEW SELLS (this must match the Facebook ads exactly):
ROOF REJUVENATION, a spray-applied treatment for aging asphalt shingles,
plus a FREE INSPECTION to check whether a roof is a candidate.
Core message: "Before you replace your roof, see if you can renew it first."
Always keep the claims hedged the way the site words them ("may help restore",
"may extend", "save thousands vs. replacement"). Do NOT add roof replacement,
repairs, storm damage, ventilation or any other service.

══════════════════════════════════════════════════════════════════
2. PAGES (same URLs)
══════════════════════════════════════════════════════════════════
/                                   Home
/services                           Services hub
/services/roof-rejuvenation          (flagship service)
/services/roof-inspections           (free candidate inspection)
/michigan-roofs                     West Michigan guide: why shingles age, renew vs. replace
/about
/service-area
/service-area/{slug}                30 town pages (one template, see below)
/contact
404 page

Both service pages share ONE template (src/pages/ServiceDetail.tsx):
Hero (photo + title + tagline + 2 buttons + 3 badges + curved swoosh at the
bottom) → Intro (headline, 2 paragraphs, 2 overlapping photos) → "Know the
signs" grid of 6 cards → "What's included" checklist + 4-step timeline +
sticky multi-step form → city marquee → FAQ → 3 related services → CTA card.

ONE TEMPLATE FOR ALL 30 TOWN PAGES (src/pages/AreaDetail.tsx). Same
sections, same order, same design on every page; only the town data changes.
  SEO   Title: "Roof Rejuvenation in {Town}, MI | Roof-Renew"
        Meta:  "Roof rejuvenation for aging shingles in {Town}, MI. Renew your
               roof before you replace it — free owner-led inspection:
               (616) 265-9270."
        URL:   /service-area/{slug}   (exact slugs in the table)
  1) PageHero: photo = the region's hero image (table). Breadcrumb
     Home › Service Area › {Town}. Eyebrow "SERVICE AREA · {County}".
     H1 "Roof rejuvenation in {Town}, MI." ("{Town}, MI." in the blue
     highlight). Sub-line = the town's unique note + "Before you replace
     your roof, see if you can renew it first — free, owner-led inspections
     for {Town} homeowners." Buttons: "Free inspection in {Town}" (form) and
     the phone (tel:+16162659270). Curved swoosh at the bottom.
  2) White section, 2 columns. Left: eyebrow "{Town}, Michigan", H2 "Renew
     your {Town} roof before you replace it.", 3 local paragraphs (word for
     word from AreaDetail.tsx; Lakeshore towns also mention lake-effect
     snow). Right: "Quick facts" card (navy header "{Town}, MI") with
     County · From Grand Rapids (table) · Hours · Inspection "Free ·
     owner-led · no obligation", then "NEARBY TOWNS WE SERVE": 4 pill links
     to the nearby towns' pages (table).
  3) "Our services in {Town}" — the 2 service cards (same as the Services hub).
  4) "Renew vs. replace" — "Is your {Town} roof a candidate?" + the same
     Renew vs. Replace block as Home.
  5) "Four seasons of wear" — "What a Michigan year does to {Town} roofs." +
     the same Season tabs as Home.
  6) Navy section: "Where {Town} fits" / "Serving {Town} and all of West
     Michigan." + distance sentence + "All service areas" button, and the
     radar map with THIS town's dot highlighted (bigger cyan dot + label).
  7) FAQ (4 questions with the town name, word for word from AreaDetail.tsx).
  8) "Book in {Town}" — the multi-step lead form.
  9) CTA card "Before you replace your {Town} roof, see if you can renew
     it." with the region's hero image.

Per-town data (county, distance, 4 nearby towns, note, hero image): see
the table in GHL-UPDATE-PROMPT-SERVICE-AREAS.md, or compute it from
src/data/site.ts (AREAS, milesBetween, directionFrom, nearestAreas).

INTERNAL LINKS (this is what makes the pages work for SEO):
  • /service-area: every town card links to its town page (not /contact).
  • Radar map (everywhere it appears): every town dot is clickable and
    opens that town's page; the bottom label says "click a town".
  • Footer "Serving" column: ALL 30 towns, each one a link.
  • City marquee (Home, service pages, etc.): every town name is a link.
  • Each town page links to its 4 nearby towns (table) and back to
    /service-area.
  • Add all 30 URLs to the sitemap.

Home sections in order: Hero slideshow ("Before you replace your roof…
see if you can renew it first.") → 4 trust cards → Services (2 cards + blue
"Can my roof be renewed?" card) → "What is roof rejuvenation?" + Before/After
slider → "Renew vs. replace" (tabbed comparison table / candidate check) →
Seasons tabs → "You talk to the owner" (navy) → 4-step process → 60-second
candidate check → Grand Rapids skyline band + city marquee → Service area
radar map (navy) → FAQ → Lead form section.

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
    hero and blends into the next section. The words "renew it" in the Home
    headline are underlined with an animated swoosh.
  • Headline accent words use a blue→cyan gradient text ("renew it",
    "Keep your thousands.", "a second life.").
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
  • RENEW SLIDER (src/components/BeforeAfter.tsx): do NOT rebuild it by
    hand. Paste the ready-made code from ghl-embeds/renew-slider.html into
    a Custom HTML/Code element and replace AGING_IMAGE_URL and
    RENEWED_IMAGE_URL with the Media Library URLs of
    aging-asphalt-shingles.jpg and renewed-shingles-illustration.jpg.
    Same roof on both sides; a spray bar sweeps across once on scroll, then
    it's draggable. Labels and caption are inside the code. Don't add any
    other overlay text.
  • RENEW VS. REPLACE (RenewVsReplace.tsx): a toggle with two views.
    (1) A comparison table, Rejuvenate (blue column) vs. Replace (navy
    column): Cost, Tear-off & dumpster, Old shingles to the landfill,
    Disruption, Fixes leaks & missing shingles, Best for.
    (2) "Is my roof a candidate?": two cards with photos, likely a good
    candidate (blue checks) vs. probably not a candidate (orange X's).
  • SEASON TABS (SeasonTabs.tsx): Winter / Spring / Summer / Fall buttons
    that swap the photo, the big season word, and the text + 3 checks.
  • CANDIDATE CHECK (HealthCheck.tsx): 4 questions with point values, a
    progress bar, then a result: green "Looks like a good candidate", amber
    "Worth a closer look", red "May be past rejuvenation", with CTA buttons.
    Use the same questions, points and result copy.
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
Info bar (night navy): "Before you replace your roof — see if you can renew
it first" on the left; "Open Mon–Sat · 7AM – 8PM" and "(616) 265-9270" on
the right.

Header (transparent over the hero, solid navy after scrolling):
  • Logo roof-renew-logo.png (with a soft cyan glow)
  • Nav: Services (dropdown card listing the 2 services with icon + short
    line) · Michigan Roofs · About · Service Area · Contact
  • Blue pill button "Free Inspection"

Mobile: a hamburger opens a full-screen navy menu (pages + 2 services +
call button), plus a sticky bottom bar that's always visible with
"Call now" (tel:+16162659270) and "Free inspection".

Footer (night navy): logo, short description, "Book a free inspection"
button, Services links, Company links, Serving (cities), Contact (phone,
hours, service area) and a giant faint "ROOF-RENEW" wordmark.

══════════════════════════════════════════════════════════════════
5. IMAGES
══════════════════════════════════════════════════════════════════
Every image must be downloaded and uploaded to the GHL Media Library with
the EXACT same filenames as /public/images in the repo (the repo will be
deleted; see the CRITICAL block at the top). Follow GHL-IMAGE-GUIDE.md: it lists
the file for every page and section. Find each file by name in the Media
Library and use its GHL URL. No GHL stock, AI images or placeholders.

══════════════════════════════════════════════════════════════════
6. FORMS, CALENDAR & CRM
══════════════════════════════════════════════════════════════════
src/components/LeadForm.tsx is a design reference. Replace it with a NATIVE
GHL multi-step Form/Survey with the same questions in the same order,
styled to match (white card, blue→cyan progress bar, option tiles):
  Step 1 "What's going on with your roof?"
         Roof looks old or faded / Granules in the gutters /
         Was told I need a new roof / Want to see if I can renew it /
         Leak or missing shingles / Just want an inspection
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
Hours: Monday – Saturday, 7AM – 8PM (Eastern). Closed Sunday.
Service area: Kent County / Grand Rapids & West Michigan, 50-mile radius
  around ZIP 49512
Services: Roof rejuvenation + free roof inspection ONLY

DO NOT publish anywhere on the site: the legal entity name, EIN, any street
address, or any personal email address. Leave them out on purpose. No street
address is shown.
DO NOT add offers, discounts, financing, insurance-claim assistance,
warranties, guaranteed lifespans (e.g. "adds 5–10 years"), prices, product
brand names, reviews or star ratings, license numbers, years in business, or
any claim that isn't already in the repository. The client hasn't provided
any of them.

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
□ The Home hero headline matches the ads: "Before you replace your roof…
  see if you can renew it first."
□ Before/After slider, Renew vs. Replace toggle, season tabs, candidate
  check and radar map all work.
□ No replacement, repair, storm or ventilation services anywhere.
□ No street address, legal name, EIN or email address appears anywhere.
□ No invented offers, reviews, warranties or financing.
□ All 30 town pages exist with their own title, meta and H1, and every
  town on /service-area, the map, the footer and the marquee links to its page.
□ Searching the site for "github", "githubusercontent", "unsplash" and
  "vercel" returns ZERO results.
□ No placeholder text, no broken links, no missing images.
□ All CTAs open the GHL form/calendar; all phone links work on mobile.
□ At 375px wide: no horizontal scroll, the sticky bottom bar shows, and the
  menu works.
```
