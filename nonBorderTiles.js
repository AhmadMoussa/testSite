




/*
  Tile with vertical and horizontal tile
*/
function makeQuiltTile(modin, mod) {
  pg.push();
  pg.strokeWeight(sW);

  pg.translate(-s / 2, -s / 2);

  fillRect(0, 0, s, s, 0, 0, 'tile', 'nostroke');
  fillRect(s, 0, s, s, 0, 1, 'tile', 'nostroke');
  fillRect(0, s, s, s, 0, 2, 'tile', 'nostroke');
  fillRect(s, s, s, s, 0, 3, 'tile', 'nostroke');

  pg.translate(s / 2, s / 2);

  drawLine(0, -s, 0, s)
  drawLine(-s, 0, s, 0)

  pg.rotate(PI / 4);
  pg.translate(-s / 2, -s / 2);
  fillRect(s - s / 2, s - s / 2, spacing / 3, spacing / 3, 5, 0, 'highlight')

  if (modin % mod == 0) {
    fillRect(s - s / 2, s - s / 2, spacing / 6, spacing / 6, 2.5, 1, 'highlight')
  } else {
    fillEllipse(s - s / 2, s - s / 2, spacing / 6, 1, 'highlight')
  }

  pg.pop();
}



/*
  Tile with vertical line
*/
function makeQuiltTile2() {


  pg.push();
  pg.strokeWeight(sW);
  pg.translate(-spacing / 4, 0);

  fillRect(0, 0, s, spacing, 0, 0, 'tile', 'nostroke');
  fillRect(s, 0, s, spacing, 0, 1, 'tile', 'nostroke');

  pg.translate(s / 2, 0);

  drawLine(0, -s, 0, s)

  pg.rotate(PI / 4);
  pg.translate(-s / 2, -s / 2);
  fillRect(
    s - s / 2,
    s - s / 2,
    spacing / 3,
    spacing / 3,
    5, 0, 'highlight'
  );

  pg.translate(0, spacing / 4);
  fillEllipse(s - s / 2, 0, spacing / 8, 1, 'highlight');

  pg.pop();
}

/*
  Tile with horizontal line
*/
function makeQuiltTile4() {
  pg.push();
  pg.strokeWeight(sW);
  pg.translate(0, -s / 2);

  fillRect(0, 0, spacing, s, 0, 0, 'tile', 'nostroke');
  fillRect(0, s, spacing, s, 0, 1, 'tile', 'nostroke');

  pg.translate(0, s / 2);

  drawLine(-s, 0, s, 0)

  pg.rotate(PI / 4);
  pg.translate(-s / 2, -s / 2);

  fillRect(s - s / 2, s - s / 2, spacing / 3, spacing / 3, 5, 0, 'highlight')

  pg.translate(0, s / 2);
  fillEllipse(s - s / 2, s - s, spacing / 8, 1, 'highlight');

  pg.pop();
}

/*
  Diagonal tile
*/
function makeQuiltTile3() {
  pg.push();
  pg.strokeWeight(sW);

  fillRect(0, 0, spacingX, spacingY, 0, 0, 'tile')

  function makeSeg(idx) {
    pg.rotate(PI / 4);

    fillRect(0, 0, spacingX / 1.4, spacingY / 1.4, 5, idx, 'tile')
  }

  pg.push();
  pg.translate(-spacingX / 2, -spacingY / 2);
  makeSeg(1)
  pg.pop();

  pg.push();
  pg.translate(spacingX / 2, -spacingY / 2);
  makeSeg(2)
  pg.pop();

  pg.push();
  pg.translate(-spacingX / 2, spacingY / 2);
  makeSeg(3)
  pg.pop();

  pg.push();
  pg.translate(spacingX / 2, spacingY / 2);
  makeSeg(4)
  pg.pop();


  pg.push();
  pg.translate(0, 0);
  pg.rotate(PI / 4);
  pg.translate(-spacingX / 4, -spacingY / 4);
  fillRect(spacingX / 2 - spacingX / 4,
    spacingY / 2 - spacingY / 4,
    spacingX / 4,
    spacingX / 4,
    2.5, 0, 'highlight')
  pg.pop();

  pg.pop();

  pg.push();
  pg.noFill();
  pg.strokeWeight(sW);
  fillRect(0, 0, spacingX, spacingY, 0, 0, 'transparent');
  pg.pop();
}

