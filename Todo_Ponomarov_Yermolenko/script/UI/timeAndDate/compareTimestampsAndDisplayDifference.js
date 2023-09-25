import { showTimeDifference } from "./showTimeDifference.js";

export function compareTimestampsAndDisplayDifference(element, timestamp, dateCompleted) {
    if (dateCompleted) {
      showCompletionDate(element, dateCompleted);
    } else {
      showTimeDifference(element, timestamp);
    }
  }
  
  function showCompletionDate(element, dateCompleted) {
    element.textContent = timestumpToDateAndTime(dateCompleted);
  }