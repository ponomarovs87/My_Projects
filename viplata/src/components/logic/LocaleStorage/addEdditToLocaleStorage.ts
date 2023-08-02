import { load } from "./load";
import { setItem } from "./setItem";
import { interfaceDayObj } from "../abstractionObjects/dayObj";

export function saveToBase(dayObj: interfaceDayObj, date: Date) {
	const WorkDaysBase = load();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();

	//  { год: { месяц: { день: dayObj } } }
	const updatedWorkDaysBase = {
		...WorkDaysBase,
		[year]: {
			...WorkDaysBase[year],
			[month]: {
				...WorkDaysBase[year]?.[month],
				[day]: dayObj
			}
		}
	};

	setItem(updatedWorkDaysBase);
}
