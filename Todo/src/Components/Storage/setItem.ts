import { nameTasks } from "./naiming";
import { FormData } from "../Logic/interfaceFormData";

export function setItem(tasks: FormData[]) {
	localStorage.setItem(`${nameTasks}`, JSON.stringify(tasks));
}
