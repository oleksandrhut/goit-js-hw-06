const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All input fields must be filled!");
  }

  const formData = new FormData(event.currentTarget);

  formData.forEach((name, value) => {
    console.log("name", name);
    console.log("value", value);
  });

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
