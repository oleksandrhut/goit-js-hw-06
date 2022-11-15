const inputValue = document.querySelector("#font-size-control");
const textFontSize = document.querySelector("#text");

const changeFontSize = (event) => {
  textFontSize.style.fontSize = `${event.currentTarget.value}px`;
};

inputValue.addEventListener("click", changeFontSize);
