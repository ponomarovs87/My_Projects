// {
// 	const checkbox = document.getElementById("checkbox");

// 	checkbox.addEventListener("click", () => {
// 		console.log(checkbox.checked);
// 	});
// }
// {
// const dateTimeInput = document.getElementById("deadline");
// const currentDate = new Date();

// console.log(currentDate);
// const formattedDateTime = currentDate.toISOString().slice(0, 16);
// console.log(formattedDateTime);
// dateTimeInput.value = formattedDateTime;
// }
// {
// 	const currentDate = new Date();

// 	console.log(currentDate);
// }

// {
// 	const dateTimeInput = document.getElementById("deadline");
// 	const currentDate = new Date();

// 	dateTimeInput.valueAsDate = currentDate;
// }

// {
// 	const targetDate1 = new Date();
// 	targetDate1.setMonth(targetDate1.getMonth() + 0);
// 	targetDate1.setDate(targetDate1.getDate() + 0);
// 	targetDate1.setHours(targetDate1.getHours() + 0);
// 	targetDate1.setSeconds(targetDate1.getSeconds() + 158);
// 	const targetTimestamp1 = Math.floor(targetDate1.getTime() / 1000);
// 	console.log(targetTimestamp1);

// 	const countdownElement = document.getElementById("countdown");
// 	const targetTimestamp = targetTimestamp1;

// 	function formatTimeUnit(value, unit) {
// 		if (value === 1) {
// 			return `${value} ${unit}`;
// 		} else if (value >= 2 && value <= 4) {
// 			return `${value} ${unit}а`;
// 		} else {
// 			return `${value} ${unit}ов`;
// 		}
// 	}

// 	function updateCountdown() {
// 		const currentTimestamp = Math.floor(Date.now() / 1000); // Текущая временная метка
// 		const difference = targetTimestamp - currentTimestamp; // Разница в секундах

// 		if (difference <= 0) {
// 			countdownElement.textContent = "Время истекло!";
// 		} else {
// 			const seconds = difference % 60;
// 			const minutes = Math.floor((difference / 60) % 60);
// 			const hours = Math.floor((difference / (60 * 60)) % 24);
// 			const days = Math.floor((difference / (60 * 60 * 24)) % 365);
// 			const months = Math.floor(difference / (60 * 60 * 24 * 30));
// 			const years = Math.floor(difference / (60 * 60 * 24 * 365));

// 			let countdownText = "До окончания осталось: ";

// 			if (years > 1) {
// 				countdownText += formatTimeUnit(years, "год");
// 			} else if (months > 0) {
// 				countdownText += formatTimeUnit(months, "месяц");
// 			} else if (days > 1) {
// 				countdownText += formatTimeUnit(days, "день");
// 			} else if (hours > 1) {
// 				countdownText += formatTimeUnit(hours, "час");
// 			} else if (minutes > 1) {
// 				countdownText += formatTimeUnit(minutes, "минута");
// 			} else {
// 				countdownText += formatTimeUnit(seconds, "секунда");
// 			}

// 			countdownElement.textContent = countdownText;
// 		}
// 	}

// 	// Обновляем счетчик каждую секунду
// 	setInterval(updateCountdown, 1000);
// }
