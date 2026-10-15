# GHL Update Prompt — Service-area town pages (+ host everything in GHL)

Roof-Renew is **already built in GoHighLevel**. This prompt only tells GHL AI what to **add/change**. Don't rebuild the site.

Copy everything inside the box below and paste it into the GoHighLevel AI builder.

---

```text
UPDATE to the existing Roof-Renew website that's already built in this GHL
account. Do NOT redesign or rebuild the site. Keep every existing page,
section, text, color, font and image exactly as it is. Only make the changes
below.

Reference (code of the approved site):
https://github.com/opshomedirective/roof-renew-website
Read src/pages/AreaDetail.tsx, src/data/site.ts (AREAS + helper functions),
src/components/AreaMap.tsx, Footer.tsx, Marquee.tsx and
src/pages/ServiceArea.tsx. Use the text WORD FOR WORD.

══════════════════════════════════════════════════════════════════
A. CRITICAL — EVERYTHING MUST BE HOSTED IN GHL
══════════════════════════════════════════════════════════════════
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
  • This applies to the WHOLE site, not just the new pages. If any existing
    page still loads an image or file from GitHub, replace it now with the
    GHL Media Library copy (same filename).

══════════════════════════════════════════════════════════════════
B. ADD 30 SERVICE-AREA TOWN PAGES (essential for local SEO)
══════════════════════════════════════════════════════════════════
Every service-area town gets its own page at /service-area/{slug}.
They aren't in the main nav; they're reached through internal links (C).

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

PER-TOWN DATA (use exactly):
Region hero images: Grand Rapids Metro → home-dusk-porch-lights.jpg ·
North & East → michigan-fall-home-golden-trees.jpg · Lakeshore →
lake-michigan-dune-path.jpg · South → brick-home-autumn-path.jpg
(all already in the Media Library).

| # | Town | URL | County | Region (hero image) | From Grand Rapids | 4 nearby towns (links) | Unique note (hero sub, word for word) |
|---|---|---|---|---|---|---|---|
| 1 | Grand Rapids | /service-area/grand-rapids | Kent County | Grand Rapids Metro (home-dusk-porch-lights.jpg) | Home base | East Grand Rapids, Wyoming, Walker, Grandville | West Michigan's largest city and the heart of our service area. |
| 2 | Kentwood | /service-area/kentwood | Kent County | Grand Rapids Metro (home-dusk-porch-lights.jpg) | ~7 miles south | Wyoming, East Grand Rapids, Byron Center, Grand Rapids | A city just south of Grand Rapids, right next to our 49512 service-area center. |
| 3 | Wyoming | /service-area/wyoming | Kent County | Grand Rapids Metro (home-dusk-porch-lights.jpg) | ~4 miles southwest | Grandville, Grand Rapids, Kentwood, Jenison | A city just southwest of Grand Rapids. |
| 4 | Grandville | /service-area/grandville | Kent County | Grand Rapids Metro (home-dusk-porch-lights.jpg) | ~6 miles southwest | Jenison, Wyoming, Walker, Hudsonville | A city southwest of Grand Rapids along I-196. |
| 5 | Walker | /service-area/walker | Kent County | Grand Rapids Metro (home-dusk-porch-lights.jpg) | ~5 miles west | Grandville, Grand Rapids, Jenison, Wyoming | A city on Grand Rapids' northwest side. |
| 6 | Cascade | /service-area/cascade | Kent County | Grand Rapids Metro (home-dusk-porch-lights.jpg) | ~9 miles east | Ada, East Grand Rapids, Lowell, Kentwood | A township east of Grand Rapids along the Thornapple River. |
| 7 | East Grand Rapids | /service-area/east-grand-rapids | Kent County | Grand Rapids Metro (home-dusk-porch-lights.jpg) | Next door | Grand Rapids, Wyoming, Kentwood, Ada | A city on Grand Rapids' east side, around Reeds Lake. |
| 8 | Byron Center | /service-area/byron-center | Kent County | Grand Rapids Metro (home-dusk-porch-lights.jpg) | ~11 miles south | Kentwood, Grandville, Wyoming, Jenison | A community south of Grand Rapids in Byron Township. |
| 9 | Caledonia | /service-area/caledonia | Kent County | Grand Rapids Metro (home-dusk-porch-lights.jpg) | ~14 miles southeast | Middleville, Kentwood, Cascade, Wayland | A village southeast of Grand Rapids. |
| 10 | Ada | /service-area/ada | Kent County | North & East (michigan-fall-home-golden-trees.jpg) | ~9 miles east | Cascade, East Grand Rapids, Lowell, Grand Rapids | A township east of Grand Rapids where the Thornapple meets the Grand River. |
| 11 | Lowell | /service-area/lowell | Kent County | North & East (michigan-fall-home-golden-trees.jpg) | ~17 miles east | Ada, Cascade, Belding, Caledonia | A city east of Grand Rapids on the Grand River. |
| 12 | Rockford | /service-area/rockford | Kent County | North & East (michigan-fall-home-golden-trees.jpg) | ~12 miles northeast | Cedar Springs, Sparta, Ada, Grand Rapids | A city north of Grand Rapids on the Rogue River. |
| 13 | Cedar Springs | /service-area/cedar-springs | Kent County | North & East (michigan-fall-home-golden-trees.jpg) | ~19 miles north | Rockford, Sparta, Greenville, Belding | A city in northern Kent County. |
| 14 | Sparta | /service-area/sparta | Kent County | North & East (michigan-fall-home-golden-trees.jpg) | ~14 miles north | Rockford, Cedar Springs, Walker, Grand Rapids | A village northwest of Grand Rapids. |
| 15 | Belding | /service-area/belding | Ionia County | North & East (michigan-fall-home-golden-trees.jpg) | ~24 miles northeast | Greenville, Ionia, Lowell, Ada | A city in Ionia County on the Flat River. |
| 16 | Greenville | /service-area/greenville | Montcalm County | North & East (michigan-fall-home-golden-trees.jpg) | ~26 miles northeast | Belding, Cedar Springs, Rockford, Ionia | A city in Montcalm County on the Flat River. |
| 17 | Ionia | /service-area/ionia | Ionia County | North & East (michigan-fall-home-golden-trees.jpg) | ~30 miles east | Belding, Lowell, Greenville, Ada | The Ionia County seat, east of Grand Rapids on the Grand River. |
| 18 | Jenison | /service-area/jenison | Ottawa County | Lakeshore (lake-michigan-dune-path.jpg) | ~7 miles southwest | Grandville, Wyoming, Hudsonville, Walker | A community in Georgetown Township, just west of Grand Rapids. |
| 19 | Hudsonville | /service-area/hudsonville | Ottawa County | Lakeshore (lake-michigan-dune-path.jpg) | ~12 miles southwest | Jenison, Grandville, Byron Center, Allendale | A city in Ottawa County west of Grand Rapids. |
| 20 | Allendale | /service-area/allendale | Ottawa County | Lakeshore (lake-michigan-dune-path.jpg) | ~14 miles west | Hudsonville, Jenison, Walker, Grandville | A township in Ottawa County, home to Grand Valley State University. |
| 21 | Zeeland | /service-area/zeeland | Ottawa County | Lakeshore (lake-michigan-dune-path.jpg) | ~21 miles southwest | Holland, Hudsonville, Allendale, Jenison | A city in Ottawa County just east of Holland. |
| 22 | Holland | /service-area/holland | Ottawa County | Lakeshore (lake-michigan-dune-path.jpg) | ~25 miles southwest | Zeeland, Hudsonville, Allendale, Jenison | A Lakeshore city near Lake Michigan. |
| 23 | Grand Haven | /service-area/grand-haven | Ottawa County | Lakeshore (lake-michigan-dune-path.jpg) | ~29 miles west | Muskegon, Allendale, Holland, Zeeland | The Ottawa County seat, on Lake Michigan at the mouth of the Grand River. |
| 24 | Muskegon | /service-area/muskegon | Muskegon County | Lakeshore (lake-michigan-dune-path.jpg) | ~35 miles northwest | Grand Haven, Allendale, Sparta, Walker | The Muskegon County seat on the Lake Michigan shoreline. |
| 25 | Middleville | /service-area/middleville | Barry County | South (brick-home-autumn-path.jpg) | ~20 miles southeast | Caledonia, Wayland, Hastings, Cascade | A village in Barry County on the Thornapple River. |
| 26 | Wayland | /service-area/wayland | Allegan County | South (brick-home-autumn-path.jpg) | ~20 miles south | Middleville, Caledonia, Byron Center, Kentwood | A city in northern Allegan County along US-131. |
| 27 | Hastings | /service-area/hastings | Barry County | South (brick-home-autumn-path.jpg) | ~29 miles southeast | Middleville, Caledonia, Wayland, Lowell | The Barry County seat, southeast of Grand Rapids. |
| 28 | Allegan | /service-area/allegan | Allegan County | South (brick-home-autumn-path.jpg) | ~31 miles south | Wayland, Byron Center, Zeeland, Kalamazoo | The Allegan County seat on the Kalamazoo River. |
| 29 | Kalamazoo | /service-area/kalamazoo | Kalamazoo County | South (brick-home-autumn-path.jpg) | ~47 miles south | Battle Creek, Allegan, Wayland, Hastings | The Kalamazoo County seat, south of Grand Rapids along US-131. |
| 30 | Battle Creek | /service-area/battle-creek | Calhoun County | South (brick-home-autumn-path.jpg) | ~51 miles southeast | Kalamazoo, Hastings, Middleville, Wayland | A city in Calhoun County, southeast of Grand Rapids. |

══════════════════════════════════════════════════════════════════
C. MAKE THE SERVICE AREAS CLICKABLE
══════════════════════════════════════════════════════════════════
INTERNAL LINKS (this is what makes the pages work for SEO):
  • /service-area: every town card links to its town page (not /contact).
  • Radar map (everywhere it appears): every town dot is clickable and
    opens that town's page; the bottom label says "click a town".
  • Footer "Serving" column: ALL 30 towns, each one a link.
  • City marquee (Home, service pages, etc.): every town name is a link.
  • Each town page links to its 4 nearby towns (table) and back to
    /service-area.
  • Add all 30 URLs to the sitemap.

══════════════════════════════════════════════════════════════════
D. RULES (same as the original build)
══════════════════════════════════════════════════════════════════
Services are ONLY roof rejuvenation + free inspections. Keep claims hedged
("designed to help restore", "may extend"). No replacement, repairs, storm
damage, offers, reviews, warranties or financing. No street address, legal
name, EIN or email address.

══════════════════════════════════════════════════════════════════
E. QUALITY CHECK BEFORE YOU FINISH
══════════════════════════════════════════════════════════════════
□ All 30 town pages exist at the exact URLs, each with its own title, meta
  description and ONE H1 that includes the town name.
□ Each page shows the right county, distance/direction, 4 nearby-town
  links and unique note from the table.
□ Clicking a town on /service-area, on the radar map, in the footer and in
  the marquee opens that town's page; on a town page the map highlights it.
□ All 30 URLs are in the sitemap; no broken links.
□ At 375px wide: no horizontal scroll on any town page.
□ Searching the site for "github", "githubusercontent", "unsplash" and
  "vercel" returns ZERO results. Every image loads from the GHL Media
  Library.
□ Nothing else on the site changed.
```
