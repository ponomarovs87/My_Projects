import { load } from "./load.js";
import { setItem } from "./setItem.js";

export function deleteTask(id) {
	let tasks = load();

	tasks = tasks.filter((o) => o.id !== id);

	setItem(tasks);
}
