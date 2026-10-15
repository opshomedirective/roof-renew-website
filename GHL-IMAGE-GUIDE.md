# Image Guide — Roof-Renew

Every image on the site, its filename, and exactly where it goes.

> ⚠️ **The public GitHub repo will be deleted.** Every image must be downloaded and hosted in the GHL Media Library. Never hotlink `github.com`, `raw.githubusercontent.com` or `unsplash.com`.

**How to use this guide in GoHighLevel**

1. Upload every file in `/public/images` (also delivered in the `imagenes-para-ghl` folder) to the GHL Media Library **without renaming them**.
2. Wherever this guide names a file, use the Media Library file with that exact name.
3. Do not use any image that isn't on this list: no GHL stock, AI-generated images or placeholders.

All photos are licensed stock (Unsplash License, free for commercial use, no attribution required), picked to look like West Michigan.

> **Priority for the client:** real photos of Roof-Renew applying the rejuvenation treatment, plus a real before/after of a treated roof. As soon as those exist, use them for the Home hero, the Before/After slider and the Roof Rejuvenation page. No good stock photo exists of a spray treatment on asphalt shingles, so we didn't use a fake one.

---

## 1. Brand files

| File | Where it goes |
|---|---|
| `roof-renew-logo.png` | Header (left), mobile menu, footer. Transparent PNG with a blue glow. It looks best on the dark navy header and footer. |
| `roof-renew-favicon.png` | Browser favicon (the round badge from the logo). |

---

## 2. Home `/`

| # | Section | File(s) |
|---|---|---|
| 1 | **Hero background slideshow.** 4 images crossfade every 6.5 seconds with a slow zoom, in this order | `home-dusk-porch-lights.jpg` → `michigan-fall-home-golden-trees.jpg` → `white-home-heavy-snow.jpg` → `stone-ranch-shingle-roof.jpg` |
| 2 | "Renew your roof. Keep your thousands.": the 2 service cards | The **hero** image of each service (section 3) |
| 3 | "Give aging shingles a second life": **Renew slider** (Custom HTML from `ghl-embeds/renew-slider.html`) | Left ("Today: aging"): `aging-asphalt-shingles.jpg` · Right ("The goal: renewed"): `renewed-shingles-illustration.jpg`. Same roof. The right side is a **digital illustration** made from the left photo (lichen and chalking removed, tone deepened), labeled as such on the image and in the caption. Replace it with a real Roof-Renew before/after (same roof, same angle) as soon as Bill has one. |
| 4 | "Renew vs. replace": **"Is my roof a candidate?"** tab, left card (good candidate) | `worn-shingles-texture.jpg` |
| 4 | Same tab, right card (probably not a candidate) | `missing-shingle-not-a-candidate.jpg` |
| 5 | "What a Michigan year does to your shingles": one photo per season tab | Winter `icicles-gutter-ice-dam.jpg` · Spring `shelf-cloud-lake.jpg` · Summer `aerial-suburban-home-gray-roof.jpg` · Fall `gutter-leaves-shingles.jpg` |
| 6 | "You talk to the owner. Not a salesperson.": large photo | `ladder-on-shingle-roof.jpg` |
| 7 | "Proudly renewing roofs across Grand Rapids and Kent County": full-width band | `grand-rapids-skyline-bridge.jpg` |
| 8 | Service area radar map | No image. It's an animated SVG. |
| 9 | "Let's get eyes on your roof" form section: background at 35% opacity | `snowy-street-homes.jpg` |
| 10 | Bottom CTA card (default) | `home-dusk-porch-lights.jpg` |

---

## 3. Service pages `/services/...`

Each service page uses three images:

- **Hero**: full-screen background at the top. It's also the image on that service's card everywhere on the site.
- **Photo A**: the large photo in the intro section.
- **Photo B**: the small overlapping photo in the intro section. It's also the background of the CTA card at the bottom of the page.

| Service | URL | Hero | Photo A | Photo B |
|---|---|---|---|---|
| Roof Rejuvenation | `/services/roof-rejuvenation` | `aerial-suburban-home-gray-roof.jpg` | `worn-shingles-texture.jpg` | `stone-ranch-shingle-roof.jpg` |
| Free Roof Inspection | `/services/roof-inspections` | `older-shake-roof-dormers.jpg` | `attic-insulation-inspection.jpg` | `ladder-on-shingle-roof.jpg` |

