(() => {
	const requiredInputs = document.querySelectorAll(".required-input");
	const errorMessages = document.querySelectorAll(".main-form-label-error");

	const labelForIncorrectPasswords = document.getElementById("error-passwords");
	const passwordInputs = document.querySelectorAll(".password-inputs");

	const checkboxInput = document.getElementById("default-checkbox");
	const termsText = document.getElementById("agree-terms");

	const registerBtn = document.getElementById("register-button");

	// Register button clicked
	registerBtn.addEventListener("click", (e) => {
		e.preventDefault();

		const isEmpty = Array.from(requiredInputs).some((element) => element.value === "");
		const checkedPasswords = passwordInputs[0].value === passwordInputs[1].value;

		requiredInputs.forEach(() => {
			if (isEmpty) {
				requiredInputsIsEmpty();
			} else if (!checkedPasswords) {
				passwordsCorrect();
			} else if (!checkboxInput.checked) {
				checkboxChecked();
			} else {
				location.href = "https://qkston.github.io/makets/Registration%20flow/success-register.html";
			}
		});
	});

	// Checking of the cumulative fields for emptiness
	function requiredInputsIsEmpty() {
		errorMessages.forEach((element) => {
			element.style.display = "inline-block";

			setTimeout(() => {
				element.style.display = "none";
			}, 3000);
		});
	}

	// Checking of the correct passwords
	function passwordsCorrect() {
		errorMessages.forEach((element) => {
			element.style.display = "none";
		});

		labelForIncorrectPasswords.style.display = "inline-block";

		setTimeout(() => {
			labelForIncorrectPasswords.style.display = "none";
		}, 3000);
	}

	// Checking checkbox
	function checkboxChecked() {
		termsText.innerHTML = `You must agree to <a href="#">terms and conditins</a> to register.`;
		termsText.style.color = "red";
	}
})();