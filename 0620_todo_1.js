document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  // Retrieve tasks from local storage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Add tasks to the DOM
  function renderTasks() {
    todoList.innerHTML = "";

    tasks.forEach(function (task, index) {
      const li = document.createElement("li");
      const text = document.createTextNode(task);
      li.appendChild(text);

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.className = "delete";
      deleteButton.addEventListener("click", function () {
        deleteTask(index);
      });

      li.appendChild(deleteButton);
      todoList.appendChild(li);
    });
  }

  // Add a new task
  function addTask(task) {
    tasks.push(task);
    saveTasks();
    renderTasks();
    todoInput.value = "";
  }

  // Delete a task
  function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }

  // Save tasks to local storage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const task = todoInput.value.trim();
    if (task !== "") {
      addTask(task);
    }
  });

  // Initial rendering of tasks
  renderTasks();
});
