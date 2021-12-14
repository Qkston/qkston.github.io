const formOptionalBtn = document.querySelectorAll(".main-form-optional-inputs-btn");

formOptionalBtn.forEach((element) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();

		element.classList.toggle("active");
	});
});
