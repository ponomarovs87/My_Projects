import React, { useEffect } from "react";
import styles from "../day.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { roundEndTimeTo30Minutes, roundStartTimeTo30Minutes } from "helper/dataAndTimeHelpers";
import { format } from "date-fns";
import { DayObj } from "helper/abstractionObjects/dayObj";
import { saveToBase } from "helper/LocaleStorage/addEdditToLocaleStorage";
import { FormData } from "interface/interfaceFormData";
import { useDayContext } from "./DayProvider";

export const DayForm: React.FC<{}> = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>();
	const { date, dayOffValue, setShowForm, setNewDay, defaultTimeValues, handleButtonClick } = useDayContext();

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
		handleButtonClick();
		console.log(newDay);
	};

	return (
		<form className={styles.formInputDay} onSubmit={handleSubmit(onsubmit)}>
			<div className={styles.timeInput}>
				<span>c</span>
				<input type="time" defaultValue={defaultTimeValues.defaultStartOfWork} {...register("startOfWork")} />

				<span>до</span>
				<input type="time" defaultValue={defaultTimeValues.defaultEndOfWork} {...register("endOfWork")} />

				<span>перерыв</span>
				<input type="time" defaultValue={defaultTimeValues.defaultLunchtime} {...register("lunchtime")} />
			</div>
			<label className={styles.checkboxes}>
				<input type="checkbox" defaultChecked={dayOffValue} {...register("dayOff")} />
				<span>Выходной</span>
			</label>
			<label className={styles.checkboxes}>
				<input type="checkbox" {...register("holiday")} />
				<span>Праздник</span>
			</label>
			<label className={styles.checkboxes}>
				<input type="checkbox" {...register("sickDay")} />
				<span>Больничный</span>
			</label>
			<button type="submit">OK</button>
		</form>
	);
};
