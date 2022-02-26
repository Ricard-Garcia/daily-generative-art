// Orbits (2022.02.07)

let angle = -180;
let tickNum = 60;
let tickLength = 20;

let speed = 1;

let orbitInc = 360 / 60 / 60;
orbitInc *= speed;
let orbit1;

let sunR = 80;
let planets = [];
let numPlanets = 10;

let isNegative = true;

function setup() {
  createCanvas(postW, postH);
  frameRate(60);

  let previousOrbitWidth = sunR * 3;
  let previousPlanetRadius = 0;

  for (let i = 0; i < numPlanets; i++) {
    let orbitWidth = random(
      previousOrbitWidth + previousPlanetRadius,
      previousPlanetRadius * 15
    );
    let planetRadius = random(10, 30);
    if (orbitWidth + planetRadius <= width * 0.5) {
      let p = new Orbit(
        orbitWidth,
        planetRadius,
        orbitInc * random(0.5, 8),
        random(0, 360)
      );

      if (random(1) < 0.5) {
        let satellite = new Orbit(
          p.pR * 1.2,
          random(10, 20),
          orbitInc * random(10, 50),
          random(0, 360),
          orbitWidth,
          0
        );
        p.setSatellite(satellite);
      }

      planets.push(p);
    }

    previousOrbitWidth = orbitWidth;
    previousPlanetRadius = planetRadius;
  }
}

function draw() {
  isNegative ? background(10) : background(backgroundColor);

  translate(width / 2, height / 2);
  angleMode(DEGREES);

  // Sun
  noStroke();
  isNegative ? fill(245) : fill(0);
  ellipse(0, 0, sunR * 2, sunR * 2);

  // Planets
  for (let i = 0; i < planets.length; i++) {
    let planet = planets[i];
    planet.show();
  }

  //noLoop();
}

class Orbit {
  constructor(r, pR, incr, oA = -90, x = 0, y = 0) {
    this.r = r;
    this.pR = pR;
    this.incr = incr;
    this.oA = oA;
    this.x = x;
    this.y = y;
    this.satellite = null;
  }

  show() {
    // Orbit
    push();
    translate(this.x, this.y);
    noFill();
    strokeWeight(2);
    isNegative ? stroke(245) : stroke(0);
    circle(0, 0, this.r * 2);

    // Planet
    rotate(this.oA);
    noStroke();
    isNegative ? fill(245) : fill(0);
    circle(this.r, 0, this.pR);

    this.setRotation();

    if (this.satellite !== null) {
      this.satellite.show();
    }
    pop();
  }

  setRotation() {
    this.oA += this.incr;
  }

  setSatellite(satellite) {
    this.satellite = satellite;
  }
}
