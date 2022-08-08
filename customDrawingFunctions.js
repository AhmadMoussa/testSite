/*
  Wrapper functions to add my own functionality and behaviour to the ellipse(), rect() and line() p5 functions
*/

function fillEllipse(x, y, size, colIdx, type) {

    pg.fill(getColor(colIdx, type));

  if (toggleCircleStyle) {
    customCircle(x, y, size);
  } else {
    pg.circle(x, y, size);
  }

  pg.noFill();
}

function fillRect(x, y, sx, sy, r, colIdx, type, strokeType) {

    pg.fill(getColor(colIdx, type));


  if (type == "black") {
    pg.fill(0, 0, 0, 90);
  }

  if (strokeType == "nostroke") {
    pg.push();
    pg.stroke(0, 0, 0, 50);
    ctx.shadowColor = color(0, 0, 0, 50);
  }

  if (toggleRectStyle) {
    customRect(x, y, sx, sy, strokeType);
  } else {
    pg.rect(x, y, sx, sy, r);
  }

  if (strokeType == "nostroke") {
    pg.pop();
  }

  pg.noFill();
}

function drawLine(px1, px2, px3, px4) {
  if (toggleLineStyle) {
    customLine(px1, px2, px3, px4);
  } else {
    pg.line(px1, px2, px3, px4);
  }
}

function customCircle(posx, posy, rad) {
  let offset = random(999, 99999);
  pg.push();
  pg.strokeWeight(0);
  pg.ellipse(posx, posy, rad);

  const step = (TAU / (rad));
  for (let a = 0; a < TAU; a += step) {
    let randoffr = randomGaussian(0, 0.25) + map(random(),0,1,-0.25, 0.25)
    let x = posx + ((rad + randoffr) * cos(a)) / 2;
    let y = posy + ((rad + randoffr) * sin(a)) / 2;

    if (
      rad / 2 < spacing / 4 &&
      noise(x * 0.05 + offset, y * 0.05 + offset) < 0.32
    ) {
      pg.strokeWeight(0);
    } else {
      pg.strokeWeight(
        ((noise(x * 0.02 + offset, y * 0.02 + offset) * sW) / 4) * 3 +
        map(random(),0,1,sW / 4, (sW / 4) * 1.5)
      );
    }

    pg.point(x, y);
  }
  pg.pop();


}

function customLine(px1, py1, px2, py2) {
  let offset = random(999, 99999);
  pg.push();
  d = dist(px1, py1, px2, py2)
  ctx.shadowBlur = shadowBlurAmount * 1.25;
  const step = sW/4


  for (let l = 0; l < d; l += step) {
    let interp = map(l, 0, d, 0, 1);

    let x = px1 * interp + px2 * (1 - interp);
    let y = py1 * interp + py2 * (1 - interp);

    if (noise((x * 0.05) / scale + offset, (y * 0.05) / scale + offset) < 0.305) {
      pg.strokeWeight(0);
    } else {
      pg.strokeWeight(
        ((noise((x * 0.02) / scale + offset, (y * 0.02) / scale + offset) *
          sW) /
          4.5) *
          3 +
          map(random(),0,1,sW / 4, (sW / 4) * 2) / 2
      );
    }
    let extraOffset = (eo = 0);
    if (random() > 0.995) {
      eo = map(random(),0,1,-5,5);
    } else {
      eo = 0;
    }
    pg.point(
      x + randomGaussian(0, 0.25) + map(random(),0,1,-0.25, 0.25) + eo,
      y + randomGaussian(0, 0.25) + map(random(),0,1,-0.25, 0.25) + eo
    );
  }

  ctx.shadowBlur = shadowBlurAmount;
  pg.pop();

}

function customRect(x, y, wid, hei, strokeType) {
  let offset = random(100, 10000);

  pg.push();
  pg.strokeWeight(0);
  pg.rect(x, y, wid, hei);
  pg.pop();

  if (strokeType == "nostroke") {
    pg.push();
    pg.stroke(0, 0, 0, 0);
    pg.translate((divX * spacing) / 2, (divY * spacing) / 2);
  }

  if (strokeType == "slight") {
    pg.push();
    pg.stroke(0, 0, 0, 127.5);
  }

  drawLine(x - wid / 2, y - hei / 2, x + wid / 2, y - hei / 2);
  drawLine(x - wid / 2, y + hei / 2, x + wid / 2, y + hei / 2);
  drawLine(x + wid / 2, y - hei / 2, x + wid / 2, y + hei / 2);
  drawLine(x - wid / 2, y - hei / 2, x - wid / 2, y + hei / 2);

  if (strokeType == "nostroke" || strokeType == "slight") {
    pg.pop();
  }

  pg.noFill();
  pg.strokeWeight(0);
  pg.rect(x, y, wid, hei);

  pg.strokeWeight(sW);
}
