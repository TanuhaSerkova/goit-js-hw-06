const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector(`#ingredients`);

//const newIngredients = [];

const newIngredientsList = ingredients.map((ingredients) => {
  const ingredientsList = document.createElement(`li`);
  ingredientsList.textContent = ingredients;
  ingredientsList.classList.add(`item`);
  
  return ingredientsList;
});


ingredientsEl.append(...newIngredientsList);
console.log(ingredientsEl);