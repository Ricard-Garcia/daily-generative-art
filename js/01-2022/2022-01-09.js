// Gift Wrapping Algorithm (2022.01.09)

// Variables
const points = [];
const hull = [];

const numPoints = 50;

let leftMost;
let currentVertex;
let index;
let nextIndex = -1;
let nextVertex;

function setup() {
  createCanvas(500, 500);
  let buffer = 20;
  for (let i = 0; i < numPoints; i++) {
    points.push(
      createVector(
        random(buffer, width - buffer),
        random(buffer, height - buffer)
      )
    );
  }
  points.sort((a, b) => a.x - b.x);
  leftMost = points[0];
  currentVertex = leftMost;

  hull.push(currentVertex);

  nextVertex = points[1];
  index = 2;
}

// Sketch drawing
function draw() {
  background(0);

  // Drawing the points
  stroke(255);
  strokeWeight(10);
  for (let p of points) {
    point(p.x, p.y);
  }

  // Drawing the points
  stroke(0, 0, 255);
  fill(0, 0, 255, 50);
  beginShape();
  for (let p of hull) {
    vertex(p.x, p.y);
  }
  endShape(CLOSE);

  push();
  stroke("cyan");
  point(leftMost.x, leftMost.y);
  pop();

  // Current vertex
  push();
  stroke("blue");
  point(currentVertex.x, currentVertex.y);
  pop();

  // Next vertex
  stroke(0, 255, 0);
  strokeWeight(2);
  line(currentVertex.x, currentVertex.y, nextVertex.x, nextVertex.y);

  // Checking point
  let checking = points[index];
  stroke(255);
  line(currentVertex.x, currentVertex.y, checking.x, checking.y);

  // Checking the z cross between current vertex and cheking
  const a = p5.Vector.sub(nextVertex, currentVertex);
  const b = p5.Vector.sub(checking, currentVertex);

  const cross = a.cross(b);

  if (cross.z < 0) {
    nextVertex = checking;
    nextIndex = index;
  }
  index = index + 1;

  // Stop at the end of the array
  if (index == points.length) {
    if (nextVertex == leftMost) {
      console.log("Done");
      noLoop();
    } else {
      hull.push(nextVertex);
      currentVertex = nextVertex;
      index = 0;
      //points.splice(nextIndex, 1);
      nextVertex = leftMost;
      // noLoop();
    }
  }
}

function keyPressed() {
  if (key == "s") {
    save("mySketch.png");
  }
}
