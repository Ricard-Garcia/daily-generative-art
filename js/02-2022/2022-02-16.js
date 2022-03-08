// Sin gradients / Magnitudes wave (2022.02.16)

// Units
let numMagnitudes = 10;

let rows;
margin = 150;

// Features
let isNegative;
let alpha = 30;

let foregroundColor;

let mC;

function setup() {
  createCanvas(postW, postH);

  mC = new MagColumn(
    0,
    0,
    width - margin * 2,
    height - margin * 2,
    numMagnitudes,
    180
  );
}

function draw() {
  background(backgroundColor);

  mC.show();
}

// Column of magnitudes
class MagColumn {
  constructor(x, y, w, h, m = 1, rotation = 0) {
    this.location = new p5.Vector(x, y);
    this.w = w;
    this.h = h;
    this.m = m;
    console.log(this.m);
    this.r = m + 1;
    this.aInc = 360 / this.m / 20 / 3;
    this.mArr = [];
    this.rotation = rotation;

    this.setup();
  }

  setup() {
    let mH = this.h / this.r;
    for (let i = 1; i < this.r; i++) {
      let startAngle = this.aInc * i;
      let mLength = map(sin(startAngle), -1, 1, this.location.x, this.w);
      let m = {
        location: new p5.Vector(this.location.x, mH * i),
        extended: new p5.Vector(mLength, mH * i),
        angle: startAngle,
      };
      this.mArr.push(m);
    }
  }

  show() {
    // push();
    // translate(width / 2, height / 2);
    // angleMode(DEGREES);
    // rotate(this.rotation);
    // pop();

    push();
    translate(margin, margin);
    noStroke();
    fill(220);
    rect(this.location.x, this.location.y, this.w, this.h);

    noFill();
    strokeWeight(10);
    stroke(1);
    for (let i = 0; i < this.mArr.length; i++) {
      let m = this.mArr[i];
      line(m.location.x, m.location.y, m.extended.x, m.extended.y);
      m.angle += 0.01;
      m.extended.x = map(cos(m.angle), -1, 1, m.location.x, this.w);
    }
    pop();
  }
}
