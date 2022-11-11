const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let newItems = [];

ingredients.forEach((ingredient) => {
  const newItem = document.createElement("li");
  newItem.textContent = ingredient;
  newItem.classList.add("item");
  newItems.push(newItem);
});

const list = document.querySelector("#ingredients");
list.append(...newItems);
