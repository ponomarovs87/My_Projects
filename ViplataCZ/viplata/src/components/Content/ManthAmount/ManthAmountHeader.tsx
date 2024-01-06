import React, { useEffect, useState } from 'react'
import { ManthAmountBody } from './ManthAmountBody';

export const ManthAmountHeader: React.FC<{}> = () => {
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
					<ManthAmountBody/>
					
				</>
			)}
		</div>
	);
}