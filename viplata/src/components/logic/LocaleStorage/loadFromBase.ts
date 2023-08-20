import { load } from "./load";
import { interfaceDayObj } from "../abstractionObjects/dayObj";
import { interfaceMathInputsObj } from "../abstractionObjects/mathInputsObj";


export function loadFromBase(date: Date): interfaceDayObj | null {
	const WorkDaysBase = load();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();

	return WorkDaysBase[year]?.[month]?.[day] || null;
}

export function loadFromBaseMathInputs(date: Date, count: number = 0): interfaceMathInputsObj | null {
	const WorkDaysBase = load();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const answer = WorkDaysBase[year]?.[month]?.MathInputs || null;

	if (answer || count >= 12) {
		return answer;
	}

	const newDate = new Date(date);
	if (date.getMonth() === 0) {
		newDate.setFullYear(date.getFullYear() - 1);
		newDate.setMonth(11);
	} else {
		newDate.setMonth(date.getMonth() - 1);
	}

	return loadFromBaseMathInputs(newDate, count + 1);
}
