import { newTaskInput, formNewTask, errorMessage } from "../UI/getElementById/getElementById.js";

export function emptyInput() {
	newTaskInput.style.border = "solid 2px red";

	errorMessage.id = "errorMessage";

	errorMessage.textContent = "Невозможно добавить пустую задачу";
	errorMessage.style.color = "red";

	formNewTask.appendChild(errorMessage);
}
