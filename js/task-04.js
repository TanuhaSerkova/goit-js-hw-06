const buttons = {
    btnDescrement: document.querySelector(`[data-action="decrement"]`),
    btnIncrement: document.querySelector(`[data-action="increment"]`),
    valueEl: document.querySelector(`#value`),
    counterEl: document.querySelector(`#counter`),
};

let counterValue = 0;
const increment = () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
};

buttons.btnIncrement.addEventListener('click', increment);
buttons.btnDescrement.addEventListener('click', decrement);