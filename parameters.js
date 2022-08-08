p5.disableFriendlyErrors = true;

const mainSeed = fxrand() * 99999999

/*
  Increase this parameter to increase resolution and DPI
*/
let scale = 1

/*
  GRAPHICS BUFFER ELEMENT
    - Graphics buffer element and it's fixed size
*/

let pg;
let pg_size = 1800 * scale; // roughly 20 cm print at 300 DPI (double at pixelDensity(2))

/*
  CANVAS AND GRAPHICS BUFFER DIMENSIONS
    - change based on the number or horizontal and vertical tiles
    - .- -.
*/

let widMod = 1
let heiMod = 1

/*
  divX and divY will be randomly assigned in the parameter setup function
*/
let divX;
let divY;

/*
  Shadow Blur, StrokeWeight and step size for custom line drawing functions
*/
let shadowBlurAmount = 6 * scale
let sW = 6.5 * scale ;
let sW_inc = 7 * scale;


/*
  Functions that create the different center tiles
  You can technically add your own additional functions
*/
let makeQuiltTiles_orig = [
  makeQuiltTile,
  makeQuiltTile2,
  makeQuiltTile3,
  makeQuiltTile4,
  makeQuiltTile6,
  makeBorderTileOrnament,
  makeHSTTile,
  makeGemTile,
  makePuzzleTileRot,
  makeMirrorTile,
  makeTripleTile,
  makeEllipseTile,
  makeEllipseTileRot
];

/*
  Functions that create the different border and corner tiles
*/

let borderTiles_orig = [
  makeHorizontalBorderTile,
  makeHorizontalBorderTile2,
  makeHorizontalBorderTile3,
  makeHorizontalBorderTile4
]

let ornamentStarts = [makeTopOrnStart, makeTopOrnStart2]
let ornamentEnds = [makeTopOrnEnd, makeTopOrnEnd2]
let ornamentMids = [makeTopOrnMid, makeTopOrnMid2]

let vOrnamentStarts = [makeTopCornerOrnament, makeTopASCIICornerTile]
let vOrnamentEnds = [makeBottomCornerOrnament, makeBotASCIICornerTile]
let vOrnamentMids = [makeBorderTileOrnament, makeMidASCIICornerTile]
