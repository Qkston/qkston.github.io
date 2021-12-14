const formOptionalBtn = document.querySelectorAll(".main-form-optional-inputs-btn");
const passwordInput = document.querySelector(".password");
const confirmPasswordInput = document.querySelector(".confirm-password");

formOptionalBtn.forEach((element) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();

		formOptionalBtn.forEach((element) => {
			element.classList.remove("active");
		});

		element.classList.add("active");
	});
});
