import { load } from "./load";
import { interfaceDayObj } from "../abstractionObjects/dayObj";

export function loadFromBase(date: Date): interfaceDayObj | null {
	const WorkDaysBase = load();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();

	return WorkDaysBase[year]?.[month]?.[day] || null;
}
