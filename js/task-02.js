const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector(`#ingredients`);

const newIngredients = [];

const newIngredientsList = ingredients.map(ingredients => {
  const ingredientsList = document.createElement('li');
  ingredientsList.classList.add('item');
  ingredientsList.textContent = ingredients;
  
  return newIngredients.push(ingredientsList);
});

console.log(newIngredientsList);
ingredientsEl.append(...newIngredients);
