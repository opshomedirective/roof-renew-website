// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR EVERY IMAGE ON THE SITE.
// Each key maps to a file in /public/images with the same name.
// When rebuilding in GoHighLevel, upload the file with the same
// name to the Media Library and swap the path for its GHL URL.
//
// All photos are licensed stock (Unsplash License) chosen to look
// like West Michigan, until Roof-Renew has its own job photos.
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
  stoneRanch: p("stone-ranch-new-roof.jpg"),
  fallDriveway: p("michigan-home-fall-driveway.jpg"),

  // Roofing work & details
  tearOff: p("roofers-tear-off-old-roof.jpg"),
  hammerRemoval: p("roofer-hammer-shingle-removal.jpg"),
  ladderRoof: p("ladder-on-shingle-roof.jpg"),
  dormers: p("older-shake-roof-dormers.jpg"),
  wornDormer: p("worn-shingle-roof-dormer.jpg"),
  wornTexture: p("worn-shingles-texture.jpg"),
  mossShingles: p("moss-on-asphalt-shingles.jpg"),
  rainDrip: p("rain-dripping-shingle-roof.jpg"),
  gutterLeaves: p("gutter-leaves-shingles.jpg"),
  atticInsulation: p("attic-insulation-inspection.jpg"),
  atticTrusses: p("attic-trusses-framing.jpg"),

  // Winter & storms
  snowEdge: p("snow-load-roof-edge.jpg"),
  icicleGutter: p("icicles-gutter-ice-dam.jpg"),
  iciclesEdge: p("icicles-roof-edge.jpg"),
  stormTree: p("storm-tree-damage-home.jpg"),
  stormLake: p("storm-over-lake.jpg"),
  shelfCloud: p("shelf-cloud-lake.jpg"),
} as const;

export type ImgKey = keyof typeof IMG;
