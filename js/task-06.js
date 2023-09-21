const inputEl = document.querySelector("#validation-input");
// console.log(inputEl.dataset.length);
inputEl.addEventListener("blur", onInputHandler);

function onInputHandler(evt) {
  const isValid =
    evt.currentTarget.value.length === Number(inputEl.dataset.length);
  inputEl.classList.toggle("valid", isValid);
  inputEl.classList.toggle("invalid", !isValid);
}

// function onInputHandler(evt) {
//   if (evt.currentTarget.value.length === inputEl.dataset.length) {
//     inputEl.classList.remove("invalid");
//     inputEl.classList.add("valid");
//   } else {
//     inputEl.classList.remove("valid");
//     inputEl.classList.add("invalid");
//   }
// }
