export default function dailyHoursRate(date: number | Date, dailyRate: number) {
	if (typeof date === "number") {
		date = new Date(date);
	}

	const dayOfWeek = date.getDay();
	const dayOffBoolean = dayOfWeek === 0 || dayOfWeek === 6;

	return dayOffBoolean ? 0 : dailyRate;
}
