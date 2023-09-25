import { errorMessage, deadlineElement } from "../getElementById/getElementById.js";

export function clearInput(newTaskInput) {
	newTaskInput.value = "";
	newTaskInput.style.border = "";
	deadlineElement.style.border = "";
	errorMessage.remove();
}
