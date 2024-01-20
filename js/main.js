function listCreate() {

    var nameList = document.getElementById('name-list').value;
    var colorList = document.getElementById('color-list').value;
    var despList = document.getElementById('desp-list').value;

    alert("List created successfully");
    console.log(`Nombre Lista: ${nameList}`);
    console.log(`Color Lista: ${colorList}`);
    console.log(`Descripcion Lista: ${despList}`)

    document.getElementById('name-list').value = "";
    document.getElementById('color-list').value = "";
    document.getElementById('desp-list').value = "";

    localStorage.setItem('nameList', nameList);
    localStorage.setItem('colorList', colorList);
    localStorage.setItem('despList', despList);

    setTimeout(function() {
        // Redirigir a la segunda página
        window.location.href = 'viewList.html';
      }, 100);
}

function cambiarColor() {
    // Obtener el valor del color seleccionado
    var colorSeleccionado = document.getElementById('colorPicker').value;

    // Aplicar el color al div
    document.getElementById('miDiv').style.backgroundColor = colorSeleccionado;
  }

  // Asociar la función al evento de cambio en el input de color
  document.getElementById('colorPicker').addEventListener('input', cambiarColor);