---

## 4. Other pages

### Services hub `/services`

| Section | File |
|---|---|
| Hero | `aerial-suburban-home-gray-roof.jpg` |
| 2 alternating service rows | Hero of each service (section 3) |
| Bottom CTA card | `michigan-home-fall-driveway.jpg` |

### Michigan Roofs (guide) `/michigan-roofs`

| Section | File |
|---|---|
| Hero | `white-home-heavy-snow.jpg` |
| Card "Lake-effect snow" | `snow-load-roof-edge.jpg` |
| Card "Freeze–thaw cycles" | `icicles-roof-edge.jpg` |
| Card "Wind off the lake" | `storm-over-lake.jpg` |
| "Renew vs. replace" block | Same images as Home #4 |
| Season tabs | Same 4 photos as Home #5 |
| Bottom CTA card | `red-home-snowy-yard.jpg` |

### About `/about`

| Section | File |
|---|---|
| Hero | `brick-home-autumn-path.jpg` |
| "Renew before you replace": large photo | `grand-rapids-river-skyline.jpg` |
| Same section: small overlapping photo | `attic-insulation-inspection.jpg` |
| Bottom CTA card | `fall-road-golden-trees.jpg` |

### Service Area `/service-area`

| Section | File |
|---|---|
| Hero | `grand-rapids-sunset.jpg` |
| Bottom CTA card | `lake-michigan-dune-path.jpg` |

### Town pages `/service-area/{town}` (30 pages, one template)

The hero and the bottom CTA card use the image for the town's region:

| Region | Towns | File |
|---|---|---|
| Grand Rapids Metro | Grand Rapids, Kentwood, Wyoming, Grandville, Walker, Cascade, East Grand Rapids, Byron Center, Caledonia | `home-dusk-porch-lights.jpg` |
| North & East | Ada, Lowell, Rockford, Cedar Springs, Sparta, Belding, Greenville, Ionia | `michigan-fall-home-golden-trees.jpg` |
| Lakeshore | Jenison, Hudsonville, Allendale, Zeeland, Holland, Grand Haven, Muskegon | `lake-michigan-dune-path.jpg` |
| South | Middleville, Wayland, Hastings, Allegan, Kalamazoo, Battle Creek | `brick-home-autumn-path.jpg` |

Service cards, Renew vs. Replace and Season tabs reuse the same images as on Home.

### Contact `/contact`

| Section | File |
|---|---|
| Hero | `cozy-home-front-porch.jpg` |

### 404

| Section | File |
|---|---|
| Background (35% opacity) | `snowy-street-homes.jpg` |

---

## 5. Full file list (30 files)

**Brand (2):** `roof-renew-logo.png`, `roof-renew-favicon.png`

**Homes & West Michigan (14):** `home-dusk-porch-lights.jpg`, `michigan-fall-home-golden-trees.jpg`, `white-home-heavy-snow.jpg`, `red-home-snowy-yard.jpg`, `stone-ranch-shingle-roof.jpg`, `brick-home-autumn-path.jpg`, `cozy-home-front-porch.jpg`, `michigan-home-fall-driveway.jpg`, `aerial-suburban-home-gray-roof.jpg`, `snowy-street-homes.jpg`, `grand-rapids-skyline-bridge.jpg`, `grand-rapids-river-skyline.jpg`, `grand-rapids-sunset.jpg`, `lake-michigan-dune-path.jpg`

**Shingles & inspection (9):** `aging-asphalt-shingles.jpg`, `renewed-shingles-illustration.jpg`, `worn-shingles-texture.jpg`, `missing-shingle-not-a-candidate.jpg`, `older-shake-roof-dormers.jpg`, `ladder-on-shingle-roof.jpg`, `attic-insulation-inspection.jpg`, `gutter-leaves-shingles.jpg`, `fall-road-golden-trees.jpg`

**Winter & weather (5):** `icicles-gutter-ice-dam.jpg`, `icicles-roof-edge.jpg`, `snow-load-roof-edge.jpg`, `storm-over-lake.jpg`, `shelf-cloud-lake.jpg`
