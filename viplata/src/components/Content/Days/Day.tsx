import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import styles from "./day.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { DayObj } from "../../logic/abstractionObjects/dayObj";
import { roundStartTimeTo30Minutes, roundEndTimeTo30Minutes } from "../../logic/timeHelpers/roundTime";
import { FormData } from "../../logic/interface/interfaceFormData";
import { saveToBase } from "../../logic/LocaleStorage/addEdditToLocaleStorage";
import { loadFromBase } from "../../logic/LocaleStorage/loadFromBase";
import showHHmm from "../../logic/timeHelpers/showHHmm";
import { DayInfo } from "./DayInfo";
import { loadFromBaseMathInputs } from "../../logic/LocaleStorage/loadFromBase";
import { interfaceMathInputsObj } from "../../logic/abstractionObjects/mathInputsObj";

interface DayProps {
	date: Date;
}

export const Day: React.FC<DayProps> = ({ date }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>();

	const dayOfWeek = format(date, "EEEE");

	const [showForm, setShowForm] = useState(true);
	const [newDay, setNewDay] = useState<DayObj | null>(null);
	const [MathInput, setMathInput] = useState<interfaceMathInputsObj | null>(null);


	const onsubmit: SubmitHandler<FormData> = (data) => {
		const { startOfWork, endOfWork, dayOff, holiday, sickDay, lunchtime } = data;

		const lunchTime = (roundStartTimeTo30Minutes(new Date(`${format(date, "yyyy-MM-dd")}T${lunchtime}`)).getTime() - date.getTime()) / 3600000;
		const startTime = roundStartTimeTo30Minutes(new Date(`${format(date, "yyyy-MM-dd")}T${startOfWork}`));
		const endTime = roundEndTimeTo30Minutes(new Date(`${format(date, "yyyy-MM-dd")}T${endOfWork}`));

		const newDay = new DayObj(startTime.getTime(), endTime.getTime(), date.getTime(), lunchTime);
		newDay.dayOff = dayOff;
		newDay.holiday = holiday;
		newDay.sickDay = sickDay;

		saveToBase(newDay, date);
		setNewDay(newDay);
		setShowForm(false);
	};

	const dayOffValue = date.getDay() === 0 || date.getDay() === 6;
	let defaultLunchtime = "00:30";
	let defaultStartOfWork = "06:00";
	let defaultEndOfWork = "14:30";
	if (dayOffValue) {
		defaultLunchtime = "00:00";
		defaultStartOfWork = "00:00";
		defaultEndOfWork = "00:00";
	}

	useEffect(() => {
		const loadedDay = loadFromBase(date);
		const MathInputs = loadFromBaseMathInputs(date)
		if (loadedDay) {
			setMathInput(MathInputs)
			setNewDay(loadedDay);
			setShowForm(false);
		}
	}, [date]);

	const formInfo = () => {
		return (
			<form onSubmit={handleSubmit(onsubmit)}>
				<div>
					<span>c</span>
					<input type="time" defaultValue={defaultStartOfWork} {...register("startOfWork")} />

					<span>до</span>
					<input type="time" defaultValue={defaultEndOfWork} {...register("endOfWork")} />

					<span>перерыв</span>
					<input type="time" defaultValue={defaultLunchtime} {...register("lunchtime")} />
				</div>
				<label>
					<input type="checkbox" defaultChecked={dayOffValue} {...register("dayOff")} />
					<span>Выходной</span>
				</label>
				<label>
					<input type="checkbox" {...register("holiday")} />
					<span>Праздник</span>
				</label>
				<label>
					<input type="checkbox" {...register("sickDay")} />
					<span>Больничный</span>
				</label>
				<button type="submit">OK</button>
			</form>
		);
	};

	const finishDay = () => {
		if (showForm === false && newDay) {
			return (
				<>
					<div>
						<span> c </span>
						<span>{showHHmm(newDay.startOfWork)}</span>

						<span> до </span>
						<span>{showHHmm(newDay.endOfWork)}</span>
					</div>

					<div>вы отработали {newDay.workHours} часов</div>
					<>
						<DayInfo newDay={newDay} mathInput={MathInput} />
					</>
					<button onClick={() => setShowForm(true)}>Изменить</button>
				</>
			);
		} else {
			return formInfo();
		}
	};

	return (
		<>
			<div className={styles.dayCube}>
				<div>
					<p className={styles.dayCube__div__p}>
						{format(date, "dd")} {dayOfWeek}
					</p>
				</div>
				{finishDay()}
			</div>
		</>
	);
};
