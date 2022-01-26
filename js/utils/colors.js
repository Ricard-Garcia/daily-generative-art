let lightColors = [
  "AliceBlue",
  "Cornsilk",
  "DarkTurquoise",
  "GhostWhite",
  "LightCyan",
  "MistyRose",
  "PaleTurquoise",
];

let darkColors = [
  "Black",
  "CadetBlue",
  "CornflowerBlue",
  "Crimson",
  "DarkSlateGray",
  "Gold",
  "MediumAquamarine",
  "Salmon",
];

let greyColors = ["30", "40", "255"];

let colors = lightColors.concat(darkColors);
colors.sort(() => (Math.random() > 0.5 ? 1 : -1));

// Random colors
function getRandomColor(array) {
  let returnedColor;
  let randomChoice = Math.floor(Math.random() * array.length);

  returnedColor = array[randomChoice];

  return returnedColor;
}

const randomLightCol = getRandomColor(lightColors);
console.log(randomLightCol);
const randomDarkCol = getRandomColor(darkColors);
const randomColor = getRandomColor(colors);
