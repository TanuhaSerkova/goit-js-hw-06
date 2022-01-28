const categoriesEl = document.querySelectorAll('ul#categories li.item');
const categoriesElList = categoriesEl.length;
console.log(`Number of categories:`, categoriesElList);


for (let i = 0; i < categoriesElList; i += 1) { 
    const categoriesText = categoriesEl[i].firstElementChild.textContent;
    console.log(`Category:`, categoriesText);

    const listEl = categoriesEl[i].lastElementChild;
    const numbersElList = listEl.querySelectorAll('li');
    console.log(`Elements:`, numbersElList.length);
};
