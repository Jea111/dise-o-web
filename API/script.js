const url = "https://rickandmortyapi.com/api/character"; //url de la api
const personajesDiv = document.querySelector(".personajes"); //obtener div de personajes

fetch(url)
  .then((response) => response.json()) //convertir a json
  .then((data) => {
    const results = data.results; //obtener resultados de la api
    //mostrar todos los personajes con el forEach
    results.forEach((character) => {
      const characterDiv = document.createElement("div"); //crear div para cada personaje
      characterDiv.innerHTML = `
        <h3>${character.name}</h3>
        <img src=${character.image}>
        <p> ${character.status}</p>
        <p> ${character.id}</p>
        <p> ${character.type}</p>
      `;
      personajesDiv.appendChild(characterDiv); //agregar div de personaje al div de personajes
    });
  })
  .catch((error) => console.error(error)); //controlar errores

// const url2 = "https://rickandmortyapi.com/api/episode";
// const personajesDiv2 = document.querySelector(".episodios");

// fetch(url2)
//   .then((response) => response.json())
//   .then((data) => {
//     const results = data.results;
//     results.forEach((character) => {
//       const characterDiv2 = document.createElement("div");
//       characterDiv2.innerHTML = `
//         <p><em>episodio</em> : ${character.episode}</p><br>

//       `;
//       personajesDiv2.appendChild(characterDiv2);
//     });
//   })
//   .catch((error) => console.error(error));

const url3 = "https://rickandmortyapi.com/api/episode";
const personajesDiv3 = document.querySelector(".episodios");

fetch(url3)
  .then((response) => response.json())
  .then((data) => {
    const resultado = data.results;
    resultado.forEach((chr) => {
      const chrDiv = document.createElement("div");
      chrDiv.innerHTML = `
      <p>${chr.name}</p>`;
      personajesDiv3.appendChild(chrDiv);
    });
  })
  .catch((error) => console.log("el error es:", error));
