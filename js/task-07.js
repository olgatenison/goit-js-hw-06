const inputSizeControl = document.querySelector("#font-size-control");
const outputTextSize = document.querySelector("#text");

inputSizeControl.addEventListener("input", handleFontSizeChange);

function handleFontSizeChange(event) {
  outputTextSize.style.fontSize = event.currentTarget.value + "px";
}
