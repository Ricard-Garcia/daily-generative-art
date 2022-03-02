// Bouncer text (2022.02.10)

let b;
let bouncersNum = 4;
let bouncers = [];

let isNegative;
let hasLine = true;
let hasText = true;
let fontSize = 100;

margin = 150;

function setup() {
  createCanvas(postW, postH);

  isNegative = random([true, false]);

  if (isNegative) {
    backgroundColor = 0;
    foregroundColor = getRandomColor(coldColors);
  } else {
    backgroundColor = 245;
    foregroundColor = getRandomColor(warmColors);
  }

  for (let i = 0; i < bouncersNum; i++) {
    b = new Bouncer(
      int(random(margin, width - margin)),
      int(random(margin, height - margin))
    );
    bouncers.push(b);
  }
}

function draw() {
  background(backgroundColor);

  for (let i = 0; i < bouncers.length; i++) {
    bouncers[i].show();
  }

  strokeWeight(20);
  stroke(245);
  // rect(margin, margin, width - margin * 2, height - margin * 2);
}

class Bouncer {
  constructor(x, y, text = "") {
    this.location = new p5.Vector(x, y);
    this.step = new p5.Vector(random(-5, 5), random(-5, 5));
    this.line = {
      x1: this.location.x,
      y1: this.location.y,
      x2: this.location.x,
      y2: this.location.y,
    };
    this.text = text;
    this.bbText = groundbeatBlack.textBounds(
      text,
      this.location.x,
      this.location.y
    );
    this.color = getRandomColor(isNegative ? coldColors : warmColors);
  }

  show() {
    let l = this.line;

    let lineTension = map(
      dist(l.x1, l.y1, l.x2, l.y2),
      0,
      hipotenusa(width - margin * 2, height - margin * 2),
      10,
      0.1
    );

    if (hasLine) {
      push();
      strokeWeight(lineTension);
      stroke(this.color);
      noFill();
      line(l.x1, l.y1, l.x2, l.y2);
      pop();
    }

    if (hasText) {
      noStroke();
      fill(this.color);
      textSize(fontSize);
      textAlign(CENTER, CENTER);
      textFont(groundbeatBlack);

      push();
      fill(backgroundColor);
      strokeWeight(6);
      stroke(this.color);
      ellipse(this.location.x, this.location.y, this.bbText.w * 3);
      pop();

      noFill();
      push();
      noStroke();
      fill(this.color);
      text(this.text, this.location.x, this.location.y);
      pop();
    } else {
      noFill();
      // stroke(this.color);
      // strokeWeight(20);
      // point(this.location.x, this.location.y);
    }

    this.update(l);
  }

  update(l) {
    l.x1 = this.location.x;
    l.y1 = this.location.y;

    this.location.x += this.step.x;
    this.location.y += this.step.y;

    // x
    if (this.location.x <= margin) {
      this.step.x *= -1;
      this.location.x += this.step.x;

      // Resetting line
      l.x2 = margin;
      l.y2 = this.location.y;

      // Resetting text
      this.resetText("L");
    } else if (this.location.x >= width - margin) {
      this.step.x *= -1;
      this.location.x += this.step.x;

      // Resetting line
      l.x2 = width - margin;
      l.y2 = this.location.y;

      this.location.x += this.step.x;

      // Resetting text
      this.resetText("R");
    } else {
      this.location.x += this.step.x;
    }

    // y
    if (this.location.y < margin) {
      this.step.y *= -1;
      this.location.y += this.step.y;

      // Resetting line
      l.x2 = this.location.x;
      l.y2 = margin;

      // Resetting text
      this.resetText("T");
    } else if (this.location.y > height - margin) {
      this.step.y *= -1;
      this.location.y += this.step.y;
      // Resetting line
      l.x2 = this.location.x;
      l.y2 = height - margin;

      // Resetting text
      this.resetText("B");
    }
  }

  resetText(text) {
    this.text = text;

    this.bbText = groundbeatBlack.textBounds(
      this.text,
      this.location.x,
      this.location.y
    );
  }
}
