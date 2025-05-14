const BASE_URL = 'https://rickandmortyapi.com/api/character';

// Necesito una función asincrona que haga una petición a la 
// API de Rick and Morty y me devuelva los personajes
// usando fetch y async/await

async function getCharacters() {
   //promesas
    try{
    const response = await fetch(BASE_URL);
    //verificar si la respuesta es correcta
    //si no es correcta, lanzar un error
    // if(!response.ok){devolvemos un error}
    if(response.status !== 200){
        throw new Error(`No se pudo obtener los personajes: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    const characters = data.results.map(param => param.name);
    console.log(characters);
    }catch(error){
        console.error(`Hubo un problema al obtener los personajes: ${error.status} ${error.message}`, error);
    }
}

//llamar a la función
getCharacters();