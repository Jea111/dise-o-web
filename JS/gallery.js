function botonCompra() {
  let buttons = document.querySelectorAll(".btn"); // Seleccionas todos los  botones con la clase 'btn'

  // Verificamos si se encuentra el botón antes de asignarle el evento
  // //asignar a todos los botones con el (.length > 0)
  if (buttons.length > 0) {
    // Utilizamos forEach para iteratuar sobre cada botón encontrado y agregarle un evento click.
    buttons.forEach((button) => {
      // Iteramos sobre cada botón
      button.addEventListener("click", function () {
        swal("¡STOCK DISPONIBLE!", "CONFIRMANDO COMPRA", "success");
      });
    });
  } else {
    console.log("No se encontró el botón");
  }
}

botonCompra();

function btnSearch() {
  let search = document.querySelector(".btnSearch");

  search.addEventListener("click", function () {
    swal("producto encontrado", "confima la compra", "success");
  });
}
btnSearch();

// function busqueda() {
//   let input = document.querySelector(".search-container"); // Seleccionamos el campo de texto del input
//   input.addEventListener("input", function () {
//     let searchValue = input.value.toLowerCase(); // Obtenemos el valor del input, pasamos a minúsculas para la comparación

//     if (searchValue === "adidas") {
//       swal("Producto encontrado", "Confirma la compra", "success");
//     } else if (searchValue === "nike") {
//       swal("Producto no disponible");
//     } else {
//       swal("Producto no encontrado");
//     }
//   });
// }
