import React, { useState, useEffect, useMemo, useCallback } from "react";
import { FormData } from "../Components/Logic/interfaceFormData";
import { NotComplitedTaskElements } from "./NotComplitedTaskElements";
import { CompletedTaskElements } from "./CompletedTaskElements";
import { toogleTask } from "../Components/Logic/toogleTask";
import { deleteTask } from "../Components/Logic/deleteTask";
import { editTasksFunc } from "../Components/Logic/editTasksFunc";
import { FormNewTask } from "./FormNewTask";
import { load } from "../Components/Storage/load";
import { setItem } from "../Components/Storage/setItem";

export const TasksHomePage: React.FC<{}> = () => {
	const [tasks, setTasks] = useState<FormData[]>(load());

	const editTask = useCallback(
		(
			taskId: string,
			textContent: string,
			deadline: number
		): void => {
			setTasks((prevTasks): FormData[] => {
				return editTasksFunc(
					taskId,
					prevTasks,
					textContent,
					deadline
				);
			});
		},
		[]
	);

	const finishTaskControl = useCallback((task: FormData): void => {
		setTasks((prevTasks): FormData[] => {
			return toogleTask(task, prevTasks);
		});
	}, []);

	const del = useCallback((task: FormData): void => {
		setTasks((prevTasks): FormData[] => {
			return deleteTask(task, prevTasks);
		});
	}, []);

	const [taskElementsFiltred, complitedTaskElementsFiltred] =
		useMemo(() => {
			const uncompletedTasks: FormData[] = [];
			const completedTasks: FormData[] = [];

			tasks.forEach((task) => {
				if (task.isCompleted) {
					completedTasks.push(
						task
					);
				} else {
					uncompletedTasks.push(
						task
					);
				}
			});

			return [uncompletedTasks, completedTasks];
		}, [tasks]);

	useEffect(() => {
		setItem(tasks);
		// console.log("Массив tasks был изменен:", tasks);
	}, [tasks]);

	const onSubmit = useCallback((task: FormData) => {
		setTasks((prevTasks) => [...prevTasks, task]);
	}, []);

	console.log("Render Base");

	return (
		<>
			<FormNewTask onSubmit={onSubmit} />
			<NotComplitedTaskElements
				tasks={
					taskElementsFiltred
				}
				finishTaskControl={
					finishTaskControl
				}
				del={del}
				editTask={editTask}
			/>
			<CompletedTaskElements
				tasks={
					complitedTaskElementsFiltred
				}
				finishTaskControl={
					finishTaskControl
				}
				del={del}
			/>
		</>
	);
};
