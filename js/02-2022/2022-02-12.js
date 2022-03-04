// Grid random walk (2022.02.12)

// Units
let x;
let y;

let grid;
let divisions = 80;
let spacing = postW / divisions;

let cols;
let rows;

margin = 200;

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
  if (overallSteps) {
    point(x * spacing, y * spacing);

    const r = floor(random(4));

    switch (r) {
      case 0:
        if (x * spacing >= width - margin) {
          break;
        }
        x = x + 1;
        break;
      case 1:
        if (x * spacing <= margin) {
          break;
        }
        x = x - 1;
        break;
      case 2:
        if (y * spacing >= height - margin) {
          break;
        }
        y = y + 1;
        break;
      case 3:
        if (y * spacing <= margin) {
          break;
        }
        y -= 1;
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
