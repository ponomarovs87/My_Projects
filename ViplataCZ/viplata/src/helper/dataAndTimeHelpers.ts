import { format } from "date-fns";

// таймтамп => сколько рабочих дней в месяце
export function getWorkingDaysInMonth(timestamp: number): number {
	const date = new Date(timestamp);
	const year = date.getFullYear();
	const month = date.getMonth() + 1;

	const lastDay = new Date(year, month, 0);
	const totalDays = lastDay.getDate();
	let workingDays = 0;

	for (let day = 1; day <= totalDays; day++) {
		const currentDate = new Date(year, month - 1, day);
		const currentDayOfWeek = currentDate.getDay();

		if (currentDayOfWeek >= 1 && currentDayOfWeek <= 5) {
			workingDays++;
		}
	}

	return workingDays;
}

// -таймстамп => если день рабочий 1 нет 0
export function dayIsWorking(timestamp: number): number {
	const date = new Date(timestamp);
	const day = date.getDay();
	let answer = 0;
	if (day >= 1 && day <= 5) {
		answer = 1;
	}
	return answer;
}

// конвертирует таймстамп в время
function convertTimestampToDecimalTime(timestamp: number): number {
	const date = new Date(timestamp);
	const hours = date.getHours();
	const minutes = date.getMinutes();

	const decimalTime = hours + minutes / 60;
	return decimalTime;
}

// - есть ли ночные часы? => true/false
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

// - сколько ночных часов = время прихода таймстамп + время ухода таймстамп => кол-во ночных часов
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

// - дата(таймстамп или дата) + норма => если рабочий день вовращает норму если нет возвращает 0
export function dailyHoursRate(date: number | Date, dailyRate: number): number {
	if (typeof date === "number") {
		date = new Date(date);
	}

	const dayOfWeek = date.getDay();
	const dayOffBoolean = dayOfWeek === 0 || dayOfWeek === 6;

	return dayOffBoolean ? 0 : dailyRate;
}

// округление времени к плюсу 30 минутам(например 15:17 => 15:30)
// таймстамп => таймстамп округленный до 30 минут
export const roundStartTimeTo30Minutes = (date: Date): Date => {
	const copiedDate = new Date(date);
	const minutes = copiedDate.getMinutes();
	if (minutes > 0 && minutes < 30) {
		copiedDate.setMinutes(30);
	} if (minutes > 30) {
		copiedDate.setMinutes(0);
		copiedDate.setHours(copiedDate.getHours() + 1, 0, 0, 0);
	}
	return copiedDate;
};

// округление к 30 минутам к минусу(например 15:17 => 15:00)
// таймстамп => таймстамп округленный до 30 минут
export const roundEndTimeTo30Minutes = (date: Date): Date => {
	const copiedDate = new Date(date);
	const minutes = copiedDate.getMinutes();
	if (minutes > 0 && minutes < 30) {
		copiedDate.setMinutes(0);
	} if (minutes > 30) {
		copiedDate.setMinutes(30);
	}
	return copiedDate;
};

// таймстамп => Часы:минуты
export function showHHmm(date: number): string {
	const answer = format(new Date(date), "HH:mm");
	return answer;
}

// Подсчет пресчаcов
// (норма часов(8.5),отработано (10))=> ответ (1.5 часа)
/* export function extrahoursCalculator(dailyHoursRate: number, workHours: number) {
	return workHours - dailyHoursRate;
} */

// Подсчтет отработанных часов
// (окончание работы: таймстамп, начало работы : таймстамп, перерыв (например 0.5)) => кол-во отработанных часов (например: 10)
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