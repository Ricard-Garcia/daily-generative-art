// Concentric circles (2022.01.15)

let initialD = 300;
let isSquare;
let margin = 200;
let mW;
let mH;
let colors = [
  "AliceBlue",
  "CadetBlue",
  "CornflowerBlue",
  "Gold",
  "Ivory",
  "MistyRose",
  "PaleTurquoise",
  "Salmon",
];

function setup() {
  createCanvas(400, 400);
  mW = width - margin * 2;
  mH = height - margin * 2;
}

function draw() {
  colorChoice = floor(random(0, colors.length));
  background(colors[colorChoice]);
  noStroke();

  while (initialD > 2) {
    colorChoice = floor(random(0, colors.length));

    //strokeWeight(2);
    //stroke(colors[colorChoice]);
    fill(colors[colorChoice]);
    ellipse(width / 2, height / 2, initialD, initialD);

    initialD -= random(2, 80);
  }
  noLoop();
}
