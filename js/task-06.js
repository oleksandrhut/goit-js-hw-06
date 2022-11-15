const textInput = document.querySelector("#validation-input");
console.log(textInput.dataset.length);

let inputValue = "";

const changeBlur = (event) => {
  inputValue = event.currentTarget.value.trim();
  console.log(inputValue.length);
  console.log(Number(textInput.dataset.length));
  console.log(inputValue.length === Number(textInput.dataset.length));
  if (inputValue.length !== Number(textInput.dataset.length)) {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  } else {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  }
};

textInput.addEventListener("blur", changeBlur);
