const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const value = event.currentTarget.value.trim();
  if (value.length !== 0) {
    textOutput.textContent = value;
  } else textOutput.textContent = "Anonymous";
});
