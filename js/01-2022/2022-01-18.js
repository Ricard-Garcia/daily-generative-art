// Binary gradient (2022.01.18)

let cW;
let cH;
let cM;
let r;

let isEllipse = true;

let margin;

let cols;
let rows;

let randomInc;

let binaryColors = [40, 255];

let darkColor0 = getRandomColor(darkColors);
let darkColor1 = getRandomColor(darkColors);
let darkColor2 = getRandomColor(darkColors);
let lightColor1 = getRandomColor(lightColors);
let lightColor2 = getRandomColor(lightColors);

function setup() {
  createCanvas(800, 800);
  background(darkColor0);

  cW = random(8, 100);
  cH = cW / 2.2;
  cM = 7;
  r = cW / 2;

  margin = 50;

  cols = (width - margin * 2) / cW;

  if (isEllipse) {
    rows = (height - margin * 2) / cW;
    console.log(rows);
  } else {
    rows = (height - margin * 2) / cH;
  }

  randomInc = 1 / rows;
}

function draw() {
  noStroke();

  for (let x = 0; x < cols; x++) {
    let initialRandom = 0.1;

    for (let y = 0; y < rows; y++) {
      let newNumb = random(0 + initialRandom, initialRandom + initialRandom);

      if (newNumb < 0.5) {
        fill(darkColor2);
      } else {
        fill(darkColor1);
      }

      if (isEllipse) {
        ellipseMode(CORNER);
        ellipse(
          cW * x + cM / 2 + margin,
          cW * y + cM / 2 + margin,
          cW - cM,
          cW - cM
        );
      } else {
        rect(
          cW * x + cM / 2 + margin,
          cH * y + cM / 2 + margin,
          cW - cM,
          cH - cM
        );
      }

      if (y <= rows / 2) {
        initialRandom += randomInc;
      } else {
        initialRandom -= randomInc;
      }
    }
  }

  noLoop();
}
