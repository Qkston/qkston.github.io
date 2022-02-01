window.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector(".form-main");
	const formInputs = document.querySelectorAll(".form-inputs");
	const formInputsArr = Array.from(formInputs);

	const sendFormBtn = document.getElementById("send-form-button");

	const modalWindow = document.querySelector(".modal-window");
	const modalWindowBtn = document.querySelector(".modal-window-main-btn");

	let hideModalTimeout;

	sendFormBtn.addEventListener("click", (element) => {
		element.preventDefault();
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
			showModal();
			hideModalTimeout = setTimeout(() => {
				closeModal();
			}, 5000);
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.code === "Escape" && modalWindow.classList.contains("show")) {
			closeModal();
		}
	});

	modalWindowBtn.addEventListener("click", (element) => {
		element.preventDefault();
		closeModal();
	});

	function showModal() {
		modalWindow.classList.add("show");
		modalWindow.classList.remove("hide");

		document.body.style.overflow = "hidden";
		form.reset();
	}

	function closeModal() {
		modalWindow.classList.add("hide");
		modalWindow.classList.remove("show");

		clearTimeout(hideModalTimeout);
		document.body.style.overflow = "";
	}
});
