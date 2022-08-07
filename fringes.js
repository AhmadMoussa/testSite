/*
  Functions that create the fringes on the borders and corners of the carpets
*/
function makeFringes(style) {
  
  let [step, s, count, orientationCheck] = [
    1 / carpetBindingDensity,
    spacing,
    0,
    divX > divY,
  ];

  let [mainP, divP, mainS, divS] = orientationCheck
    ? [pg_sizex, divX, pg_sizey, divY]
    : [pg_sizey, divY, pg_sizex, divX];

  let ps1 = mainS / 2 - (divS * s) / 2 + s / 4;
  let pe1 = mainS / 2 + (divS * s) / 2 - s / 4;

  let ps2 = mainP / 2 + (divP * s) / 2;
  let pe2 = mainP / 2 - (divP * s) / 2;

  pg.push();
  if (style == "background") {
    pg.stroke(0, 0, 0, 90);
  }

  for (let l = 0; l < 1; l += step) {
    let posx = map(l, 0, 1, ps1, pe1);

    let params1 = [posx, ps2 + 15, posx, ps2 + 30 - 20 * (count % 2 == 0)];
    let params2 = [posx, pe2 - 15, posx, pe2 - 30 + 20 * (count % 2 == 0)];

    if (orientationCheck) {
      params1.push(params1.splice(0, 1)[0]);
      params2.push(params2.splice(0, 1)[0]);
    }

    pg.strokeWeight(random(sW / 8, sW));

    drawLine(...params1);
    drawLine(...params2);

    count++;
  }
  pg.pop();
}

function makeCornerFringes(style) {
  pg.push();

  if (style == "background") {
    pg.stroke(0, 0, 0, 90);
  }

  pg.translate(pg_sizex / 2, pg_sizey / 2);

  let spcX = (divX * spacing) / 2;
  let spcY = (divY * spacing) / 2;

  pg.point(-spcX, -spcY);
  pg.point(spcX, -spcY);
  pg.point(-spcX, spcY);
  pg.point(spcX, spcY);

  let bL = borstenLaenge / 2;
  for (let i = 0; i < 4; i++) {
    pg.push();
    let [t1, t2, t3, t4] = [
      i == 0 || i == 1 ? -1 : 1,
      i == 1 || i == 2 ? -1 : 1,
      i == 0 || i == 3 ? -1 : 1,
      i == 2 || i == 3 ? -1 : 1,
    ];
    pg.translate(spcX * t1, spcY * t2);
    drawLine(0, 0, bL * t1, bL * t2);
    drawLine(0, bL * t3, bL * t1, bL * t3);
    drawLine(bL * t4, 0, bL * t4, bL * t2);
    pg.pop();
  }

  pg.pop();
}
