function setUpdateInterval(difference, timeUnits, updateValue) {
	let intervalId;

	if (difference < 0) {
		if (Math.abs(difference) >= timeUnits[0].divisor) {
			intervalId = setInterval(() => {
				const updatedValue = updateValue();
				console.log(updatedValue); // Можно изменить вывод на ваше усмотрение
			}, timeUnits[0].divisor);
		}
	} else {
		for (let i = 1; i < timeUnits.length; i++) {
			if (difference >= timeUnits[i].divisor) {
				intervalId = setInterval(() => {
					const updatedValue = updateValue();
					console.log(updatedValue); // Можно изменить вывод на ваше усмотрение
				}, timeUnits[i].divisor);
				break;
			}
		}
	}

	return intervalId;
}

import { getLabel } from "../UI/timeAndDate/getLabel.js";

export function calculateTimeDifference(timestamp2) {
	const date1 = Date.now();
	const date2 = new Date(timestamp2);

	const difference = date2 - date1;
	const absoluteDifference = Math.abs(difference);

	const timeUnits = [
		{ unit: "месяц", labels: ["Месяц", "Месяца", "Месяцев"], divisor: 1000 * 30 * 60 * 60 * 24 },
		{ unit: "день", labels: ["День", "Дня", "Дней"], divisor: 1000 * 60 * 60 * 24 },
		{ unit: "час", labels: ["Час", "Часа", "Часов"], divisor: 1000 * 60 * 60 },
		{ unit: "минута", labels: ["Минута", "Минуты", "Минут"], divisor: 1000 * 60 },
		{ unit: "секунда", labels: ["Секунда", "Секунды", "Секунд"], divisor: 1000 }
	];

	const updateValue = () => {
		const currentDate = Date.now();
		const updatedDifference = date2 - currentDate;

		if (updatedDifference < 0) {
			for (const unit of timeUnits) {
				const count = Math.floor(Math.abs(updatedDifference) / unit.divisor);
				if (count > 1) {
					const label = getLabel(count, ...unit.labels);
					return `${count} ${label} просрочено`;
				}
			}
		} else {
			for (const unit of timeUnits) {
				const count = Math.floor(updatedDifference / unit.divisor);
				if (count > 1) {
					const label = getLabel(count, ...unit.labels);
					return `${count} ${label}`;
				}
			}
		}

		return `Время истекло`;
	};

	function setUpdateInterval(difference, timeUnits, updateValue) {
		let intervalId;

		if (difference < 0) {
			if (Math.abs(difference) >= timeUnits[0].divisor) {
				intervalId = setInterval(() => {
					const updatedValue = updateValue();
					console.log(updatedValue); // Можно изменить вывод на ваше усмотрение
				}, timeUnits[0].divisor);
			}
		} else {
			for (let i = 1; i < timeUnits.length; i++) {
				if (difference >= timeUnits[i].divisor) {
					intervalId = setInterval(() => {
						const updatedValue = updateValue();
						console.log(updatedValue); // Можно изменить вывод на ваше усмотрение
					}, timeUnits[i].divisor);
					break;
				}
			}
		}

		return intervalId;
	}

	const intervalId = setUpdateInterval(difference, timeUnits, updateValue);

	return intervalId;
}
