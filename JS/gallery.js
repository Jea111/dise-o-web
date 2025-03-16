// Obtención de los elementos
const botonesCompra = document.querySelectorAll(".btnCompra");
const carrito = [];
const contenedorCarrito = document.getElementById("productosCarrito");
const totalElemento = document.getElementById("totalPrecio");

function agregarAlCarrito() {
  botonesCompra.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      // Obtener el producto donde se hizo clic
      const producto = e.target.closest(".producto"); // Busca el elemento más cercano con la clase '.producto' al elemento que disparó el evento.
      const nombre = producto.querySelector("h3").textContent;
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
  contenedorCarrito.innerHTML = ""; // Limpiar el carrito antes de mostrar los productos

  let total = 0;

  // Mostrar los productos en el carrito
  carrito.forEach((producto) => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("productoCarrito");
    divProducto.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
    `;
    contenedorCarrito.appendChild(divProducto);

    // Calcular el total
    total += parseFloat(producto.precio.replace(".", "").replace(",", "."));
  });

  // Mostrar el total
  totalElemento.textContent = total.toLocaleString("es-CO");
}

agregarAlCarrito();

let finalizarCompra = document.querySelector("#btnFinish");

function finish() {
  if (contenedorCarrito != "") {
    finalizarCompra.addEventListener("click", () => {
      swal("compra finalizada", "Gracias por visitarnos", "success");
    });
  } else {
    swal("debes agregar un producto");
  }
}
finish();
