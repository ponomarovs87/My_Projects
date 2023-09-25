import React, { memo } from "react";
import { FormData } from "../Components/Logic/interfaceFormData";
import { timestumpToDateAndTime } from "./timestumpToDateAndTime";
import styles from "./styles/TaskElementNF.module.css";

interface TaskElementProps {
	task: FormData;
	finishTaskControl: (task: FormData) => void;
	del: (task: FormData) => void;
}

export const CompletedTaskElement: React.FC<TaskElementProps> = memo(({ task, finishTaskControl, del }) => {
	console.log(`render NOT comlited`);
	return (
		<div className={`${styles.DivHome}`}>
			<label className={`${styles.labelCB} ${styles.labelCompTask}`}>
				<input type="checkbox" defaultChecked={task.isCompleted} onChange={() => finishTaskControl(task)} className={`${styles.inputCB}`} />
				<span className={`${styles.textContent} ${styles.spans} ${styles.spansFin}`}>{task.textContent} </span>
				<span className={`${styles.deadline} ${styles.spans}`}>{timestumpToDateAndTime(task.dateCompleted)} </span>
				<span className={`${styles.dateCreation} ${styles.spans} `}>{timestumpToDateAndTime(task.dateCreation)} </span>
			</label>
			<button onClick={() => del(task)} className={`${styles.button__edit} ${styles.buttons}`}>
				Удалить
			</button>
			<br />
		</div>
	);
});

export default CompletedTaskElement;
