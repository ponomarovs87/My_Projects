export interface interfaceMathInputsObj {
	monthlySalary: number;
	monthlyPrumer: number;
	weekendBonus: string;
	additionalAllowanceForPreshour: string;
}

export class MathInputsObj {
	monthlySalary: number;
	monthlyPrumer: number;
	weekendBonus: string;
	additionalAllowanceForPreshour: string;

	constructor(monthlySalary: number, monthlyPrumer: number, weekendBonus: string, additionalAllowanceForPreshour: string) {
		this.monthlySalary = +monthlySalary;
		this.monthlyPrumer = +monthlyPrumer;
		this.weekendBonus = weekendBonus;
		this.additionalAllowanceForPreshour = additionalAllowanceForPreshour;
	}
}
