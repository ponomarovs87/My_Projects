import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { interfaceMathInputsObj, MathInputsObj } from "../../logic/abstractionObjects/mathInputsObj";
import { saveToBaseMathInputs } from "../../logic/LocaleStorage/addEdditToLocaleStorage";
import { loadFromBaseMathInputs } from "../../logic/LocaleStorage/loadFromBase";

interface DaysProps {
	selectedMonth: Date;
}

export const MathInputs: React.FC<DaysProps> = ({ selectedMonth }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<interfaceMathInputsObj>();

	const [MathInfo, setMathInfo] = useState<interfaceMathInputsObj | null>(null);
	const regExPattern = "d+(.d{1,2})?";
	const step = "0.01";

	const onsubmit: SubmitHandler<interfaceMathInputsObj> = async (data) => {
		const newMathInputsObj = new MathInputsObj(data.monthlySalary, data.monthlyPrumer, data.weekendBonus, data.additionalAllowanceForPreshour);
		console.log(data);
		console.log(selectedMonth);
		console.log(newMathInputsObj);
		await saveToBaseMathInputs(newMathInputsObj, selectedMonth);
		setMathInfo(newMathInputsObj);
	};

	useEffect(() => {
		const loadedMathInfo = loadFromBaseMathInputs(selectedMonth);
		if (loadedMathInfo) {
			setMathInfo(loadedMathInfo);
			reset(loadedMathInfo);
		}
	}, [selectedMonth, reset]);

	const formInfo = () => {
		return (
			<form onSubmit={handleSubmit(onsubmit)}>
				<span>Зарплата в месяц</span>
				<input type="number" step={step} pattern={regExPattern} {...register("monthlySalary")} />
				<span>Примерная зарплата в час</span>
				<input type="number" step={step} pattern={regExPattern} {...register("monthlyPrumer")} />
				<span>Дополнительно в выходные</span>
				<select id="weekendBonus" {...register("weekendBonus")}>
					<option value="300kc">300 крон в субботу</option>
					<option value="10%">10% дополнительная надбавка</option>
				</select>
				<select id="additionalAllowanceForPreshour" {...register("additionalAllowanceForPreshour")}>
					<option value="25%">25% дополнительная надбавка за пресчас</option>
				</select>
				<button type="submit">ok</button>
			</form>
		);
	};

	const finishMathInfo = () => {
		if (MathInfo) {
			return (
				<>
					<div>
						<span> Зарплата в месяц </span>
						<span>{MathInfo.monthlySalary}</span>

						<span> Примерная зарплата в час </span>
						<span>{MathInfo.monthlyPrumer}</span>
					</div>

					<button onClick={() => setMathInfo(null)}>Изменить</button>
				</>
			);
		} else {
			return formInfo();
		}
	};

	return <div>{finishMathInfo()}</div>;
};
