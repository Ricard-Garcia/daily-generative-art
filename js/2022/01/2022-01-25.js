// Metaballs (2022.01.25)

var mbNum = 10;
var blobs = [];

function setup() {
  createCanvas(200, 200);

  colorMode(HSB);

  for (i = 0; i < mbNum; i++)
    blobs.push(new Metaball(random(0, width), random(0, height)));
}

function draw() {
  background(51);

  loadPixels();
  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      let sum = 0;
      for (i = 0; i < blobs.length; i++) {
        let xdif = x - blobs[i].x;
        let ydif = y - blobs[i].y;
        let d = sqrt(xdif * xdif + ydif * ydif);
        sum += (10 * blobs[i].r) / d;
      }
      set(x, y, color(sum, 255, 255));
    }
  }
  updatePixels();

  for (i = 0; i < blobs.length; i++) {
    blobs[i].update();
  }

  //noLoop();
}

class Metaball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    let angle = random(0, 2 * PI);
    this.xspeed = random(2, 5) * Math.cos(angle);
    this.yspeed = random(2, 5) * Math.sin(angle);
    this.r = random(120, 240);
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    if (this.x > width || this.x < 0) this.xspeed *= -1;
    if (this.y > height || this.y < 0) this.yspeed *= -1;
  }

  show() {
    noFill();
    stroke(0);
    strokeWeight(4);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}
