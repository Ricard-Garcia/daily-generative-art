let lightColors = [
  "AliceBlue",
  "Cornsilk",
  "DarkTurquoise",
  "GhostWhite",
  "LightCyan",
  "MistyRose",
  "PaleTurquoise",
];

let pixelGridColors = [
  "MediumVioletRed",
  "DarkBlue",
  "Gold",
  "AliceBlue",
  "MediumTurquoise",
];

let warmColors = [
  "Crimson",
  "DarkOrange",
  "DarkRed",
  "FireBrick",
  "LightCoral",
  "LightSalmon",
  "Salmon",
  "Tomato",
];

let coldColors = [
  "AliceBlue",
  "Aqua",
  "AquaMarine",
  "DarkBlue",
  "DarkCyan",
  "DarkTurquoise",
  "LightBlue",
  "LightSeaGreen",
  "PowderBlue",
];

let darkColors = [
  "Black",
  "CadetBlue",
  "CornflowerBlue",
  "Crimson",
  "DarkBlue",
  "DarkSlateGray",
  "Gold",
  "MediumAquamarine",
  "MediumTurquoise",
  "MediumVioletRed",
  "Salmon",
];

let yellows = [
  "rgba(255, 255, 30, .1)",
  "rgba(255, 180, 30, .2)",
  "rgba(255, 120, 30, .4)",
  "rgba(240, 100, 30, .6)",
  "rgba(255, 255, 30, .8)",
  "rgba(255, 255, 30, 1)",
];

// 2022.02.02
let channelColors = ["orangeRed", "blue", "white", "yellow", "LawnGreen"];

// 2022.09.19
let basicColors = ["#c50c1d", "#f8f5f4", "#0063db", "#e9b82c"];

let greyColors = ["Black", "DarkGray", "LightGray", "Whitesmoke"];

let backgroundColor = 246;

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
const randomDarkCol = getRandomColor(darkColors);
const randomColor = getRandomColor(colors);
