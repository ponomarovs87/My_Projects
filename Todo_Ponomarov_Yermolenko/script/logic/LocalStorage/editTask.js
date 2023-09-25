import { load } from "./load.js";
import { setItem } from "./setItem.js";
import { nameTextTasks, nameChecedTasks } from "./naiming.js";

export function editTask(newText, checkedstatus, id) {
	let tasks = load();

	let indexEditTask = findindexByTaskId(id, tasks);

	if (indexEditTask < 0) {
		return -1;
	}
	tasks[indexEditTask][nameTextTasks] = newText;
	tasks[indexEditTask][nameChecedTasks] = checkedstatus;

	setItem(tasks);
}

function findindexByTaskId(id, array) {
	for (let i = 0; i < array.length; i++) {
		if (id === array[i].id) {
			return i;
		}
	}
	return -1;
}
