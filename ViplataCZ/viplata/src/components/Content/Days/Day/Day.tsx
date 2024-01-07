// Day.tsx
import React from "react";
import styles from "../day.module.css";
import { format } from "date-fns";
import { useDayContext } from "./DayProvider";
import { DayFinishDay } from "./DayFinishDay";

export const Day: React.FC = () => {
	const { date } = useDayContext();
	const dayOfWeek = format(date, "EEEE");

	return (
		<>
			<div className={styles.dayCube}>
				<div>
					<p className={styles.dayCube__div__p}>
						{format(date, "dd")} {dayOfWeek}
					</p>
				</div>
				<DayFinishDay />
				<div></div>
			</div>
		</>
	);
};
