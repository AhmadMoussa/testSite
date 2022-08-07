/*
	Exotic Quarpets

  parameters.js -> global parameters of the sketch

  index.js -> Everything else is run from this p5 powered centerpiece
  setup.js -> setup canvas, graphics buffer, parameters, features and colors

  quarpet.js -> main logic that determines which tiles to draw, the Quarpet
  nonBorderTiles.js -> tile drawing functions of the center tiles
  borderTiles.js -> tile drawing functions for the edge/corner tiles

  fringes.js -> draws the fringes on either endof the quarpet
  backgroundDecoration.js -> draws the items that appear in the background

  colors.js -> color palettes
  colorUtils.js -> utility functions for color selection and manipulation

  customDrawingFunctions -> functions for custom shape drawing

  rounded.js -> funciton that allows for drawing rounded off polygonal shapes
  utilityFunctions.js -> grain maker and windowResize Handler
*/

/*

  Exotic Quarpets began as a submission to Raphaelle de Courville's weekly creative coding challenge, with the topic being 'Quilts'. Taking inspiration from the Persian rugs that we would roll out at home every winter, I tried to create an aesthetic reminiscent of those with a gen-art touch.

  The generated images, depending on the aspect ratio that you get, are quite large at 5kx5k pixels, which should be sufficient for 300 DPI prints. Generating these images can take a few seconds, so please be patient. Save the high rez image by pressing S, I recommend zooming in and having a look at all the details!

*/

/*
  SETUP FUNCTION
*/

let canvasReady = 0

function setup() {
  setupLoadingScreen()
}

/*
  Separate function, can be reused in image saver function
  Resetting seed at the top is very important.
*/
function makeSketch(){

  // set the random seeds
  randomSeed(int(mainSeed))
  noiseSeed(int(mainSeed))

  // initialize parameters, features and colors
  parameterSetup()

  colorSetup()
  setFeatures()

  // generate the background graphics
  makeBackgroundDecoration()

  // make the shadow, should encapsulate this somehow
  pg.translate(pg_sizex/24*scale,pg_sizex/18*scale)
  ctx.shadowBlur = shadowBlurAmount/2
  fillRect(pg_sizex/2-divX*spacing/2,pg_sizey/2-divY*spacing/2,divX*spacing, divY*spacing, spacing/8, 0, 'black', 'nostroke')
  makeFringes('background');
  makeCornerFringes('background');
  pg.translate(-pg_sizex/24*scale,-pg_sizex/18*scale)

  // generate the tiles and the fringes
  ctx.shadowBlur = shadowBlurAmount
  generateQuarpet();
  makeFringes();
  makeCornerFringes();


  // grain and finally show the image
  granulate(75);
  canvasReady = 1
}

let pg_overlay;

function draw(){
  if(!canvasReady){
    makeSketch()

    // super important for getting the fxhash preview, graphics should be done after makeSketch is complete
    fxpreview()
  }else{
    div.remove()
    image(pg,0,0,wx,wy)

    noLoop()
  }
}
