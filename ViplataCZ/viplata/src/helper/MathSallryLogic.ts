import { getWorkingDaysInMonth, dayIsWorking } from "./dataAndTimeHelpers";

// - таймстамп + норма в день => обязательные часы в месяц
export function getWorkingHoursInMonth(timestamp: number, dailyRate: number): number {
	const days = getWorkingDaysInMonth(timestamp);
	const answer = days * dailyRate;
	return answer;
}

// - таймстамп + норма в день => обязательные часы в день
export function getDailyRate(timestamp: number, dailyRate: number): number {
	const dayOffBoolean = dayIsWorking(timestamp);
	const answer = dayOffBoolean * dailyRate;
	return answer;
}

// Подсчет пресчаcов
// (норма часов(8.5),отработано (10))=> ответ (1.5 часа)
//  отработанные часы - норма в день  => количество пресчасов
export function getOverhoursInDay(dailyRate: number, workedHours: number): number {
	const answer = workedHours - dailyRate;
	return answer;
}
