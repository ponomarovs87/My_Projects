import React, { useEffect } from "react";
import { useDayContext } from "./DayProvider";
import { showHHmm } from "helper/dataAndTimeHelpers";
import { classifyDay } from "helper/stringDataAndTimeHelpers";

interface DayFinishDayProps {
	// Добавьте необходимые свойства, если есть
}

export const DayFinishDay: React.FC<DayFinishDayProps> = () => {
	const { handleButtonClick, loadedDay } = useDayContext();

	return (
		<>
			<span>Начало работы : {showHHmm(loadedDay.startOfWork)}</span>
			<span>Конец рабочего дня : {showHHmm(loadedDay.endOfWork)}</span>
			<span>Начало Работы : {classifyDay(loadedDay)}</span>
			<span>Начало Работы : {showHHmm(loadedDay.startOfWork)}</span>
			<button onClick={handleButtonClick}>поменять</button>
		</>
	);
};

export default DayFinishDay;
