// Border gradients (2022.02.05)
// import palettes from "nice-color-palettes";
// console.log(palettes);

let w;
let iF = 10;
let sW = 1;
let fUpdates = 300;
let cMargin = 300;

let centralSpace = true;

let gradientColors;
let isWarm = true;

function setup() {
  createCanvas(storyW, storyH);

  gradientColors = {
    top: color(getRandomColor(isWarm ? warmColors : coldColors)),
    bottom: color(getRandomColor(isWarm ? warmColors : coldColors)),
    left: color(getRandomColor(isWarm ? warmColors : coldColors)),
    right: color(getRandomColor(isWarm ? warmColors : coldColors)),
    center: color(getRandomColor(isWarm ? warmColors : coldColors)),
  };

  w = new Walker();

  background(20);
}

function draw() {
  for (let i = 0; i < fUpdates; i++) {
    w.show();
    w.update();
  }
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.color = gradientColors.center;
  }

  show() {
    stroke(this.color);
    strokeWeight(sW);
    point(this.x, this.y);
  }

  update() {
    let xInc = random(-1, 1);
    let yInc = random(-1, 1);

    // Left / Right

    if (this.x + xInc * iF <= margin) {
      xInc *= -1;
      this.color = gradientColors.left;
    }

    if (this.x + xInc * iF >= width - margin) {
      xInc *= -1;
      this.color = gradientColors.right;
    }

    // Bottom / Top
    if (this.y + yInc * iF <= margin) {
      yInc *= -1;

      this.color = gradientColors.bottom;
    }

    if (this.y + yInc * iF >= height - margin) {
      yInc *= -1;

      this.color = gradientColors.top;
    }

    // Center
    if (centralSpace) {
      if (
        this.x + xInc * iF >= width / 2 - cMargin &&
        this.x + xInc * iF <= width / 2 + cMargin &&
        this.y + yInc * iF >= height / 2 - cMargin &&
        this.y + yInc * iF <= height / 2 + cMargin
      ) {
        yInc *= -1;

        this.color = gradientColors.center;
      }
    }

    this.x += xInc * iF;
    this.y += yInc * iF;
  }
}
