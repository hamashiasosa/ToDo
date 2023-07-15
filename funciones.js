// Definir el array de tareas
let tareas = [];

// Obtener referencia al botón de agregar tarea en el DOM
const botonAgregar = document.getElementById('boton-agregar');

// Agregar un event listener al botón de agregar tarea
botonAgregar.addEventListener('click', agregarTarea);

// Función para agregar una nueva tarea
function agregarTarea() {
  // Obtener el valor del input de texto
  const nombreTarea = document.getElementById('input-tarea').value;

  // Crear un nuevo objeto de tarea
  const nuevaTarea = {
    nombre: nombreTarea,
    completada: false
  };

  // Agregar la nueva tarea al array de tareas
  tareas.push(nuevaTarea);

  // Llamar a la función para actualizar la lista en el DOM
  actualizarLista();
}

// Función para actualizar la lista en el DOM
function actualizarLista() {
  // Obtener referencia al elemento de lista en el DOM
  const listaTareas = document.getElementById('lista-tareas');

  // Limpiar la lista antes de actualizarla
  listaTareas.innerHTML = '';

  // Recorrer el array de tareas y agregar cada tarea como un elemento de lista
  tareas.forEach(function(tarea) {
    const itemLista = document.createElement('li');
    itemLista.textContent = tarea.nombre;
    listaTareas.appendChild(itemLista);
  });
}

// Función para actualizar la lista en el DOM
function actualizarLista() {
    // Obtener referencia al elemento de lista en el DOM
    const listaTareas = document.getElementById('lista-tareas');
  
    // Limpiar la lista antes de actualizarla
    listaTareas.innerHTML = '';
  
    // Recorrer el array de tareas y agregar cada tarea como un elemento de lista
    tareas.forEach(function(tarea) {
      const itemLista = document.createElement('li');
      itemLista.textContent = tarea.nombre;
  
      // Verificar si la tarea está completada y agregar clase adicional al elemento li
      if (tarea.completada) {
        itemLista.classList.add('completada');
      }
  
      listaTareas.appendChild(itemLista);
    });
  }
  