/*
  Tile that looks protruding
*/
function makeQuiltTile6() {
  pg.push();

  makeQuiltTile2();

  pg.stroke(0,0,0,0)
  pg.fill(getColor(0, 'tile'));

  pg.beginShape();
  pg.vertex(spacingX / 2, -spacingY / 2);
  pg.vertex(spacingX / 3, -spacingY / 3);
  pg.vertex(-spacingX / 3, -spacingY / 3);
  pg.vertex(-spacingX / 2, -spacingY / 2);
  pg.endShape();

  pg.stroke(0)
  drawLine(spacingX / 2, -spacingY / 2,spacingX / 3, -spacingY / 3)
  drawLine(-spacingX / 3, -spacingY / 3,-spacingX / 2, -spacingY / 2)

  pg.stroke(0,0,0,0)
  pg.fill(getColor(1, 'tile'));
  pg.beginShape();

  pg.vertex(spacingX / 2, spacingY / 2);
  pg.vertex(spacingX / 3, spacingY / 3);
  pg.vertex(spacingX / 3, -spacingY / 3);
  pg.vertex(spacingX / 2, -spacingY / 2);
  pg.endShape();

  pg.stroke(0)
  drawLine(spacingX / 2, spacingY / 2, spacingX / 3, spacingY / 3)
  drawLine(spacingX / 3, -spacingY / 3, spacingX / 2, -spacingY / 2)

  pg.stroke(0,0,0,0)
  pg.fill(getColor(2, 'tile'));
  pg.beginShape();

  pg.vertex(spacingX / 2, spacingY / 2);
  pg.vertex(spacingX / 3, spacingY / 3);
  pg.vertex(-spacingX / 3, spacingY / 3);
  pg.vertex(-spacingX / 2, spacingY / 2);
  pg.endShape();

  pg.stroke(0)
  drawLine(spacingX / 2, spacingY / 2, spacingX / 3, spacingY / 3)
  drawLine(-spacingX / 3, spacingY / 3, -spacingX / 2, spacingY / 2)

  pg.stroke(0,0,0,0)
  pg.fill(getColor(3, 'tile'));
  pg.beginShape();

  pg.vertex(-spacingX / 2, spacingY / 2);
  pg.vertex(-spacingX / 3, spacingY / 3);
  pg.vertex(-spacingX / 3, -spacingY / 3);
  pg.vertex(-spacingX / 2, -spacingY / 2);
  pg.endShape();

  pg.stroke(0)
  drawLine(-spacingX / 2, spacingY / 2, -spacingX / 3, spacingY / 3)
  drawLine(-spacingX / 3, -spacingY / 3, -spacingX / 2, -spacingY / 2)

  fillRect(0,0,spacingX/1.5,spacingY/1.5,0,0,'transparent')
  pg.pop();
}

function interpolatedLine(px1, py1, px2, py2, hstToggle) {
  let interpx1 = px1 * 0.9 + px2 * 0.1
  let interpy1 = py1 * 0.9 + py2 * 0.1

  let interpx2 = px1 * 0.1 + px2 * 0.9
  let interpy2 = py1 * 0.1 + py2 * 0.9

  // if(isSafari && hstToggle){
  //   interpx1 = px1 * 0.8 + px2 * 0.2
  //   interpy1 = py1 * 0.8 + py2 * 0.2
  //
  //   interpx2 = px1 * 0.2 + px2 * 0.8
  //   interpy2 = py1 * 0.2 + py2 * 0.8
  // }

  drawLine(interpx1, interpy1, interpx2, interpy2)
}


