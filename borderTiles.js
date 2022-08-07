function tileBase(tileContentFunction){

  s = spacing/2
  pg.push()
  pg.strokeWeight(0)
  fillRect(0, 0, spacing, spacing, 0, 0, 'tile', 'nostroke')

  ctx.clip();

  // if(false){
  //   var gradient = ctx.createLinearGradient(-spacing/2,-spacing/2, spacing/2,spacing/2);
  //
  //   gradient.addColorStop(0, getColor(0, 'tile'));
  //   gradient.addColorStop(1,
  //     getColor(1, 'tile')
  //   );
  //
  //   // Set the fill style and draw a rectangle
  //   ctx.fillStyle = gradient;
  //   ctx.fillRect(-spacing/2, -spacing/2, spacing, spacing, 0, 'nostroke');
  //   ctx.stroke()
  //
  // }

  pg.strokeWeight(sW)
  tileContentFunction()

  // pg.push()
  // pg.strokeWeight(sW+2)
  // pg.point(-spacing/2+20,-spacing/2+20)
  // pg.pop()

  pg.pop()
}


function makeTopCornerOrnament() {
  let offset = random(999, 999999)

  pg.push()
  pg.strokeWeight(sW);

  fillRect(0, 0, spacingX, spacingY, 0, 0, 'tile', 'nostroke')

  pg.beginShape();

  let count = 0
  let count2 = 0

  let posx = 0;
  for (let l = 0.5; l < 1; l += 0.01) {
    posx = (sin(l * 2) * spacingX) / 7;
    let posy = map(l, 0, 1, -spacingY / 2, spacingY / 2);

    if(noise(posx*0.05/scale+offset,posy*0.05/scale+offset)<0.3){
      pg.strokeWeight(0)
    }else{
      pg.strokeWeight(
        noise(posx*0.02/scale+offset,posy*0.02/scale+offset)*sW/3.5*3 + random(sW/4,sW/4*2)
      )
    }
    pg.point(posx,posy)
    pg.curveVertex(posx, posy);

    if(count%10 == 0){
      pg.point(posx+15,posy)
      pg.point(posx-15,posy)

      if(count%20 == 0){
        pg.line(posx+15,posy,posx,posy)

      }
      count2++
    }
    count++
  }

  pg.noFill();
  pg.noStroke()
  pg.endShape();

  pg.stroke(0)
  fillEllipse(0, 0, spacingX / 3, 1, 'highlight')
  fillEllipse(0, 0, spacingX / 8, 2, 'highlight')

  pg.pop()
}

function makeBottomCornerOrnament() {
  let offset = random(999, 999999)

  pg.push()
  pg.strokeWeight(sW);

  fillRect(0, 0, spacingX, spacingY, 0, 0, 'tile', 'nostroke')


  pg.beginShape();

  let count = 0
  let count2 = 0

  let posx = 0;
  for (let l = 0; l < 0.5; l += 0.01) {
    posx = (sin(l * 2 + (divY - 1) * 2) * spacingX) / 7;
    let posy = map(l, 0, 1, -spacingY / 2, spacingY / 2);

    if(noise(posx*0.05/scale+offset,posy*0.05/scale+offset)<0.3){
      pg.strokeWeight(0)
    }else{
      pg.strokeWeight(
        noise(posx*0.02/scale+offset,posy*0.02/scale+offset)*sW/3.5*3 + random(sW/4,sW/4*2)
      )
    }
    pg.point(posx,posy)

    pg.curveVertex(posx, posy);

    if(count%10 == 0){
      pg.point(posx+15,posy)
      pg.point(posx-15,posy)

      if(count%20 == 0){
        pg.line(posx+15,posy,posx,posy)
      }
      count2++
    }
    count++
  }


    pg.noStroke()
    pg.endShape();

    pg.stroke(0)
  fillEllipse(0, 0, spacingX / 3, 1, 'highlight')
  fillEllipse(0, 0, spacingX / 8, 2, 'highlight')

  pg.pop()
}

