// Dotted letters (2022.02.08)

let letter = "g";
let customText;

let pixelInc = 30;
let circleDiameter = 10;
let cellMargin = 0.8;

let rows = 25;
let cols = 20;
let cH;
let cW;

let isNegative;
let foregroundColor;
let bgArr;

let time = 0;
let timeInc = 0.03;

margin = margin * 2;

function setup() {
  createCanvas(postW, postH);
  frameRate(0.2);

  cH = (height - margin * 2) / rows;
  cW = (width - margin * 2) / cols;

  isNegative = false;
  if (isNegative) {
    backgroundColor = color([0, 0, 0]);
    foregroundColor = color(getRandomColor(lightColors));
  } else {
    backgroundColor = color(getRandomColor(lightColors));
    foregroundColor = color([0, 0, 0]);
  }
  background(245);

  // Cols texts
  for (let i = 0; i <= cols; i++) {
    push();
    textSize(12);
    text(i + 1, cW * i + margin + cW * 0.25, height - margin * 0.8);
    pop();
  }

  // Rows texts
  for (let i = rows; i > 0; i--) {
    console.log(i);
    push();
    textSize(12);
    text(i, margin * 0.7, cH * -i + height - margin + cH * 0.5);
    pop();
  }

  bgArr = [245, 245, 245];
}

function draw() {
  textAlign(CENTER);
  textFont(groundbeatOutline);
  textSize(width * 0.82);
  textAlign(CENTER, CENTER);
  fill(bgArr[0] + 1, bgArr[1] + 1, bgArr[2] + 1);
  text(letter, width / 2, height / 2 - height * 0.12);

  ellipseMode(CORNER);
  strokeWeight(1);

  // Iterate through all pixels
  for (let y = margin; y <= height - margin; y += cH) {
    for (let x = margin; x <= width - margin; x += cW) {
      let pixelChannels = get(x, y);
      stroke(foregroundColor);
      noFill();
      if (
        pixelChannels[0] !== bgArr[0] ||
        pixelChannels[1] !== bgArr[1] ||
        pixelChannels[2] !== bgArr[2]
      ) {
        // // fill(1);
        // rect(x, y, cW * cellMargin, cW * cellMargin);
        // push();
        // strokeWeight(8);
        // line(x, y, x + (cW * cellMargin) / 2, y + cH * cellMargin);
        // line(
        //   x + (cW * cellMargin) / 2,
        //   y + cH * cellMargin,
        //   x + cW * cellMargin,
        //   y
        // );
        // pop();
        fill(1);
        ellipse(x, y, cW * cellMargin, cH * cellMargin);
      } else {
        noFill();
        ellipse(x, y, cW * cellMargin, cH * cellMargin);
      }
    }
  }
  // save(`36-days-of-knit-${t}.png`);

  noLoop();
}
