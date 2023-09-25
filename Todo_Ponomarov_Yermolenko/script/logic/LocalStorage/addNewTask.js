import { load } from "./load.js";
import { setItem } from "./setItem.js";

export function saveTask(task) {
	let tasks = load();

	tasks.push({
		...task
	});

	setItem(tasks);
}
