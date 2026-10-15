// Public business information only. Taken from the client's onboarding
// form — and ONLY what a customer needs. Deliberately NOT published:
// legal entity name, EIN, the owner's street address and the personal
// e-mail domain. Do not add offers, financing, insurance-claim help,
// reviews, warranties, years in business or licensing claims — the
// client has not provided them.
export const BUSINESS = {
  name: "Roof-Renew",
  owner: "Bill Roberson",
  phoneDisplay: "(616) 265-9270",
  phoneTel: "+16162659270",
  region: "Grand Rapids & West Michigan",
  hours: "Mon–Sat · 7AM – 8PM",
  hoursNote: "Eastern Time",
  // Service area: 50-mile radius around ZIP 49512 (Kentwood / Grand Rapids)
  serviceCenter: { lat: 42.8806, lng: -85.5414, radiusMiles: 50, zip: "49512" },
} as const;

/**
 * Core message (matches the live ad campaign):
 * "Before you replace your roof, see if you can renew it first."
 * Roof-Renew's service is ROOF REJUVENATION — a spray-applied treatment
 * for aging asphalt shingles. Keep claims hedged ("may help"): no
 * guaranteed lifespan numbers, prices or product names unless the
 * client provides them.
 */
export const PROMISES = [
  { title: "The owner inspects your roof", body: "Every inspection is done by Bill Roberson, the owner — not a salesperson. You talk to the person responsible for the work." },
  { title: "Renew before you replace", body: "If your shingles are aging but still intact, rejuvenation may extend their life and save you thousands compared to a new roof." },
  { title: "An honest candidate check", body: "Not every roof can be rejuvenated. If yours can't, we'll tell you straight — with photos — instead of selling you something that won't help." },
  { title: "Free, no-pressure inspections", body: "We get up on the roof, photograph what we find and walk you through it. No obligation." },
  { title: "Clean, careful application", body: "We protect your landscaping, siding and gutters and leave your property the way we found it." },
  { title: "Long days, quick replies", body: "We answer Monday through Saturday, 7AM to 8PM — before work, after work, whenever it suits you." },
] as const;

export const PROCESS = [
  { step: "01", title: "Book your inspection", body: "Call or book online. You can start with a quick phone consultation or schedule a free on-site inspection." },
  { step: "02", title: "Candidate check", body: "Bill inspects your shingles personally and photographs everything to see if your roof is a good candidate for rejuvenation." },
  { step: "03", title: "Honest recommendation", body: "You get a plain-English answer: rejuvenate now, check back later, or — if the roof is too far gone — we'll tell you so." },
  { step: "04", title: "Roof renewed", body: "The rejuvenation treatment is spray-applied across your shingles on a suitable dry day, then we walk the finished roof with you." },
] as const;

export const SEASONS = [
  {
    key: "Winter",
    title: "Freeze, thaw, repeat",
    body: "Michigan winters swing above and below freezing again and again. Shingles that have dried out and turned brittle are the ones that crack and lose granules first.",
    tips: ["Brittle shingles crack in the cold", "Watch for granules in the gutters after thaws", "Note any problem spots for a spring inspection"],
    img: "icicleGutter",
  },
  {
    key: "Spring",
    title: "See what winter left behind",
    body: "Once the snow melts it's the perfect time for a free inspection — to see how your shingles came through the winter and whether they're a candidate for rejuvenation.",
    tips: ["Book a free post-winter inspection", "Look for faded, dull or dry-looking shingles", "Check for missing or lifted shingles"],
    img: "shelfCloud",
  },
  {
    key: "Summer",
    title: "Sun & heat dry shingles out",
    body: "UV and summer heat slowly bake the oils out of asphalt shingles, leaving them faded, dry and brittle. Warm, dry days are also ideal for applying a rejuvenation treatment.",
    tips: ["Faded or uneven shingle color", "Granules washing into downspouts", "Great time to schedule a treatment"],
    img: "aerialGrayRoof",
  },
  {
    key: "Fall",
    title: "Last call before winter",
    body: "Fall is the last good window to renew your shingles before another long Michigan winter puts them to the test.",
    tips: ["Clear leaves from gutters & valleys", "Get your candidate check before the first snow", "Schedule while the weather is still dry"],
    img: "gutterLeaves",
  },
] as const;

