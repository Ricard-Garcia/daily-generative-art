// Pointillism walker (2022.01.27)

let img;
let r;
let dFrame = 30;

let showImage = false;

function preload() {
  img = loadImage("../../../assets/2022/2022-01-27-asset.jpg");
}

function setup() {
  createCanvas(800, 800);
  img.resize(800 - margin * 2, 0);

  if (showImage) {
    image(img, margin, margin * 2);
  }
}

function draw() {
  for (let i = 0; i < dFrame; i++) {
    let x = random(margin, width - margin);
    let y = random(margin * 2, height - margin);
    r = random(3, 10);
    let col = img.get(x - margin, y - margin * 2);
    fill(col);
    noStroke();
    ellipse(x, y, r * 2, r * 2);
  }
}
