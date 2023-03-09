const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const usersData = {};

	const { email, password } = event.currentTarget.elements;

	if (email.value === '' || password.value === '') alert("Звповніть всі поля!");
	
	usersData[email.name] = email.value;
	usersData[password.name] = password.value;
	console.log(usersData);
	
	event.currentTarget.reset();
}
