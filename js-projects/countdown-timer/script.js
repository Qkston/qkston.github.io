// Upper buttons
const upperArrowHours = document.querySelector(".upper-arrows-hours"),
	upperArrowMinutes = document.querySelector(".upper-arrows-minutes"),
	upperArrowSeconds = document.querySelector(".upper-arrows-seconds"),
	// Lower buttons
	lowerArrowHours = document.querySelector(".lower-arrows-hours"),
	lowerArrowMinutes = document.querySelector(".lower-arrows-minutes"),
	lowerArrowSeconds = document.querySelector(".lower-arrows-seconds"),
	// Number
	hoursCountNumber = document.querySelector(".numbers-hours-count"),
	minutesCountNumber = document.querySelector(".numbers-minutes-count"),
	secondsCountNumber = document.querySelector(".numbers-seconds-count"),
	// Buttons for controls
	buttons = document.querySelectorAll(".button-for-contols"),
	startBtn = buttons[0],
	stopBtn = buttons[1],
	pauseBtn = buttons[2],
	// Block for buttons
	blockStartBtn = document.querySelector(".start-button"),
	blockStopPauseBtn = document.querySelector(".stop-pause-buttons");

let hoursCount = 0,
	minutesCount = 0,
	secondsCount = 0,
	timer;

// Notification
function notification() {
	setInterval(new Audio("notification/notification.mp3").play(), 3000);
}

// Buttons
startBtn.addEventListener("click", () => {
	upperArrowHours.disabled = upperArrowMinutes.disabled = upperArrowSeconds.disabled = true;
	lowerArrowHours.disabled = lowerArrowMinutes.disabled = lowerArrowSeconds.disabled = true;

	blockStartBtn.style.display = "none";
	blockStopPauseBtn.style.display = "flex";

	timer = setInterval(() => {
		secondsDown();
		if (hoursCount <= 0 && minutesCount <= 0 && secondsCount <= 0) {
			upperArrowHours.disabled = upperArrowMinutes.disabled = upperArrowSeconds.disabled = false;
			lowerArrowHours.disabled = lowerArrowMinutes.disabled = lowerArrowSeconds.disabled = false;

			blockStartBtn.style.display = "flex";
			blockStopPauseBtn.style.display = "none";

			notification();
			clearInterval(timer);
		}
	}, 1000);
});

stopBtn.addEventListener("click", () => {
	hoursCount = minutesCount = secondsCount = 0;
	hoursDown();
	minutesDown();
	secondsDown();
});

pauseBtn.addEventListener("click", () => {
	clearInterval(timer);

	upperArrowHours.disabled = upperArrowMinutes.disabled = upperArrowSeconds.disabled = false;
	lowerArrowHours.disabled = lowerArrowMinutes.disabled = lowerArrowSeconds.disabled = false;

	blockStartBtn.style.display = "flex";
	blockStopPauseBtn.style.display = "none";
});

// Hours
upperArrowHours.addEventListener("click", () => {
	hoursCount = hoursUp();
});

lowerArrowHours.addEventListener("click", () => {
	hoursCount = hoursDown();
});

function hoursUp() {
	hoursCount++;

	if (hoursCount < 10) {
		hoursCountNumber.innerHTML = `0${hoursCount}`;
	} else if (hoursCount >= 10 && hoursCount < 23) {
		hoursCountNumber.innerHTML = `${hoursCount}`;
	} else if (hoursCount >= 23) {
		hoursCountNumber.innerHTML = `23`;
		hoursCount = 23;
	}

	return hoursCount;
}

function hoursDown() {
	hoursCount--;

	if (hoursCount >= 0 && hoursCount < 10) {
		hoursCountNumber.innerHTML = `0${hoursCount}`;
	} else if (hoursCount >= 10) {
		hoursCountNumber.innerHTML = `${hoursCount}`;
	} else if (hoursCount <= 0) {
		hoursCountNumber.innerHTML = `00`;
		hoursCount = 0;
	}

	return hoursCount;
}

// Minutes
upperArrowMinutes.addEventListener("click", () => {
	minutesCount = minutesUp();
});

lowerArrowMinutes.addEventListener("click", () => {
	minutesCount = minutesDown();
});

function minutesUp() {
	minutesCount++;

	if (minutesCount < 10) {
		minutesCountNumber.innerHTML = `0${minutesCount}`;
	} else if (minutesCount >= 10 && minutesCount < 60) {
		minutesCountNumber.innerHTML = `${minutesCount}`;
	} else if (minutesCount === 60) {
		hoursUp();
		minutesCount = 0;
		minutesCountNumber.innerHTML = `00`;
	}

	return minutesCount;
}

function minutesDown() {
	minutesCount--;

	if (minutesCount >= 0 && minutesCount < 10) {
		minutesCountNumber.innerHTML = `0${minutesCount}`;
	} else if (minutesCount >= 10) {
		minutesCountNumber.innerHTML = `${minutesCount}`;
	} else if (minutesCount <= 0) {
		if (hoursCount <= 0) {
			minutesCountNumber.innerHTML = `00`;
			minutesCount = 0;
		} else {
			hoursDown();
			minutesCount = 59;
			minutesCountNumber.innerHTML = `${minutesCount}`;
		}
	}

	return minutesCount;
}

// Seconds
upperArrowSeconds.addEventListener("click", () => {
	secondsCount = secondsUp();
});

lowerArrowSeconds.addEventListener("click", () => {
	secondsCount = secondsDown();
});

function secondsUp() {
	secondsCount++;

	if (secondsCount < 10) {
		secondsCountNumber.innerHTML = `0${secondsCount}`;
	} else if (secondsCount >= 10 && secondsCount < 60) {
		secondsCountNumber.innerHTML = `${secondsCount}`;
	} else if (secondsCount === 60) {
		minutesUp();
		secondsCount = 0;
		secondsCountNumber.innerHTML = `00`;
	}

	return secondsCount;
}

function secondsDown() {
	secondsCount--;

	if (secondsCount >= 0 && secondsCount < 10) {
		secondsCountNumber.innerHTML = `0${secondsCount}`;
	} else if (secondsCount >= 10) {
		secondsCountNumber.innerHTML = `${secondsCount}`;
	} else if (secondsCount <= 0) {
		if (minutesCount > 0) {
			minutesDown();
			secondsCount = 59;
			secondsCountNumber.innerHTML = `${secondsCount}`;
		} else if (hoursCount > 0 && minutesCount <= 0) {
			hoursDown();
			minutesDown();
			secondsCount = 59;
			minutesCount = 59;
			secondsCountNumber.innerHTML = `${secondsCount}`;
			minutesCountNumber.innerHTML = `${minutesCount}`;
		} else {
			secondsCountNumber.innerHTML = `00`;
			secondsCount = 0;
		}
	}

	return secondsCount;
}
