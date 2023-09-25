import { FormData } from "./interfaceFormData";

export function deleteTask(task: FormData, tasks: FormData[]): FormData[] {
	const updatedTasks = tasks.filter((t) => t.id !== task.id);
	return updatedTasks;
}
