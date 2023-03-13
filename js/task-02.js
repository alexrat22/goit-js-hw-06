const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const createOneIngredient = ingredients.map((ingredient) => {
  const oneIngredientEl = document.createElement("li");
  oneIngredientEl.textContent = ingredient;
  oneIngredientEl.classList.add("item");
  return oneIngredientEl;
});

ingredientsEl.append(...createOneIngredient);
