const header = document.querySelector(".header"),
	countNumber = header.querySelector(".count-number"),
	copyBtn = header.querySelector(".btn-copy"),
	copyMsg = header.querySelector(".msg-copy"),
	textarea = document.querySelector(".textarea");

textarea.oninput = function (event) {
	countNumber.innerHTML = event.target.value.length;
};

copyBtn.addEventListener("click", () => {
	textarea.focus();
	textarea.select();
	document.execCommand("copy");

	checkTextareaLength(textarea, copyMsg);
});

function checkTextareaLength(textarea, message) {
	if (textarea.value.length <= 0) {
		setTimeout(() => {
			message.innerHTML = `To copy text, click this button`;
			message.classList.remove("error");
			message.classList.remove("successful");
		}, 5000);

		message.innerHTML = `Insert text!`;
		message.classList.add("error");
		message.classList.remove("successful");
	} else {
		setTimeout(() => {
			message.innerHTML = `To copy text, click this button`;
			message.classList.remove("error");
			message.classList.remove("successful");
		}, 5000);

		message.innerHTML = `Successful copied!`;
		message.classList.add("successful");
		message.classList.remove("error");
	}
}
