function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bgColor = document.querySelector("button");
const body = document.body;

function changeBgColor() {
  body.style.backgroundColor = getRandomHexColor();
}

bgColor.addEventListener("click", changeBgColor);
