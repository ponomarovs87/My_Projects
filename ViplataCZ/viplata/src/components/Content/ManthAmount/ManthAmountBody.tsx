import React, { useState } from "react";
import { ManthAmountDetals } from "./Summary";

export const ManthAmountBody: React.FC<{}> = () => {
	const [showFullInfo, setShowFullInfo] = useState(false);

	const toggleFullInfo = () => {
		setShowFullInfo(!showFullInfo);
	};

	return (
		<>
			<div>траляля типо список по примеру</div>
			<div>
				<span>первый тип Дата я думаю</span>
				<br />
				<span>Второй кол-во отработанных часов за день уже с вычетом перерыва</span>
				<br />
				<span>Третий кол-во отработанных пресчасов за день</span>
				<br />
				<span>Четвертое Оритеровачная зп ЗА сутки</span>
				<br />
				{showFullInfo && <ManthAmountDetals />}
			</div>
			<button onClick={toggleFullInfo}>{showFullInfo ? "Скрыть подробный отчет" : "Показать подробный отчет"}</button>
		</>
	);
};
