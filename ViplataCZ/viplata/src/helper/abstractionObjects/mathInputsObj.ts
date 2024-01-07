export interface interfaceMathInputsObj {
	monthlySalary: number;
	monthlyPrumer: number;
	weekendBonus: string;
	additionalAllowanceForPreshour: string;
	dailyRate: number;
	defaultLunchtime: string;
	defaultStartOfWork: string;
	defaultEndOfWork: string;
}

export class MathInputsObj implements interfaceMathInputsObj {
	monthlySalary: number;
	monthlyPrumer: number;
	weekendBonus: string;
	additionalAllowanceForPreshour: string;
	dailyRate: number;
	defaultLunchtime: string;
	defaultStartOfWork: string;
	defaultEndOfWork: string;

	constructor(monthlySalary: number, monthlyPrumer: number, weekendBonus: string, additionalAllowanceForPreshour: string, dailyRate: number) {
		this.monthlySalary = +monthlySalary;
		this.monthlyPrumer = +monthlyPrumer;
		this.weekendBonus = weekendBonus;
		this.additionalAllowanceForPreshour = additionalAllowanceForPreshour;
		this.dailyRate = +dailyRate;
		this.defaultLunchtime = "00:30";
		this.defaultStartOfWork = "06:00";
		this.defaultEndOfWork = "14:30";
	}
}
