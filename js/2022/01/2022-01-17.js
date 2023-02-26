// Sine waves (2022.01.17)

let steps;
let r;
let amplitude;
let angle;
let angleStep;

let frequency;

let x;
let y;
let sY;
let cS;

let margin = 50;

function setup() {
  createCanvas(400, 400);
  background(245);

  steps = floor(random(80, 300));
  amplitude = floor(random(10, 400));

  frequency = floor(random(1, 10));

  angleStep = (TWO_PI * frequency) / steps;
  angle = 0;

  d = amplitude;
  r = amplitude / 2;

  cS = 5;

  x = margin;
  y = height / 2;
}

function draw() {
  let randomIndex = floor(random(colors.length));
  let randomColor = color(colors[randomIndex]);

  noFill();
  stroke(randomColor);
  ellipse(x, y, d, d);
  ellipse(x + (width - margin * 2), y, d, d);
  noStroke();

  //randomColor.setAlpha(50);
  fill(randomColor);
  for (let i = 0; i < steps + 1; i++) {
    sY = map(sin(angle), -1, 1, -r, r);
    ellipse(x, sY + height / 2, cS, cS);

    x += (width - margin * 2) / steps;

    angle += angleStep;
  }

  noLoop();
}
