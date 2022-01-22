// 1D Perlin Noise (2022.01.19)

let xOffset = 0;

let randomColor1 = getRandomColor(colors);
let randomColor2 = getRandomColor(colors);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(randomColor1);
  stroke(randomColor2);
  strokeWeight(2);

  noFill();
  beginShape();

  for (let x = 0; x < width; x++) {
    // Mapping the 0,1 value of noise to height
    let y = noise(xOffset) * height;

    vertex(x, y);

    xOffset += 0.01;
  }

  endShape();
  noLoop();
}
