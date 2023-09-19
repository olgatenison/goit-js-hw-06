const value = document.querySelector("#value");
const minusValue = document.querySelector('button[data-action="decrement"]');
const plusValue = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const clickMinus = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
const clickPlus = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

minusValue.addEventListener("click", clickMinus);
plusValue.addEventListener("click", clickPlus);
