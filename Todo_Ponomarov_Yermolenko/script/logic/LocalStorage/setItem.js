import { nameTasks } from "./naiming.js";

export function setItem(tasks) {
	localStorage.setItem(`${nameTasks}`, JSON.stringify(tasks));
}
