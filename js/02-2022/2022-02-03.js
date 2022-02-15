// Nebulosa gradients (2022.02.03)

let w;
let iF = 10;
let sW = 1;
let fUpdates = 10;
let cMargin = 140;

function setup() {
  createCanvas(400, 400);

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
    this.color = color("WhiteSmoke");
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

    if (this.x + xInc * iF <= margin || this.x + xInc * iF >= width - margin) {
      xInc *= -1;
    }

    // Bottom / Top
    if (this.y + yInc * iF <= margin || this.y + yInc * iF >= height - margin) {
      yInc *= -1;
    }

    this.x += xInc * iF;
    this.y += yInc * iF;
  }
}
