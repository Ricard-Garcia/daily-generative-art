// Perlin noise (dot grid) (2022.01.21)

let xOff = 0;
let yOff = 0;

let d;

let inc;

let cols;
let rows;

let isStroke;

let lightColor = getRandomColor(lightColors);
let darkColor = getRandomColor(darkColors);

function setup() {
  createCanvas(400, 400);
  background(darkColor);

  d = 80;

  inc = 2;

  cols = floor(width / d);
  rows = floor(height / d);

  margin = floor(width / cols);

  isStroke = random([true, false]);
}

function draw() {
  noFill();
  for (let x = 0; x < cols - 1; x++) {
    yOff = 0;
    for (let y = 0; y < rows - 1; y++) {
      let r = map(noise(xOff, yOff), 0, 1, 0, d);

      if (isStroke) {
        stroke(lightColor);
        strokeWeight(8);
        noFill();
      } else {
        noStroke();
        fill(lightColor);
      }

      ellipse(x * d + margin, y * d + margin, r, r);
      yOff += inc;
    }
    xOff += inc;
  }

  noLoop();
}
