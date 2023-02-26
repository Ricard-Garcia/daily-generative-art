// Dotted letters (2022.02.08)

let textsArray = ["a", "&", "G", "R", "O", "S"];
let customText;

let pixelInc = 30;

let circleDiameter = 30;

let isNegative;
let foregroundColor;
let bgArr;

let time = 0;
let timeInc = 0.03;

margin = margin * 2;

function setup() {
  createCanvas(postW, postH);

  isNegative = false;
  if (isNegative) {
    backgroundColor = color([0, 0, 0]);
    foregroundColor = color(getRandomColor(lightColors));
  } else {
    backgroundColor = color(getRandomColor(lightColors));
    foregroundColor = color([0, 0, 0]);
  }

  bgArr = backgroundColor.levels;
  console.log(bgArr);
  customText = random(textsArray);
  console.log(customText);
}

function draw() {
  background(backgroundColor);

  fill(bgArr[0] + 1, bgArr[1] + 1, bgArr[2] + 1);
  textAlign(CENTER);
  textFont(groundbeatOutline);
  textSize(width * 0.8);
  textAlign(CENTER, CENTER);
  text(customText, width / 2, height / 2 - height * 0.07);

  let r = width / 2;

  // Sin & cos positions
  let yInc = map(r * sin(time), -400, 400, 10, 80);
  let xInc = map(r * cos(time), -400, 400, 10, 80);

  // Iterate through all pixels
  for (let y = margin; y <= height - margin; y += yInc) {
    for (let x = margin; x <= width - margin; x += xInc) {
      let pixelChannels = get(x, y);
      fill(foregroundColor);
      noStroke();
      if (
        pixelChannels[0] !== bgArr[0] ||
        pixelChannels[1] !== bgArr[1] ||
        pixelChannels[2] !== bgArr[2]
      ) {
        ellipse(x, y, circleDiameter, circleDiameter);
      } else {
        ellipse(x, y, circleDiameter / 4, circleDiameter / 4);
      }
    }
  }

  // push();
  // translate(width / 2, height / 2);
  // noStroke();
  // fill(isNegative ? 245 : 0);
  // circle(r * 0.8 * sin(time), r * 0.8 * cos(time), 40);
  // pop();

  time += timeInc;
}
