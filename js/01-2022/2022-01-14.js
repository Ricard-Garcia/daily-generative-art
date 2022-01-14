// Random walker (2022.01.14)

let jump = 10;
let walkers = 6;
let randoms = [];

let vM;
let hM;
let margin = 50;

function setup() {
  createCanvas(400, 400);
  background(255);
  fill(20);
  frameRate(30);

  wM = width - margin * 2;
  hM = height - margin * 2;

  rect(margin, margin, wM, hM);

  for (let w = 0; w < walkers; w++) {
    randoms.push({
      d: random(2, 60),
      x: random(margin, wM),
      y: random(margin, hM),
    });
  }
  console.log(randoms);
}

function draw() {
  fill(160, 30, 250, 2);
  rect(margin, margin, wM, hM);

  for (let w = 0; w < walkers; w++) {
    let u = randoms[w].x;
    let v = randoms[w].y;

    let vect = createVector(u, v);

    strokeWeight(randoms[w].d);
    stroke(240);
    point(vect.x, vect.y);

    randoms[w].x = random(u - jump, u + jump);
    randoms[w].y = random(v - jump, v + jump);

    if (randoms[w].x < margin) {
      randoms[w].x = u + jump;
    }

    if (randoms[w].y < margin) {
      randoms[w].y = v + jump;
    }

    if (randoms[w].x > wM) {
      randoms[w].x = u - jump;
    }

    if (randoms[w].y > hM) {
      randoms[w].y = v - jump;
    }
  }
  noStroke();
}

function keyPressed() {
  if (key == "s") {
    save("2022-01-14.png");
  }
}
