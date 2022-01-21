window.addEventListener("DOMContentLoaded", () => {
	const bgColor = document.querySelector(".bg-color"),
		generateBtn = document.querySelector(".generate-btn"),
		inputForHash = document.querySelector(".hash-color"),
		copyBtn = document.querySelector(".copy"),
		exampleText = document.querySelector(".example");

	generateColor();
	bgColor.style.backgroundColor = inputForHash.value;

	generateBtn.addEventListener("click", () => {
		generateColor();
		bgColor.style.backgroundColor = inputForHash.value;
	});

	inputForHash.oninput = function (event) {
		bgColor.style.backgroundColor = event.target.value;
	};

	copyBtn.addEventListener("click", () => {
		inputForHash.focus();
		inputForHash.select();
		document.execCommand("copy");

		copyBtn.style.color = "#4cbe5d";
		copyBtn.textContent = "Copied successful!";

		setTimeout(() => {
			window.getSelection().removeAllRanges();

			copyBtn.style.color = "#bebfc0";
			copyBtn.textContent = "Click here for copy";
		}, 3000);
	});

	exampleText.addEventListener("click", (event) => {
		if (event.target && event.target.matches("span.example-hex")) {
			inputForHash.value = event.target.innerHTML;
			bgColor.style.backgroundColor = event.target.innerHTML;
		}
		if (event.target && event.target.matches("span.example-rgb")) {
			inputForHash.value = event.target.innerHTML;
			bgColor.style.backgroundColor = event.target.innerHTML;
		}
		if (event.target && event.target.matches("span.example-color")) {
			inputForHash.value = event.target.innerHTML;
			bgColor.style.backgroundColor = event.target.innerHTML;
		}
	});

	function generateColor() {
		let result = "";
		const characters = "0123456789abcdef";

		for (let i = 0; i < 6; i++) {
			result += characters.charAt(Math.floor(Math.random() * characters.length));
		}

		inputForHash.value = `#${result}`;
		return result;
	}
});
