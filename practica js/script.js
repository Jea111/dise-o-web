const img = document.querySelector("img"); //selection de la etiqueta img

img.addEventListener("click", function () {
  if (
    //comprobamos si la imagen es la que queremos cambiar
    img.src.includes(
      "https://cdn.sanity.io/images/pu5wtzfc/production/17f6f5de754c036a33d14078231ca67fbf008cd4-1920x1080.gif"
    )
  ) {
    //si es la que queremos cambiar, cambiamos la imagen
    img.src = "https://i.makeagif.com/media/9-04-2015/CFkZVq.gif";
  } else {
    //si no es la que queremos cambiar, cambiamos la imagen
    //a la imagen que queremos cambiar
    img.src =
      "https://cdn.sanity.io/images/pu5wtzfc/production/17f6f5de754c036a33d14078231ca67fbf008cd4-1920x1080.gif";
  }
});
