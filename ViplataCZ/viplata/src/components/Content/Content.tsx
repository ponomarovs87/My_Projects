import React, { useState, useCallback } from "react";
import { Days } from "./Days/Days";
import { MonthTitle } from "./MonthTitle/MonthTitle";
import { MathInputs } from "./MathInputs/MathInpus";
import { getOverhoursInDay } from "helper/MathSallryLogic";

export function Content() {
	const [selectedMonth, setSelectedMonth] = useState(new Date());

	const handleMonthChange = useCallback((date: Date) => {
		setSelectedMonth(date);
	}, []);

	const timestamp = new Date(2023, 11, 22).getTime();
	const workingDays = getOverhoursInDay(timestamp, 8, 10);
	console.log(`Количество рабочих : ${workingDays}`);

	return (
		<>
			<MonthTitle onMonthChange={handleMonthChange} />
			<MathInputs selectedMonth={selectedMonth} />
			<Days selectedMonth={selectedMonth} />
		</>
	);
}
