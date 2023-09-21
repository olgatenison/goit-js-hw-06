const inputForm = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

inputForm.addEventListener("input", onInputChange);

function onInputChange(evt) {
  const inputValue = evt.currentTarget.value.trim();
  nameOutput.textContent = inputValue || "Anonymous";
}

// function onInputChange(evt) {
//   if (evt.currentTarget.value === "") {
//     nameOutput.textContent = "Anonymous";
//   } else {
//     nameOutput.textContent = evt.currentTarget.value;
//   }
// }