function makeHSTTile(x, y) {
  let s = spacing / 2
  pg.push()

  if (x > (divX - 1) / 2 && y < (divY - 1) / 2) {
    pg.scale(-1, -1)
  }

  if (x < (divX - 1) / 2 && y < (divY - 1) / 2) {
    pg.scale(1, -1)
  }

  if (x > (divX - 1) / 2 && y > (divY - 1) / 2) {
    pg.scale(-1, 1)
  }

  pg.push()


  drawLine(-s / 2, s / 2, s / 2, -s / 2)

  pg.fill(getColor(1, 'tile'))
  vertices = []
  vertices.push({
    x: -s / 4 * 3,
    y: -s / 4 * 3
  })
  vertices.push({
    x: -s / 4 * 3,
    y: s / 4 * 3
  })
  vertices.push({
    x: s / 4 * 3,
    y: s / 4 * 3
  })

  roundedPoly(ctx, vertices, 10, 0, 1)
  ctx.fill()

  ctx.lineWidth = sW * .85
  roundedPoly(ctx, vertices, 10, 0, 0)

  ctx.lineWidth = sW * .85
  interpolatedLine(-s / 4 * 3, -s / 4 * 3, -s / 4 * 3, s / 4 * 3, true)
  interpolatedLine(-s / 4 * 3, s / 4 * 3, s / 4 * 3, s / 4 * 3, true)
  interpolatedLine(s / 4 * 3, s / 4 * 3, -s / 4 * 3, -s / 4 * 3, true)

  pg.push()
  pg.translate(-s / 6, s / 6)
  pg.fill(getColor(3, 'highlight'))
  vertices = []
  vertices.push({
    x: -s / 4 * 1.5,
    y: -s / 4 * 1.5
  })
  vertices.push({
    x: -s / 4 * 1.5,
    y: s / 4 * 1.5
  })
  vertices.push({
    x: s / 4 * 1.5,
    y: s / 4 * 1.5
  })

  ctx.lineWidth = sW * .85

  roundedPoly(ctx, vertices, 7, 0, 1)
  ctx.fill()

  roundedPoly(ctx, vertices, 7, 0, 0)

  ctx.lineWidth = sW * .85
  interpolatedLine(-s / 4 * 1.5, -s / 4 * 1.5, -s / 4 * 1.5, s / 4 * 1.5, true)
  interpolatedLine(-s / 4 * 1.5, s / 4 * 1.5, s / 4 * 1.5, s / 4 * 1.5, true)
  interpolatedLine(s / 4 * 1.5, s / 4 * 1.5, -s / 4 * 1.5, -s / 4 * 1.5, true)
  pg.pop()

  // pg.fill(getPalette(2))
  // pg.beginShape()
  // pg.vertex(s/4*3, -s/4*3)
  // pg.vertex(s/4*3, s/4*3)
  // pg.vertex(-s/4*3, -s/4*3)
  // pg.endShape(CLOSE)

  fillEllipse(s / 2.5, -s / 2.5, s / 2, 2, 'tile')
  fillEllipse(s / 2.5, -s / 2.5, s / 4, 3, 'highligh')
  pg.pop()

  pg.pop()
}

function makeGemTile(x, y) {
  let s = spacing / 2
  let o = spacing / 2 / 4 * 3
  pg.push()

  if (x > (divX - 1) / 2 && y < (divY - 1) / 2) {
    pg.scale(-1, -1)
  }

  if (x < (divX - 1) / 2 && y < (divY - 1) / 2) {
    pg.scale(1, -1)
  }

  if (x > (divX - 1) / 2 && y > (divY - 1) / 2) {
    pg.scale(-1, 1)
  }

  pg.push()


  drawLine(-s, -s, s, s)


  fillEllipse(s / 4, -s / 4, s / 1, 3, 'highlight')
  fillEllipse(-s / 4, s / 4, s / 1, 3, 'highlight')

  fillEllipse(s / 4, -s / 4, s / 1.75, 4, 'highlight')
  fillEllipse(-s / 4, s / 4, s / 1.75, 4, 'highlight')

  pg.strokeWeight(0)
  pg.endShape()
  ctx.closePath()

  pg.strokeWeight(sW)
  pg.fill(getColor(2, 'highlight'))

  pg.push()
  pg.noStroke()
  pg.beginShape()
  pg.vertex(-o, -o)
  pg.vertex(-o, -o / 4)
  pg.vertex(o / 4, o)
  pg.vertex(o, o)
  pg.vertex(o, o / 4)
  pg.vertex(-o / 4, -o)
  pg.vertex(-o, -o)
  pg.endShape(CLOSE)
  pg.pop()

  drawLine(-o, -o, -o, -o / 4)
  drawLine(-o, -o / 4, o / 4, o)
  drawLine(o / 4, o, o, o)
  drawLine(o, o, o, o / 4)
  drawLine(o, o / 4, -o / 4, -o)
  drawLine(-o / 4, -o, -o, -o)


  drawLine(-s / 3, -s / 3, s / 3, s / 3)


  fillEllipse(-s / 3, -s / 3, s / 4, 3, 'highlight')
  fillEllipse(0, 0, s / 4, 3, 'highlight')
  fillEllipse(s / 3, s / 3, s / 4, 3, 'highlight')

  pg.pop()

  pg.pop()
}

