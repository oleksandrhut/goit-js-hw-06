const refs = {
  step: document.querySelector(".step"),
  value: document.querySelector("#value"),
  decrement: document.querySelector('button[data-action="decrement"]'),
  increment: document.querySelector('button[data-action="increment"]'),
};

let counterValue = Number(0);

const render = () => {
  refs.value.textContent = counterValue;
};

const addition = () => {
  counterValue += 1;
  render();
};

const decrease = () => {
  counterValue -= 1;
  render();
};

render();

refs.increment.addEventListener("click", addition);
refs.decrement.addEventListener("click", decrease);
