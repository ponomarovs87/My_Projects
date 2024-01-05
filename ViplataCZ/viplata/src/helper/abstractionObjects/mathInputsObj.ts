export interface interfaceMathInputsObj {
	monthlySalary: number;
	monthlyPrumer: number;
	weekendBonus: string;
	additionalAllowanceForPreshour: string;
	dailyRate: number;
}

export class MathInputsObj {
	monthlySalary: number;
	monthlyPrumer: number;
	weekendBonus: string;
	additionalAllowanceForPreshour: string;
	dailyRate: number;

	constructor(monthlySalary: number, monthlyPrumer: number, weekendBonus: string, additionalAllowanceForPreshour: string, dailyRate: number) {
		this.monthlySalary = +monthlySalary;
		this.monthlyPrumer = +monthlyPrumer;
		this.weekendBonus = weekendBonus;
		this.additionalAllowanceForPreshour = additionalAllowanceForPreshour;
		this.dailyRate = +dailyRate;
	}
}
