import { FormData } from "./interfaceFormData";

export function toogleTask(task: FormData, tasks: FormData[]): FormData[] {
	const updatedTasks = tasks.map((t) => {
		if (t.id === task.id) {
			return {
				...t,
				isCompleted: !t.isCompleted,
				dateCompleted: t.isCompleted ? null : Date.now()
			};
		}
		return t;
	});
	return updatedTasks;
}
