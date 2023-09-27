const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElement = event.currentTarget.elements;
  const mail = formElement.email.value;
  const password = formElement.password.value;
  const formData = { mail, password };

  if (mail !== "" && password !== "") {
    console.log(formData);
  } else {
    return alert("All fields must be filled!");
  }
  event.currentTarget.reset();
}
