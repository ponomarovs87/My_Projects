import React from "react";
import { FormData } from "../Components/Logic/interfaceFormData";
import styles from "./styles/TaskElementNF.module.css";
import { CompletedTaskElement } from "./CompletedTaskElement";

interface TaskElementProps {
	tasks: FormData[];
	finishTaskControl: (task: FormData) => void;
	del: (task: FormData) => void;
}

export const CompletedTaskElements: React.FC<TaskElementProps> = ({ tasks, finishTaskControl, del }) => {
	const completedTaskElements = tasks.map((task) => <CompletedTaskElement key={task.id} task={task} finishTaskControl={finishTaskControl} del={del} />);

	console.log("Render Complite tasks");

	return (
		<>
			<div>
				<h2 className={styles.NameTasks__h2}>Выполненные задачи</h2>
				<br />
				<div className={styles.namingFinishTask}>
					<span className={`${styles.taskInfo} ${styles.taskInfoCompl}`}>
						<span className={`${styles.spansNamings} `}>Название задачи:</span>
						<span className={`${styles.spansNamings} `}>Выполнено:</span>
						<span className={`${styles.spansNamings} `}>Дата создания:</span>
					</span>
					<span className={styles.btnName}>Удалить:</span>
				</div>
				<div>{completedTaskElements}</div>
			</div>
		</>
	);
};
