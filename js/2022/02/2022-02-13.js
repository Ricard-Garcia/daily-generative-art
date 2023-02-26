// Mouse walk (2022.02.13)

// Units
let x;
let y;

let grid;
let divisions = 40;
let spacing = postW / divisions;

let cols;
let rows;

let stepSize = 1;

margin = 250;

// Features
let isNegative;
let alpha = 30;

let foregroundColor;

function setup() {
  createCanvas(postW, postH);

  isNegative = random([true, false]);

  foregroundColor = color(random(colors));
  foregroundColor.setAlpha(alpha);
  backgroundColor = isNegative ? 10 : 245;

  cols = floor(width / spacing);
  rows = floor(height / spacing);

  x = cols / 2;
  y = rows / 2;

  grid = make2DArray(cols, rows);

  background(backgroundColor);
  stroke(foregroundColor);
  strokeWeight(spacing * 0.5);
}

function draw() {
  if (
    mouseX >= margin &&
    mouseX <= width - margin &&
    mouseY >= margin &&
    mouseY <= height - margin
  ) {
    point(x * spacing, y * spacing);
    const rMouse = random(1);
    if (rMouse < 0.9) {
      if (mouseX <= x * spacing) {
        x -= stepSize;
      } else {
        x += stepSize;
      }

      if (mouseY <= y * spacing) {
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
}

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }

  return arr;
}
