// URL base de la API de Rick and Morty (characters/personajes)
const BASE_URL = 'https://rickandmortyapi.com/api/character';

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
    try{
        // solicitar los datos de la API usando el número de la página
        const response = await fetch(`${BASE_URL}?page=${page}`);
        // lanzar un error si la respuesta no fue satisfactoria
        if(!response.ok){
           throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }
        // extraer los datos de la respuesta y almacenarlos en una variable (data)
        // parsear o convertir la respuesta JSON a un objeto JavaScript
        const data = await response.json();
    }catch(error){
  // en caso de error, se muesta un mensaje en el contenedor de los personajes
   container.innerHTML = ` <p> ❌ Error al obtener los personajes: ${error.message}</p>`
    }
}

