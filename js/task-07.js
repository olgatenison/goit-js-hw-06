const inputSizeControl = document.querySelector("#font-size-control");
const outputTextSize = document.querySelector("#text");

outputTextSize.style.fontSize = inputSizeControl.value + "px";

inputSizeControl.addEventListener("input", handleFontSizeChange);

function handleFontSizeChange(event) {
  outputTextSize.style.fontSize = event.currentTarget.value + "px";
}
