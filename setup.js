
/*
  Loading screen while waiting for the artwork
*/
function setupLoadingScreen(){
  let bod = document.getElementById('bod')
  div = document.createElement("div")
  div.setAttribute('class', 'lds-ellipsis')

  div.appendChild(document.createElement("div"))
  div.appendChild(document.createElement("div"))
  div.appendChild(document.createElement("div"))
  div.appendChild(document.createElement("div"))

  bod.appendChild(div)
}

/*
  Randomizes sketch parameters
*/
function parameterSetup() {
  // Prune possibility space a bit, aesthetically I don't like small grids like 3x3, 3x4 or 4x4
  if(random()>.5){
    divX = random([3, 4, 5, 6, 7, 8, 4, 5, 6, 7, 8, 9]);

    if(divX < 5){
      divY = random([6, 7, 8, 6, 7, 8, 9]);
    }else if(divX > 7){
      divY = random([3, 4, 5, 6, 7, 3, 4, 5, 6, 7, 3, 4, 5, 6, 7, 8, 9]);
    }else{
      divY = random([3, 4, 5, 6, 7, 8, 4, 5, 6, 7, 8, 9]);
    }

  }else{

    divY = random([3, 4, 5, 6, 7, 8, 4, 5, 6, 7, 8, 9]);

    if(divY < 5){
      divX = random([6, 7, 8, 6, 7, 8, 9]);
    }else if(divY > 7){
      divX = random([3, 4, 5, 6, 7, 3, 4, 5, 6, 7, 3, 4, 5, 6, 7, 8, 9]);
    }else{
      divX = random([3, 4, 5, 6, 7, 8, 4, 5, 6, 7, 8, 9]);
    }
  }

  aspect_ratio = '1:1'

  if(divX>divY){
    widMod = 1.25
    sW -= 1

    aspect_ratio = '5:4'

    if(divX>divY*2){
      widMod = 1.5
      sW += 2

      aspect_ratio = '3:2'

    }
  }

  if(divY>divX){
    heiMod = 1.25
    sW -=1

    aspect_ratio = '4:5'

    if(divY>divX*2){
      heiMod = 1.5
      sW += 2

      aspect_ratio = '2:3'

    }
  }

  if(widMod == 1 && heiMod == 1){
    widMod = 1.25
    heiMod = 1.25
  }

  // CREATE CANVAS AND GRAPHICS BUFFER
  w = min(windowWidth, windowHeight);
  wx = ceil(w * widMod);
  wy = ceil(w * heiMod);

  createCanvas(wx, wy);

  pg_sizex = ceil(pg_size * widMod);
  pg_sizey = ceil(pg_size * heiMod);

  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if(isSafari){
    function limitSize(size, maximumPixels) {
      console.log(size)
      const [ width, height ] = size;

      const requiredPixels = width * height;
      if (requiredPixels <= maximumPixels) return { width, height };

      const scalar = Math.sqrt(maximumPixels) / Math.sqrt(requiredPixels);
      return {
          width: Math.floor(width * scalar),
          height: Math.floor(height * scalar),
          mainSize: Math.floor(pg_size * scalar),
      };
    }

    const maximumPixels = 4097 * 4096
    const safariSize = limitSize([(pg_sizex/2), (pg_sizey/2)], maximumPixels)

    console.log(safariSize)

    pg_sizex = safariSize.width
    pg_sizey = safariSize.height
  }

  pg = createGraphics(pg_sizex, pg_sizey);

  pg.strokeJoin(ROUND)

  ctx = pg.canvas.getContext("2d");

  ctx.shadowColor = "black";
  ctx.shadowBlur = shadowBlurAmount;

  // SET PIXEL DENSITY


  pg.pixelDensity(2)
  pixelDensity(2)


  pad = pg_size / 6;
  if(divX > 6 || divY > 6){
    pad = pg_size/8
  }

  if(isSafari){
    pad = pg_size/14
  }


  spacingX = (pg_sizex - pad * 2) / divX;
  spacingY = (pg_sizey - pad * 2) / divY;

  spacing = min(spacingX, spacingY)
  spacingX = spacing
  spacingY = spacing

  borstenLaenge = spacing / 5 + random(spacing/16, spacing/8)

  makeQuiltTiles = shuffle(makeQuiltTiles_orig, false);



  // determines style of border tile
  borderTypeStyle = random(['ROUNDROUND', 'ROUNDSPIKEY', 'SPIKEYROUND', 'SPIKEYSPIKEY', 'ALTERNATE'])
  borderTiles = shuffle(borderTiles_orig, true)

  //topBotOrnamentStyle
  topBotOrnament = random([false, true])

  ornamentStyle = random([0, 1])
  ornamentStyle2Extended = random([false, true])

  colorShift1 = random([true, false, false])
  colorShift2 = random([true, false, false, false, false, false])
  colorRat = .95


  carpetBindingDensity =  random(26, 52)

  vOrnamentStyle = random([0, 1])

  // set these to false for the original 'clean' look
  toggleLineStyle = true
  toggleCircleStyle = true
  toggleRectStyle = true


}

/*
  Function that makes the main color selections, and shuffles palettes as well
*/
function colorSetup(){
  selectedColorObject = random(colorObjects)

  // colors get hue shifted a tiny amount

  let hueShiftAmount = random(-4, 4)

  // select and shuffle colors for main sketch
  tileColors_orig = selectedColorObject.tileColors
  tileColors_orig = saturatePalette(tileColors_orig, hueShiftAmount)

  tileColors = shuffle(tileColors_orig, false)

  highlightColors_orig = selectedColorObject.highlightColors
  highlightColors_orig = saturatePalette(highlightColors_orig, hueShiftAmount)

  highlightColors = shuffle(highlightColors_orig, false)

  backgroundColor = random(selectedColorObject.backgroundColors)

  // background colors gets a little bit desaturated and darkened
  backgroundColor = changeHexSaturation(backgroundColor, -20)
  backgroundColor = changeHexLightness(backgroundColor, -3)
  pg.background(backgroundColor)
}

/*
  Function that creates the fxhash feature object
*/

function setFeatures(){
  window.$fxhashFeatures = {
    "Palette": selectedColorObject.name,
    "Aspect Ratio": aspect_ratio
  }

  console.log(window.$fxhashFeatures)
}
