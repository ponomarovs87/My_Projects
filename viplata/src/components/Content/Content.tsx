import React, { useState, useCallback } from "react";
import { Days } from "./Days/Days";
import { MonthTitle } from "./MonthTitle/MonthTitle";
import { MathInpus } from "./MathInputs/MathInpus";

export function Content() {
	const [selectedMonth, setSelectedMonth] = useState(new Date());

	const handleMonthChange = useCallback((date: Date) => {
		setSelectedMonth(date);
	}, []);

	return (
		<>
			<MathInpus />
			<MonthTitle onMonthChange={handleMonthChange} />
			<Days selectedMonth={selectedMonth} />
		</>
	);
}
