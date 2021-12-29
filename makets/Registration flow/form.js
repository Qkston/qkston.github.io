const checkbox = document.getElementById("checkbox");
let checked = false;

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
