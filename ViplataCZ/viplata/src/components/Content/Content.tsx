import React from "react";
import { MonthTitle } from "./MonthTitle/MonthTitle";
import { MathInputs } from "./MathInputs/MathInpus";
import { ManthAmountHeader } from "./ManthAmount/ManthAmountHeader";
import { Days } from "./Days/Days";
import { ContentProvider } from "./ContentProvider";

export function Content() {
	return (
		<>
			<MonthTitle />
			<MathInputs />
			<ManthAmountHeader />
			<Days />
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
