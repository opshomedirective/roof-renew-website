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

export type Area = { name: string; lat: number; lng: number; region: string };

export const AREAS: Area[] = [
  { name: "Grand Rapids", lat: 42.9634, lng: -85.6681, region: "Grand Rapids Metro" },
  { name: "Kentwood", lat: 42.8695, lng: -85.6447, region: "Grand Rapids Metro" },
  { name: "Wyoming", lat: 42.9134, lng: -85.7053, region: "Grand Rapids Metro" },
  { name: "Grandville", lat: 42.9097, lng: -85.7631, region: "Grand Rapids Metro" },
  { name: "Walker", lat: 42.9861, lng: -85.7681, region: "Grand Rapids Metro" },
  { name: "Cascade", lat: 42.9161, lng: -85.4964, region: "Grand Rapids Metro" },
  { name: "East Grand Rapids", lat: 42.9414, lng: -85.6103, region: "Grand Rapids Metro" },
  { name: "Byron Center", lat: 42.8122, lng: -85.7228, region: "Grand Rapids Metro" },
  { name: "Caledonia", lat: 42.7892, lng: -85.5164, region: "Grand Rapids Metro" },
  { name: "Ada", lat: 42.9553, lng: -85.495, region: "North & East" },
  { name: "Lowell", lat: 42.9336, lng: -85.3417, region: "North & East" },
  { name: "Rockford", lat: 43.12, lng: -85.5603, region: "North & East" },
  { name: "Cedar Springs", lat: 43.2234, lng: -85.5514, region: "North & East" },
  { name: "Sparta", lat: 43.1606, lng: -85.71, region: "North & East" },
  { name: "Belding", lat: 43.0978, lng: -85.2289, region: "North & East" },
  { name: "Greenville", lat: 43.1775, lng: -85.2528, region: "North & East" },
  { name: "Ionia", lat: 42.9872, lng: -85.0711, region: "North & East" },
  { name: "Jenison", lat: 42.9072, lng: -85.792, region: "Lakeshore" },
  { name: "Hudsonville", lat: 42.8708, lng: -85.8653, region: "Lakeshore" },
  { name: "Allendale", lat: 42.9722, lng: -85.9536, region: "Lakeshore" },
  { name: "Zeeland", lat: 42.8125, lng: -86.0187, region: "Lakeshore" },
  { name: "Holland", lat: 42.7875, lng: -86.1089, region: "Lakeshore" },
  { name: "Grand Haven", lat: 43.0631, lng: -86.2284, region: "Lakeshore" },
  { name: "Muskegon", lat: 43.2342, lng: -86.2484, region: "Lakeshore" },
  { name: "Middleville", lat: 42.7131, lng: -85.4619, region: "South" },
  { name: "Wayland", lat: 42.6736, lng: -85.6447, region: "South" },
  { name: "Hastings", lat: 42.6464, lng: -85.2908, region: "South" },
  { name: "Allegan", lat: 42.5292, lng: -85.8553, region: "South" },
  { name: "Kalamazoo", lat: 42.2917, lng: -85.5872, region: "South" },
  { name: "Battle Creek", lat: 42.3211, lng: -85.1797, region: "South" },
];

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
