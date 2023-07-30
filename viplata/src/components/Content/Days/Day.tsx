import React from "react";
import { format } from "date-fns";
import styles from "./day.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { DayObj } from "./dayObj";

interface DayProps {
	date: Date;
}

interface FormData {
	startOfWork: string;
	endOfWork: string;
	dayOff: boolean;
	holiday: boolean;
	sickDay: boolean;
}

const roundStartTimeTo30Minutes = (date: Date): Date => {
	const copiedDate = new Date(date);
	const minutes = copiedDate.getMinutes();
	if (minutes >= 0 && minutes < 30) {
		copiedDate.setMinutes(30);
	} else if (minutes >= 30) {
		copiedDate.setHours(copiedDate.getHours() + 1, 0, 0, 0);
	}
	return copiedDate;
};

const roundEndTimeTo30Minutes = (date: Date): Date => {
	const copiedDate = new Date(date);
	const minutes = copiedDate.getMinutes();
	if (minutes > 0 && minutes <= 30) {
		copiedDate.setMinutes(0);
	} else {
		copiedDate.setMinutes(30);
	}
	return copiedDate;
};

export const Day: React.FC<DayProps> = ({ date }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>();

	const dayOfWeek = format(date, "EEEE");

	const onsubmit: SubmitHandler<FormData> = (data) => {
		const { startOfWork, endOfWork, dayOff, holiday, sickDay } = data;

		// Convert time strings to Date objects
		const startTime = roundStartTimeTo30Minutes(new Date(`${format(date, "yyyy-MM-dd")}T${startOfWork}`));
		const endTime = roundEndTimeTo30Minutes(new Date(`${format(date, "yyyy-MM-dd")}T${endOfWork}`));

		const newDay = new DayObj(startTime.getTime(), endTime.getTime(), date.getTime());
		newDay.dayOff = dayOff;
		newDay.holiday = holiday;
		newDay.sickDay = sickDay;

		console.log(date);
		console.log(data);
		console.log(newDay);
		console.log(new Date(newDay.startOfWork));
		console.log(new Date(newDay.endOfWork));
		console.log((newDay.endOfWork - newDay.startOfWork) / 3600000);
	};

	const dayOffValue = date.getDay() === 0 || date.getDay() === 6;

	return (
		<div className={styles.dayCube}>
			<div>
				<p className={styles.dayCube__div__p}>
					{format(date, "dd")} {dayOfWeek}
				</p>
			</div>

			<form onSubmit={handleSubmit(onsubmit)}>
				<div>
					<span>c</span>
					<input type="time" {...register("startOfWork")} />

					<span>до</span>
					<input type="time" {...register("endOfWork")} />
				</div>
				<div>
					<input type="checkbox" checked={dayOffValue} {...register("dayOff")} />
					<span>Выходной</span>
				</div>
				<div>
					<input type="checkbox" {...register("holiday")} />
					<span>Праздник</span>
				</div>
				<div>
					<input type="checkbox" {...register("sickDay")} />
					<span>Больничный</span>
				</div>
				<button type="submit">OK</button>
			</form>
		</div>
	);
};
