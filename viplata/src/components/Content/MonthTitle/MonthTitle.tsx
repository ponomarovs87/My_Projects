import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import styles from "./monthTitle.module.css";

interface MonthTitleProps {
	onMonthChange: (date: Date) => void;
}

export const MonthTitle: React.FC<MonthTitleProps> = ({ onMonthChange }) => {
	const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);
	const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());

	useEffect(() => {
		const newDate = new Date(`${selectedYear}-${selectedMonth}-01`);
		onMonthChange(newDate);
	}, [onMonthChange, selectedMonth, selectedYear]);

	const handleMonthSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedMonth(Number(e.target.value));
	};

	const handleYearSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedYear(Number(e.target.value));
	};

	const currentYear = new Date().getFullYear();
	const years = Array.from({ length: 21 }, (_, index) => currentYear - 10 + index);

	return (
		<div className={styles.dateSelection}>
			<form>
				<select value={selectedMonth} onChange={handleMonthSelectChange}>
					{Array.from({ length: 12 }, (_, index) => {
						const monthNumber = index + 1;
						return (
							<option key={monthNumber} value={monthNumber}>
								{format(new Date(`2023-${String(monthNumber).padStart(2, "0")}-01`), "MMMM")}
							</option>
						);
					})}
				</select>
				<select value={selectedYear} onChange={handleYearSelectChange}>
					{years.map((year) => (
						<option key={year} value={year}>
							{year}
						</option>
					))}
				</select>
			</form>
		</div>
	);
};
