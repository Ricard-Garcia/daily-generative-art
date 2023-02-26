// Border gradients (2022.02.06)

let angle = 0;
let tickNum = 60;
let angleInc;
let d;
let tickLength = 20;

let speed = 1;

let secondsInc = 360 / 60 / 60;
secondsInc *= speed;
let secondsC;

let minutesInc = 360 / 60 / 60 / 60;
minutesInc *= speed;
let minutesC;

let hoursInc = 360 / 60 / 60 / 60 / 60;
hoursInc *= speed;
let hoursC;

let bgColor = getRandomColor(colors);
let accentColor = getRandomColor(pixelGridColors);
let secondaryColor = getRandomColor(darkColors);

function setup() {
  createCanvas(postW, postH);
  d = width / 3;
  frameRate(60);

  secondsC = new CircleTick(
    0,
    0,
    width * 0.2,
    tickNum,
    secondsInc,
    secondaryColor,
    -90,
    10,
    accentColor
  );
  minutesC = new CircleTick(
    0,
    0,
    width * 0.28,
    tickNum,
    minutesInc,
    secondaryColor,
    -90,
    10,
    accentColor
  );

  hoursC = new CircleTick(
    0,
    0,
    width * 0.36,
    tickNum,
    hoursInc,
    secondaryColor,
    -90,
    10,
    accentColor
  );
}

function draw() {
  background(bgColor);
  background(10);

  translate(width / 2, height / 2);
  angleMode(DEGREES);

  stroke(accentColor);
  strokeWeight(10);
  noFill();
  point(0, 0);

  secondsC.show();
  secondsC.setRotation();
  minutesC.show();
  minutesC.setRotation();
  hoursC.show();
  hoursC.setRotation();
}

class CircleTick {
  constructor(x, y, d, n, incr, c = 255, oA = -90, sW = 2, a = "red") {
    this.x = x;
    this.y = y;
    this.d = d;
    this.n = n;
    this.incr = incr;
    this.oA = oA;
    this.c = c;
    this.sW = sW;
    this.accent = a;
  }

  show() {
    let angleInc = floor(360 / this.n);

    for (let i = 0; i < this.n; i++) {
      let strokeW = map(i, 0, this.n, this.sW * 1.6, 0.1);
      noFill();
      push();
      rotate(this.oA);
      if (i == 0) {
        // strokeWeight(this.sW / 2);
        stroke(this.accent);
      } else {
        // strokeWeight(this.sW * 1.6);
        stroke(this.c);
      }
      strokeWeight(strokeW);
      point(this.d, this.y);
      pop();

      this.oA += angleInc;
    }
  }

  setRotation() {
    this.oA += this.incr;
  }
}
