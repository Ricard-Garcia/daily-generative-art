// 1D Perlin noise (gradient) (2022.01.20)

let xOffset = 0;
let inc = 0.003;

let shapeOffset = 10;
let lines;
let hasStroke = false;

let darkColor = getRandomColor(darkColors);

function setup() {
  createCanvas(800, 800);

  lines = random(2, 40);
}

function draw() {
  background(darkColor);

  stroke(240);
  strokeWeight(1);

  if (!hasStroke) {
    noStroke();
  }

  fill(255, 30);

  for (let i = 0; i < lines; i++) {
    beginShape();

    vertex(-shapeOffset, height);

    for (let x = -shapeOffset; x <= width + shapeOffset; x++) {
      // Mapping the 0,1 value of noise to height
      let y = noise(xOffset + inc * i) * height;

      vertex(x, y);

      xOffset += inc;
    }

    vertex(width + shapeOffset, height);
    endShape();
  }

  noLoop();
}
