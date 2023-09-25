export function timestumpToDateAndTime(timestamp: number | null) {
	if (timestamp === null) {
		return `Задача не выполнена`;
	}

	const date = new Date(timestamp);

	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear().toString();
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");

	return `${day}-${month}-${year} ${hours}:${minutes}`;
}
