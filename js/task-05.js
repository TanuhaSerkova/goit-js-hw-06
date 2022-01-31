let inputRef = document.querySelector(`#name-input`);
inputRef.addEventListener('input', onInputChange);

let outInput = document.querySelector(`#name-output`);
function onInputChange(event) { 
    inputRef.textContent = event.currentTarget.value;
    console.log(inputRef);

    outInput = !event.currentTarget.cheked;
};