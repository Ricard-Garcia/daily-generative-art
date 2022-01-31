// Topographies (2022.01.26)

let xoff = 0;
let yoff = 100;
let incr = 0.01;

let pStep = 1;

let lightColor;
let darkColor1;
let darkColor2;

function setup() {
  createCanvas(400, 400);

  lightColor = getRandomColor(lightColors);
  darkColor1 = getRandomColor(darkColors);
  darkColor2 = getRandomColor(darkColors);
}

function draw() {
  loadPixels();

  for (let x = 0; x < width; x += pStep) {
    yoff = 0;
    for (let y = 0; y < height; y += pStep) {
      let n = floor(map(noise(xoff, yoff), 0, 0.9, 0, 255));
      let col;
      if (n < 100) {
        col = darkColor1;
      } else if (100 <= n && n <= 140) {
        col = darkColor2;
      } else {
        col = lightColor;
      }

      set(x, y, color(col));

      yoff += incr;
    }

    xoff += incr;
  }

  updatePixels();

  noLoop();
}
