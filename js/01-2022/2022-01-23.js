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

margin = 50;

let den;
let rows;

function setup() {
  createCanvas(400, 400);

  let boardW = width - margin * 2;
  let boardH = height - margin * 2;

  den = random(7, 7);

  cW = boardW / den;

  cols = den;
  rows = boardH / cW;
}

function draw() {
  background(245);

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      cX = cW * x + margin;
      cY = cW * y + margin;

      if (margin <= cY && cY < height - cW * 2) {
        cCol = random(colors);
        fill(cCol);

        noStroke();
        rect(cX, cY, cW, cW);
      }
    }
  }
  noLoop();
}
