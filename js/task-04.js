const value = document.querySelector("#value");
const minusValue = document.querySelector('button[data-action="decrement"]');
const plusValue = document.querySelector('button[data-action="increment"]');

let counter = 0;

const clickMinus = () => {
  counter -= 1;
  value.textContent = counter;
};
const clickPlus = () => {
  counter += 1;
  value.textContent = counter;
};
minusValue.addEventListener("click", clickMinus);
plusValue.addEventListener("click", clickPlus);

console.log(value);
