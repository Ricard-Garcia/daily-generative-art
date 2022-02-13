// Initial collision detection (2022.01.09)

let lines = [];
let numLines = 500;
let lWeight = 12;
let maxLineLength = 30;
let lengths = [0, maxLineLength / 4, maxLineLength / 2, maxLineLength];

let defaultColor = 245;
let lineColor;

let mRadius = 40;

function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);

  lineColor = color(defaultColor);
  lineColor.setAlpha(0);

  // Initial line
  for (let i = 0; i < numLines; i++) {
    let l = new Line(
      floor(random(margin, width - margin - length)),
      floor(random(margin, height - margin)),
      random(lengths)
    );
    lines.push(l);
  }
}

function draw() {
  background(20);

  for (let i = 0; i < lines.length; i++) {
    let l = lines[i];
    l.show();
  }
}

function mouseMoved() {
  for (let l = 0; l < lines.length; l++) {
    let line = lines[l];
    if (
      line.x > mouseX - mRadius &&
      line.x < mouseX + mRadius &&
      line.y > mouseY - mRadius &&
      line.y < mouseY + mRadius
    ) {
      line.update();
      line.show();
    }
  }
}

class Line {
  constructor(x, y, length) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.color = lineColor;
    this.angle = 0;
    console.log(lineColor);
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    noFill();
    strokeWeight(lWeight);
    strokeCap(ROUND);
    stroke(this.color);
    line(-this.length / 2, 0, this.length / 2, 0);
    pop();
  }

  update() {
    this.angle += 45;
    if (this.color == lineColor) {
      let newColor = color(getRandomColor(pixelGridColors));
      newColor.setAlpha(255);
      this.color = newColor;
    }
  }
}
