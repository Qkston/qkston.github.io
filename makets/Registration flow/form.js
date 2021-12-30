(() => {
	const checkbox = document.getElementById("checkbox");
	let checked = false;

	const formOptionalBtn = document.querySelectorAll(".main-form-optional-inputs-btn");

	checkbox.addEventListener("click", () => {
		if (!checked) {
			checkbox.style.backgroundImage = "url('img/log-in/checked.png')";
			checkbox.style.backgroundPosition = "center";
			checkbox.style.backgroundSize = "30px";
			checked = true;
		} else if (checked) {
			checkbox.style.backgroundImage = "none";
			checked = false;
		}
	});

	// For choosing in section number of employees
	formOptionalBtn.forEach((element) => {
		element.addEventListener("click", (e) => {
			e.preventDefault();

			formOptionalBtn.forEach((element) => {
				element.classList.remove("active");
			});

			element.classList.add("active");
		});
	});
})();
