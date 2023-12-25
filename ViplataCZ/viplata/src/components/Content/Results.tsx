import React, { useState, useEffect } from "react";
import Functional from "./Functional";

export const Results: React.FC<{}> = () => {
	const [showResults, setShowResults] = useState(false);

	useEffect(() => {
		setShowResults(false);
	}, []);

	const toggleResults = () => {
		setShowResults(!showResults);
	};



	return (
		<div>
			<button onClick={toggleResults}>{showResults ? "Скрыть результаты" : "Посчитать ЗП за месяц "}</button>
			{showResults && (
				<>
					<div>результат расчета</div>
					<Functional/>
					
				</>
			)}
		</div>
	);
};
