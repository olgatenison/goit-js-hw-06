const bg = document.querySelector("body");
const color = document.querySelector(".color");
const btn = document.querySelector(".change-color");




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener("click", changeColor){
  
};