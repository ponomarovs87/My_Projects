import { FormData } from "./interfaceFormData";

export function editTasksFunc(taskId: string, tasks: FormData[], textContentEdited: string, deadlineEdited: number): FormData[] {
	const updatedTasks = tasks.map((t) => {
		if (t.id === taskId) {
			return {
				...t,
				textContent: textContentEdited,
				deadline: deadlineEdited
			};
		}
		return t;
	});
	return updatedTasks;


}
