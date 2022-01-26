// Pixel grid (2022.01.23)

colors = [
  "MediumVioletRed",
  "DarkBlue",
  "Gold",
  "AliceBlue",
  "MediumTurquoise",
];

let cCol;

let cX;
let cY;
let cW;

let density;
let cols;
let rows;

function setup() {
  createCanvas(400, 400);

  density = floor(random(4, 4));

  cW = width / density;
  cols = density;
  rows = 60;
}

function draw() {
  background(240);
  randomSeed(99);

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      cX = cW * x;
      cY = cW * y;

      cCol = random(colors);

      fill(cCol);
      noStroke();
      rect(cX, cY, cW, cW);

      if (mouseX == cX && mouseY == cY) {
        console.log("mouse on top", x, y);
      }
    }
  }
  // noLoop();
}

function changeColor() {
  console.log("Changing color");
}
