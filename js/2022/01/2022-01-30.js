// Circle packing 1 (2022.01.30)

let c;
let numCircles = 3;
let circles = [];
let cM = 0;

let randBG = getRandomColor(darkColors);

let randC = getRandomColor(colors);

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < numCircles; i++) {
    c = new Circle(
      random(margin, width - margin),
      random(margin, height - margin)
    );
    circles.push(c);
  }
}

function draw() {
  background(randBG);

  const total = 10; // Circles per frame
  let count = 0; // Count of circles per frame
  let attempts = 0;

  while (count < total) {
    let newC = newCircle();

    if (newC != null) {
      circles.push(newC);
      count++;
    }

    attempts++;

    if (attempts > 1000) {
      noLoop();
      console.log("Finished");
      break;
    }
  }

  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    if (c.growing) {
      if (c.edges()) {
        c.growing = false;
      } else {
        for (let o = 0; o < circles.length; o++) {
          let cO = circles[o];
          if (c != cO) {
            let d = dist(c.x, c.y, cO.x, cO.y);
            if (d - 2 < c.r + cO.r + cM) {
              c.growing = false;
              break;
            }
          }
        }
      }
    }

    c.show();
    c.grow();
  }
}

function newCircle() {
  let x = random(margin, width - margin);
  let y = random(margin, height - margin);

  var valid = true;
  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    var d = dist(x, y, circle.x, circle.y);
    if (d < circle.r) {
      valid = false;
      break;
    }
  }
  if (valid) {
    return new Circle(x, y);
  } else {
    return null;
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
    stroke(randC);
    fill(255, 10);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  grow() {
    if (this.growing) {
      this.r += 1;
    }
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
