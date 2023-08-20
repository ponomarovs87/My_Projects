import React, { useState, useEffect } from "react";

export const Results: React.FC<{}> = () => {
	const [showResults, setShowResults] = useState(false);

	useEffect(() => {
		setShowResults(false);
	}, []);

	const calculateResults = () => {
		setShowResults(true);
	};

	const NOcalculateResults = () => {
		setShowResults(false);
	};

	return (
		<div>
			{!showResults && <button onClick={calculateResults}>Посчитать ЗП за месяц</button>}
			{showResults && (
				<>
					<button onClick={NOcalculateResults}>Скрыть результаты</button>
					<div>результат расчета</div>
				</>
			)}
		</div>
	);
};
