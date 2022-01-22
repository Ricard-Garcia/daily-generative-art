// Lissajou Curve Table (2022.01.16)

function make2DArray(rows, cols) {
  var arr = new Array(rows); //like arr[]; but with number of columns hardcoded
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

let angle = 0;
let angleIncrease = 0.01;
let cols;
let rows;
let cellW = 80;

let curves;

function setup() {
  createCanvas(800, 800);
  cols = floor(width / cellW);
  rows = floor(height / cellW);

  curves = make2DArray(rows, cols);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      curves[j][i] = new Curve();
      let randomColor = floor(random(0, colors.length));
      curves[j][i].setColor(colors[randomColor]);
    }
  }
}

function draw() {
  background(0);
  let d = cellW - 10;
  let r = d / 2;

  noFill();
  stroke(255);
  for (let i = 1; i < cols; i++) {
    let centerX = i * cellW + cellW / 2;
    let centerY = cellW / 2;
    ellipse(centerX, centerY, d, d);

    let x = r * cos(angle * (i + 1) - PI / 2);
    let y = r * sin(angle * (i + 1) - PI / 2);

    strokeWeight(8);
    point(centerX + x, centerY + y);

    strokeWeight(1);

    // Line from the center of ellipse
    stroke(255, 70);
    line(centerX, centerY, centerX + x, centerY + y);

    // Line across rows
    line(centerX + x, 0, centerX + x, height);

    // Sharing "x" in columns
    for (let j = 0; j < rows; j++) {
      curves[j][i].setX(centerX + x);
    }

    stroke(255);
  }

  stroke(255);

  for (let j = 1; j < rows; j++) {
    let centerY = j * cellW + cellW / 2;
    let centerX = cellW / 2;
    ellipse(centerX, centerY, d, d);

    let x = r * cos(angle * (j + 1) - PI / 2);
    let y = r * sin(angle * (j + 1) - PI / 2);

    strokeWeight(8);
    point(centerX + x, centerY + y);

    strokeWeight(1);

    // Line from the center of ellipse
    //stroke(120, 255, 0);
    stroke(255, 70);
    line(centerX, centerY, centerX + x, centerY + y);

    // Line across rows
    line(0, centerY + y, width, centerY + y);

    // Sharing "y" in rows
    for (let i = 0; i < rows; i++) {
      curves[j][i].setY(centerY + y);
    }

    stroke(255);
  }

  for (let j = 1; j < rows; j++) {
    for (let i = 1; i < cols; i++) {
      curves[j][i].addPoint();
      curves[j][i].show();
    }
  }
  strokeWeight(1);

  angle -= angleIncrease;

  // Full cycle

  if (angle < -TWO_PI) {
    for (let j = 1; j < rows; j++) {
      for (let i = 1; i < cols; i++) {
        curves[j][i].reset();
      }
    }
    //saveCanvas("Lissajou", "png");

    angle = 0;
  }
}

/* -------------------------------------------------------------------------- */
/*                              Class definition                              */
/* -------------------------------------------------------------------------- */
class Curve {
  constructor() {
    this.path = [];
    this.color = 225;
    this.current = createVector();
  }

  setColor(color) {
    this.color = color;
  }

  setX(x) {
    this.current.x = x;
  }

  setY(y) {
    this.current.y = y;
  }

  addPoint() {
    this.path.push(this.current);
  }

  reset() {
    this.path = [];
  }

  show() {
    stroke(this.color);
    strokeWeight(1);
    noFill();
    beginShape();
    for (let v of this.path) {
      vertex(v.x, v.y);
    }
    endShape();

    stroke(255);
    strokeWeight(8);
    point(this.current.x, this.current.y);
    this.current = createVector();
  }
}
