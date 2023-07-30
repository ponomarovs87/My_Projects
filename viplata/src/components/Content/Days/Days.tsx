import React from "react";
import { format, getDaysInMonth, startOfMonth } from "date-fns";
import { Day } from "./Day";
import styles from "./days.module.css";

interface DaysProps {
	selectedMonth: Date;
}

export const Days: React.FC<DaysProps> = ({ selectedMonth }) => {
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
				<Day key={format(date, "yyyy-MM-dd")} date={date} />
			))}
		</div>
	);
};
