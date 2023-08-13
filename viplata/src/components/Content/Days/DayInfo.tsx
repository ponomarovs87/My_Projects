import React, { useState } from "react";
import { DayObj } from "../../logic/abstractionObjects/dayObj";
import dailyHoursRate from "../../logic/timeHelpers/dailyHoursRate";
import extrahoursCalculator from "../../logic/timeHelpers/extrahoursCalculator";
import { hasNightShift, countNightHours } from "../../logic/timeHelpers/nightTimeHours";

export const DayInfo: React.FC<{ newDay: DayObj }> = ({ newDay }) => {
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
		return <div>В этот день не было ночной смены</div>;
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

	const dayHoursRate = dailyHoursRate(newDay.id);
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
