// Obtención de los elementos
const botonesCompra = document.querySelectorAll(".btnCompra");
const carrito = [];
const contenedorCarrito = document.getElementById("productosCarrito");
const totalElemento = document.getElementById("totalPrecio");

// const theme = document.querySelector(".themeToggle"); // Obtiene el botón de alternar tema
// const currenTheme = localStorage.getItem("theme"); // Obtiene el tema actual del localStorage
// if (currenTheme) {
//   document.documentElement.setAttribute("data-theme", currenTheme); //cambia el tema de la página al tema almacenado en localStorage
//   updateButtonText(currenTheme); // Actualiza el texto del botón de alternar tema
// }
// theme.addEventListener("click", updateButtonText(theme));
// function updateButtonText(theme) {
//   themeToggle.innerHTML = theme === `dark` ? `Modo claro ☀️` : `modo oscuro 🌙`;
// }

function agregarAlCarrito() {
  botonesCompra.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      // Obtener el producto donde se hizo clic
      const producto = e.target.closest(".producto"); // Busca el elemento más cercano con la clase '.producto' al elemento que disparó el evento.
      const nombre = producto.querySelector("P").textContent;
      const precio = producto.querySelector(".precio").textContent;
      const id = producto.dataset.id; // Obtiene el valor del atributo 'data-id' de 'producto'.

      // Crear un objeto con los detalles del producto
      const productoCarrito = {
        id: id,
        nombre: nombre,
        precio: precio,
      };

      // Agregar el producto al carrito
      carrito.push(productoCarrito);

      swal("Producto agregado: " + nombre);
      // Actualizar la vista del carrito
      actualizarCarrito();
    });
  });
}

function actualizarCarrito() {
  contenedorCarrito.innerHTML = ``; // Limpiar el carrito antes de mostrar los productos

  let total = 0;

  // Mostrar los productos en el carrito
  carrito.forEach((producto) => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("productoCarrito");
    divProducto.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <button class="btnEliminar" data-id="${producto.id}">Eliminar</button>
    `;
    contenedorCarrito.appendChild(divProducto);

    // Calcular el total
    total += parseFloat(producto.precio.replace(".", "").replace(",", "."));
  });

  // Mostrar el total
  totalElemento.textContent = total.toLocaleString("es-CO");

  const botonesEliminar = document.querySelectorAll(".btnEliminar");
  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const idProducto = boton.dataset.id;
      swal({
        title: "estas seguro?",
        text: "el producto será eliminado del carrito",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          eliminarProducto(idProducto);
          actualizarCarrito();
        }
      });
    });
  });
}

function eliminarProducto(idProducto) {
  //filtrar el carrito para quitar el producto con el id indicado

  carrito = carrito.filter((producto) => {
    const productoId = parseInt(producto.id) || producto.id;
    return productoId !== id;
  });
  //mostrar mensaje de confirmacion
  swal(
    "producto eliminado",
    "el producto ha sido eliminado del carrito",
    "info"
  );
}

agregarAlCarrito();

let finalizarCompra = document.querySelector("#btnFinish");

function finish() {
  finalizarCompra.addEventListener("click", () => {
    if (carrito.length != 0) {
      swal("compra finalizada", "Gracias por visitarnos", "success");
    } else {
      swal(
        "debes agregar un producto",
        "agrega producto y vuelve a intentarlo",
        "error"
      );
    }
  });
}
finish();
