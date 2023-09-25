import React, { memo, useState } from "react";
import { FormData } from "../Components/Logic/interfaceFormData";
import { useForm } from "react-hook-form";
import { timestumpToDateAndTime } from "./timestumpToDateAndTime";
import styles from "./styles/TaskElementNF.module.css";

interface TaskElementProps {
	task: FormData;
	finishTaskControl: (task: FormData) => void;
	del: (task: FormData) => void;
	editTask: (taskId: string, textContent: string, deadline: number) => void;
}

export const NotComplitedTaskElement: React.FC<TaskElementProps> = memo(({ task, finishTaskControl, del, editTask }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<FormData>();
	const [editTaskId, setEditTaskId] = useState("0");
	const [editTaskName, setEditTaskName] = useState<string | undefined>(undefined);
	const [editTaskDeadline, setEditTaskDeadline] = useState<number | undefined>(undefined);

	const handleEditTask = (task: FormData) => {
		setEditTaskId(task.id);
		setEditTaskName(task.textContent);
		setEditTaskDeadline(task.deadline !== 0 ? task.deadline : new Date().getTime());
	};

	const cancelEdit = () => {
		setEditTaskId("0");
		reset();
	};

	const saveEdit = (data: FormData) => {
		editTask(editTaskId, data.textContent, data.deadline);
		cancelEdit();
	};

	console.log(`render comlited`);
	return (
		<>
			<>
				{editTaskId === task.id ? (
					<>
						<form onSubmit={handleSubmit(saveEdit)} className={`${styles.DivHome}`}>
							<div className={`${styles.labelCB}`}>
								<input
									type="text"
									defaultValue={editTaskName || ""}
									{...register("textContent", {
										required: "Введите новую задачу",
										minLength: 2
									})}
									className={`${styles.input__textContent} ${styles.inputs}`}
								/>
								<input
									type="datetime-local"
									defaultValue={
										editTaskDeadline !== undefined
											? new Date(editTaskDeadline).toLocaleString("sv", {
													year: "numeric",
													month: "2-digit",
													day: "2-digit",
													hour: "2-digit",
													minute: "2-digit"
											  })
											: ""
									}
									{...register("deadline")}
									className={`${styles.input__datetimeLocal} ${styles.inputs}`}
								/>
							</div>
							<button type="button" onClick={cancelEdit} className={`${styles.button__cancelEdit} ${styles.buttons}`}>
								Отменить
							</button>
							<button type="submit" className={`${styles.button__submit} ${styles.buttons}`}>
								Сохранить
							</button>
							{errors.textContent && (
								<>
									<br />
									<div className={`${styles.error__textContent}`}>Задача не может быть пустой(минимальное количество симовлов 2)</div>
								</>
							)}
						</form>
					</>
				) : (
					<div className={`${styles.DivHome}`}>
						<label className={`${styles.labelCB}`}>
							<input type="checkbox" defaultChecked={task.isCompleted} onChange={() => finishTaskControl(task)} className={`${styles.inputCB}`} />
							<span className={`${styles.textContent} ${styles.spans}`}>{task.textContent} </span>
							<span className={`${styles.deadline} ${styles.spans}`}>{timestumpToDateAndTime(task.deadline)} </span>
							<span className={`${styles.dateCreation} ${styles.spans}`}>{timestumpToDateAndTime(task.dateCreation)} </span>
						</label>
						<button onClick={() => handleEditTask(task)} className={`${styles.button__edit} ${styles.buttons}`}>
							Изменить
						</button>
						<button onClick={() => del(task)} className={`${styles.button__del} ${styles.buttons}`}>
							Удалить
						</button>
					</div>
				)}
			</>
			<br />
		</>
	);
});
