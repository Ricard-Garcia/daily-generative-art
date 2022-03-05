// Lisajous walk (2022.02.14)

// Units
let x;
let y;

let lisaX;
let lisaY;
let xAngle = 0;
let yAngle = 0;
let tend2Lisa = 0.6;
let lisaMargin = 70;
let showLisa = false;

let cosInc;
let sinInc;

let grid;
let divisions = 60;
let spacing = postW / divisions;

let cols;
let rows;

let stepSize = 1;

margin = 150;

// Features
let isNegative;
let alpha = 30;

let foregroundColor;

function setup() {
  createCanvas(postW, postH);

  cosInc = 0.01;
  sinInc = 0.01 * 4;

  isNegative = true;

  foregroundColor = color("CornflowerBlue");
  foregroundColor.setAlpha(alpha);
  backgroundColor = isNegative ? 10 : 245;

  lisaX = map(
    cos(xAngle),
    -1,
    1,
    margin + lisaMargin,
    width - margin - lisaMargin
  );
  lisaY = map(
    sin(yAngle),
    -1,
    1,
    margin + lisaMargin,
    height - margin - lisaMargin
  );

  cols = floor(width / spacing);
  rows = floor(height / spacing);

  x = cols / 2;
  y = rows / 2;

  grid = make2DArray(cols, rows);

  stroke(foregroundColor);
  strokeWeight(spacing * 0.5);
  background(backgroundColor);
}

function draw() {
  // Sin/Cos drawing
  if (showLisa) {
    push();
    stroke("red");
    strokeWeight(30);
    point(lisaX, lisaY);
    pop();
  }

  if (
    lisaX >= margin &&
    lisaX <= width - margin &&
    lisaY >= margin &&
    lisaY <= height - margin
  ) {
    point(x * spacing, y * spacing);
    const rLisa = random(1);
    if (rLisa < tend2Lisa) {
      if (lisaX <= x * spacing) {
        x -= stepSize;
      } else {
        x += stepSize;
      }

      if (lisaY <= y * spacing) {
        y -= stepSize;
      } else {
        y += stepSize;
      }
    }

    const rInterior = floor(random(4));

    switch (rInterior) {
      case 0:
        if (x * spacing >= width - margin) {
          break;
        }
        x = x + stepSize;
        break;
      case 1:
        if (x * spacing <= margin) {
          break;
        }
        x = x - stepSize;
        break;
      case 2:
        if (y * spacing >= height - margin) {
          break;
        }
        y = y + stepSize;
        break;
      case 3:
        if (y * spacing <= margin) {
          break;
        }
        y -= stepSize;
        break;
    }
  }

  xAngle += cosInc;
  yAngle += sinInc;

  lisaX = map(
    cos(xAngle),
    -1,
    1,
    margin + lisaMargin,
    width - margin - lisaMargin
  );
  lisaY = map(
    sin(yAngle),
    -1,
    1,
    margin + lisaMargin,
    height - margin - lisaMargin
  );
}

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }

  return arr;
}
