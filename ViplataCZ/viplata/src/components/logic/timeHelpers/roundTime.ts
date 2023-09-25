export const roundStartTimeTo30Minutes = (date: Date): Date => {
	const copiedDate = new Date(date);
	const minutes = copiedDate.getMinutes();
	if (minutes > 0 && minutes < 30) {
		copiedDate.setMinutes(30);
	} if (minutes > 30) {
		copiedDate.setMinutes(0);
		copiedDate.setHours(copiedDate.getHours() + 1, 0, 0, 0);
	}
	return copiedDate;
};

export const roundEndTimeTo30Minutes = (date: Date): Date => {
	const copiedDate = new Date(date);
	const minutes = copiedDate.getMinutes();
	if (minutes > 0 && minutes < 30) {
		copiedDate.setMinutes(0);
	} if (minutes > 30) {
		copiedDate.setMinutes(30);
	}
	return copiedDate;
};