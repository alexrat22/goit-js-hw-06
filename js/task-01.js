const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(function (categorie) {
  const titleEl = categorie.querySelector("h2");
  console.log(titleEl.textContent);
  const subCategoriesEl = categorie.querySelectorAll("li");
  console.log(`Elements: ${subCategoriesEl.length}`);
});
