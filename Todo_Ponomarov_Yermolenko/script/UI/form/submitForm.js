import { currectInput } from "./currectInput.js";
import { clearInput } from "./clearInput.js";
import { errorInput } from "./errorInput.js";
import { newTaskInput, errorMessage, deadline,deadlineElement } from "../getElementById/getElementById.js";

export function submitForm(e) {
	e.preventDefault();

	//вынести отдельно и исправить если не тут прилетает НАН
	const formData = new FormData(formNewTask);
	const deadline = Date.parse(formData.get("deadline"));

	const task1 = newTaskInput.value === "";
	const task2 = Date.now() >= deadline;
	currectInput();//Убрать на релизе
	
	console.log(deadline);
	console.log(Date.now());
	console.log(task2);
	if (task1 && task2) {
		errorInput(deadlineElement, errorMessage, "");
		errorInput(newTaskInput, errorMessage, "Невозможно добавить пустую задачу и просроченную задачу");
		return;
	}
	if (task2) {
		errorInput(deadlineElement, errorMessage, "Невозможно добавить просроченную задачу");
		return;
	}
	if (task1) {
		errorInput(newTaskInput, errorMessage, "Невозможно добавить пустую задачу");
		return;
	} else {
		currectInput();
	}

	clearInput(newTaskInput);
}
