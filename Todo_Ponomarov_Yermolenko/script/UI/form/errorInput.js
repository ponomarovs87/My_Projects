import { formNewTask } from "../getElementById/getElementById.js";

export function errorInput(input, errorMessageElemment,errorTextMessage) {
	input.style.border = "solid 2px red";

	errorMessageElemment.id = "errorMessage";

	errorMessageElemment.textContent = errorTextMessage;
	errorMessageElemment.style.color = "red";

	formNewTask.appendChild(errorMessageElemment);
}
