const rangeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

rangeRef.addEventListener("input", onRangeChange)

function onRangeChange() {
	const range = rangeRef.value;
	textRef.style.fontSize = `${range}px`;
}