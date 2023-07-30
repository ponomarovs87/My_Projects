export class DayObj {
	startOfWork: number;
	endOfWork: number;
	dayOff: boolean;
	holiday: boolean;
	sickDay: boolean;
	id: number;

	constructor(startOfWork: number, endOfWork: number, id: number) {
		this.dayOff = false;
		this.holiday = false;
		this.sickDay = false;
		this.startOfWork = startOfWork;
		this.id = id;
		this.endOfWork = endOfWork;
	}
}
