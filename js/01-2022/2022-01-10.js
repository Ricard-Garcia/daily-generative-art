// Random 2D Vector circular map (2022.1.10)

let minRandom = 100;
let maxRandom = 180;
let colors = [
  "rgba(255, 255, 0)",
  "rgba(255, 0, 0)",
  "rgba(0, 255, 0)",
  "rgba(0, 0, 255)",
];

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  translate(width / 2, height / 2);

  // Draw circle
  // let v = p5.Vector.random2D(random(minRandom, maxRandom), random(minRandom, maxRandom));
  let v = p5.Vector.random2D();
  v.mult(random(minRandom, maxRandom));

  stroke(random(colors));
  // Draw lines
  strokeWeight(0.5);
  line(0, 0, v.x, v.y);

  //Draw points
  strokeWeight(4);
  point(v.x, v.y);
}
