document.addEventListener("DOMContentLoaded", function() {
 

// Array para almacenar las tareas
var tasks = [];

// Obtener elementos del DOM
var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

// Función para agregar una nueva tarea
function addTask() {
  var taskName = taskInput.value;
  if (taskName !== "") {
    var newTask = {
      name: taskName,
      completed: false
    };
    tasks.push(newTask);
    updateTaskList();
    taskInput.value = "";
  }
}

// Función para actualizar la lista de tareas en el DOM
function updateTaskList() {
  taskList.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var taskItem = document.createElement("li");
    taskItem.innerText = task.name;
    if (task.completed) {
      taskItem.classList.add("completed");
    }
    taskItem.addEventListener("click", toggleTaskCompletion.bind(null, i));
    taskList.appendChild(taskItem);
  }
}

// Función para marcar o desmarcar una tarea como completada
function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  updateTaskList();
}

// Función si deseas  eliminar una tarea
function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}



// Evento que permite dar clic en el botón de agregar tarea
addButton.addEventListener("click", addTask);

// Inicializar la lista de tareas en el DOM
updateTaskList();

});