// Mejor manejo de imágenes con Bootstrap
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", function () {
    if (
      img.src.includes(
        "https://www.icegif.com/wp-content/uploads/2023/10/icegif-1011.gif"
      )
    ) {
      img.src =
        "https://i.pinimg.com/originals/8c/ed/1b/8ced1b5dca8995290a2f7916017d54e4.gif";
    } else {
      img.src =
        "https://www.icegif.com/wp-content/uploads/2023/10/icegif-1011.gif";
    }
  });
});

// Animación al hacer scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(26, 26, 26, 0.95)";
  } else {
    navbar.style.background = "rgba(26, 26, 26, 0.9)";
  }
});

// Carga de imágenes con loading state
const images = document.querySelectorAll("img");
images.forEach((img) => {
  img.addEventListener("load", () => {
    console.log("Imagen cargada correctamente");
  });
  img.addEventListener("error", () => {
    console.error("Error al cargar la imagen");
    img.src = "fallback-image.jpg";
  });
});
