function convertTimestampToDecimalTime(timestamp: number): number {
	const date = new Date(timestamp);
	const hours = date.getHours();
	const minutes = date.getMinutes();

	const decimalTime = hours + minutes / 60;
	return decimalTime;
}

export function hasNightShift(timestampStartHours: number, timestampEndHours: number): boolean {
	const startHours = convertTimestampToDecimalTime(timestampStartHours);
	const endHours = convertTimestampToDecimalTime(timestampEndHours);
	if (startHours === endHours) {
		return false;
	}
	if (startHours >= 22 || endHours <= 6 || startHours > endHours || startHours < 6 || endHours > 22) {
		return true;
	}

	return false;
}
export function countNightHours(timestampStartHours: number, timestampEndHours: number): number {
	let startHours = convertTimestampToDecimalTime(timestampStartHours);
	let endHours = convertTimestampToDecimalTime(timestampEndHours);
	if (hasNightShift(timestampStartHours, timestampEndHours)) {
		let answer = 0;
		if (startHours >= 22 && endHours <= 6) {
			endHours += 24;
			answer = endHours - startHours;
			if (answer > 1) {
				return answer;
			}
			return 0;
		}
		if (endHours > startHours) {
			if (endHours > 6) {
				endHours = 6;
			}
			answer = endHours - startHours;
			if (answer > 1) {
				return answer;
			}
			return 0;
		}
		if (startHours > endHours) {
			endHours += 24;
			if (startHours < 22) {
				startHours = 22;
			}
			if (endHours > 30) {
				endHours = 30;
			}
			answer = endHours - startHours;
			if (answer > 1) {
				return answer;
			}
			return 0;
		}
	}
	return 0;
}