function makeBorderTileOrnament(idx) {
  pg.push()
  fillRect(0, 0, spacing, spacing, 0, idx, 'tile', 'nostroke')
  pg.beginShape();
  pg.curveVertex(-s, -spacing);
  pg.curveVertex(-s, -spacing);
  let posx = 0;

  let offset = random(999,999999)

  let count = 0
  let count2 = 0
  for (let l = -0.1; l < 1.1; l += 0.01) {
    posx = (sin(l * 2 + idx) * spacingX) / 7;
    let posy = map(l, 0, 1, -s, s);

    pg.curveVertex(posx,posy)
    if(count%10 == 0){
      pg.point(posx+15,posy)
      //pg.point(posx-15,posy)

      if(count%20 == 0){
        //pg.line(posx+15,posy,posx,posy)

      }
      count2++
    }
    count++
  }
  pg.curveVertex(-s, spacingY);
  pg.curveVertex(-s, spacingY);

  pg.fill(getColor(1,'tile'))
  pg.noStroke()
  pg.endShape();

  pg.stroke(0)
  for (let l = -0.1; l < 1.1; l += 0.01) {
    posx = (sin(l * 2 + idx) * spacingX) / 7;
    let posy = map(l, 0, 1, -s, s);

    if(noise(posx*0.05/scale+offset,posy*0.05/scale+offset)<0.3){
      pg.strokeWeight(0)
    }else{
      pg.strokeWeight(
        noise(posx*0.02/scale+offset,posy*0.02/scale+offset)*sW/3.5*3 + random(sW/4,sW/4*2)
      )
    }
    pg.point(posx,posy)
  }


  count = 0
  count2 = 0

  for (let l = -0.1; l < 1.1; l += 0.01) {
    posx = (sin(l * 2 + idx) * spacingX) / 7;
    let posy = map(l, 0, 1, -s, s);

    if(count%10 == 0){
      pg.point(posx+15,posy)
      pg.point(posx-15,posy)

      if(count%20 == 0){
        pg.line(posx-15,posy,posx,posy)

      }
      count2++
    }
    count++
  }

  pg.pop()
}



function makeCornerTile(idx) {
  pg.push()
  pg.strokeWeight(sW)
  let s = spacing / 2
  if (idx == 0) {
    drawLine(-s, -s, 0, 0)

    fillEllipse(-s, -s, s, 1, 'highlight')
    fillEllipse(-s, -s, s / 2, 2, 'highlight')

  } else if (idx == 1) {
    drawLine(s, -s, 0, 0)
    fillEllipse(s, -s, s, 1, 'highlight')
    fillEllipse(s, -s, s / 2, 2, 'highlight')
  } else if (idx == 2) {
    drawLine(-s, s, 0, 0)
    fillEllipse(-s, s, s, 1, 'highlight')
    fillEllipse(-s, s, s / 2, 2, 'highlight')
  } else if (idx == 3) {
    drawLine(s, s, 0, 0)
    fillEllipse(s, s, s, 1, 'highlight')
    fillEllipse(s, s, s / 2, 2, 'highlight')
  }


    fillEllipse(0,0,s*1.1,3,'transparent')


  fillEllipse(0, 0, s / 1.65, 1, 'highlight')
  fillEllipse(0, 0, s / 3.75, 2, 'highlight')
  pg.pop()
  pg.push()


  pg.pop()
}

function makeHorizontalBorderTile() {
  drawLine(-s, 0, 0, 0)
  fillEllipse(-s, 0, s, 1, 'highlight')
  fillEllipse(-s, 0, s / 2, 2, 'highlight')
  fillEllipse(spacing/6, 0, s / 1.65, 1, 'highlight')
  fillEllipse(spacing/6, 0, s / 3.75, 2, 'highlight')


}

function makeHorizontalBorderTile2() {
  drawLine(-s, 0, 0, 0)

  pg.push()
  pg.translate(-s-s*.25,0)
  pg.rotate(PI/4)

  fillRect(0, 0, s, s, 5, 1, 'highlight')
  fillRect(0, 0, s / 1.5, s/1.5, 5, 2, 'highlight')
  pg.pop()

  fillEllipse(spacing/6, 0, s / 1.65, 1, 'highlight')
  fillEllipse(spacing/6, 0, s / 3.75, 2, 'highlight')

}

function makeHorizontalBorderTile3() {
  drawLine(-s, 0, 0, 0)

  pg.push()
  pg.translate(-s-s*.25,0)
  pg.rotate(PI/4)

  fillRect(0, 0, s, s, 5, 1)
  fillRect(0, 0, s / 1.5, s/1.5, 5, 2)

  pg.pop()

  pg.push()
  pg.translate(spacing/6,0)
  pg.rotate(PI/4)

  fillRect(0, 0, s / 2.1, s / 2.1, 4, 1)
  fillRect(0, 0, s / 4.2, s / 4.2, 1, 2)

  pg.pop()

  pg.noFill()
  //pg.rect(0, 0, spacing, spacing, 0)
}

function makeHorizontalBorderTile4() {
  drawLine(-s, 0, 0, 0)

  fillEllipse(-s, 0, s, 1)
  fillEllipse(-s, 0, s / 2, 2)

  pg.push()
  pg.translate(spacing/6,0)
  pg.rotate(PI/4)

  fillRect(0, 0, s / 2.1, s / 2.1, 4, 1)
  fillRect(0, 0, s / 4.2, s / 4.2, 1, 2)

  pg.pop()
}

