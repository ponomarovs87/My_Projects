export function getLabel(days, word1, word2, word5) {
	if (days % 10 === 1 && days % 100 !== 11) {
		return word1; //минута//секунда//Месяц
	} else if ([2, 3, 4].includes(days % 10) && ![12, 13, 14].includes(days % 100)) {
		return word2; //минуты//секунды//Месяца
	} else {
		return word5; //Минут//Секунд//месяцев
	}
}