import React, { useState, useCallback } from "react";
import { Days } from "./Days/Days";
import { MonthTitle } from "./MonthTitle/MonthTitle";
import { MathInputs } from "./MathInputs/MathInpus";

export function Content() {
	const [selectedMonth, setSelectedMonth] = useState(new Date());

	const handleMonthChange = useCallback((date: Date) => {
		setSelectedMonth(date);
	}, []);

	return (
		<>
			<MonthTitle onMonthChange={handleMonthChange} />
			<MathInputs selectedMonth={selectedMonth} />
			<Days selectedMonth={selectedMonth} />
		</>
	);
}
