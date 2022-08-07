/*
  Helper function to toggle between two functions
*/

function tileSwitcher(idx1, idx2, param, mod, in1, in2) {
  if (param % mod == 0) {
    tileBase(function () {
      return makeQuiltTiles[idx1](in1, in2);
    });
  } else {
    tileBase(function () {
      return makeQuiltTiles[idx2](in1, in2);
    });
  }
}

/*
  Determines which tile to draw
  Takes care of those tiles which are not at the corners nor edges of the quilt
*/
function generateCenterTiles(x, y) {
  // if not a corner nor edge tile
  if (x != 0 && x != divX - 1 && y != 0 && y != divY - 1) {
    // vertically alternating rows


    // if quilt longer than wide, and odd length, alternating pattern
    if (divY > divX && divY % 2 == 1) {
      if (divX % 2 == 1 && x % 2 == 0) {
        tileSwitcher(0, 1, y, 2, x, y);
      } else {
        tileSwitcher(2, 3, y, 2, x, y);
      }
    }

    // if quilt wider than long, and odd width, alternating pattern
    else if (divX > divY && divX % 2 == 1) {
      if (divY % 2 == 1 && y % 2 == 0) {
        tileSwitcher(0, 1, x, 2, x, y);
      } else {
        tileSwitcher(2, 3, x, 2, x, y);
      }
    }

    else if (divX == divY) {
      tileSwitcher(0, 1, x + y, 2, x, y);
    }

    else if (divX > divY && divX % 2 == 0) {
      tileSwitcher(0, 1, y, 2, x, y);
    }

    else{
      if (y % 2 == 0) {
        tileSwitcher(0, 1, x, 2, x, y);
      } else {
        tileSwitcher(2, 3, x, 2, x, y);
      }
    }
  }
}

function generateOrnamentalSides(x, y) {
  pg.push();
  if (x == 0 || x == divX - 1) {
    x == divX - 1 ? pg.scale(-1, 1) : 0;

    if (y == 0) {
      tileBase(() => {
        return vOrnamentStarts[vOrnamentStyle](0);
      });
    } else if (y == divY - 1) {
      tileBase(() => {
        return vOrnamentEnds[vOrnamentStyle](y * 2);
      });
    } else {
      tileBase(() => {
        return vOrnamentMids[vOrnamentStyle](y * 2);
      });
    }
  }
  pg.pop();
}

function generateCornerTiles(x, y) {
  function tileCornerTile(idx) {
    tileBase(() => {
      return makeCornerTile(idx);
    });
  }

  if (x == 0 && y == 0) {
    tileCornerTile(0);
  } else if (x == 0 && y == divY - 1) {
    tileCornerTile(2);
  } else if (x == divX - 1 && y == 0) {
    tileCornerTile(1);
  } else if (x == divX - 1 && y == divY - 1) {
    tileCornerTile(3);
  }
}

function generateBorderTiles(x, y) {
  if (borderTypeStyle == "ROUNDROUND") {
    tileBase(function () {
      return makeHorizontalBorderTile();
    });
  } else if (borderTypeStyle == "ROUNDSPIKEY") {
    tileBase(function () {
      return makeHorizontalBorderTile2();
    });
  } else if (borderTypeStyle == "SPIKEYSPIKEY") {
    tileBase(function () {
      return makeHorizontalBorderTile3();
    });
  } else if (borderTypeStyle == "SPIKEYROUND") {
    tileBase(function () {
      return makeHorizontalBorderTile4();
    });
  } else {
    if (y % 2 == 0) {
      tileBase(function () {
        return borderTiles[0]();
      });
    } else {
      tileBase(function () {
        return borderTiles[1]();
      });
    }
  }
}

/*
  FUNCTION THAT GENERATES THE QUILT
*/

function generateQuarpet() {
  // copy tile arrays for good measure
  let tileColorsCopy = [...tileColors_orig];
  let highlightColorsCopy = [...highlightColors_orig];

  pg.push();
  pg.strokeWeight(sW);
  pg.rectMode(CENTER);

  pg.translate(pg_sizex / 2, pg_sizey / 2);
  pg.translate((-divX * spacing) / 2, (-divY * spacing) / 2);

  // -.. .-. ..

  for (let x = 0; x < divX; x++) {
    for (let y = 0; y < divY; y++) {
      pg.push();

      pg.translate(x * spacingX + spacingX / 2, y * spacingY + spacingY / 2);

      generateCenterTiles(x, y);

      // Ornamental flowing tiles
      if (divY % 2 == 0 && divY >= divX) {
        generateOrnamentalSides(x, y);
      } else {
        generateCornerTiles(x, y);

        if (y != 0 && y != divY - 1) {
          if (x == 0) {
            generateBorderTiles(x, y);
          } else if (x == divX - 1) {
            pg.push();
            pg.scale(-1, 1);
            generateBorderTiles(x, y);
            pg.pop();
          }
        }
      }

      // Make top and bottom border (not corners)
      function makeTopBotOrnament() {
        if (x != 0 && x != divX - 1) {
          pg.push();
          y == divY - 1 ? pg.scale(1, -1) : 0;
          tileBase(function () {
            return makeQuiltTileTopBot(0);
          });
          pg.pop();
        }
      }

      if ((y == 0 || y == divY - 1) && x != 0 && x != divX - 1) {
        if (topBotOrnament && divX > 3) {
          if (x == 1) {
            tileBase(() => {
              return ornamentStarts[ornamentStyle]();
            });
          } else if (x == divX - 2) {
            tileBase(() => {
              return ornamentEnds[ornamentStyle]();
            });
          } else {
            tileBase(() => {
              return ornamentMids[ornamentStyle]();
            });
          }
        } else {
          tileBase(() => {
            return makeTopBotOrnament();
          });
        }
      }

      if (random() > 0.99) {
        shiftArray(tileColors);
        shiftArray(highlightColors);
      }

      if (random() > 0.95) {
        shiftArray(tileColors);
        shiftArray(highlightColors);
      }

      pg.point(-spacingX / 2, -spacingX / 2);
      pg.pop();
    }
  }

  for (let x = 0; x < divX + 1; x++) {
    pg.push();

    pg.translate(x * spacingX + spacingX / 2, 0);
    drawLine(-spacingX / 2, 0, -spacingX / 2, divY * spacingY);
    pg.pop();
  }

  for (let y = 0; y < divY + 1; y++) {
    pg.push();

    pg.translate(0, y * spacingY + spacingY / 2);
    drawLine(0, -spacingY / 2, divX * spacingX, -spacingX / 2);
    pg.pop();
  }

  pg.pop();
}
