// Growing circles (2022.01.29)

let c;
let numCircles = 105;
let circles = [];

let randBG = getRandomColor(darkColors);

let randC = getRandomColor(colors);

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < numCircles; i++) {
    c = new Circle(
      random(margin, width - margin),
      random(margin, height - margin)
    );
    c.setColor(randC);
    circles.push(c);
  }
}

function draw() {
  background(randBG);
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    if (c.growing) {
      if (c.edges()) {
        c.growing = false;
      } else {
        console.log("Growing");
      }
    }

    c.show();
    c.grow();
  }
}

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 1;
    this.growing = true;
    this.color;
  }

  show() {
    stroke(this.color);
    fill(255, 10);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  grow() {
    if (this.growing) {
      this.r += 1;
    }
  }

  setColor(color) {
    this.color = color;
  }

  edges() {
    return (
      this.x + this.r >= width - margin ||
      this.x - this.r <= margin ||
      this.y + this.r >= height - margin ||
      this.y - this.r <= margin
    );
  }
}