function makeDiamondTile(x, y) {
  let s = spacing / 2
  let o = spacing / 2 / 4 * 3
  pg.push()

  if (x > (divX - 1) / 2 && y < (divY - 1) / 2) {
    pg.scale(-1, -1)
  }

  if (x < (divX - 1) / 2 && y < (divY - 1) / 2) {
    pg.scale(1, -1)
  }

  if (x > (divX - 1) / 2 && y > (divY - 1) / 2) {
    pg.scale(-1, 1)
  }

  pg.push()


  drawLine(-s, -s, s, s)
  drawLine(s / 1.5, -s / 1.5, -s / 1.5, s / 1.5)




  pg.fill(getColor(3, 'tile'))

  let vertices = []
  vertices.push({
    x: -o,
    y: -o
  })
  vertices.push({
    x: -s / 2,
    y: s / 2
  })
  vertices.push({
    x: o,
    y: o
  })
  vertices.push({
    x: s / 2,
    y: -s / 2
  })

  ctx.lineWidth = sW
  roundedPoly(ctx, vertices, 5)
  ctx.fill()
  ctx.stroke()

  pg.fill(getColor(4, 'tile'))

  scl = 2
  vertices = []
  vertices.push({
    x: -o / scl,
    y: -o / scl
  })
  vertices.push({
    x: -s / 2 / scl,
    y: s / 2 / scl
  })
  vertices.push({
    x: o / scl,
    y: o / scl
  })
  vertices.push({
    x: s / 2 / scl,
    y: -s / 2 / scl
  })

  ctx.lineWidth = sW
  roundedPoly(ctx, vertices, 2.5)
  ctx.fill()
  ctx.stroke()


  // fillEllipse(0,0,s/2,4,'tile')
  //
  // fillEllipse(s/3,s/3,s/4,4,'highlight')
  // fillEllipse(-s/3,-s/3,s/4,4,'highlight')

  fillEllipse(s / 1.5, -s / 1.5, s / 4, 4, 'highlight')
  fillEllipse(-s / 1.5, s / 1.5, s / 4, 4, 'highlight')

  pg.pop()

  pg.pop()
}

function makePuzzleTile(x, y) {
  let s = spacing / 2
  let o = spacing / 2 / 4
  pg.push()

  if (x > (divX - 1) / 2 && y < (divY - 1) / 2) {
    pg.scale(-1, 1)
  }

  if (x < (divX - 1) / 2 && y < (divY - 1) / 2) {
    pg.scale(-1, -1)
  }

  if (x > (divX - 1) / 2 && y > (divY - 1) / 2) {
    pg.scale(-1, 1)
  }

  let vertices = []
  vertices.push({
    x: -s * 2,
    y: -s * 2,
    radius: 0
  })
  vertices.push({
    x: 0,
    y: -s * 2,
    radius: 0
  })

  vertices.push({
    x: 0,
    y: -o * 2
  })
  vertices.push({
    x: -o * 2,
    y: -o * 3
  })

  vertices.push({
    x: -o * 2,
    y: 0
  })
  vertices.push({
    x: o * 2,
    y: -o
  })

  vertices.push({
    x: o * 2,
    y: o * 3
  })
  vertices.push({
    x: 0,
    y: o * 2
  })

  vertices.push({
    x: 0,
    y: s * 2,
    radius: 0
  })
  vertices.push({
    x: -s * 2,
    y: s * 2,
    radius: 0
  })

  pg.translate(o / 2, o / 2)


  roundedPoly(ctx, vertices, spacing / 5)

  pg.fill(getColor(1, 'tile'))
  ctx.fill()
  ctx.stroke()

  pg.translate(0, 0)


  pg.push()
  roundedPoly(ctx, vertices, spacing / 10)


  pg.fill(getColor(2, 'tile'))
  ctx.fill()
  ctx.stroke()

  pg.pop()

  //fillEllipse(s/8*3, -s/8*5, s, 1, 'highlight')
  fillEllipse(-s / 8 * 5, s / 8 * 3, s / 3, 1, 'highlight')


  vertices = []
  vertices.push({
    x: s * 2,
    y: -s * 2,
    radius: 0
  })
  vertices.push({
    x: 0,
    y: -s * 2,
    radius: 0
  })

  vertices.push({
    x: 0,
    y: -o * 2
  })
  vertices.push({
    x: -o * 2,
    y: -o * 3
  })

  vertices.push({
    x: -o * 2,
    y: 0
  })
  vertices.push({
    x: o * 2,
    y: -o
  })

  vertices.push({
    x: o * 2,
    y: o * 3
  })
  vertices.push({
    x: 0,
    y: o * 2
  })

  vertices.push({
    x: 0,
    y: s * 2,
    radius: 0
  })
  vertices.push({
    x: s * 2,
    y: s * 2,
    radius: 0
  })

  pg.rotate(PI)
  pg.scale(1, 1)
  pg.translate(o / 2, o / 2)

  roundedPoly(ctx, vertices, 1000)

  pg.fill(getColor(1, 'tile'))
  ctx.fill()
  ctx.stroke()

  pg.pop()
  //fillRect(0, 0, spacing, spacing, 0, 0, 'transparent')
}

