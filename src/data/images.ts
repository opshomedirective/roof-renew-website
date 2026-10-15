// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR EVERY IMAGE ON THE SITE.
// Each key maps to a file in /public/images with the same name.
// When rebuilding in GoHighLevel, upload the file with the same
// name to the Media Library and swap the path for its GHL URL.
//
// All photos are licensed stock (Unsplash License) chosen to look
// like West Michigan. PRIORITY: replace with real Roof-Renew photos —
// especially the rejuvenation spray application and a real before/after.
// ─────────────────────────────────────────────────────────────
const p = (file: string) => `/images/${file}`;

export const IMG = {
  // Brand
  logo: p("roof-renew-logo.png"),
  favicon: p("roof-renew-favicon.png"),

  // West Michigan & seasons
  snowyStreet: p("snowy-street-homes.jpg"),
  whiteHomeSnow: p("white-home-heavy-snow.jpg"),
  redHomeSnow: p("red-home-snowy-yard.jpg"),
  grSkylineBridge: p("grand-rapids-skyline-bridge.jpg"),
  grRiverSkyline: p("grand-rapids-river-skyline.jpg"),
  grSunset: p("grand-rapids-sunset.jpg"),
  lakeDunePath: p("lake-michigan-dune-path.jpg"),
  fallRoad: p("fall-road-golden-trees.jpg"),

  // Homes
  aerialGrayRoof: p("aerial-suburban-home-gray-roof.jpg"),
  homeDusk: p("home-dusk-porch-lights.jpg"),
  fallHome: p("michigan-fall-home-golden-trees.jpg"),
  brickAutumn: p("brick-home-autumn-path.jpg"),
  cozyPorch: p("cozy-home-front-porch.jpg"),
  stoneRanch: p("stone-ranch-shingle-roof.jpg"),
  fallDriveway: p("michigan-home-fall-driveway.jpg"),

  // Roofing work & details
  ladderRoof: p("ladder-on-shingle-roof.jpg"),
  dormers: p("older-shake-roof-dormers.jpg"),
  wornTexture: p("worn-shingles-texture.jpg"),
  agingShingles: p("aging-asphalt-shingles.jpg"),
  /** Digital ILLUSTRATION made from aging-asphalt-shingles.jpg (same roof). Not a real result. */
  renewedShingles: p("renewed-shingles-illustration.jpg"),
  gutterLeaves: p("gutter-leaves-shingles.jpg"),
  atticInsulation: p("attic-insulation-inspection.jpg"),

  notCandidate: p("missing-shingle-not-a-candidate.jpg"),

  // Winter & storms
  snowEdge: p("snow-load-roof-edge.jpg"),
  icicleGutter: p("icicles-gutter-ice-dam.jpg"),
  iciclesEdge: p("icicles-roof-edge.jpg"),
  stormLake: p("storm-over-lake.jpg"),
  shelfCloud: p("shelf-cloud-lake.jpg"),
} as const;

export type ImgKey = keyof typeof IMG;
