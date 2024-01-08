// Идея в том что тут будут помошники в которых в ответ прилетает string

import { interfaceDayObj } from "./abstractionObjects/dayObj";

export function classifyDay(DayObj:interfaceDayObj) {
	if(DayObj.holiday && !DayObj.sickDay){
        return "Этот день был выходной"
    }if(DayObj.holiday && !DayObj.sickDay){
        return "Больничный"
    }
    return "Это обычный день"
}
