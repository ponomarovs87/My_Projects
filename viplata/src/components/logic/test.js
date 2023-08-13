{}

{//! калькулятор ночных
	// function hasNightShift(startHours, endHours) {
// 	if (startHours === endHours) {
// 		return false;
// 	}
// 	if (startHours >= 22 || endHours <= 6 || startHours > endHours || startHours < 6 || endHours > 22) {
// 		return true;
// 	}

// 	return false;
// }
// function countNightHours(startHours, endHours) {
// 	if (hasNightShift(startHours, endHours)) {
// 		let answer = 0;
// 		if (startHours >= 22 && endHours <= 6) {
// 			endHours += 24;
// 			answer = endHours - startHours;
// 			if (answer > 1) {
// 				return answer;
// 			}
// 			return 0;
// 		}
// 		if (endHours > startHours) {
// 			if (endHours > 6) {
// 				endHours = 6;
// 			}
// 			answer = endHours - startHours;
// 			if (answer > 1) {
// 				return answer;
// 			}
// 			return 0;
// 		}
// 		if (startHours > endHours) {
// 			endHours += 24;
// 			if (startHours < 22) {
// 				startHours = 22;
// 			}
// 			if (endHours > 30) {
// 				endHours = 30;
// 			}
// 			answer = endHours - startHours;
// 			if (answer > 1) {
// 				return answer;
// 			}
// 			return 0;
// 		}
// 	}
// 	return 0;
// }

// // Пример использования
// const startHours = 20; // Начало рабочего дня в 20:00
// const endHours = 4; // Конец рабочего дня в 04:00

// const hasNightShiftResult = hasNightShift(startHours, endHours);
// const nightHoursCount = countNightHours(startHours, endHours);

// console.log("Были ли ночные часы:", hasNightShiftResult); // true
// console.log("Количество часов в ночной смене:", nightHoursCount); // 10

// console.log("1", countNightHours(6, 21), "нет ночной");
// console.log("2", countNightHours(22, 6), "есть ночная 8 часов");
// console.log("3", countNightHours(0, 12), "есть ночная 6 часов");
// console.log("4", countNightHours(12, 0), "есть ночная 2 часов");
// console.log("5", countNightHours(6, 18), "нет ночной");
// console.log("6", countNightHours(18, 6), "есть ночной 8 часов");
// console.log("7", countNightHours(20, 10), "есть ночной 8 часов");
// console.log("8", countNightHours(23, 6), "есть ночная 7 часов");
// console.log("9", countNightHours(20, 5), "есть ночная 7 часов");
// console.log("10", countNightHours(21, 5), "есть ночная 7 часов");
// console.log("11", countNightHours(20, 4), "есть ночная 6 часов");
// console.log("12", countNightHours(21, 4), "есть ночная 6 часов");
// console.log("13", countNightHours(22, 4), "есть ночная 6 часов");
// console.log("14", countNightHours(23, 4), "есть ночная 5 часов");
// console.log("15", countNightHours(0, 4), "есть ночная 4 часов");
// console.log("16", countNightHours(1, 4), "есть ночная 3 часов");
// console.log("17", countNightHours(2, 4), "есть ночная 2 часов");
// console.log("18", countNightHours(3, 4), "есть ночная 1 часов");
// console.log("19", countNightHours(4, 4), "нет ночной");
// console.log("20", countNightHours(5, 4), "есть ночной 7 часов");
// console.log("21", countNightHours(7, 6), "есть ночной 8 часов");
 }