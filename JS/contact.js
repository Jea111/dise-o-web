function btnData() {
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
}
