const inputRef = document.querySelector("#validation-input");
const lengthData = Number(inputRef.dataset.length);

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputValue = event.currentTarget.value;

	if (inputValue.length >= lengthData) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
