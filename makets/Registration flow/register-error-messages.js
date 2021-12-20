(() => {
	const formOptionalBtn = document.querySelectorAll(".main-form-optional-inputs-btn");

	const requiredInputs = document.querySelectorAll(".required-input");
	const errorMessages = document.querySelectorAll(".main-form-label-error");

	const labelForIncorrectPasswords = document.querySelector(".incorrect-passwords");
	const passwordInputs = document.querySelectorAll(".password-inputs");

	const registerBtn = document.querySelector(".register-button");

	formOptionalBtn.forEach((element) => {
		element.addEventListener("click", (e) => {
			e.preventDefault();

			formOptionalBtn.forEach((element) => {
				element.classList.remove("active");
			});

			element.classList.add("active");
		});
	});

	registerBtn.addEventListener("click", (e) => {
		e.preventDefault();

		const isEmpty = Array.from(requiredInputs).some((element) => element.value === "");
		const checkedPasswords = passwordInputs[0].value === passwordInputs[1].value;

		requiredInputs.forEach(() => {
			if (isEmpty) {
				requiredInputsIsEmpty();
			} else if (!checkedPasswords) {
				passwordsCorrect(checkedPasswords);
			} else {
				location.href = "https://qkston.github.io/makets/Registration%20flow/success-register.html";
			}
		});
	});

	function requiredInputsIsEmpty() {
		errorMessages.forEach((element) => {
			element.style.display = "inline-block";
			setTimeout(() => {
				element.style.display = "none";
			}, 3000);
		});
	}

	function passwordsCorrect(checkedPasswords) {
		if (!checkedPasswords) {
			errorMessages.forEach((element) => {
				element.style.display = "none";
			});

			labelForIncorrectPasswords.style.display = "inline-block";

			setTimeout(() => {
				labelForIncorrectPasswords.style.display = "none";
			}, 3000);
		}
	}
})();
