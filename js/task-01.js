const allCategoriesEl = document.querySelectorAll("li.item");

console.log(`Number of categories:`, allCategoriesEl.length);

allCategoriesEl.forEach((e) => {
  let titleEl = e.firstElementChild.textContent;
  console.log(`Category: ${titleEl}`);
  let countSubEl = e.lastElementChild.children.length;
  console.log(`Elements:`, countSubEl);
});
