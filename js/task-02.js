const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingridientsUl = document.querySelector("#ingredients");

const list = ingredients.map((e) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = e;
  return li;
});

ingridientsUl.append(...list);
