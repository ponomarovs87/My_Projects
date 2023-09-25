export const newTaskList = document.getElementById("newTaskList");
export const finishedTaskList = document.getElementById("finishedTaskList");
export const formNewTask = document.getElementById("formNewTask");
export const clearInputButton = document.getElementById("clear-input-button");
export const newTaskInput = document.getElementById("new-task-input");
export const checkbox = document.getElementById("checkbox");
export const errorMessage = document.getElementById("errorMessage") || document.createElement("div");
export const deadlineElement = document.getElementById("deadline")

//Возможно вынести отдельно или переименовать фаил хз пока.
const formData = new FormData(formNewTask);
export const deadline = Date.parse(formData.get("deadline"));
