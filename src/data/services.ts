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

export const SERVICES: Service[] = [
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    icon: "Home",
    short: "A complete tear-off and a new shingle roof system built to handle West Michigan snow, ice and wind.",
    tagline: "Full roof replacement for homes in Grand Rapids, Kentwood, Wyoming and across West Michigan.",
    hero: "tearOff",
    images: ["hammerRemoval", "aerialGrayRoof"],
    badges: ["Complete Tear-Off", "Ice & Water Shield", "Owner-Led From Start to Finish"],
    headline: "When patching stops making sense, renew the whole roof.",
    intro: [
      "A new roof is one of the biggest investments you'll make in your home, so it deserves a careful plan. We start with a free inspection and photos, then walk you through exactly what needs to come off, what's hiding underneath, and what the new system will include.",
      "Every replacement is a full system — not just new shingles on top. That means the decking, the ice & water shield along the eaves, the underlayment, the flashing and the ventilation are all done right, because that's what keeps water out during a Michigan winter.",
    ],
    signsTitle: "Signs it's time for a new roof",
    signs: [
      "Shingles that are curling, cracking or missing in several areas",
      "Granules collecting in the gutters and downspouts",
      "Leaks in more than one spot, or the same leak coming back",
      "Ice dams and big icicles every single winter",
      "Sagging areas or soft spots in the roof deck",
      "Your roof is 20+ years old and you're not sure what's left",
    ],
    includesTitle: "What your roof replacement includes",
    includes: [
      "Free inspection with photos",
      "Full tear-off down to the decking",
      "Damaged decking replaced",
      "Ice & water shield along eaves and valleys",
      "Synthetic underlayment",
      "New drip edge, flashing and pipe boots",
      "Architectural shingles in your choice of color",
      "Balanced intake & ridge ventilation",
      "Landscaping protection and full cleanup",
      "Magnetic nail sweep and final walkthrough",
    ],
    faqs: [
      { q: "How long does a roof replacement take?", a: "Most homes are finished in one to three days once materials are delivered, depending on size, pitch and weather." },
      { q: "Do I need to be home during the work?", a: "No, but we'll walk the roof with you before we start and again when we finish." },
      { q: "Can you go over my old shingles?", a: "We recommend a full tear-off. It lets us inspect and repair the decking and install ice & water shield correctly — layering over hides problems and adds weight." },
      { q: "What color and style options do I have?", a: "Architectural shingles come in a wide range of colors. We'll bring samples and help you choose something that fits your home." },
    ],
    related: ["ice-dams-ventilation", "roof-inspections", "roof-repair"],
  },
  {
    slug: "roof-repair",
    title: "Roof Repair & Leaks",
    icon: "Wrench",
    short: "Leaks, missing shingles, flashing and pipe boots fixed properly — so you don't need a whole new roof before it's time.",
    tagline: "Roof leak repair for homes in Grand Rapids and West Michigan — from missing shingles to flashing and pipe boots.",
    hero: "rainDrip",
    images: ["ladderRoof", "wornDormer"],
    badges: ["Leak Tracing", "Shingle & Flashing Repair", "Honest Repair-vs-Replace"],
    headline: "Most leaks don't need a new roof. They need the right fix.",
    intro: [
      "A water stain on the ceiling can come from a missing shingle, a cracked pipe boot, failed flashing around a chimney, or an ice dam that pushed water under the shingles. Water travels, so the stain is rarely right under the problem.",
      "We trace the leak back to where it's actually getting in, show you a photo of it, and fix it properly. If the rest of your roof is in good shape, a repair is exactly what we'll recommend.",
    ],
    signsTitle: "Common reasons we get called",
    signs: [
      "A new stain on a ceiling or wall",
      "Shingles blown off after a windy day",
      "Drips around a chimney, skylight or vent",
      "Water in the attic after snow melts",
      "Cracked or rotted pipe boots",
      "Loose gutters or damaged drip edge",
    ],
    includesTitle: "Repairs we handle",
    includes: [
      "Leak tracing and repair",
      "Missing, creased or lifted shingles",
      "Chimney, wall and skylight flashing",
      "Pipe boots and roof vents",
      "Valley repairs",
      "Small decking repairs",
      "Drip edge and eave repairs",
      "Ice dam damage repair",
    ],
    faqs: [
      { q: "Can you find a leak that's hard to track down?", a: "Yes. We inspect the roof surface and the attic to follow the water back to the source, and we photograph it so you can see it too." },
      { q: "Can you match my existing shingles?", a: "Usually very closely. If your shingles are discontinued or very weathered, we'll tell you up front how the repair will look." },
      { q: "Should I repair or replace?", a: "If the damage is isolated and the rest of the roof is healthy, repair it. If problems are spread across the whole roof, repairs become a recurring cost. We'll be honest about which one you're facing." },
    ],
    related: ["roof-inspections", "storm-wind-damage", "roof-replacement"],
  },
  {
    slug: "roof-inspections",
    title: "Free Roof Inspections",
    icon: "ScanSearch",
    short: "An owner-led, top-to-bottom inspection with photos — free, with no pressure and no obligation.",
    tagline: "Free roof inspections in Grand Rapids and West Michigan, done personally by the owner.",
    hero: "dormers",
    images: ["atticInsulation", "ladderRoof"],
    badges: ["100% Free", "Done by the Owner", "Photos of Everything"],
    headline: "Know exactly where your roof stands.",
    intro: [
      "Whether you just made it through a rough winter, you're buying or selling a home, or nobody has been on your roof in years, a free inspection gives you a clear picture.",
      "Bill Roberson, the owner, inspects every roof himself. He checks the shingles, flashing, vents, gutters and — when there's access — the attic ventilation and insulation, then walks you through the photos in plain English.",
    ],
    signsTitle: "Good times to get an inspection",
    signs: [
      "Every spring, after the snow melts",
      "After a strong windstorm or hail",
      "Before buying or selling a home",
      "When you notice ice dams or big icicles",
      "Before the first snow of the season",
      "If your roof is 15+ years old",
    ],
    includesTitle: "What we check",
    includes: [
      "Shingle condition and granule loss",
      "Wind and storm damage",
      "Flashing at chimneys, walls and valleys",
      "Pipe boots and roof penetrations",
      "Gutters and drip edge",
      "Attic ventilation and insulation (when accessible)",
      "Signs of leaks, rot or ice dams",
      "Photo report and a clear recommendation",
    ],
    faqs: [
      { q: "Is the inspection really free?", a: "Yes — free and with no obligation." },
      { q: "How long does it take?", a: "Most inspections take under an hour, depending on the size and pitch of the roof." },
      { q: "Can we start with a phone call?", a: "Yes. Phone consultations are available — describe what you're seeing and we'll tell you whether an on-site inspection makes sense." },
    ],
    related: ["roof-repair", "ice-dams-ventilation", "roof-replacement"],
  },
  {
    slug: "storm-wind-damage",
    title: "Storm & Wind Damage",
    icon: "CloudLightning",
    short: "Wind-lifted and missing shingles, fallen-branch damage and storm leaks inspected and repaired fast.",
    tagline: "Storm and wind damage roof repair for homes in Grand Rapids, the Lakeshore and West Michigan.",
    hero: "stormTree",
    images: ["shelfCloud", "wornTexture"],
    badges: ["Fast Storm Response", "Wind & Branch Damage", "Photo Documentation"],
    headline: "After a West Michigan storm, get eyes on your roof.",
    intro: [
      "Strong winds off Lake Michigan and summer thunderstorms can lift shingles, break their seal and drop branches onto your roof. A lot of that damage is invisible from the ground until the next rain finds its way inside.",
      "Call us after a storm and we'll inspect the roof, photograph any damage, make temporary repairs if needed, and give you a clear plan to fix it right.",
    ],
    signsTitle: "Check for these after a storm",
    signs: [
      "Shingles in the yard or on the driveway",
      "Creased or lifted shingle tabs",
      "Branches or limbs on the roof",
      "Dented vents, gutters or flashing",
      "New drips or stains inside",
      "Exposed underlayment or decking",
    ],
    includesTitle: "How we help",
    includes: [
      "Storm damage inspection",
      "Photos of all damage",
      "Temporary protection when needed",
      "Wind-damaged shingle replacement",
      "Flashing and vent repairs",
      "Full replacement when damage is widespread",
    ],
    faqs: [
      { q: "How soon after a storm should I get my roof checked?", a: "As soon as it's safe. Wind-damaged shingles can let water in with the very next rain." },
      { q: "Is it safe for me to go on the roof to look?", a: "We don't recommend it. Call us — we'll inspect it safely and show you photos." },
      { q: "Can you tell storm damage from normal wear?", a: "Yes, and we'll be honest about which one we're seeing." },
    ],
    related: ["roof-repair", "roof-inspections", "roof-replacement"],
  },
  {
    slug: "ice-dams-ventilation",
    title: "Ice Dams & Ventilation",
    icon: "Snowflake",
    short: "Stop ice dams at the source with the right ventilation, insulation checks and ice & water shield.",
    tagline: "Ice dam prevention, attic ventilation and winter roof protection for West Michigan homes.",
    hero: "icicleGutter",
    images: ["atticTrusses", "snowEdge"],
    badges: ["Ice & Water Shield", "Ridge & Intake Ventilation", "Built for Michigan Winters"],
    headline: "Big icicles aren't charming. They're a warning sign.",
    intro: [
      "Ice dams are one of the most common causes of winter leaks in Michigan. Warm air leaks into the attic, melts the snow on the upper roof, and the water refreezes at the colder eaves — building a ridge of ice that traps the next melt and pushes it up under your shingles.",
      "The fix isn't just chipping ice. It's a roof system designed for winter: balanced intake and ridge ventilation to keep the roof deck cold, attention to attic insulation, and ice & water shield along the eaves so trapped water can't get through.",
    ],
    signsTitle: "Signs you have an ice dam problem",
    signs: [
      "Thick ridges of ice along the gutters",
      "Large icicles hanging from the eaves",
      "Water stains on exterior walls or ceilings in winter",
      "Frost or moisture in the attic",
      "Uneven snow melt on the roof",
      "Peeling paint or wet insulation near the eaves",
    ],
    includesTitle: "How we protect your roof",
    includes: [
      "Attic ventilation assessment",
      "Ridge vent installation",
      "Soffit / intake ventilation improvements",
      "Ice & water shield along eaves and valleys",
      "Flashing and drip edge upgrades",
      "Repair of ice dam water damage to the roof",
    ],
    faqs: [
      { q: "What actually causes ice dams?", a: "Heat escaping into the attic warms the roof deck, melting snow that then refreezes at the cold overhangs. Ventilation and insulation keep the deck cold so the snow doesn't melt and refreeze." },
      { q: "Will ice & water shield stop ice dams?", a: "It won't stop the ice from forming, but it stops trapped water from leaking into your home. Ventilation and insulation address the cause." },
      { q: "Can you help in the middle of winter?", a: "Yes. Call us if you're seeing ice dams or leaks — we'll assess it and recommend the right short- and long-term fix." },
    ],
    related: ["roof-replacement", "roof-inspections", "roof-repair"],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
