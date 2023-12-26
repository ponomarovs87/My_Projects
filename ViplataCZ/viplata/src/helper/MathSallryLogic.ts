import { getWorkingDaysInMonth, dayIsWorking } from "@helper/dataAndTimeHelpers";

// - таймстамп + норма в день => обязательные часы в месяц
export function getWorkingHoursInMonth(timestamp: number, dailyRate: number): number {
	const days = getWorkingDaysInMonth(timestamp);
	const answer = days * dailyRate;
	return answer;
}

// - таймстамп + норма в день => обязательные часы в день
export function getDailyRate(timestamp: number, dailyRate: number): number {
	const days = dayIsWorking(timestamp);
	const answer = days * dailyRate;
	return answer;
}

// - таймстамп + норма в день + отработанные часы  => количество пресчасов
export function getOverhoursInDay(timestamp: number, dailyRate: number, workedHours: number): number {
	const rate = getDailyRate(timestamp, dailyRate);
	const answer = workedHours - rate;
	return answer;
}


