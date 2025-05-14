// URL base de la API de Rick and Morty (characters/personajes)
const BASE_URL = "https://rickandmortyapi.com/api/character";

// MANIPULAR EL DOM
// seleccionar los elemnetos del dom
// Referencias a los elementos del DOM: el contenedor de los personajes
// y los botones de la paginación
const container = document.getElementById("characters-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// variables para llevar el control de la paginación
let currentPage = 1; // página actual
let totalPages = 1; // total de páginas

// Necesito una función asincrona que haga una petición a la
// API de Rick and Morty y me devuelva los personajes
// usando fetch y async/await

async function getCharacters(page = 1) {
  try {
    // solicitar los datos de la API usando el número de la página
    const response = await fetch(`${BASE_URL}?page=${page}`);
    // lanzar un error si la respuesta no fue satisfactoria
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }
    // extraer los datos de la respuesta y almacenarlos en una variable (data)
    // parsear o convertir la respuesta JSON a un objeto JavaScript
    const data = await response.json();

    // actualizar el tola de páginas disponibles (lo proporciona la API)
    totalPages = data.info.pages; // total de páginas disponibles

    // renderizar los personajes en el contenedor
    renderCharacters(data.results);

    /// actualizar los botones de la paginación
    updateButtons();

  } catch (error) {
    // en caso de error, se muesta un mensaje en el contenedor de los personajes
    container.innerHTML = ` <p> ❌ Error al obtener los personajes: ${error.message}</p>`;
  }
}

// Crear una función es renderizar un array de personajes en el contenedor HTML
// Crea tarjetas visuales para cada personaje con su infomarción en el contenedor
function renderCharacters(characters) {
  // Limpiar el contenedor antes de insertar los nuevos personajes
  container.innerHTML = ""; // limpiamos el contenedor
  // Iterar sobre cada personaje  en el array de personajes
  characters.forEach(param => {
    // crear un div con una clase llamada "card" para reprensentar cada personaje
    const card = document.createElement("div");
    card.className = "card"; // añadir la calse "card" al div
    // Define el contenido HTML de la tarjeta con los datos del personaje
    card.innerHTML = `  
         <img class="character-image" src="${param.image}" alt="${param.name}" />
         <h2>${param.name}</h2>
         <p style="font-size: 1.2rem;"> 📛 Especie: ${param.species}</p>
         <p style="font-size: 1.2rem;"> ❤️ Estado: ${param.status}</p>
         <p style="font-size: 1.2rem;"> 🚻 Género: ${param.gender}</p>
         <p style="font-size: 1.2rem;"> 🌍 Origen: ${param.origin.name}</p>
         <p style="font-size: 1.2rem;"> 📍Ubicación: ${param.location.name}</p>
         <p style="font-size: 1.2rem;"> 🎬 Episodios: ${param.episode.length}</p>
        `;
        // agregamos la tarjeta al contenedor de los personajes
        container.appendChild(card); // añadir la tarjeta al contenedor de personajes
  });
}


// Función que habilita o deshabilita los botones de paginación
// según la página actual
function updateButtons() {
    prevButton.disabled = currentPage === 1; // deshabilitar el botón "anterior" si estamos en la primera página
    nextButton.disabled = currentPage === totalPages; // deshabilitar el botón "siguiente" si estamos en la última página
}

// Evento click para el botón "anterior"
prevButton.addEventListener('click', () => {
    if(currentPage > 1){
        currentPage--; // disminuir la página actual
        getCharacters(currentPage); // obtener los personajes de la nueva página
    }
})

// Evento click para el botón "siguiente"
nextButton.addEventListener('click', () => {
    if(currentPage < totalPages){
        currentPage++; // incrementar la página actual
        getCharacters(currentPage); // obtener los personajes de la nueva página
    }
})

// Llamada inicial para mostrar la primera página de personajes al cargar la app
getCharacters();
