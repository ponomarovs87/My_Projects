export function workHoursCalc(endOfWork: number, startOfWork: number, lunchtime: number) {
	let workHours = (endOfWork - startOfWork) / (60 * 60 * 1000);
	if (workHours < 0) {
		workHours = (24 + workHours);
	}
	if (workHours > 6) {
		return workHours = workHours - lunchtime;
	}
	if (0.5 < workHours && workHours <= 6) {
		return workHours;
	} else {
		workHours = 0;
		return workHours;
	}
}
