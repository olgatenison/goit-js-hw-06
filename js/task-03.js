const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//creating gallery items
const gallery = document.querySelector(".gallery");

const galleryItem = (image) => {
  return `<li class="gallery-item">
  <img src="${image.url}" alt="${image.alt}" class="gallery-image">
  </li>
  `;
};

const galleryMarkup = images.map(galleryItem).join("");
console.log(galleryMarkup);

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

//creating styles
const styleEl = document.createElement("style");

styleEl.innerHTML = `
  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    list-style: none;
    padding: 0;
  }

  .gallery-item {
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .gallery-image {
    width: auto;
    height: 200px;
    display: block;
  }
`;

document.head.appendChild(styleEl);

// "beforebegin": Вставляє HTML перед початком елемента (у рівні зовнішнього контейнера елемента).
// "afterbegin": Вставляє HTML в початок елемента (як перше дочірнє внутрішнє вміст елемента).
// "beforeend": Вставляє HTML в кінець елемента (як останнє дочірнє внутрішнє вміст елемента).
// "afterend": Вставляє HTML після елемента (у рівні зовнішнього контейнера елемента).
