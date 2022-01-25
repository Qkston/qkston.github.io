window.addEventListener("DOMContentLoaded", () => {
	const result = document.querySelector(".result"),
		buttons = document.querySelector(".buttons");

	buttons.addEventListener("click", (event) => {
		// Numbers, dot and zero
		if (+event.target.innerHTML || event.target.innerHTML == "." || event.target.innerHTML == "0") {
			result.innerHTML += event.target.innerHTML;
		}
		// Clear all
		if (event.target.innerHTML === "C") {
			result.innerHTML = "";
		}
		// Backspace
		if (event.target.id === "item-2") {
			const resultArr = result.innerHTML.split("");
			if (resultArr.length > 0) {
				resultArr.length--;
			}
			result.innerHTML = resultArr.join("");
		}
		// Square root
		if (event.target.id === "item-0") {
			result.innerHTML = Math.sqrt(+result.innerHTML);
		}
	});
});
