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
  hours: "7AM – 8PM",
  hoursNote: "Eastern Time",
  // Service area: 50-mile radius around ZIP 49512 (Kentwood / Grand Rapids)
  serviceCenter: { lat: 42.8806, lng: -85.5414, radiusMiles: 50, zip: "49512" },
} as const;

export const PROMISES = [
  { title: "The owner inspects your roof", body: "Every inspection is done by Bill Roberson, the owner — not a salesperson. You talk to the person responsible for the work." },
  { title: "Free, no-pressure inspections", body: "We get up on the roof, photograph what we find and walk you through it. If your roof is fine, we'll tell you." },
  { title: "Straight answers by phone", body: "Not sure what you need? Call or book a phone consultation first — no trip, no obligation." },
  { title: "Built for Michigan winters", body: "Ice & water shield, proper ventilation and careful flashing — the details that matter when snow sits on your roof for months." },
  { title: "Clean, respectful job sites", body: "Landscaping protected, debris hauled away, and a magnetic sweep for nails before we call it done." },
  { title: "Long days, quick replies", body: "We answer from 7AM to 8PM, so you can reach us before work, after work, or the minute you spot a leak." },
] as const;

export const PROCESS = [
  { step: "01", title: "Call or book online", body: "Tell us what's going on. We can start with a phone consultation or schedule a free on-site inspection." },
  { step: "02", title: "Owner-led inspection", body: "Bill inspects the roof personally — shingles, flashing, vents, gutters and attic ventilation — and photographs everything." },
  { step: "03", title: "Clear recommendation", body: "You get a plain-English explanation and a written estimate: repair, replace, or leave it alone." },
  { step: "04", title: "Roof renewed", body: "We do the work right, protect your property, clean up completely and walk the finished roof with you." },
] as const;

export const SEASONS = [
  {
    key: "Winter",
    title: "Snow load & ice dams",
    body: "Heat escaping into the attic melts snow on the upper roof; it refreezes at the cold eaves and forms an ice dam. Water backs up under the shingles and into ceilings and walls.",
    tips: ["Ice & water shield along the eaves", "Balanced intake & ridge ventilation", "Watch for heavy icicles at the gutters"],
    img: "icicleGutter",
  },
  {
    key: "Spring",
    title: "Thaw, rain & wind",
    body: "As the snow melts, spring storms and strong west winds off Lake Michigan find every loose shingle and tired seal the winter left behind.",
    tips: ["Look for missing or lifted shingles", "Check ceilings for new stains", "Schedule a free post-winter inspection"],
    img: "shelfCloud",
  },
  {
    key: "Summer",
    title: "Heat & UV",
    body: "Long sunny days bake an under-ventilated attic and age shingles from underneath — granules wash into the gutters and shingles start to curl.",
    tips: ["Granules collecting in gutters", "Curling or cracked shingles", "Hot, stuffy upstairs rooms"],
    img: "aerialGrayRoof",
  },
  {
    key: "Fall",
    title: "Leaves & prep for winter",
    body: "Clogged gutters and worn flashing are a recipe for ice dams once the snow arrives. Fall is the best time to fix small problems before they freeze.",
    tips: ["Clear leaves from gutters & valleys", "Repair flashing & pipe boots", "Get a roof check before the first snow"],
    img: "gutterLeaves",
  },
] as const;

export const HEALTH_CHECK = [
  { q: "How old is your roof?", options: [["Under 10 years", 0], ["10–17 years", 1], ["18–25 years", 2], ["Over 25 / not sure", 2]] },
  { q: "Any leaks or ceiling stains?", options: [["None", 0], ["One small spot", 1], ["More than one", 2], ["Active leak right now", 3]] },
  { q: "What do the shingles look like?", options: [["Flat & even", 0], ["Some granule loss", 1], ["Curling, cracked or missing", 2], ["Moss or dark streaks", 1]] },
  { q: "Ice dams or big icicles in winter?", options: [["Never", 0], ["Once in a while", 1], ["Every winter", 2], ["Not sure", 1]] },
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
  { q: "Are your roof inspections really free?", a: "Yes. We inspect the roof, photograph what we find and explain it — with no cost and no obligation." },
  { q: "Who will inspect my roof?", a: "The owner, Bill Roberson. You'll talk directly with the person responsible for your roof — not a commissioned salesperson." },
  { q: "Can I start with a phone call instead?", a: "Absolutely. Many homeowners start with a quick phone consultation to describe what they're seeing, and we'll tell you whether an on-site inspection makes sense." },
  { q: "How do I know if I need a repair or a full replacement?", a: "It depends on the age and condition of the whole roof. Isolated damage on a healthy roof usually means a repair. Widespread curling, granule loss or repeated leaks usually mean it's time to replace. We'll show you photos either way." },
  { q: "What causes ice dams — and can you stop them?", a: "Ice dams form when attic heat melts snow that then refreezes at the colder eaves. The fix is a combination of proper attic ventilation, insulation and ice & water shield along the eaves. We check all three." },
  { q: "Can you replace a roof in the winter?", a: "Shingle manufacturers have cold-weather installation guidelines, and many repairs can be done year-round. Full replacements are easiest from spring through fall — we'll plan the right timing with you." },
  { q: "What areas do you serve?", a: "Grand Rapids and a 50-mile radius around it: Kentwood, Wyoming, Grandville, Rockford, Lowell, Ada, Holland, Grand Haven, Muskegon, Hastings and more." },
  { q: "What are your hours?", a: "We're available from 7AM to 8PM (Eastern). Call (616) 265-9270." },
] as const;

export const NAV = [
  { label: "Services", to: "/services" },
  { label: "Michigan Roofs", to: "/michigan-roofs" },
  { label: "About", to: "/about" },
  { label: "Service Area", to: "/service-area" },
  { label: "Contact", to: "/contact" },
] as const;
