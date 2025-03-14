function btnData() {
  let buttons = document.querySelector(".btn");

  // Verificar si el botón existe antes de añadir el evento
  if (buttons) {
    buttons.addEventListener("click", function () {
      swal({
        title: "ENVIA LOS DATOS SOLO SI CONFIAS EN ESTA PÁGINA",
        text: "ESTAREMOS EN CONTACTO CONTIGO \n LO MAS PRONTO POSIBLE!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("GRACIAS POR ENVIARNOS TU INFORMACIÓN!", {
            icon: "success",
          });
        } else {
          swal("ES UNA PENA, TE ESPERAMOS PRONTO");
        }
      });
    });
  } else {
    console.log("No se encontró el botón");
  }
}

btnData();
