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

function destroyBoxes() {
	refs.input.value = '';
	refs.boxes.innerHTML = '';
}


function createBoxes() {
	const boxesEl = [];

	const firstDivEl = document.createElement("div");
	firstDivEl.style.backgroundColor = getRandomHexColor();
	firstDivEl.style.width = "30px";
	firstDivEl.style.height = "30px";
	boxesEl.push(firstDivEl);

	const inputValue = Number(refs.input.value);

	if (
    inputValue >= Number(refs.input.min) &&
    inputValue <= Number(refs.input.max)
	) {
		for (let i = 1; i < inputValue; i += 1) {
			const lastElStyle = boxesEl[boxesEl.length - 1].style
			
			const divEl = document.createElement("div");
			divEl.style.backgroundColor = getRandomHexColor();
			divEl.style.width = Number.parseInt(lastElStyle.width) + 10 + "px";
			divEl.style.height = Number.parseInt(lastElStyle.height) + 10 + "px";
		
			boxesEl.push(divEl);
		}
		refs.boxes.append(...boxesEl);
	}
    
   else alert(`Вкажіть число від ${refs.input.min} до ${refs.input.max}`);
};
    


//  ------- SECOND SOLUTION --------

// function createBoxes() {
// 	const boxesEl = [];
// 	const inputValue = Number(refs.input.value);

// 	if (
//     inputValue >= Number(refs.input.min) &&
//     inputValue <= Number(refs.input.max)
// 	) {
// 		for (let i = 0; i < inputValue; i+=1) {
// 			const divEl = `<div style = "background-color:${getRandomHexColor()}; width:${30 + 10 * i}px; height:${30 + 10 * i}px"></div> ` 
			
// 			boxesEl.push(divEl);
// 		}
// 		 refs.boxes.insertAdjacentHTML("afterbegin", boxesEl.join('') );
// 	}
// 	else alert(`Вкажіть число від ${refs.input.min} до ${refs.input.max}`);
// }



