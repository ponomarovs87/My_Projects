import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { interfaceMathInputsObj, MathInputsObj } from "helper/abstractionObjects/mathInputsObj";
import { saveToBaseMathInputs } from "helper/LocaleStorage/addEdditToLocaleStorage";
import { loadFromBaseMathInputs } from "helper/LocaleStorage/loadFromBase";
import styles from "./mathInpus.module.css";
import { useContentContext } from "../ContentProvider";

interface DaysProps {
	selectedMonth: Date;
}

export const MathInputs: React.FC = () => {
	
	const { selectedMonth, MathInfo, setMathInfo } = useContentContext();

	const { register, handleSubmit, reset } = useForm<interfaceMathInputsObj>();

	const [showForm, setShowForm] = useState(true);

	const regExPattern = "d+(.d{1,2})?";
	const step = "0.01";

	const onsubmit: SubmitHandler<interfaceMathInputsObj> = (data) => {
		const newMathInputsObj = new MathInputsObj(data.monthlySalary, data.monthlyPrumer, data.weekendBonus, data.additionalAllowanceForPreshour, data.dailyRate);

		saveToBaseMathInputs(newMathInputsObj, selectedMonth);
		setMathInfo(newMathInputsObj);
		setShowForm(false);
	};

	useEffect(() => {
		const loadedMathInfo = loadFromBaseMathInputs(selectedMonth);
		if (loadedMathInfo) {
			setMathInfo(loadedMathInfo);
			reset(loadedMathInfo);
			setShowForm(false);

			saveToBaseMathInputs(loadedMathInfo, selectedMonth);
		} else {
			setMathInfo(null);
			setShowForm(true);
		}
	}, [selectedMonth, showForm, reset]);

	const formInfo = () => {
		return (
			<form onSubmit={handleSubmit(onsubmit)}>
				<span>Зарплата в месяц : </span>
				<input type="number" step={step} pattern={regExPattern} {...register("monthlySalary")} />
				<br />
				<span>Примерная зарплата в час : </span>
				<input type="number" step={step} pattern={regExPattern} {...register("monthlyPrumer")} />
				<br />
				<span>Дополнительно в выходные : </span>
				<select id="weekendBonus" {...register("weekendBonus")}>
					<option value="300kc">300 крон в субботу </option>
					<option value="10%">10% дополнительная надбавка </option>
				</select>
				<br />
				<span>Норма рабочих часов в день : </span>
				<input type="number" step="0.25" defaultValue="8" {...register("dailyRate")} />
				<br />
				<button type="submit"> ok </button>
			</form>
		);
	};

	const finishMathInfo = () => {
		if (MathInfo) {
			return (
				<>
					<div className={styles.mathInfo}>
						<span> Зарплата в месяц </span>
						<span>{MathInfo.monthlySalary}</span>
						<span> Примерная зарплата в час </span>
						<span>{MathInfo.monthlyPrumer}</span>
						<button onClick={() => setMathInfo(null)}>Изменить</button>
					</div>
				</>
			);
		} else {
			return formInfo();
		}
	};

	return <div>{finishMathInfo()}</div>;
};
