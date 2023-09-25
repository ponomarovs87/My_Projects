export function currectDateToInputDateFull(idElement) {
	const dateTimeInput = document.getElementById(idElement);
	const currentDate = new Date();

	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, "0");
	const day = String(currentDate.getDate()).padStart(2, "0");
	const hours = String(currentDate.getHours()).padStart(2, "0");
	const minutes = String(currentDate.getMinutes()).padStart(2, "0");

	const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

	dateTimeInput.value = formattedDateTime;
}
