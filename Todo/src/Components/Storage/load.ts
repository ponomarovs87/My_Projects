import { nameTasks } from "./naiming";

export function load() {
	const tasks = JSON.parse(localStorage.getItem(`${nameTasks}`) || "[]");

	return tasks;
}