function makePuzzleTileRot(x, y) {
  pg.push()
  pg.rotate(PI / 2)
  makeWaveTile(x, y)
  pg.pop()
}

function makeWaveTile(x, y) {
  let s = spacing / 2
  let o = spacing / 2 / 4
  pg.push()

  if (x > (divX - 1) / 2 && y < (divY - 1) / 2) {
    pg.scale(-1, 1)
  }

  if (x < (divX - 1) / 2 && y < (divY - 1) / 2) {
    pg.scale(-1, -1)
  }

  if (x > (divX - 1) / 2 && y > (divY - 1) / 2) {
    pg.scale(-1, 1)
  }

  let vertices = []
  vertices.push({
    x: -s * 2,
    y: -s * 2,
    radius: 0
  })
  vertices.push({
    x: 0,
    y: -s * 2,
    radius: 0
  })

  vertices.push({
    x: 0,
    y: -o * 2
  })
  vertices.push({
    x: -o * 2,
    y: -o * 3
  })

  vertices.push({
    x: -o * 2,
    y: 0
  })
  vertices.push({
    x: o * 2,
    y: -o
  })

  vertices.push({
    x: o * 2,
    y: o * 3
  })
  vertices.push({
    x: 0,
    y: o * 2
  })

  vertices.push({
    x: 0,
    y: s * 2,
    radius: 0
  })
  vertices.push({
    x: -s * 2,
    y: s * 2,
    radius: 0
  })

  pg.translate(o / 2, o / 2)

  ctx.lineWidth = sW/1.5

  roundedPoly(ctx, vertices, spacing / 8, 0, 1)



  pg.fill(getColor(1, 'tile'))
  ctx.fill()
  ctx.stroke()

  pg.translate(0, 0)


  roundedPoly(ctx, vertices, spacing / 9,0, 1)

  pg.fill(getColor(2, 'tile'))
  ctx.fill()
  ctx.stroke()



  fillEllipse(s / 8 * 3, -s / 8 * 5, s / 3, 1, 'highlight')
  fillEllipse(-s / 8 * 5, s / 8 * 3, s / 3, 1, 'highlight')

  // pg.line(-o*1.5,  -o, -o*1.5,  -o*3)
  // pg.line(o*1.5,  o, o*1.5,  o*3)

  // pg.line(-s,  o*2, -s/2,  o*2)
  // pg.line(s,  -o*2, s/2,  -o*2)

  // fillEllipse(-o*1.5, -o*1.5, s/3, 1, 'highlight')
  // fillEllipse(o*1.5, o*1.5, s/3, 2, 'highlight')

  // fillEllipse(-o*2,  o*2, s/2, 3, 'transparent')
  // fillEllipse(o*2, -o*2, s/2, 4, 'transparent')
  //
  // fillEllipse(-o*2,  o*2, s/4, 3, 'highlight')
  // fillEllipse(o*2, -o*2, s/4, 4, 'highlight')



  pg.pop()
  //fillRect(0, 0, spacing, spacing, 0, 0, 'transparent')
}

function makeWaveTileRot(x, y) {
  pg.push()
  pg.rotate(PI / 2)
  makeWaveTile(x, y)
  pg.pop()
}


