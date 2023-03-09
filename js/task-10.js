function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("[type=number]"),
  buttonCreat: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.buttonCreat.addEventListener("click", createBoxes)
refs.buttonDestroy.addEventListener("click", destroyBoxes)



function createBoxes() {
  const boxesEl = [];

  const firstDivEl = document.createElement("div");
  firstDivEl.style.backgroundColor = getRandomHexColor();
  firstDivEl.style.width = "30px";
  firstDivEl.style.height = "30px";
  boxesEl.push(firstDivEl);

	if (
    Number(refs.input.value) >= Number(refs.input.min) &&
    Number(refs.input.value) <= Number(refs.input.max)
  ) {
    for (let i = 1; i < refs.input.value; i += 1) {
      const divEl = document.createElement("div");
      divEl.style.backgroundColor = getRandomHexColor();
      divEl.style.width = `${
        Number(boxesEl[boxesEl.length - 1].style.width.slice(0, 2)) + 10
      }px`;
      divEl.style.height = `${
        Number(boxesEl[boxesEl.length - 1].style.width.slice(0, 2)) + 10
      }px`;

      boxesEl.push(divEl);
    }

    refs.boxes.append(...boxesEl);
  } else alert(`Вкажіть число від ${refs.input.min} до ${refs.input.max}`);
} 
    


function destroyBoxes() {
	refs.input.value = '';
	refs.boxes.innerHTML = '';
}

