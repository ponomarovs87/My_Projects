import { getLabel } from "./getLabel.js";

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

	if (difference < 0) {
		for (const unit of timeUnits) {
			const count = Math.floor(absoluteDifference / unit.divisor);
			if (count > 1) {
				const label = getLabel(count, ...unit.labels);
				return { answer: `${count} ${label} просрочено`, timer: unit.divisor, color: "red" };
			}
		}
	} else {
		for (const unit of timeUnits) {
			const count = Math.floor(difference / unit.divisor);
			if (count > 1) {
				const label = getLabel(count, ...unit.labels);
				const answer = { answer: `${count} ${label}`, timer: unit.divisor };
				if (unit.unit === "секунда") {
					answer.color = "red";
					return answer;
				}
				if (unit.unit === "минута" || unit.unit === "час") {
					answer.color = "orange";
					return answer;
				} else {
					answer.color = "green";
					return answer;
				}
			}
		}
	}

	return { answer: `Время истекло`, timer: 1000, color: "red" };
}
