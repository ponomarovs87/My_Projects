import React from "react";
import { DayForm } from "./DayForm";
import { useDayContext } from "./DayProvider";

export const DayFinishDay: React.FC<{}> = () => {
	const { showForm, setShowForm, loadedDay } = useDayContext();

	

	const handleButtonClick = () => {
		setShowForm(!showForm);
	};


	return (
		<>
			{!showForm ? (
				<DayForm />
			) : (
				<>
					<div>Хуй</div>
					<button onClick={handleButtonClick}>поменять</button>
				</>
			)}
		</>
	);
};
