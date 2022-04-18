window.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector(".form-main");
	const formInputs = document.querySelectorAll(".form-inputs");
	const formInputsArr = Array.from(formInputs);

	const sendFormBtn = document.getElementById("send-form-button");

	let hideModalTimeout;

	// Form
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

	// Modal
	const modalWindow = document.querySelector(".modal-window"),
		modalWindowBtn = document.querySelector(".modal-window-main-btn");

	modalWindowBtn.addEventListener("click", (element) => {
		element.preventDefault();
		closeModal();
	});

	document.addEventListener("keydown", (event) => {
		if (event.code === "Escape" && modalWindow.classList.contains("show")) {
			closeModal();
		}
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

	// Language switcher
	const languageBlock = document.querySelector(".language-switcher-block"),
		languages = languageBlock.querySelectorAll(".language-switcher-block-element");

	window.addEventListener("click", (e) => {
		if (!e.target.classList.contains("fas")) {
			languageBlock.classList.remove("show");
		} else {
			languageBlock.classList.toggle("show");
		}
	});
	window.addEventListener("scroll", () => {
		languageBlock.classList.remove("show");
	});

	languages.forEach((item) => {
		item.addEventListener("click", (e) => {
			if (e.target.textContent === "Английский" || e.target.textContent === "English") {
				if (location.href !== "https://qkston.github.io/english.html") {
					location.href = "https://qkston.github.io/english.html";
				} else {
					languageBlock.classList.remove("show");
				}
			} else if (e.target.textContent === "Українська" || e.target.textContent === "Ukrainian") {
				if (location.href !== "https://qkston.github.io/") {
					location.href = "https://qkston.github.io/";
				} else {
					languageBlock.classList.remove("show");
				}
			}
		});
	});
});
