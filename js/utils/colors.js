const lightColors = [
  "AliceBlue",
  "Cornsilk",
  "DarkTurquoise",
  "GhostWhite",
  "LightCyan",
  "MistyRose",
  "PaleTurquoise",
];

const darkColors = [
  "CadetBlue",
  "CornflowerBlue",
  "Crimson",
  "Gold",
  "MediumAquamarine",
  "Salmon",
];

const greyColors = ["30", "40", "255"];

const colors = lightColors.concat(darkColors);
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
