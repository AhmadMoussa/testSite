function makeBackgroundDecoration(){

  let background_pad = bp = pg_sizex/47.24

  pg.push()

  randomParticles()

   let randChance = random()

  if(randChance<0.25){
    pg.scale(1, -1)
    pg.translate(0, -pg_sizey)
  }else if(randChance<0.5){
    pg.scale(-1, 1)
    pg.translate(-pg_sizex, 0)
  }else if(randChance<0.75){
    pg.scale(-1, -1)
    pg.translate(-pg_sizex, -pg_sizey)
  }

  makeSeparator()

  let size = min(pg_sizex, pg_sizey)/2

  pg.strokeWeight(sW)

  pg.push()
  pg.translate(background_pad, background_pad)

  ctx.setLineDash([0,0])

  if(randChance<.75 && randChance>.5){

      pg.push()
      pg.fill(0,0,0,90)
      pg.translate(-size/36,-size/36)
      pg.noStroke()
      pg.beginShape()

      pg.vertex(pg_sizex-size,pg_sizey)
      pg.vertex(pg_sizex,pg_sizey-size)
      pg.vertex(pg_sizex,pg_sizey)

      pg.endShape(CLOSE)

      pg.stroke(0,0,0,90)
        drawLine(pg_sizex-size,pg_sizey,pg_sizex,pg_sizey-size)
      pg.pop()
  }


  pg.push()
  pg.noStroke()
  pg.beginShape()

  pg.vertex(pg_sizex-size,pg_sizey)
  pg.vertex(pg_sizex,pg_sizey-size)
  pg.vertex(pg_sizex,pg_sizey)

  pg.fill(getColor(2,'tile'))
  pg.endShape(CLOSE)
  pg.pop()

  drawLine(pg_sizex-size,pg_sizey,pg_sizex,pg_sizey-size)

  for(let n = 0; n < 1; n+= 0.015){
    let px = (pg_sizex-size)*n + (pg_sizex)*(1-n)
    let py = (pg_sizey)*n + (pg_sizey-size)*(1-n)

    pg.point(px+15, py+15)
  }


  drawLine(pg_sizex,pg_sizey-size-bp*2-random()*bp*3,pg_sizex-size-bp*2-random()*bp*3,pg_sizey)

  for(let a = PI; a < PI+PI/2; a+=PI/2/10){
    let x =  (size/2+bp/2) * cos(a)
    let y = (size/2+bp/2) * sin(a)

    drawLine(x+pg_sizex,y+pg_sizey,pg_sizex,pg_sizey)
  }

  for(let a = PI; a < PI+PI/2; a+=PI/2/5){
    let x =  (size/2+bp) * cos(a)
    let y = (size/2+bp) * sin(a)

    fillEllipse(x+pg_sizex,y+pg_sizey,size/48,0,'highlight')
  }



  fillEllipse(pg_sizex,pg_sizey, size, 3, 'tile')
  fillEllipse(pg_sizex,pg_sizey, size/1.5, 2, 'tile')

  drawLine(pg_sizex,pg_sizey,pg_sizex-size/7,pg_sizey-size/7)
  fillEllipse(pg_sizex,pg_sizey, size/4, 3, 'tile')

  fillEllipse(pg_sizex-size/7,pg_sizey-size/7, size/32, 3, 'tile')

  for(let a = PI; a < PI+PI/2; a+=PI/2/5){
    let x =  (size/2+bp) * cos(a) / 1.3
    let y = (size/2+bp) * sin(a) / 1.3

    fillEllipse(x+pg_sizex,y+pg_sizey,size/12,0,'transparent')
    fillEllipse(x+pg_sizex,y+pg_sizey,size/24,0,'highlight')

  }

  pg.pop()

  let randLen = random([true, false])

  let sunStrokes = random([4,6])
  for(let a = 0; a < TAU; a+=TAU/sunStrokes){
    let x = pg_sizex-size/8+pg_sizex/15 * cos(a) / 2
    let y = size/8+pg_sizex/15 * sin(a) / 2

    let x1 = pg_sizex-size/8+pg_sizex/15 * cos(a) / 3
    let y1 = size/8+pg_sizex/15 * sin(a) / 3

    if(randLen){
      pg.point(x,y)
    }else{
      drawLine(x,y,x1,y1)
    }

  }

  fillEllipse(pg_sizex-size/8, size/8, pg_sizex/20, 2, 'transparent')
  fillEllipse(pg_sizex-size/8, size/8, pg_sizex/40, 2, 'highlight')




  let px1 = size
  let py1 = -size/2

  let px2 = -size/2
  let py2 = size

  if(random()>.5){
    let vertices = []
    let count = 0
    let step = pg_sizex / 94480
    for(let l = 0; l < 1.05; l+=0.05){

      let x = px1 * l + px2 * (1-l)
      let y = py2 * (1-l) + py1*l

      let offset = 0

      if(count%2==0){
        offset = random()*bp*2
      }else{
        offset = -random()*bp*2
      }
      //pg.point(x+offset, y+offset)

      vertices.push({x: x+offset, y: y+offset})
      // if(l == 0 || l == 1){
      //   fillEllipse(x+offset, y+offset, size/50, 1, 'highlight')
      // }
      count++
    }

    let backgroundLineSpacing = bls = pg_sizex / 236.2
    for(let n = 0; n < bp; n++){
      pg.push()

      pg.translate(-bls*n,-bls*n)
      roundedPoly(ctx, vertices, 2000, true, true)
      ctx.stroke()
      pg.pop()
    }

  }else{

    pg.push()

    let backgroundLineSpacing = bls = pg_sizex / 236.2
    let counter = 0

    for(let n = 0; n < bp; n++){
      pg.push()

      pg.translate(-bls*n,-bls*n)
      if(counter%3==0){
        pg.stroke(255)
        ctx.shadowColor = 'white'

      }else{
        pg.stroke(0)
        ctx.shadowColor = 'black'
      }
      drawLine(px1,py1,px2,py2)
      ctx.stroke()
      pg.pop()

      counter++
    }

    pg.pop()

  }

  pg.translate(-size/24,0)

  drawLine(size/12, pg_sizey - size/3 - size/12, size/12, pg_sizey - size/12)
  drawLine(size/12, pg_sizey - size/12, size/3 + size/12, pg_sizey - size/12)

  pg.stroke(255)
  ctx.shadowColor = 'white'
  drawLine(size/12+bp, pg_sizey - size/3 - size/12+bp, size/12+bp, pg_sizey - size/12+bp)
  drawLine(size/12+bp, pg_sizey - size/12+bp, size/3 + size/12+bp, pg_sizey - size/12+bp)

  //makeText()
  pg.pop()
}

