import type { ImgKey } from "./images";

export type Service = {
  slug: string;
  title: string;
  icon: string;
  short: string;
  tagline: string;
  hero: ImgKey;
  images: [ImgKey, ImgKey];
  badges: [string, string, string];
  headline: string;
  intro: string[];
  signsTitle: string;
  signs: string[];
  includesTitle: string;
  includes: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

// Roof-Renew's offer, aligned with the live ad campaign:
// roof rejuvenation for aging asphalt shingles + a free candidate inspection.
// Do NOT add replacement, repair, storm or ventilation services unless the
// client confirms he offers them.
export const SERVICES: Service[] = [
  {
    slug: "roof-rejuvenation",
    title: "Roof Rejuvenation",
    icon: "Sparkles",
    short: "A spray-applied treatment that may help restore aging asphalt shingles and extend your roof's life — for far less than a new roof.",
    tagline: "Roof rejuvenation for aging asphalt shingle roofs in Grand Rapids, Kent County and West Michigan. Before you replace your roof, see if you can renew it first.",
    hero: "aerialGrayRoof",
    images: ["wornTexture", "stoneRanch"],
    badges: ["Save Thousands vs. Replacement", "Spray-Applied Treatment", "Owner-Led Candidate Check"],
    headline: "Before you replace your roof, see if you can renew it first.",
    intro: [
      "Asphalt shingles don't usually fail all at once. Years of sun, summer heat and Michigan's freeze-thaw cycles slowly dry out the oils that keep them flexible. They fade, turn brittle and start shedding granules — and that's when many homeowners are told they need a whole new roof.",
      "Roof rejuvenation is a spray-applied treatment designed to soak into aging shingles and help restore their flexibility. When your roof is a good candidate, it may extend its life and save you thousands compared to a full replacement — without a tear-off, a dumpster in the driveway or tons of old shingles going to a landfill.",
    ],
    signsTitle: "Signs your roof may be a good candidate",
    signs: [
      "Asphalt shingles that look faded, dull or dry",
      "Some granules collecting in the gutters and downspouts",
      "Shingles that feel stiff or brittle, but are still in place",
      "Your roof is aging and someone mentioned replacement",
      "No active leaks or missing shingles",
      "You'd like more years out of your roof before replacing it",
    ],
    includesTitle: "What your rejuvenation includes",
    includes: [
      "Free owner-led inspection",
      "Candidate check with photos",
      "Clear, written price up front",
      "Protection for landscaping, siding & gutters",
      "Roof surface cleared of loose debris",
      "Spray-applied rejuvenation treatment",
      "Application on a suitable dry day",
      "Final walkthrough with you",
    ],
    faqs: [
      { q: "How does roof rejuvenation work?", a: "The treatment is sprayed across your shingles and is designed to soak in and help restore the flexibility they lose as they age. The goal is to extend the useful life of a roof that's aging but still intact." },
      { q: "Is it right for every roof?", a: "No. It's meant for asphalt shingle roofs that are aging but still intact. Roofs with active leaks, missing shingles, soft decking or widespread severe damage aren't candidates — and we'll tell you that honestly." },
      { q: "Will my roof look different afterward?", a: "Many homeowners notice their shingles look richer and more even afterward, but the main goal is protecting the roof — not just its appearance." },
      { q: "How long will it last?", a: "It depends on your roof's age and condition. We'll explain what you can realistically expect for your roof during the inspection." },
      { q: "How much does it cost?", a: "Every roof is different, so we price it after the free inspection. When your roof is a good candidate, rejuvenation costs far less than a full replacement." },
    ],
    related: ["roof-inspections"],
  },
  {
    slug: "roof-inspections",
    title: "Free Roof Inspection",
    icon: "ScanSearch",
    short: "An owner-led inspection with photos to find out if your roof can be renewed — free, with no pressure and no obligation.",
    tagline: "Free roof inspections in Grand Rapids, Kent County and West Michigan — find out if your roof can be renewed before you replace it.",
    hero: "dormers",
    images: ["atticInsulation", "ladderRoof"],
    badges: ["100% Free", "Done by the Owner", "Photos of Everything"],
    headline: "Find out if your roof can be renewed.",
    intro: [
      "Before you spend thousands on a new roof, get a straight answer about the one you have. A free inspection tells you whether your shingles are a good candidate for rejuvenation — or whether they're past the point where it can help.",
      "Bill Roberson, the owner, inspects every roof himself. He checks the condition of the shingles, looks for leaks, missing shingles and soft spots, photographs what he finds, and walks you through it in plain English.",
    ],
    signsTitle: "Good times to get an inspection",
    signs: [
      "Someone told you it's time to replace your roof",
      "Your shingles look faded, dull or tired",
      "You're finding granules in the gutters",
      "Every spring, after the snow melts",
      "Before buying or selling a home",
      "Your roof is 10+ years old and you're not sure where it stands",
    ],
    includesTitle: "What we check",
    includes: [
      "Overall shingle condition",
      "Fading, dryness and brittleness",
      "Granule loss",
      "Curling, cracking or missing shingles",
      "Signs of leaks or soft decking",
      "Moss or dark streaks",
      "Photo report you can keep",
      "A clear answer: candidate or not",
    ],
    faqs: [
      { q: "Is the inspection really free?", a: "Yes — free and with no obligation." },
      { q: "What if my roof isn't a candidate?", a: "Then we'll tell you, show you the photos, and explain why. We won't sell you a treatment that won't help your roof." },
      { q: "How long does it take?", a: "Most inspections take under an hour, depending on the size and pitch of the roof." },
      { q: "Can we start with a phone call?", a: "Yes. Phone consultations are available — describe what you're seeing and we'll tell you whether an on-site inspection makes sense." },
    ],
    related: ["roof-rejuvenation"],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
