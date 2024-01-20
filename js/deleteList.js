document.addEventListener('DOMContentLoaded', function() {
    // Verificar si se debe eliminar el div según el indicador en localStorage
    var shouldDelete = localStorage.getItem('shouldDelete');
    if (shouldDelete) {
      var listElement = document.getElementById('list');
      if (listElement) {
        listElement.remove();
        localStorage.removeItem('shouldDelete'); // Eliminar el indicador después de la eliminación
      }
    }

    // Asociar la función al evento de clic en el botón "Borrar"
    document.getElementById('deleteButton').addEventListener('click', function() {
      var listElement = document.getElementById('list');
      if (listElement) {
        listElement.remove();
        localStorage.setItem('shouldDelete', 'true'); // Establecer el indicador para la próxima carga de la página
      }
    });
  });