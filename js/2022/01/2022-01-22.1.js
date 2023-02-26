// Rothko generator (2022.01.22)
let numRects = 20;

margin = 5; // 40
let rectMargin = 14; // 60
let safeSpace = 10;
let divisionH;

let rothkoPalette = [
  ["rgba(228, 117, 3, 1)", "rgba(247, 176, 4, .1)", "rgba(222, 54, 6, .1)"], // Background, top, bottom
  ["rgba(182, 98, 75, 1)", "rgba(34, 102, 154, .1)", "rgba(195, 147, 90, .1)"],
  ["rgba(228, 117, 3, 1)", "rgba(243, 43, 130, .1)", "rgba(222, 54, 6, .1)"],
  ["rgba(6, 44, 126, 1)", "rgba(240, 240, 210, .1)", "rgba(40, 30, 30, .1)"],
  ["rgba(32, 39, 43, 1)", "rgba(160, 150, 143, .1)", "rgba(25, 22, 44, .1)"],
  ["rgba(220, 170, 15, 1)", "rgba(230, 76, 38, .1)", "rgba(160, 150, 143, .1)"],
  ["rgba(35, 250, 190, 1)", "rgba(160, 150, 143, .1)", "rgba(11, 26, 45, .1)"],
  // Monochromatics
  [
    "rgba(114, 197, 235, 1)",
    "rgba(22, 104, 148, .1)",
    "rgba(22, 104, 148, .1)",
  ],
  ["rgba(213, 167, 99, 1)", "rgba(227, 214, 71, .1)", "rgba(238, 187, 58, .1)"],
  ["rgba(182, 63, 81, 1)", "rgba(241, 182, 195, .1)", "rgba(140, 24, 49, .1)"],
];

let palette;

let pW = 80;
let pH;

let cols;
let rows;

function setup() {
  createCanvas(400, 750);

  divisionH = random(margin + safeSpace, height - margin - safeSpace);

  palette = random(rothkoPalette);

  pH = height / 8;

  cols = width / pW;
  rows = height / pH;
}

function draw() {
  noStroke();

  let xOff = 0;

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      divisionH = random(margin + safeSpace, pH - margin - safeSpace);

      let originX = pW * x;
      let originY = pH * y;

      palette = random(rothkoPalette);

      // Background
      fill(palette[0]);
      rect(originX, originY, pW, pH);

      // Rectangles
      let topRect = new NoiseRect();
      let bottomRect = new NoiseRect();

      topRect.setXWave(4);
      bottomRect.setXWave(4);

      // Top rectangle
      for (let r = 0; r < numRects; r++) {
        topRect.setColor(palette[1]);
        topRect.draw(
          originX + margin,
          originY + margin,
          pW - margin * 2,
          divisionH,
          xOff
        );

        xOff += 300;
      }

      // Bottom rectangle
      for (let r = 0; r < numRects; r++) {
        bottomRect.setColor(palette[2]);
        bottomRect.draw(
          originX + margin,
          originY + divisionH + rectMargin,
          pW - margin * 2,
          pH - divisionH - margin - rectMargin,
          xOff
        );

        xOff += 300;
      }
    }
  }

  noLoop();
}

/* -------------------------------------------------------------------------- */
/*                              Class definition                              */
/* -------------------------------------------------------------------------- */
class NoiseRect {
  constructor() {
    this.originX;
    this.originY;
    this.width;
    this.height;
    this.perimeter;
    this.color;
    this.xWave = 25;
    this.path = [];
  }

  setColor(color) {
    this.color = color;
  }

  setXWave(xWave) {
    this.xWave = xWave;
  }

  drawGuides() {
    if (showRect) {
      fill(60);
      noStroke();
      rect(this.originX, this.originY, this.width, this.height);
    }

    for (let i = 0; i < this.path.length; i++) {
      let v = this.path[i];
      stroke(255);
      strokeWeight(2);
      point(v.x, v.y);
    }
  }

  draw(originX, originY, width, height, xOff) {
    this.originX = originX;
    this.originY = originY;
    this.width = width;
    this.height = height;
    this.perimeter = width * 2 + height * 2;

    let inc = 1;

    let x = originX;
    let y = originY;

    fill(color(this.color));

    beginShape();
    this.path.push(vertex(x, y));
    vertex(x, y);

    for (let i = 0; i <= this.perimeter; i += inc) {
      let offset = map(noise(xOff), 0, 1, -this.xWave, this.xWave);

      if (i <= width) {
        x += inc;
      } else if (i < width + height) {
        y += inc;
      } else if (i < width * 2 + height) {
        x -= inc;
      } else if (i < this.perimeter) {
        y -= inc;
      }

      this.path.push(vertex(x + offset, y + offset));

      xOff += 0.022;
    }

    endShape();
  }
}
