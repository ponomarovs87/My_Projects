import { workHoursCalc } from "helper/dataAndTimeHelpers";

export interface interfaceDayObj {
	startOfWork: number;
	endOfWork: number;
	workHours: number;
	dayOff: boolean;
	holiday: boolean;
	sickDay: boolean;
	id: number;
	lunchtime: number;
}

export class DayObj {
	startOfWork: number;
	endOfWork: number;
	workHours: number;
	dayOff: boolean;
	holiday: boolean;
	sickDay: boolean;
	id: number;
	lunchtime: number;

	constructor(startOfWork: number, endOfWork: number, id: number, lunchtime: number) {
		this.dayOff = false;
		this.holiday = false;
		this.sickDay = false;
		this.startOfWork = startOfWork;
		this.id = id;
		this.lunchtime = lunchtime;
		this.endOfWork = endOfWork;
		this.workHours = workHoursCalc(this.endOfWork, this.startOfWork, this.lunchtime);
	}
}
