# Roof-Renew — Website

The new marketing website for **Roof-Renew**, a roofing company serving Grand Rapids and West Michigan.

*Your roof, renewed. Built for Michigan winters.*

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
public/images/        All 34 site images, with descriptive filenames (licensed stock + logo)
src/
  index.css           Design system: navy + electric blue + cyan, Archivo (wide) + Manrope,
                      the "renew swoosh", gradient accent text, pill buttons
  data/
    site.ts           Business info (public-safe only), promises, process, seasons,
                      health-check questions, service areas with coordinates, FAQ, nav
    services.ts       The 5 service pages (copy, signs, includes, FAQs, images)
    images.ts         Single source of truth: image key → filename
  components/         Navbar, Footer, Swoosh, PageHero, ServiceCard, LeadForm (multi-step),
                      BeforeAfter (slider), SeasonTabs, IceDamDiagram (animated SVG),
                      HealthCheck (quiz), AreaMap (radar + Lake Michigan), Marquee, FAQ, CTASection
  pages/              Home, Services, ServiceDetail, MichiganRoofs, About,
                      ServiceArea, Contact, NotFound
```

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Services hub |
| `/services/:slug` | 5 service pages |
| `/michigan-roofs` | West Michigan roof guide (ice dams, seasons, health check) |
| `/about` | About |
| `/service-area` | 50-mile radius around Grand Rapids, radar map |
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
- No offers, financing, insurance-claim help, reviews or warranties until the client provides them.
