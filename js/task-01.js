const itemsRef = document.querySelectorAll('.item')

console.log(`Number of categories: ${itemsRef.length}`);

itemsRef.forEach(item => {
	console.log(`Category: ${item.firstElementChild.textContent}`);
	console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});
