const upperArrowHours = document.querySelector(".upper-arrows-hours");
const upperArrowMinutes = document.querySelector(".upper-arrows-minutes");
const upperArrowSeconds = document.querySelector(".upper-arrows-seconds");

const lowerArrowHours = document.querySelector(".lower-arrows-hours");
const lowerArrowMinutes = document.querySelector(".lower-arrows-minutes");
const lowerArrowSeconds = document.querySelector(".lower-arrows-seconds");

const hoursCountNumber = document.querySelector(".numbers-hours-count");
const minutesCountNumber = document.querySelector(".numbers-minutes-count");
const secondsCountNumber = document.querySelector(".numbers-seconds-count");

const startBtn = document.querySelector(".start-timer");

let hoursCount = 0,
	minutesCount = 0,
	secondsCount = 0;

// Button
// startBtn.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	console.log("Started");

// 	while (secondsCount > 0) {
// 		setTimeout(() => {
// 			secondsCount--;
// 			console.log(secondsCount);
// 		}, 1000);
// 		// secondsDown(secondsCount);
// 	}
// });

// Hours
upperArrowHours.addEventListener("click", () => {
	hoursCount++;

	if (hoursCount < 10) {
		hoursCountNumber.innerHTML = `0${hoursCount}`;
	} else if (hoursCount >= 10 && hoursCount < 23) {
		hoursCountNumber.innerHTML = `${hoursCount}`;
	} else if (hoursCount >= 23) {
		hoursCountNumber.innerHTML = `23`;
		hoursCount = 23;
	}
});

lowerArrowHours.addEventListener("click", () => {
	hoursCount--;

	if (hoursCount >= 0 && hoursCount < 10) {
		hoursCountNumber.innerHTML = `0${hoursCount}`;
	} else if (hoursCount >= 10) {
		hoursCountNumber.innerHTML = `${hoursCount}`;
	} else if (hoursCount <= 0) {
		hoursCountNumber.innerHTML = `00`;
		hoursCount = 0;
	}
});

// Minutes
upperArrowMinutes.addEventListener("click", () => {
	minutesCount++;

	if (minutesCount < 10) {
		minutesCountNumber.innerHTML = `0${minutesCount}`;
	} else if (minutesCount >= 10 && minutesCount < 60) {
		minutesCountNumber.innerHTML = `${minutesCount}`;
	} else if (minutesCount === 60) {
		// hoursCount++;
		minutesCount = 0;
		minutesCountNumber.innerHTML = `00`;
	}
});

lowerArrowMinutes.addEventListener("click", () => {
	minutesCount--;

	if (minutesCount >= 0 && minutesCount < 10) {
		minutesCountNumber.innerHTML = `0${minutesCount}`;
	} else if (minutesCount >= 10) {
		minutesCountNumber.innerHTML = `${minutesCount}`;
	} else if (minutesCount <= 0) {
		minutesCountNumber.innerHTML = `00`;
		minutesCount = 0;
	}
});

// Seconds
upperArrowSeconds.addEventListener("click", () => {
	secondsCount++;

	if (secondsCount < 10) {
		secondsCountNumber.innerHTML = `0${secondsCount}`;
	} else if (secondsCount >= 10 && secondsCount < 60) {
		secondsCountNumber.innerHTML = `${secondsCount}`;
	} else if (secondsCount === 60) {
		// minutesCount++;
		secondsCount = 0;
		secondsCountNumber.innerHTML = `00`;
	}
});

lowerArrowSeconds.addEventListener("click", () => {
	secondsCount = secondsDown(secondsCount);
});

function secondsDown(count) {
	count--;

	if (count >= 0 && count < 10) {
		secondsCountNumber.innerHTML = `0${count}`;
	} else if (count >= 10) {
		secondsCountNumber.innerHTML = `${count}`;
	} else if (count <= 0) {
		secondsCountNumber.innerHTML = `00`;
		count = 0;
	}

	return count;
}
