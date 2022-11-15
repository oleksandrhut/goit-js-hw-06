function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxesSection = document.querySelector("#boxes");

let boxArray = [];
function createBoxes(amount) {
  console.log(input.value);

  for (let i = 1; i <= input.value; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxArray.push(box);
  }
  boxesSection.append(...boxArray);
}

function destroyBoxes() {
  boxesSection.innerHTML = "";
  boxArray = [];
}

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);
