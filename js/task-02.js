const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector(`#ingredients`);


const newIngredientsList = ingredients.map(ingredient => {
  const ingredientsList = document.createElement(`li`);
  ingredientsList.textContent = ingredient;
  ingredientsList.classList.add(`item`);
  
  return ingredientsList;
});


ingredientsEl.append(...newIngredientsList);
console.log(ingredientsEl);