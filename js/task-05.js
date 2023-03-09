const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
	event.currentTarget.value === ""
    ? (outputRef.textContent = "Anonymous")
    : (outputRef.textContent = event.currentTarget.value);
})