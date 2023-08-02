import { nameTasks } from "./naiming";

export function setItem(tasks: object) {
	localStorage.setItem(`${nameTasks}`, JSON.stringify(tasks));
}
