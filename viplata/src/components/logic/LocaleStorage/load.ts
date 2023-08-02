import { nameTasks } from "./naiming";

export function load() {
	const base = JSON.parse(localStorage.getItem(`${nameTasks}`) as string) || {};

	return base;
}
