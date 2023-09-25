// Файл 3.js

// Получаем ссылки на нужные элементы
const taskInput = document.getElementById("new-task-input");
const addTaskBtn = document.getElementById("add-task-button");
const taskList = document.getElementById("taskList");
const errorMessage = document.getElementById("error-message");

// Обработчик события для кнопки добавления задачи
addTaskBtn.addEventListener("click", addTask);

// Функция добавления задачи в список
function addTask() {
	// Получаем текст из поля ввода
	const taskText = taskInput.value.trim();

	// Проверяем, что поле не пустое
	if (taskText === "") {
		displayErrorMessage("Введите задачу");
		taskInput.classList.add("error");
		return;
	}

	// Создаем новый элемент списка
	const taskItem = document.createElement("li");
	taskItem.textContent = taskText;

	// Добавляем элемент в список
	taskList.appendChild(taskItem);

	// Очищаем поле ввода
	taskInput.value = "";
}

// Функция отображения сообщения об ошибке
function displayErrorMessage(message) {
	errorMessage.textContent = message;
}

// Обработчик события для поля ввода (сбрасываем стили ошибки при изменении)
taskInput.addEventListener("input", resetErrorStyles);

// Функция сброса стилей ошибки
function resetErrorStyles() {
	taskInput.classList.remove("error");
	errorMessage.textContent = "";
}

// Экспортируем необходимые функции и переменные
export { addTask, displayErrorMessage, resetErrorStyles };
