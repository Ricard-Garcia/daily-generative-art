// Crayons (2022.09.18)

// Units
margin = -100;
let rectW, rectH, gutter, cols, rows;
const showGuides = false;

function setup() {
  createCanvas(postW, postH);
  const randomGridValue = int(random(2, 10));
  cols = randomGridValue;
  rows = randomGridValue * random(1, 3);
  rectW = (width - margin * 2) / cols;
  rectH = (height - margin * 2) / rows;
  gutter = 0;
  gutter = rectW * random(0.01 * cols, 0.1 * cols);
  angleMode(DEGREES);
  background("black");
}

function draw() {
  const color1 = random(basicColors);
  const color2 = random(basicColors);

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const x = margin + gutter + rectW * c;
      const y = margin + gutter + rectH * r;
      const w = rectW - gutter * 2;
      const h = rectH - gutter * 2;

      const d = w * 0.2;

      push();

      let angle = 0;
      let randomNum = Math.random();

      if (randomNum < 0.33) {
        angle = 0;
      } else if (0.33 <= randomNum && randomNum <= 0.66) {
        angle = 90;
      } else if (randomNum > 0.66) {
        angle = 180;
      }

      translate(x + w / 2, y + h / 2);
      rotate(angle);

      const wRect = new WrittenRect({
        x: (w / 2) * -1,
        y: (h / 2) * -1,
        w,
        h,
        numLines: int(random(2, 20)),
        color: random(basicColors),
        stroke: random(2, 5),
      });

      wRect.draw();
      push();
      stroke(backgroundColor);
      noFill();
      strokeWeight(5);
      if (showGuides) {
        rect((w / 2) * -1, (h / 2) * -1, w, h);
        strokeWeight(2);
        line(0, (h / 2) * -1, 0, h / 2);
        line((w / 2) * -1, 0, w / 2, 0);
        noFill();
        fill(0);
        strokeWeight(5);
        ellipse(0, 0, d, d);
      }
      pop();

      pop();
    }
  }

  noLoop();
}

class WrittenLine {
  constructor({ x, y, rFactor, lColor = 0, lStroke = 1, lMaxLength }) {
    this.location = new p5.Vector(x, y);
    this.rFactor = rFactor;
    this.lColor = lColor;
    this.lMaxLength = lMaxLength;
    this.lStroke = lStroke;
    this.lLength = 0;
    this.maxLineFactor = float(random(0.1, 1));
  }

  write() {
    const yOffsetFactor = random(0.1, 2);

    noStroke();
    fill(this.lColor);

    while (this.lLength <= this.lMaxLength) {
      const xLinePosition = map(
        this.lLength,
        0,
        this.lMaxLength * this.maxLineFactor,
        0,
        1
      );
      const newX = random(-this.lStroke, this.lStroke * 1.8);
      const newY = random(
        this.lStroke * yOffsetFactor * -1,
        this.lStroke * yOffsetFactor
      );

      const shouldShowPoint = Math.random() * xLinePosition < 0.5;

      if (shouldShowPoint) {
        ellipse(
          this.location.x + this.lLength + newX,
          this.location.y + newY,
          this.lStroke,
          this.lStroke
        );
      }

      this.lLength += newX;
    }
  }
}

class WrittenRect {
  constructor({ x, y, w, h, numLines, color = 0, stroke = 5 }) {
    this.location = new p5.Vector(x, y);
    this.w = w;
    this.h = h;
    this.numLines = numLines;
    this.color = color;
    this.stroke = stroke;
    this.lHeight = this.h / this.numLines;
  }

  draw() {
    for (let i = 0; i <= this.numLines; i++) {
      const wLine = new WrittenLine({
        x: this.location.x,
        y: i * this.lHeight + this.location.y,
        lColor: this.color,
        lStroke: this.stroke,
        lMaxLength: this.w,
      });

      wLine.write();
    }
  }
}
