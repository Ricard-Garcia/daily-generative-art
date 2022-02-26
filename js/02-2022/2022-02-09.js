// Bouncer (2022.02.09)

let b;
let bouncersNum;
let bouncers = [];

let isNegative = false;

if (isNegative) {
  backgroundColor = 0;
  foregroundColor = getRandomColor(coldColors);
} else {
  backgroundColor = 245;
  foregroundColor = getRandomColor(warmColors);
}

margin = 140;

function setup() {
  createCanvas(postW, postH);

  bouncersNum = random(1, 4);

  for (let i = 0; i < bouncersNum; i++) {
    b = new Bouncer(
      random(margin, width - margin),
      random(margin, height - margin)
    );
    bouncers.push(b);
  }
}

function draw() {
  background(backgroundColor);

  for (let i = 0; i < bouncers.length; i++) {
    bouncers[i].show();
  }
  rect(margin, margin, width - margin * 2, height - margin * 2);
}

class Bouncer {
  constructor(x, y) {
    this.location = new p5.Vector(x, y);
    this.step = new p5.Vector(random(1, 5), random(1, 5));
    this.diameter = 30;
    this.line = {
      x1: this.location.x,
      y1: this.location.y,
      x2: this.location.x,
      y2: this.location.y,
    };
    this.text = "center";
    this.bbText = groundbeatLight.textBounds(
      this.text,
      this.location.x,
      this.location.y
    );
  }

  show() {
    noStroke();
    fill(backgroundColor);
    textSize(50);
    textAlign(CENTER, CENTER);
    textFont(groundbeatLight);

    push();
    fill(backgroundColor);
    strokeWeight(40);
    stroke(backgroundColor);
    // ellipse(this.location.x, this.location.y, this.bbText.w, this.bbText.h);
    pop();

    // text(this.text, this.location.x, this.location.y);

    let l = this.line;

    let lineTension = map(
      dist(l.x1, l.y1, l.x2, l.y2),
      0,
      hipotenusa(width - margin * 2, height - margin * 2),
      20,
      1
    );

    strokeWeight(lineTension);
    stroke(foregroundColor);
    noFill();
    line(l.x1, l.y1, l.x2, l.y2);

    this.update(l);
  }

  update(l) {
    l.x1 = this.location.x;
    l.y1 = this.location.y;

    // x
    if (this.location.x + this.step.x - this.diameter / 2 < margin) {
      this.step.x *= -1;
      // Resetting line
      l.x2 = margin;
      l.y2 = this.location.y;

      // Resetting text
      this.resetText("left");
    } else if (
      this.location.x + this.step.x + this.diameter / 2 >
      width - margin
    ) {
      this.step.x *= -1;
      // Resetting line
      l.x2 = width - margin;
      l.y2 = this.location.y;

      // Resetting text
      this.resetText("right");
    } else {
      this.location.x += this.step.x;
    }

    // y
    if (this.location.y + this.step.y - this.diameter / 2 < margin) {
      this.step.y *= -1;
      // Resetting line
      l.x2 = this.location.x;
      l.y2 = margin;

      // Resetting text
      this.resetText("top");
    } else if (
      this.location.y + this.step.y + this.diameter / 2 >
      height - margin
    ) {
      this.step.y *= -1;
      // Resetting line
      l.x2 = this.location.x;
      l.y2 = height - margin;

      // Resetting text
      this.resetText("bottom");
    } else {
      this.location.y += this.step.y + 1;
    }
  }

  resetText(text) {
    this.text = text;

    this.bbText = groundbeatLight.textBounds(
      text,
      this.location.x,
      this.location.y
    );
  }
}
