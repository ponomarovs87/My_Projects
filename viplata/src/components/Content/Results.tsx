import React, { useState, useEffect } from "react";

export const Results: React.FC<{}> = () => {
	const [showResults, setShowResults] = useState(false);
	const [showFullResults, setShowFullResults] = useState(false);

	useEffect(() => {
		setShowResults(false);
	}, []);

	const toggleResults = () => {
		setShowResults(!showResults);
	};

	const toggleFullResults = () => {
		setShowFullResults(!showFullResults);
	};

	return (
		<div>
			<button onClick={toggleResults}>{showResults ? "Скрыть результаты" : "Посчитать ЗП за месяц "}</button>
			{showResults && (
				<>
					<div>результат расчета</div>
					<button onClick={toggleFullResults}>{showFullResults ? "Скрыть подробный отчет" : "Показать подробный отчет"}</button>
				</>
			)}
		</div>
	);
};
