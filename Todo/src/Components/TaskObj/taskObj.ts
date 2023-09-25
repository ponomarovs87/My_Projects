const { v4: uuidv4 } = require("uuid");

export class NewTask {
	isCompleted: boolean;
	textContent: string;
	id: string;
	dateCreation: number;
	deadline: number;
	dateCompleted: number | null;

	constructor(textContent: string, deadline: number) {
		this.isCompleted = false;
		this.textContent = textContent;
		this.id = uuidv4();
		this.dateCreation = Date.now();
		this.deadline = deadline;
		this.dateCompleted = null;
	}
}
