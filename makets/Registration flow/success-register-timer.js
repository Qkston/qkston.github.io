(() => {
	const timerNumber = document.querySelector(".success-page-main-email-timer-number");
	const timerBlock = document.querySelector(".success-page-main-email-timer");
	const resendLink = document.querySelector(".success-page-main-email-resend");

	window.addEventListener("load", () => {
		let timer = 30;

		setInterval(() => {
			if (timer === 0) {
				timerBlock.style.display = "none";
				resendLink.style.display = "block";
			} else {
				resendLink.style.display = "none";
				timerNumber.innerHTML = `
               ${timer}s
            `;
				timer--;
			}
		}, 1000);
	});
})();
