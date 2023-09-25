import { submitForm } from "./form/submitForm.js";
import { clearInput } from "./form/clearInput.js";
import { formNewTask, clearInputButton, newTaskInput } from "./getElementById/getElementById.js";

export function addAllEventListeners() {
	formNewTask.addEventListener("submit", submitForm);

	clearInputButton.addEventListener("click", function () {
		clearInput(newTaskInput);
	});
}