/** Higher score = roof in worse shape (less likely to be a candidate). */
export const HEALTH_CHECK = [
  { q: "How old is your roof?", options: [["Under 8 years", 0], ["8–15 years", 1], ["15–20 years", 2], ["20+ years / not sure", 3]] },
  { q: "Any leaks or ceiling stains?", options: [["None", 0], ["One small spot, once", 2], ["More than one", 4], ["Active leak right now", 5]] },
  { q: "What do the shingles look like?", options: [["Faded or dull", 0], ["Granules in the gutters", 1], ["Some curling or cracking", 2], ["Shingles missing", 4]] },
  { q: "How does the roof look overall?", options: [["Fine, just tired-looking", 0], ["Dark streaks or moss", 1], ["Not sure", 1], ["Sagging or soft spots", 5]] },
] as const;

export type Area = {
  name: string;
  slug: string;
  county: string;
  lat: number;
  lng: number;
  region: string;
  /** One unique, factual line about the town (used on its SEO page). */
  note: string;
};

const slugify = (n: string) => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const A = (name: string, county: string, lat: number, lng: number, region: string, note: string): Area => ({ name, slug: slugify(name), county, lat, lng, region, note });

export const AREAS: Area[] = [
  A("Grand Rapids", "Kent County", 42.9634, -85.6681, "Grand Rapids Metro", "West Michigan's largest city and the heart of our service area."),
  A("Kentwood", "Kent County", 42.8695, -85.6447, "Grand Rapids Metro", "A city just south of Grand Rapids, right next to our 49512 service-area center."),
  A("Wyoming", "Kent County", 42.9134, -85.7053, "Grand Rapids Metro", "A city just southwest of Grand Rapids."),
  A("Grandville", "Kent County", 42.9097, -85.7631, "Grand Rapids Metro", "A city southwest of Grand Rapids along I-196."),
  A("Walker", "Kent County", 42.9861, -85.7681, "Grand Rapids Metro", "A city on Grand Rapids' northwest side."),
  A("Cascade", "Kent County", 42.9161, -85.4964, "Grand Rapids Metro", "A township east of Grand Rapids along the Thornapple River."),
  A("East Grand Rapids", "Kent County", 42.9414, -85.6103, "Grand Rapids Metro", "A city on Grand Rapids' east side, around Reeds Lake."),
  A("Byron Center", "Kent County", 42.8122, -85.7228, "Grand Rapids Metro", "A community south of Grand Rapids in Byron Township."),
  A("Caledonia", "Kent County", 42.7892, -85.5164, "Grand Rapids Metro", "A village southeast of Grand Rapids."),
  A("Ada", "Kent County", 42.9553, -85.495, "North & East", "A township east of Grand Rapids where the Thornapple meets the Grand River."),
  A("Lowell", "Kent County", 42.9336, -85.3417, "North & East", "A city east of Grand Rapids on the Grand River."),
  A("Rockford", "Kent County", 43.12, -85.5603, "North & East", "A city north of Grand Rapids on the Rogue River."),
  A("Cedar Springs", "Kent County", 43.2234, -85.5514, "North & East", "A city in northern Kent County."),
  A("Sparta", "Kent County", 43.1606, -85.71, "North & East", "A village northwest of Grand Rapids."),
  A("Belding", "Ionia County", 43.0978, -85.2289, "North & East", "A city in Ionia County on the Flat River."),
  A("Greenville", "Montcalm County", 43.1775, -85.2528, "North & East", "A city in Montcalm County on the Flat River."),
  A("Ionia", "Ionia County", 42.9872, -85.0711, "North & East", "The Ionia County seat, east of Grand Rapids on the Grand River."),
  A("Jenison", "Ottawa County", 42.9072, -85.792, "Lakeshore", "A community in Georgetown Township, just west of Grand Rapids."),
  A("Hudsonville", "Ottawa County", 42.8708, -85.8653, "Lakeshore", "A city in Ottawa County west of Grand Rapids."),
  A("Allendale", "Ottawa County", 42.9722, -85.9536, "Lakeshore", "A township in Ottawa County, home to Grand Valley State University."),
  A("Zeeland", "Ottawa County", 42.8125, -86.0187, "Lakeshore", "A city in Ottawa County just east of Holland."),
  A("Holland", "Ottawa County", 42.7875, -86.1089, "Lakeshore", "A Lakeshore city near Lake Michigan."),
  A("Grand Haven", "Ottawa County", 43.0631, -86.2284, "Lakeshore", "The Ottawa County seat, on Lake Michigan at the mouth of the Grand River."),
  A("Muskegon", "Muskegon County", 43.2342, -86.2484, "Lakeshore", "The Muskegon County seat on the Lake Michigan shoreline."),
  A("Middleville", "Barry County", 42.7131, -85.4619, "South", "A village in Barry County on the Thornapple River."),
  A("Wayland", "Allegan County", 42.6736, -85.6447, "South", "A city in northern Allegan County along US-131."),
  A("Hastings", "Barry County", 42.6464, -85.2908, "South", "The Barry County seat, southeast of Grand Rapids."),
  A("Allegan", "Allegan County", 42.5292, -85.8553, "South", "The Allegan County seat on the Kalamazoo River."),
  A("Kalamazoo", "Kalamazoo County", 42.2917, -85.5872, "South", "The Kalamazoo County seat, south of Grand Rapids along US-131."),
  A("Battle Creek", "Calhoun County", 42.3211, -85.1797, "South", "A city in Calhoun County, southeast of Grand Rapids."),
];

