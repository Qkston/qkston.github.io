const formOptionalBtn = document.querySelectorAll(".main-form-optional-inputs-btn");

const labelForIncorrectPasswords = document.querySelector(".incorrect-passwords");
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

confirmPasswordInput.addEventListener("keyup", () => {
	if (passwordInput.value !== confirmPasswordInput.value) {
		labelForIncorrectPasswords.style.display = "inline";
	} else {
		labelForIncorrectPasswords.style.display = "none";
	}
});
