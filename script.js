window.addEventListener("DOMContentLoaded", () => {
	const formInputs = document.querySelectorAll(".form-inputs");
	const formInputsArr = Array.from(formInputs);

	const sendFormBtn = document.getElementById("send-form-button");

	const modalWindow = document.querySelector(".modal-window");
	const modalWindowBtn = document.querySelector(".modal-window-main-btn");

	sendFormBtn.addEventListener("click", (e) => {
		e.preventDefault();
		const requiredInputs = formInputsArr.some((element) => element.value === "");

		if (requiredInputs) {
			formInputsArr.forEach((element) => {
				if (element.value === "") {
					element.classList.add("error");
					element.classList.remove("no-border");
				}

				setTimeout(() => {
					element.classList.add("no-border");
					element.classList.remove("error");
				}, 3000);
			});
		} else {
			modalWindow.style.display = "flex";
		}
	});

	modalWindowBtn.addEventListener("click", (e) => {
		e.preventDefault();
		modalWindow.style.display = "none";
		window.location = "https://qkston.github.io/";
	});
});
