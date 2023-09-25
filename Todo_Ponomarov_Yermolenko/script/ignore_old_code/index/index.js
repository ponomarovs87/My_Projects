// Получаем ссылки на нужные элементы
const taskInput = document.getElementById("new-task-input");
const addTaskBtn = document.getElementById("add-task-button");
const taskList = document.getElementById("taskList");
const errorMessage = document.getElementById("error-message");
const clearInputButton = document.getElementById("clear-input-button");
const emptyText = document.getElementById("emptyText");

// Обработчик события для кнопки добавления задачи
addTaskBtn.addEventListener("click", addTask);

// Обработчик события для кнопки очистки поля ввода
clearInputButton.addEventListener("click", clearInputField);

// Функция добавления задачи в список
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    displayErrorMessage("Введите задачу");
    taskInput.classList.add("error");
    return;
  }

  const newItem = createTaskItem(taskText);
  appendTaskItem(newItem);
  resetErrorStyles();
  clearInputField();
}

// Функция создания нового элемента списка задач
function createTaskItem(text) {
  const li = document.createElement("li");
  const now = new Date();
  const itemId = now.getTime();
  li.setAttribute("data-id", itemId);
  li.textContent = text;



  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Удалить";
  deleteButton.addEventListener("click", deleteTask.bind(null, itemId));
  li.appendChild(deleteButton);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", toggleTaskItem.bind(null, li));
  li.appendChild(checkbox);

  return li;
}

// Функция добавления элемента в список задач
function appendTaskItem(item) {
  taskList.appendChild(item);
  emptyText.style.display = "none";
}

// Функция отображения сообщения об ошибке
function displayErrorMessage(message) {
  errorMessage.textContent = message;
}

// Функция сброса стилей ошибки
function resetErrorStyles() {
  taskInput.classList.remove("error");
  errorMessage.textContent = "";
}

// Функция очистки поля ввода
function clearInputField() {
  taskInput.value = "";
}

// Функция удаления задачи из списка по id
function deleteTaskById(id) {
  const taskElement = document.querySelector(`li[data-id="${id}"]`);
  if (taskElement) {
    taskList.removeChild(taskElement);
    checkEmptyContent();
    // Дополнительный код удаления элемента из localStorage
  }
}

// Функция удаления задачи из списка
function deleteTask(id) {
  deleteTaskById(id);
}

// Функция проверки наличия задач в списке
function checkEmptyContent() {
  if (taskList.children.length === 0) {
    emptyText.style.display = "block";
  }
}

// Функция перечеркивания текста элемента списка задач
function toggleTaskItem(taskElement) {
  taskElement.classList.toggle("completed");
}

// Используем функцию addTask для добавления начальной задачи
displayErrorMessage();
resetErrorStyles();
addTask();
