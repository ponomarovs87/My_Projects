import React, { useState } from "react";
import { DayObj } from "helper/abstractionObjects/dayObj";
import { dailyHoursRate } from "helper/DataAndTimeHelpers";
import extrahoursCalculator from "logic/timeHelpers/extrahoursCalculator";
import { hasNightShift, countNightHours } from "helper/DataAndTimeHelpers";
import { interfaceMathInputsObj } from "helper/abstractionObjects/mathInputsObj";

export const DayInfo: React.FC<{ newDay: DayObj; mathInput: interfaceMathInputsObj | null }> = ({ newDay, mathInput }) => {
	const [showDetails, setShowDetails] = useState(false);

	const toggleDetails = () => {
		setShowDetails(!showDetails);
	};

	const nightHours = () => {
		if (hasNightShift(newDay.startOfWork, newDay.endOfWork)) {
			return (
				<>
					<div>В этот день была ночная смена</div>
					<div>{countNightHours(newDay.startOfWork, newDay.endOfWork)} часов(а) ночной смены</div>
				</>
			);
		}
		return <></>;
	};

	const stuffDay = () => {
		if (newDay?.dayOff === false && newDay.holiday === false && newDay.sickDay === false) {
			return <div>обычный рабочий день</div>;
		} else {
			return (
				<div>
					Это {newDay?.dayOff === true ? "выходной" : ""} {newDay?.holiday === true ? "праздник" : ""} {newDay?.sickDay === true ? "больничный день" : ""}
				</div>
			);
		}
	};

	const rate = mathInput?.dailyRate ? mathInput.dailyRate : 0;

	const dayHoursRate = dailyHoursRate(newDay.id, rate);
	const dayExtrahours = extrahoursCalculator(dayHoursRate, newDay.workHours);
	const detals = () => {
		if (showDetails) {
			return (
				<>
					{stuffDay()}
					<div>Норма в этот день {dayHoursRate} часов</div>
					<div>Переработка: {dayExtrahours}</div>
					<div>Перерыв {newDay.lunchtime} час(а)</div>
					<div>{nightHours()}</div>
				</>
			);
		}
	};

	return (
		<>
			<button onClick={toggleDetails}>Подробно</button>
			<>{detals()}</>
		</>
	);
};
