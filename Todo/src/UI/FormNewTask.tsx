import React from "react";
import { FormData } from "../Components/Logic/interfaceFormData";
import { dateNow } from "../Components/Logic/dateNow";
import { useForm, SubmitHandler } from "react-hook-form";
import { NewTask } from "../Components/TaskObj/taskObj";
import styles from "./styles/FormNewTask.module.css";

interface FormElementProps {
	onSubmit: (task: FormData) => void;
}

export const FormNewTask: React.FC<FormElementProps> = React.memo(({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<FormData>();

	const onsubmit: SubmitHandler<FormData> = (data) => {
		const task = new NewTask(data.textContent, new Date(data.deadline).getTime());
		onSubmit(task);
		reset(); // Очистка инпутов после сохранения
	};

	console.log("Render Form tasks");

	return (
		<>
			<form onSubmit={handleSubmit(onsubmit)} className={styles.Form}>
				<input
					type="text"
					placeholder="Название задачи"
					{...register("textContent", { required: "Введите новую задачу", minLength: 2 })}
					className={`${styles.input__textForm} ${styles.radius}`}
				/>
				<input type="datetime-local" defaultValue={dateNow} {...register("deadline")} className={`${styles.input__datetimeLocal} ${styles.radius}`} />
				<button type="submit" className={`${styles.button__submit} ${styles.radius}`}>
					Сохранить
				</button>
				{errors.textContent && (
					<>
						<br />
						<div className={`${styles.error__textContent}`}>Новая задача не может быть пустой(минимальное количество симовлов 2)</div>
					</>
				)}
			</form>
			
		</>
	);
});
