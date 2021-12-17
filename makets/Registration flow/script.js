const formOptionalBtn = document.querySelectorAll(".main-form-optional-inputs-btn");

const labelForIncorrectPasswords = document.querySelector(".incorrect-passwords");
const passwordInput = document.querySelector(".password");
const confirmPasswordInput = document.querySelector(".confirm-password");

const requiredInputs = document.querySelectorAll(".required-input");
const errorMessages = document.querySelectorAll(".main-form-label-error");

const registerBtn = document.querySelector(".register-button");

console.log(Array.from(requiredInputs));

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
		errorMessages.forEach((element) => {
			element.style.display = "none";
		});
		labelForIncorrectPasswords.style.display = "inline-block";
	} else {
		labelForIncorrectPasswords.style.display = "none";
	}
});

registerBtn.addEventListener("click", (e) => {
	e.preventDefault();

	const isEmpty = Array.from(requiredInputs).some((element) => element.value === "");

	requiredInputs.forEach(() => {
		if (isEmpty) {
			errorMessages.forEach((element) => {
				element.style.display = "inline-block";
			});
		} else {
			location.href = "https://qkston.github.io/makets/Registration%20flow/success-register.html";
		}
	});
});
