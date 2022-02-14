// Noisy channels (2022.02.02)

let inc;
let xOff = 0;
let vOff = 0;
let variation;

margin = 100;

let w = storyW;
let h = storyH;
let originY;
let sW = (h / 100) * 3;

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

  noFill();
  strokeWeight(4);
  stroke(245);
  rect(margin, margin, width - margin * 2, height - margin * 2);
  pop();

  inc = map(mouseX, 0, w, 0.01, 0.0001);
  variation = map(mouseY, 0, h, -h * 0.5, h * 0.5);

  xOff = 0;
  vOff = 0;

  for (c of channelColors) {
    xOff = 0;
    beginShape();
    noFill();
    stroke(color(c));
    strokeWeight(sW);

    for (let x = margin; x < width - margin; x++) {
      let y = noise(xOff) * originY + height / 6;
      vertex(x, y + noise(vOff) * variation);

      xOff += inc;
      vOff += inc;
    }

    endShape();
  }
}
