	// Функция для генерации опций времени с интервалом 15 минут
	const generateHoursOptions = () => {
		const options = [];
		for (let hour = 0; hour < 24; hour++) {
			const time = `${hour.toString().padStart(2, "0")}`;
			options.push(
				<option key={time} value={time}>
					{time}
				</option>
			);
		}
		return options;
	};
	const generateMinetsOptions = () => {
		const options = [];

		for (let minute = 0; minute < 60; minute += 15) {
			const time = `${minute.toString().padStart(2, "0")}`;
			options.push(
				<option key={time} value={time}>
					{time}
				</option>
			);
		}

		return options;
	};