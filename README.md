# Roof-Renew — Website

The new marketing website for **Roof-Renew**, a **roof rejuvenation** company serving Grand Rapids, Kent County and West Michigan.

*Before you replace your roof, see if you can renew it first.*

This repository is the **approved design source**. It is meant to be cloned into GoHighLevel.

- 👉 **Building in GoHighLevel?** Read [`GHL-MASTER-PROMPT.md`](./GHL-MASTER-PROMPT.md) and [`GHL-IMAGE-GUIDE.md`](./GHL-IMAGE-GUIDE.md).

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4 (design tokens in `src/index.css`)
- `motion` for animations, `lucide-react` for icons, `react-router-dom` for routing

## Run locally

```bash
npm install
npm run dev
```

## Structure

```
public/images/        All 28 site images, with descriptive filenames (licensed stock + logo)
src/
  index.css           Design system: navy + electric blue + cyan, Archivo (wide) + Manrope,
                      the "renew swoosh", gradient accent text, pill buttons
  data/
    site.ts           Business info (public-safe only), promises, process, seasons,
                      health-check questions, service areas with coordinates, FAQ, nav
    services.ts       The 2 service pages: Roof Rejuvenation + Free Roof Inspection
    images.ts         Single source of truth: image key → filename
  components/         Navbar, Footer, Swoosh, PageHero, ServiceCard, LeadForm (multi-step),
                      BeforeAfter (slider), RenewVsReplace (comparison + candidate check),
                      SeasonTabs, HealthCheck (candidate quiz), AreaMap (radar + Lake Michigan), Marquee, FAQ, CTASection
  pages/              Home, Services, ServiceDetail, MichiganRoofs, About,
                      ServiceArea, Contact, NotFound
```

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Services hub |
| `/services/:slug` | Roof Rejuvenation, Free Roof Inspection |
| `/michigan-roofs` | West Michigan guide: why shingles age, renew vs. replace, candidate check |
| `/about` | About |
| `/service-area` | 50-mile radius around Grand Rapids, radar map |
| `/service-area/:slug` | 30 SEO town pages (one template, `AreaDetail.tsx`), linked from the hub, map, footer and marquee |
| `/contact` | Contact & inspection form |

## Brand

| Token | Value |
|---|---|
| Navy | `#0A1733` |
| Electric blue | `#1F6BFF` |
| Cyan | `#2FC6FF` |
| Ice | `#EEF4FF` |
| Headings | Archivo 800 (wide) |
| Body | Manrope |

## Content rules

- Public info is limited to: business name, owner name, phone, hours and service area.
- No legal entity name, EIN, street address or email address on the site.
- The site sells ROOF REJUVENATION (matching the ad campaign), with hedged claims. No replacement/repair services.
- No offers, financing, insurance-claim help, reviews, warranties, prices or lifespan numbers until the client provides them.
- Hours: Monday – Saturday, 7AM – 8PM (Eastern).
