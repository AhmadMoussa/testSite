// function that saturates an entire array given a specific amount
function saturatePalette(palette, amount) {
  return palette.map((c) => changeHexHue(c, amount));
}

function changeHexHue(c, amount) {
  let cHSL = HEXtoHSL(c);
  return h_s_lToHex(cHSL.h + amount, cHSL.s, cHSL.l);
}

function changeHexSaturation(c, amount) {
  let cHSL = HEXtoHSL(c);
  return h_s_lToHex(cHSL.h, cHSL.s + amount, cHSL.l);
}

function changeHexLightness(c, amount) {
  let cHSL = HEXtoHSL(c);
  return h_s_lToHex(cHSL.h, cHSL.s, cHSL.l + amount);
}

function customColorRandomizer(c) {
  let cHSL = HEXtoHSL(c);

  //cHSL.h = cHSL.h + random(-2,2)
  cHSL.s = cHSL.s + random(-75, 30);
  //cHSL.l = cHSL.l + random(-2,2)

  return h_s_lToHex(cHSL.h, cHSL.s, cHSL.l);
}

/*
  Following two functions from: https://www.html-code-generator.com/javascript/color-converter-script
*/

function HEXtoHSL(hex) {
  hex = hex.replace(/#/g, "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map(function (hex) {
        return hex + hex;
      })
      .join("");
  }
  var result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(hex);
  if (!result) {
    return null;
  }
  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);
  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;
  if (max == min) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  s = s * 100;
  s = Math.round(s);
  l = l * 100;
  l = Math.round(l);
  h = Math.round(360 * h);

  return {
    h: h,
    s: s,
    l: l,
  };
}

function h_s_lToHex(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  var r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = function (p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = function (x) {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return "#" + toHex(r) + toHex(g) + toHex(b);
}

/*
  Fetches color from palette array wraps around if out of range
*/
function getColor(idx, type) {

  let col = "#00000000";

  if(random()>colorRat){
    return col
  }

  if (type == "transparent") {
    return col;
  }

  if (type == "tile") {
    col = tileColors[idx % tileColors.length];
  } else {
    col = highlightColors[idx % highlightColors.length];
  }

  let modCol = customColorRandomizer(col);

  reg = /^#([0-9a-f]{3}){1,2}$/i;

  if (reg.test(modCol)) {
    return modCol;
  } else {
    return col;
  }
}
