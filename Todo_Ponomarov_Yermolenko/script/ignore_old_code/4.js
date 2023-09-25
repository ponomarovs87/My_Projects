// Импортируем функцию для добавления задачи
import { addTask } from "./3.js";

// Получаем элементы списка задач и кнопку очистки поля ввода
const taskList = document.getElementById("taskList");
const clearInputButton = document.getElementById("clear-input-button");

// Функция для удаления задачи из списка
function deleteTask(event) {
	const taskElement = event.target.parentElement;
	taskList.removeChild(taskElement);
	checkEmptyContent();
}

// Функция для проверки наличия задач в списке и отображения заглушки "empty content"
function checkEmptyContent() {
	if (taskList.children.length === 0) {
		taskList.innerHTML = "empty content";
	}
}

// Добавляем обработчики событий для кнопок удаления задач
const deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach((button) => {
	button.addEventListener("click", deleteTask);
});

// Добавляем обработчик события для кнопки очистки поля ввода
clearInputButton.addEventListener("click", () => {
	const input = document.getElementById("new-task-input");
	input.value = "";
});

// Используем функцию addTask для добавления начальной задачи
addTask();

// Проверяем наличие задач в списке при загрузке страницы
checkEmptyContent();
