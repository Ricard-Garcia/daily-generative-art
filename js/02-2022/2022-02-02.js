// Noisy channels (2022.02.02)

let inc;
let xOff = 0;
let vOff = 0;
let variation;

let w = 800;
let h = w;
let originY;
let sW = (h / 100) * 6;

function setup() {
  createCanvas(w, h);
  blendMode(LIGHTEST);

  originY = height / 2;
}

function draw() {
  //translate(w / 2, 0);
  //angleMode(DEGREES);
  //rotate(90);
  push();
  blendMode(BLEND);
  background(0);
  pop();

  inc = map(mouseX, 0, w, 0.01, 0.0001);
  variation = map(mouseY, 0, h, -h * 0.25, h * 0.25);

  xOff = 0;
  vOff = 0;

  for (c of channelColors) {
    xOff = 0;
    beginShape();
    noFill();
    stroke(color(c));
    strokeWeight(sW);

    for (let x = -sW; x < width + sW; x++) {
      let y = noise(xOff) * originY + height / 6;
      vertex(x, y + noise(vOff) * variation);

      xOff += inc;
      vOff += inc;
    }

    endShape();
  }
}
