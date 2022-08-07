
/* ------------------------------------------------------------
  UTILITY FUNCTIONS - STAFF ONLY
---------------------------------------------------------------   */

// handle window resize / redraw graphics buffer
function windowResized() {
  w = min(windowWidth, windowHeight);
  wx = w * widMod;
  wy = w * heiMod;

  resizeCanvas(wx, wy);
  image(pg, 0, 0, wx, wy);
}

// El-Granulador
function granulate(gA) {

  pg.loadPixels();

  let d = pg.pixelDensity();
  let halfImage = 4 * (pg.width * d) * (pg.height * d);
  for (let ii = 0; ii < halfImage; ii += 4) {
    grainAmount = random(-gA, gA);
    if(pg.pixels[ii] < 12 && pg.pixels[ii+1] < 12 && pg.pixels[ii+2] < 12){
      pg.pixels[ii] = pg.pixels[ii] + grainAmount;
      pg.pixels[ii + 1] = pg.pixels[ii + 1] + grainAmount;
      pg.pixels[ii + 2] = pg.pixels[ii + 2] + gA*.75 + grainAmount*.25;
      pg.pixels[ii + 3] = pg.pixels[ii + 3] + 255;
    }else{
      pg.pixels[ii] = pg.pixels[ii] + gA*.75 + grainAmount*.25;
      pg.pixels[ii + 1] = pg.pixels[ii + 1] + grainAmount;
      pg.pixels[ii + 2] = pg.pixels[ii + 2] + grainAmount;
      pg.pixels[ii + 3] = pg.pixels[ii + 3] + 255;
    }

    /* //INTERESTING EXPLORATION
    let mod1 = map(pg.pixels[ii],0,255,0,1)
    let mod2 = map(pg.pixels[ii+1],0,255,0,1)
    let mod3 = map(pg.pixels[ii+2],0,255,0,1)

    let overallMod = map(mod1+mod3,0,2,0,1)

    pg.pixels[ii] = pg.pixels[ii] + grainAmount*overallMod + gA*(1-overallMod);
    pg.pixels[ii + 1] = pg.pixels[ii + 1] + grainAmount;
    pg.pixels[ii + 2] = pg.pixels[ii + 2] + gA*overallMod*2 + grainAmount*(1-overallMod);
    pg.pixels[ii + 3] = pg.pixels[ii + 3] + 255;
    */


    // pg.pixels[ii] = pg.pixels[ii] + gA/4*3 + grainAmount/4;
    // pg.pixels[ii + 1] = pg.pixels[ii + 1] + grainAmount/4*3;
    // pg.pixels[ii + 2] = pg.pixels[ii + 2] + grainAmount;
    // pg.pixels[ii + 3] = pg.pixels[ii + 3] + 255;
  }

  pg.updatePixels();
}

/*
  Safari has a pretty low limit when it comes to canvas size at 4097 × 4096
  which my sketch exceeds, this makes the getImageData() function break
*/

// function granulate(){
//   var imageData = ctx.getImageData(0, 0, pg_sizex*2, pg_sizey*2);
//   var pixels = imageData.data;
//   var i;
//
//   let d = pg.pixelDensity();
//   for (i = 0; i < 4 * (pg_sizex * d) * (pg_sizey * d); i += 4) {
//       // Is this pixel *red* ?
//       if (pixels[i] > 100) {
//           pixels[i] = 255;
//           pixels[i + 1] = 255;
//           pixels[i + 2] = 255;
//       }
//   }
//
//   console.log(pixels)
//   const newImData = new ImageData(pixels, pg_sizex*2, pg_sizey*2)
//   ctx.putImageData(newImData,0,0);
// }




// last array element becomes the first
// obsolete, better arr.push(arr.shift())
function shiftArray(arr) {
  arr.push(arr.splice(0, 1)[0]);
}
