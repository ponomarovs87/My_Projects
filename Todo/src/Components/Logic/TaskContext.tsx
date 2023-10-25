import React, { createContext, useCallback, useState, useEffect } from "react";
import { FormData } from "./interfaceFormData";
import { editTasksFunc } from "./editTasksFunc";
import { toogleTask } from "./toogleTask";
import { deleteTask } from "./deleteTask";
import { load } from "../Storage/load";
import { setItem } from "../Storage/setItem";

interface TaskContextType {
	tasks: FormData[];
	editTask: (taskId: string, textContent: string, deadline: number) => void;
	finishTaskControl: (task: FormData) => void;
	del: (task: FormData) => void;
	onSubmit: (task: FormData) => void;
}

export const TaskContext = createContext<TaskContextType>({
	tasks: [],
	editTask: () => {},
	finishTaskControl: () => {},
	del: () => {},
	onSubmit: () => {}
});

export const TaskProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
	const [tasks, setTasks] = useState<FormData[]>(load());

	const editTask = useCallback(
		(
			taskId: string,
			textContent: string,
			deadline: number
		): void => {
			setTasks(
				(
					prevTasks: FormData[]
				): FormData[] => {
					return editTasksFunc(
						taskId,
						prevTasks,
						textContent,
						deadline
					);
				}
			);
		},
		[]
	);

	const finishTaskControl = useCallback((task: FormData): void => {
		setTasks((prevTasks: FormData[]): FormData[] => {
			return toogleTask(task, prevTasks);
		});
	}, []);

	const del = useCallback((task: FormData): void => {
		setTasks((prevTasks: FormData[]): FormData[] => {
			return deleteTask(task, prevTasks);
		});
	}, []);

	const onSubmit = useCallback((task: FormData) => {
		setTasks((prevTasks) => [...prevTasks, task]);
	}, []);

	useEffect(() => {
		setItem(tasks);
	}, [tasks]);

	return (console.log();
		<TaskContext.Provider
			value={{
				tasks,
				editTask,
				finishTaskControl,
				del,
				onSubmit
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};
