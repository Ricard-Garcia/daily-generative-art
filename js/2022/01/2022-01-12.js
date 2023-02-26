//Worley Noise (12.01.2022)

// Variables
let points = [];
let numPoints = 40;
let margins = 50;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  for (let p = 0; p < numPoints; p++) {
    points[p] = createVector(random(width), random(height));
  }
}

function draw() {
  background(255);
  loadPixels();

  for (let x = margins; x < width - margins; x++) {
    for (let y = margins; y < height - margins; y++) {
      let distances = [];
      for (let i = 0; i < points.length; i++) {
        let v = points[i];
        let d = dist(x, y, v.x, v.y);
        distances[i] = d;
      }
      let sorted = sort(distances);

      let r = map(sorted[0], 0, 150, 0, 800);
      let g = map(sorted[1], 0, 150, 0, 255);
      let b = map(sorted[2], 0, 150, 255, 0);

      let pixelIndex = (x + y * width) * 4;
      // Original noise
      // pixels[pixelIndex + 0] = r;
      // pixels[pixelIndex + 0] = g;
      // pixels[pixelIndex + 0] = b;
      // pixels[pixelIndex + 0] = 255;

      // "Psychedelic" noise
      pixels[pixelIndex + 0] = r;
      pixels[pixelIndex + 1] = g;
      pixels[pixelIndex + 2] = b;
      pixels[pixelIndex + 3] = 255;
    }
  }
  noLoop();
  updatePixels();
}
