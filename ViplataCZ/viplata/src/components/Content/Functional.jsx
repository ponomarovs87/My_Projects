import React, { useState } from "react";

export default function Functional() {
	const [showBonusContent, setShowBonusContecst] = useState(true);

	return (
		<>
			<div>траляля типо список по примеру</div>
			<div>
				<span>первый тип Дата я думаю</span>
				<span>Второй кол-во отработанных часов за день уже с вычетом перерыва</span>
				<span>Третий кол-во отработанных пресчасов за день</span>
				<span>Четвертое Оритеровачная зп ЗА сутки</span>
				{showBonusContent && (
					<div>
						<span>необходимое кол-во часов в день</span>
						<span>Кол-во ночных часов</span>
						<span>Добавка в субботу</span>
						<span>Кол-во часов отработанных в праздник</span>
					</div>
				)}
			</div>
		</>
	);
}
