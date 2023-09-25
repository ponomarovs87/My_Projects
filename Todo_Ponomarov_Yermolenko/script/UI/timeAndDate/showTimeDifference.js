import { calculateTimeDifference } from "./calculateTimeDifference.js";

export function showTimeDifference(element, timestamp) {
	const updateInterval = () => {
		const difference = calculateTimeDifference(timestamp);
		element.textContent = difference.answer;
		element.style.color = difference.color;
		const timer = difference.timer;
		setTimeout(updateInterval, timer);
	};

	updateInterval();
}
