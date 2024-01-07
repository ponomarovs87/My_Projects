import React from "react";
import { MonthTitle } from "./MonthTitle/MonthTitle";
import { MathInputs } from "./MathInputs/MathInpus";
import { ManthAmountHeader } from "./ManthAmount/ManthAmountHeader";
import { Days } from "./Days/Days";
import { ContentProvider, useContentContext } from "./ContentProvider";

export function Content() {
	const { selectedMonth, handleMonthChange } = useContentContext();

	return (
		<>
			<MonthTitle onMonthChange={handleMonthChange} />
			<MathInputs selectedMonth={selectedMonth} />
			<ManthAmountHeader />
			<Days selectedMonth={selectedMonth} />
		</>
	);
}

export function ContentWithProvider() {
	return (
		<ContentProvider>
			<Content />
		</ContentProvider>
	);
}
