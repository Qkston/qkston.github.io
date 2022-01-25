window.addEventListener("DOMContentLoaded", () => {
	const result = document.querySelector(".result"),
		buttons = document.querySelector(".buttons");

	let a;

	buttons.addEventListener("click", (event) => {
		if (event.target.id === "item-0") {
			// Square root
			result.innerHTML = Math.sqrt(+result.innerHTML);
		} else if (event.target.id === "item-1") {
			// Clear all
			result.innerHTML = "";
		} else if (event.target.id === "item-2") {
			// Backspace
			const resultArr = result.innerHTML.split("");
			if (resultArr.length > 0) {
				resultArr.length--;
			}
			result.innerHTML = resultArr.join("");
		}

		if (+event.target.innerHTML || event.target.id === "item-18" || event.target.id === "item-17") {
			// Numbers, dot and zero
			result.innerHTML += event.target.innerHTML;
		}
	});
});
