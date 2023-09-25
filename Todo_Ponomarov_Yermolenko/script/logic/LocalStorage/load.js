import { nameTasks } from "./naiming.js";

export function load() {
	const tasks = JSON.parse(localStorage.getItem(`${nameTasks}`)) || [];

	return tasks;
}
