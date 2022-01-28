// Pixel grid drawing (2022.01.24)

let cX;
let cY;
let cW;

let cCol;

let pixels = [];

margin = 50;

let den = 10;
let rows;

let brushRadius = 50;
let isDragged = false;

function setup() {
  createCanvas(400, 400);

  let boardW = width - margin * 2;
  let boardH = height - margin * 2;

  cW = boardW / den;

  cols = den;
  rows = boardH / cW;

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let p = new Pixel(cW * x + margin, cW * y + margin, cW, cW);
      p.setColor(color(random(pixelGridColors)));
      pixels.push(p);
    }
  }
}

function draw() {
  background(245);

  for (let p = 0; p < pixels.length; p++) {
    pixels[p].draw();
    console.log(pixels[p].width);
  }
}

if (isDragged) {
  function mouseDragged() {
    for (let p = 0; p < pixels.length; p++) {
      pixels[p].resetColor(mouseX, mouseY, random(yellows));
    }
  }
} else {
  function mouseMoved() {
    for (let p = 0; p < pixels.length; p++) {
      pixels[p].resetColor(mouseX, mouseY, random(yellows));
    }
  }
}

/* -------------------------------------------------------------------------- */
/*                              Class definition                              */
/* -------------------------------------------------------------------------- */
class Pixel {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color;
  }

  setColor(color) {
    this.color = color;
  }

  resetColor(x, y, color) {
    let b = dist(x, y, this.x, this.y);

    // console.log(b);
    if (b < brushRadius) {
      // if (
      //   x >= this.x &&
      //   x <= this.x + this.width &&
      //   y >= this.y &&
      //   y <= this.y + this.height
      // ) {
      //   console.log(this.x);
      this.color = color;
    }
  }

  draw() {
    fill(color(this.color));
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }
}