function makeMirrorTile(x, y) {
  let s = spacing / 2
  let o = spacing / 2 / 4
  pg.push()

  if (x > (divX - 1) / 2 && y < (divY - 1) / 2) {
    pg.scale(-1, 1)
  }

  if (x < (divX - 1) / 2 && y < (divY - 1) / 2) {
    pg.scale(-1, -1)
  }

  if (x > (divX - 1) / 2 && y > (divY - 1) / 2) {
    pg.scale(-1, 1)
  }

  let vertices = []
  vertices.push({
    x: -s * 2,
    y: -s * 2,
    radius: 0
  })
  vertices.push({
    x: 0,
    y: -s * 2,
    radius: 0
  })

  vertices.push({
    x: 0,
    y: -o * 2.5
  })
  vertices.push({
    x: -o * 2.5,
    y: -o * 2.5
  })

  vertices.push({
    x: -o * 2.5,
    y: 0
  })
  vertices.push({
    x: o * 2.5,
    y: 0
  })

  vertices.push({
    x: o * 2.5,
    y: o * 2.5
  })
  vertices.push({
    x: 0,
    y: o * 2.5
  })

  vertices.push({
    x: 0,
    y: s * 2,
    radius: 0
  })
  vertices.push({
    x: -s * 2,
    y: s * 2,
    radius: 0
  })

  roundedPoly(ctx, vertices, 7, 0, 1)

  pg.fill(getColor(1, 'tile'))
  ctx.fill()


  roundedPoly(ctx, vertices, 7, 0, 0)

  interpolatedLine(0, -s * 2, 0, -o * 2.5)
  interpolatedLine(0, -o * 2.5, -o * 2.5, -o * 2.5)
  interpolatedLine(-o * 2.5, -o * 2.5, -o * 2.5, 0)
  interpolatedLine(-o * 2.5, 0, o * 2.5, 0)
  interpolatedLine(o * 2.5, 0, o * 2.5, o * 2.5)
  interpolatedLine(o * 2.5, o * 2.5, 0, o * 2.5)
  interpolatedLine(0, o * 2.5, 0, s * 2)

  drawLine(-s / 2, s / 2, -s / 2, s)
  drawLine(s / 2, -s / 2, s / 2, -s)

  drawLine(-o * 1.5, -o * 2.5, -o * 1.5, 0)
  drawLine(o * 1.5, o * 2.5, o * 1.5, 0)

  drawLine(-o * 1.5, -o * 1.25, 0, -o * 1.25)
  drawLine(o * 1.5, o * 1.25, 0, o * 1.25)


  fillEllipse(0, -o * 1.25, s / 4, 2, 'tile')
  fillEllipse(0, o * 1.25, s / 4, 3, 'tile')

  //fillEllipse(s/8*3, -s/8*5, s, 1, 'highlight')
  fillEllipse(-s / 2, s / 2, s / 3, 3, 'tile')
  fillEllipse(s / 2, -s / 2, s / 3, 2, 'tile')

  pg.pop()
  //fillRect(0, 0, spacing, spacing, 0, 0, 'transparent')
}

function makeTripleTile(x, y) {
  pg.push()


  fillRect(0, 0, s / 1.5, s * 2, 0, 2, 'tile', 'nostroke')

  drawLine(s, s / 2.5, -s, s / 2.5)
  drawLine(s, -s / 2.5, -s, -s / 2.5)
  fillRect(-s / 1.5, 0, s / 1.5, s * 2, 0, 1, 'tile', 'nostroke')
  fillRect(s / 1.5, 0, s / 1.5, s * 2, 0, 3, 'tile', 'nostroke')

  drawLine(-s / 1.5, -s / 1.5, -s / 1.5, s)
  drawLine(s / 1.5, s / 1.5, s / 1.5, -s)
  drawLine(0, s / 2.5, 0, -s / 2.5)


  fillEllipse(-s / 1.5, -s / 1.5, s / 4, 2, 'tile')
  fillEllipse(0, 0, s / 4, 3, 'tile')
  fillEllipse(s / 1.5, s / 1.5, s / 4, 4, 'tile')

  drawLine(-s / 3, -s, -s / 3, s)
  drawLine(s / 3, -s, s / 3, s)

  pg.pop()
}


function makeEllipseTile(x,y){
  pg.push()

  pg.stroke(0)

  for(let a = -PI/2; a<PI/2; a+=PI/5){
    let lx = (spacing/2/1.85) * cos(a)
    let ly = (spacing/2/1.85) * sin(a)
    drawLine(0,0,lx, ly)
  }

  drawLine(0, -spacing/2, 0, spacing/2)

  fillEllipse(0,0,spacing/2.5, 2,'highlight')
  fillEllipse(0,0,spacing/3.5, 1,'highlight')
  fillEllipse(0,0,spacing/8.5, 0,'highlight')


  drawLine(-spacing/6*2, -spacing/2, -spacing/6*2, spacing/2)

  for(let l = 0; l < 1; l+=0.1){
    let posy = map(l,0,1,-spacing/2,spacing/2)

    pg.point(-spacing/6*2-5, posy)
  }

  pg.pop()
}

function makeEllipseTileRot(x,y){
  pg.push()
  pg.rotate(PI/2)
  makeEllipseTile(x,y)
  pg.pop()
}
