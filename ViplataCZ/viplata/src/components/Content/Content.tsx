import React, { useState, useCallback } from "react";
import { Days } from "./Days/Days";
import { MonthTitle } from "./MonthTitle/MonthTitle";
import { MathInputs } from "./MathInputs/MathInpus";
import { ManthAmountHeader } from "./ManthAmount/ManthAmountHeader";

export function Content() {
	const [selectedMonth, setSelectedMonth] = useState(new Date());

	const handleMonthChange = useCallback((date: Date) => {
		setSelectedMonth(date);
	}, []);

	return (
		<>
			<MonthTitle onMonthChange={handleMonthChange} />
			<MathInputs selectedMonth={selectedMonth} />
			<ManthAmountHeader/>
			<Days selectedMonth={selectedMonth} />
		</>
	);
}
