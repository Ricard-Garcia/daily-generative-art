// Pointillism walker (2022.01.27)

let img;

let x;
let y;

let nWalkers = 200;
let walkers = [];
let stepIncrement = 2;

let showImage = false;

function preload() {
  img = loadImage("../../../assets/2022/2022-01-28-asset.jpeg");
}

function setup() {
  createCanvas(postW, postH);
  img.resize(postW - margin * 2, 0);

  if (showImage) {
    image(img, margin, margin * 2);
  }

  for (let i = 0; i < nWalkers; i++) {
    x = random(margin, width - margin);
    y = random(margin, height - margin);

    walkers.push({ x: x, y: y });
  }

  noStroke();
  fill(color(backgroundColor));
  rect(0, 0, width, height);
}

function draw() {
  translate((width - img.width) / 4, (height - img.height) / 2);
  for (let w = 0; w < walkers.length; w++) {
    let nX = random(-stepIncrement, stepIncrement);
    let nY = random(-stepIncrement, stepIncrement);

    let oX = walkers[w].x;
    let oY = walkers[w].y;

    let col = img.get(walkers[w].x, walkers[w].y);
    strokeWeight(2);
    stroke(col);
    noFill();

    if (oX + nX < margin || oX + nX > width - margin) {
      nX *= -1;
    }

    if (oY + nY < margin || oY + nY > height - margin) {
      nY *= -1;
    }

    line(oX, oY, oX + nX, oY + nY);

    walkers[w].x = oX + nX;
    walkers[w].y = oY + nY;
  }
  //noLoop();
}
