// Spacing words (2022.02.11)
// Based on @ryancarlstudio patterns of peace

let word = "spam";
let initialWords = 10;

let fontSize = 30;

let wordDecrease = 1;

let isNegative = true;
let isReversed = true;
let rowWords = isReversed ? 1 : initialWords;

let showGuides = false;

let cols;
let rows;

margin = 150;

if (isNegative) {
  foregroundColor = "yellow";
  backgroundColor = 0;
} else {
  foregroundColor = 0;
  backgroundColor = "yellow";
}

function setup() {
  createCanvas(postW, postH);

  cW = (width - margin * 2) / (word.length * rowWords - 1);
  cH = (height - margin * 2) / initialWords;

  rows = (height - margin * 2) / cH;

  background(backgroundColor);
  textAlign(CENTER);
  textFont(cooperBlack);
  textSize(fontSize);
}

function draw() {
  // Rows
  for (let i = 0; i < rows; i++) {
    fill(foregroundColor);

    if (showGuides) {
      line(0, margin, width, margin);
      line(0, height - margin, width, height - margin);
      push();
      stroke("red");
      strokeWeight(20);
      point(margin, cH * i + margin);
      pop();
    }

    // Words
    for (let w = 0; w < rowWords; w++) {
      let originW = margin + cW * word.length * w;
      // Letters
      for (let l = 0; l < word.length; l++) {
        text(
          word[l].toUpperCase(),
          cW * l + originW,
          cH * i + margin + fontSize
        );
      }
    }

    if (isReversed) {
      rowWords += wordDecrease;
    } else {
      rowWords -= wordDecrease;
    }
    cW = (width - margin * 2) / (word.length * rowWords - 1);
  }

  noLoop();
}
