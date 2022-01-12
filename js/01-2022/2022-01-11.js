//Noise (11.01.2022)

// Variables
let offset = 1;

function setup() {
  createCanvas(500, 500);
  pixelDensity(1);
}

function draw() {
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let pixelIndex = (x + y * width) * 4;
      pixels[pixelIndex + 0 + offset] = random(255);
      pixels[pixelIndex + 1 + offset] = y;
      pixels[pixelIndex + 2 + offset] = x;
      pixels[pixelIndex + 3 + offset] = random(255);
    }
  }
  updatePixels();
  noLoop();
}
