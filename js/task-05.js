let inputRef = document.querySelector(`#name-input`);
let outInput = document.querySelector(`#name-output`);

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) { 
    inputRef = event.currentTarget.value;
    console.log(inputRef);

    inputRef !== ' ' ? (outInput.innerText = inputRef.trim()) : `Anonymous`;
};