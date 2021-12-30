(() => {
	const timerBlock = document.querySelector(".success-page-main-email-timer");
	const timerNumber = document.querySelector(".success-page-main-email-timer-number");
	const timerDoneLine = document.querySelector(".success-page-main-email-timer-done");

	const resendLink = document.getElementById("resend-link");
	let timer = 30;

	document.addEventListener("DOMContentLoaded", () => {
		setInterval(() => {
			if (timer === 0) {
				timerDoneLine.style.borderTop = "2px solid transparent";
				timerBlock.style.display = "none";
				resendLink.style.display = "block";
			} else {
				timer--;
				timerNumber.innerHTML = `
               ${timer}s
            `;

				if (30 > timer && timer >= 20) {
					timerDoneLine.style.borderLeft = "2px solid transparent";
				}
				if (20 > timer && timer >= 10) {
					timerDoneLine.style.borderBottom = "2px solid transparent";
				}
				if (10 > timer && timer >= 5) {
					timerDoneLine.style.borderRight = "2px solid transparent";
				}
			}
		}, 1000);
	});
})();
