const categoriesEl = document.querySelectorAll('li.item');
const categoriesElList = categoriesEl.length;
console.log(`Number of categories:`, categoriesElList);

const firstTitle = document.querySelectorAll('h2');
firstTitle.textContent = `Animals`;
console.log(`Category:`, firstTitle.textContent);

const titleLi = document.querySelectorAll('ul');
const categoriesElItem = titleLi.length;
console.log(`Elements:`, categoriesElItem);

const secondTitle = document.querySelectorAll('h2');
secondTitle.textContent = `Products`;
console.log(`Category:`, secondTitle.textContent);

//const titleLi = document.querySelectorAll('ul');
//const categoriesElItem = titleLi.length;
//console.log(`Elements:`, categoriesElItem);

const thirdTitle = document.querySelectorAll('h2');
thirdTitle.textContent = `Technologies`;
console.log(`Category:`, thirdTitle.textContent);

//const titleLi = document.querySelectorAll('ul');
//const categoriesElItem = titleLi.length;
//console.log(`Elements:`, categoriesElItem);