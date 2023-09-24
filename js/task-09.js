const bg = document.querySelector("body");
const color = document.querySelector(".color");
const btn = document.querySelector(".change-color");

// Add a click handler to the button
btn.addEventListener("click", changeColor);

// Get a random hexadecimal color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Click handler for the button
function changeColor() {
  const bgColor = getRandomHexColor();
  bg.style.backgroundColor = `${bgColor}`;
  color.textContent = `${bgColor}`;
}
