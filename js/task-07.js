const textEl = document.getElementById("text");

const inputEl = document.getElementById("font-size-control");

inputEl.addEventListener("input", (e) => {
    const size = inputEl.value;
    // console.log(size);

    textEl.style.fontSize = size + "px";
});