function randomParticles(){
  pg.push()
  pg.stroke(0)
  pg.shadowColor = 'black'

  pg.stroke(0)
  for(let i = 0; i < 10; i ++){
    let x = random()*pg_sizex
    let y = random()*pg_sizey

    pg.strokeWeight(map(random(),0,1,sW/2,sW*2))
    pg.point(x, y)
  }

  // for(let i = 0; i < 3; i ++){
  //   let randSize = random(40,100)
  //   let x = random(pg_sizex/4, pg_sizex/4*3)
  //   let y = random(pg_sizey/4, pg_sizey/4*3)
  //
  //   pg.stroke(0)
  //   pg.strokeWeight(sW/4)
  //   fillEllipse(x, y, randSize, 0, 'transparent')
  // }

  pg.pop()
}

function makeSeparator(){
  pg.push()
  pg.stroke(0)
  pg.strokeWeight(sW)

  let orientationCheck = (pg_sizex < pg_sizey)

  let [startX, startY, endX, endY] = (orientationCheck)?[
    -pad,
    map(random(),0,1,pg_sizey/3, pg_sizey/3*2),
     pg_sizex + pad,
    map(random(),0,1,pg_sizey/3, pg_sizey/2)
  ]:[
      map(random(),0,1,pg_sizex/3, pg_sizex/3*2),
      -pad,
      map(random(),0,1,pg_sizex/3, pg_sizex/3*2),
      pg_sizey + pad
    ]

  let pointilator = () => {
    for(let n = 0; n < 1; n+= 0.0075){
      let px = startX*n + endX*(1-n)
      let py = startY*n + endY*(1-n)

      pg.point(px+15, py+15)
    }
  }

  drawLine(startX, startY, endX, endY)
  pointilator()
  pg.pop()

}

function makeText(){
  let size = min(pg_sizex, pg_sizey)/2

  pg.push()


  //pg.textFont(font)

  pg.textSize(20)
  pg.stroke(0)
  pg.strokeWeight(.2)
  pg.fill(0)
  ctx.shadowColor = 'black'
  pg.textAlign(LEFT, CENTER)

  let tx = fxhash+''

  let textHeight = tx.length*22
  // for(let i = 0; i < fxhash.length; i++){
  //     pg.text(tx[i], size/12+bp, pg_sizey - size/3 - size/12+bp - textHeight + i*22)
  // }
  //pg.text(tx, size/24+bp, pg_sizey - size/16+bp)
  for(let i = 0; i < fxhash.length; i++){
      pg.text(tx[i], size/24+bp + i*22, pg_sizey - size/16+bp )
  }


  pg.pop()
}