export const getArea = (slug: string) => AREAS.find((a) => a.slug === slug);
export const areaPath = (a: Pick<Area, "slug">) => `/service-area/${a.slug}`;

const toRad = (d: number) => (d * Math.PI) / 180;
/** Straight-line miles between two points. */
export function milesBetween(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 3958.8;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
/** Compass direction from a to b (e.g. "northwest"). */
export function directionFrom(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const y = b.lat - a.lat;
  const x = (b.lng - a.lng) * Math.cos(toRad(a.lat));
  const deg = (Math.atan2(x, y) * 180) / Math.PI;
  const dirs = ["north", "northeast", "east", "southeast", "south", "southwest", "west", "northwest"];
  return dirs[Math.round(((deg + 360) % 360) / 45) % 8];
}
export const nearestAreas = (a: Area, n = 4) =>
  AREAS.filter((x) => x.slug !== a.slug)
    .map((x) => ({ x, d: milesBetween(a, x) }))
    .sort((p, q) => p.d - q.d)
    .slice(0, n)
    .map((p) => p.x);

export const REGIONS = [
  { name: "Grand Rapids Metro", body: "Kentwood, Wyoming, Grandville, Walker, Cascade, East Grand Rapids, Byron Center and Caledonia — home base." },
  { name: "North & East", body: "Ada, Lowell, Rockford, Cedar Springs, Sparta, Belding, Greenville and Ionia." },
  { name: "Lakeshore", body: "Jenison, Hudsonville, Allendale, Zeeland, Holland, Grand Haven and Muskegon — where lake-effect snow hits hardest." },
  { name: "South", body: "Middleville, Wayland, Hastings, Allegan, and down toward Kalamazoo and Battle Creek." },
] as const;

export const HOME_FAQ = [
  { q: "What is roof rejuvenation?", a: "It's a spray-applied treatment for asphalt shingle roofs. Over time sun, heat and Michigan's freeze-thaw cycles dry shingles out and make them brittle. Rejuvenation is designed to soak into the shingles and may help restore flexibility and extend the life of your roof." },
  { q: "Is my roof a candidate?", a: "The best candidates are asphalt shingle roofs that are aging but still intact — faded, dry or losing some granules, without active leaks or missing shingles. A free inspection tells you for sure." },
  { q: "How much can I save compared to a new roof?", a: "When your roof is a good candidate, rejuvenation costs far less than a full replacement — homeowners can save thousands. We'll give you a clear, written price after the inspection." },
  { q: "Will rejuvenation fix a leak?", a: "No. Rejuvenation treats aging shingles; it isn't a leak repair. If we find leaks, missing shingles or damaged decking, we'll show you and tell you honestly that your roof isn't a candidate right now." },
  { q: "How long does it last?", a: "That depends on your roof's age and condition. We'll explain what you can realistically expect for your specific roof during the inspection — no inflated promises." },
  { q: "Who will inspect my roof?", a: "The owner, Bill Roberson. You'll talk directly with the person responsible for your roof — not a commissioned salesperson." },
  { q: "Can I start with a phone call?", a: "Absolutely. Describe what you're seeing and we'll tell you whether an on-site inspection makes sense." },
  { q: "What areas and hours do you serve?", a: "Grand Rapids and a 50-mile radius around it, across Kent County and West Michigan. We're available Monday through Saturday, 7AM to 8PM — call (616) 265-9270." },
] as const;

export const NAV = [
  { label: "Services", to: "/services" },
  { label: "Michigan Roofs", to: "/michigan-roofs" },
  { label: "About", to: "/about" },
  { label: "Service Area", to: "/service-area" },
  { label: "Contact", to: "/contact" },
] as const;
