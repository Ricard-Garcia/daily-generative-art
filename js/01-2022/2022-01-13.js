// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for this video: https://youtu.be/BV9ny785UNc

// Written entirely based on
// http://www.karlsims.com/rd.html

// Also, for reference
// http://hg.postspectacular.com/toxiclibs/src/44d9932dbc9f9c69a170643e2d459f449562b750/src.sim/toxi/sim/grayscott/GrayScott.java?at=default

var grid;
var next;
var matrixValue = 1;

var dA = 1;
var dB = 0.5;
var feed = 0.057;
var k = 0.062;

function setup() {
  frameRate(100);
  createCanvas(200, 200);
  pixelDensity(1);
  grid = [];
  next = [];
  for (var x = 0; x < width; x++) {
    grid[x] = [];
    next[x] = [];
    for (var y = 0; y < height; y++) {
      grid[x][y] = {
        a: 1,
        b: 0,
      };
      next[x][y] = {
        a: 1,
        b: 0,
      };
    }
  }

  for (var i = 100; i < 110; i++) {
    for (var j = 100; j < 110; j++) {
      grid[i][j].b = 1;
    }
  }
}

function draw() {
  background(51);

  for (var x = matrixValue; x < width - matrixValue; x++) {
    for (var y = matrixValue; y < height - matrixValue; y++) {
      var a = grid[x][y].a;
      var b = grid[x][y].b;
      next[x][y].a = a + dA * laplaceA(x, y) - a * b * b + feed * (1 - a);
      next[x][y].b = b + dB * laplaceB(x, y) + a * b * b - (k + feed) * b;

      next[x][y].a = constrain(next[x][y].a, 0, 1);
      next[x][y].b = constrain(next[x][y].b, 0, 1);
    }
  }

  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var pix = (x + y * width) * 4;
      var a = next[x][y].a;
      var b = next[x][y].b;
      var c = floor((a - b) * 255);
      c = constrain(c, 0, 255);
      pixels[pix + 0] = 10;
      pixels[pix + 1] = 0;
      pixels[pix + 2] = c;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();

  swap();
}

function laplaceA(x, y) {
  var sumA = 0;
  sumA += grid[x][y].a * -1;
  sumA += grid[x - matrixValue][y].a * 0.2;
  sumA += grid[x + matrixValue][y].a * 0.2;
  sumA += grid[x][y + matrixValue].a * 0.2;
  sumA += grid[x][y - matrixValue].a * 0.2;
  sumA += grid[x - matrixValue][y - matrixValue].a * 0.05;
  sumA += grid[x + matrixValue][y - matrixValue].a * 0.05;
  sumA += grid[x + matrixValue][y + matrixValue].a * 0.05;
  sumA += grid[x - matrixValue][y + matrixValue].a * 0.05;
  return sumA;
}

function laplaceB(x, y) {
  var sumB = 0;
  sumB += grid[x][y].b * -1;
  sumB += grid[x - matrixValue][y].b * 0.2;
  sumB += grid[x + matrixValue][y].b * 0.2;
  sumB += grid[x][y + matrixValue].b * 0.2;
  sumB += grid[x][y - matrixValue].b * 0.2;
  sumB += grid[x - matrixValue][y - matrixValue].b * 0.05;
  sumB += grid[x + matrixValue][y - matrixValue].b * 0.05;
  sumB += grid[x + matrixValue][y + matrixValue].b * 0.05;
  sumB += grid[x - matrixValue][y + matrixValue].b * 0.05;
  return sumB;
}

function swap() {
  var temp = grid;
  grid = next;
  next = temp;
}

function keyPressed() {
  if (key == "s") {
    save("2022-01-14.png");
  }
}
