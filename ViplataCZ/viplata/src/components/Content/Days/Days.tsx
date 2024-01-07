import React from "react";
import { format, getDaysInMonth, startOfMonth } from "date-fns";
import styles from "./day.module.css";
import { useContentContext } from "../ContentProvider";
import { DayWithProvider } from "./Day/DayWithProvider";

export const Days: React.FC = () => {
	const { selectedMonth } = useContentContext();

	const daysInMonth = getDaysInMonth(selectedMonth);
	const firstDayOfMonth = startOfMonth(selectedMonth);
	const daysArray = Array.from({ length: daysInMonth }, (_, index) => {
		const date = new Date(firstDayOfMonth);
		date.setDate(index + 1);
		return date;
	});

	return (
		<div className={styles.daysContainer}>
			{daysArray.map((date) => (
				<DayWithProvider key={format(date, "yyyy-MM-dd")} date={date} />
			))}
		</div>
	);
};