function makeQuiltTileTopBot(idx) {
  drawLine(0, 0, 0, -s);

  for(let a = 0; a < TAU; a+=TAU/12){
    let px = s/5*3 * cos(a)
    let py = -s+s/5*3 * sin(a)

    drawLine(px, py,0,-s)
  }

  fillEllipse(0, -s, s, 1, 'highlight');
  fillEllipse(0, -s, spacingX / 5, 2, 'highlight');

  fillEllipse(0, spacingY / 6, spacingX / 3, 1, 'highlight');
  fillEllipse(0, spacingY / 6, spacingX / 8, 2, 'highlight');
}

function makeTopOrnStart(){
  drawLine(0,0,s,0)
  fillEllipse(0, 0, spacing/4, 1, 'tile');
  fillEllipse(0, 0, spacing / 8, 2, 'highlight');
}

function makeTopOrnEnd(){
  drawLine(0,0,-s,0)
  fillEllipse(0, 0, spacing/4, 1, 'tile');
  fillEllipse(0, 0, spacing / 8, 2, 'highlight');
}

function makeTopOrnMid(){
  drawLine(-s,0,s,0)

  fillEllipse(0, -s/1.5, spacing / 10, 2, 'highlight');
  fillEllipse(0, s/1.5, spacing / 10, 2, 'highlight');

  fillEllipse(0, 0, spacing/3, 1, 'tile');
  fillEllipse(0, 0, spacing / 7, 2, 'highlight');
}

function makeTopOrnStart2(){
  drawLine(-s/8,-s/4,-s/8,s/4)
  drawLine(-s/2,0,s,0)
  fillEllipse(-s/2,0,spacing/4,3,'transparent')
  fillEllipse(-s/2,0,spacing/8,3,'highlight')
  fillRect(s/2,0,s,spacing/3,5,1,'tile')

  if(ornamentStyle2Extended){
    drawLine(s/2,-s/1.5,s/2,s/1.5)
    fillEllipse(s/2,-s/1.5,spacing/12,3,'highlight')
    fillEllipse(s/2,s/1.5,spacing/12,3,'highlight')
  }else{
    drawLine(s/2,-s/4,s/2,s/4)
  }

  drawLine(s/2,0,s,0)
  fillEllipse(s/2,0,spacing/8,3,'highlight')
}

// function makeTopOrnEnd2(){
//   pg.line(s/8,-s/4,s/8,s/4)
//   pg.line(s/2,0,-s,0)
//   fillEllipse(s/2,0,spacing/4,3,'transparent')
//   fillEllipse(s/2,0,spacing/8,3,'highlight')
//   fillRect(-s/2,0,s,spacing/3,5,1,'tile')
//
//   if(ornamentStyle2Extended){
//     pg.line(-s/2,-s/1.5,-s/2,s/1.5)
//     fillEllipse(-s/2,-s/1.5,spacing/12,3,'highlight')
//     fillEllipse(-s/2,s/1.5,spacing/12,3,'highlight')
//   }else{
//     pg.line(-s/2,-s/4,-s/2,s/4)
//   }
//
//   pg.line(-s/2,0,-s,0)
//   fillEllipse(-s/2,0,spacing/8,3,'highlight')
// }

// we can simply flip it vertically
function makeTopOrnEnd2(){
  pg.scale(-1,1)
  makeTopOrnStart2()
}

function makeTopOrnMid2(){
  fillRect(0,0,spacing,spacing/3,5,1,'tile')
  drawLine(-s,0,s,0)
  fillEllipse(0,0,spacing/8,3,'highlight')
  fillEllipse(s/2,0,spacing/8,2,'highlight')
  fillEllipse(-s/2,0,spacing/8,2,'highlight')
}

function makeTopASCIICornerTile(){
  pg.push()

  let vertices = []
  vertices.push({x: 0, y: s})
  vertices.push({x: 0, y: s/3})
  vertices.push({x: -s/3, y: s/3})
  vertices.push({x: -s/3, y: -s/3})
  vertices.push({x: s/3, y: -s/3})
  vertices.push({x: s/3, y:0 })
  vertices.push({x: 0, y:0 })

  ctx.lineWidth = sW*.75
  roundedPoly(ctx, vertices, 5, true, false)
  ctx.lineWidth = sW

  interpolatedLine(0,s,0,s/3)
  interpolatedLine(0,s/3,-s/3,s/3)
  interpolatedLine(-s/3,s/3,-s/3,-s/3)
  interpolatedLine(-s/3,-s/3,s/3,-s/3)
  interpolatedLine(s/3,-s/3,s/3,0)
  interpolatedLine(0,0,s/3,0)
  ctx.stroke()

  fillEllipse(0,0,s/6,1,'highlight')

  pg.pop()
}

function makeBotASCIICornerTile(){
  pg.push()
  pg.scale(1,-1)
  makeTopASCIICornerTile()
  pg.pop()
}

function makeMidASCIICornerTile(){
  pg.push()
  drawLine(0,-s/4*3,0,-s/4)
  drawLine(0,s/4*3,0,s/4)

  fillEllipse(0,0,s/8,3,'highlight')
  pg.pop()
}
