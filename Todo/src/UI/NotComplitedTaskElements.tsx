import React from "react";
import { FormData } from "../Components/Logic/interfaceFormData";
import styles from "./styles/TaskElementNF.module.css";
import { NotComplitedTaskElement } from "./NotComplitedTaskElement";

interface TaskElementProps {
	tasks: FormData[];
	finishTaskControl: (task: FormData) => void;
	del: (task: FormData) => void;
	editTask: (taskId: string, textContent: string, deadline: number) => void;
}

export const NotComplitedTaskElements: React.FC<TaskElementProps> = ({ tasks, finishTaskControl, del, editTask }) => {
	const taskElements = tasks.map((task) => <NotComplitedTaskElement key={task.id} task={task} finishTaskControl={finishTaskControl} del={del} editTask={editTask} />);

	console.log("Render NOT Complite tasks");

	return (
		<>
			<div>
				<h2 className={styles.NameTasks__h2}>Задачи</h2>
				<br />
				<div className={styles.namingFinishTask}>
					<span className={`${styles.taskInfo} `}>
						<span className={`${styles.spansNamings} `}>Название задачи:</span>
						<span className={`${styles.spansNamings} `}>Дедлайн:</span>
						<span className={`${styles.spansNamings} `}>Дата создания:</span>
					</span>
					<span className={styles.btnName}>Изменить:</span>
					<span className={styles.btnName}>Удалить:</span>
				</div>
				<div>{taskElements}</div>
			</div>
		</>
	);
};
