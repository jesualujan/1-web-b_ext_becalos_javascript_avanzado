// URL DE LA API REST DONDE SE ALMACENAN LOS PRODUCTOS
const API_URL = 'http://localhost:3000/products'; // URL de la API REST

// Vamos a manipular el Dom
// Referencia a los elementos del DOM  que interactuan con el usuario
const productForm = document.getElementById('product-form');
const productTable = document.getElementById('product-table');
const resetBtn = document.getElementById('reset-btn'); // Botón para restablecer el formulario
const searchBtn = document.getElementById('search-btn'); // Botón para buscar un producto por ID
const errorMessage = document.getElementById('error-message'); // elemento para mostrar mensajes de error

// Inputs del formulario para ingresar información sobre los productos 
const inputId = document.getElementById('product-id'); // ID del producto
const inputName = document.getElementById('product-name'); // Nombre del producto
const inputPrice = document.getElementById('product-price'); // Precio del producto
const searchInput = document.getElementById('search-id'); // Input para buscar un producto por ID

// Función para mostrar un mensaje de error en la interfaz de usuario
function showError(message){
    errorMessage.textContent = message; // Asignar el mensaje de error al elemento de error
    errorMessage.style.display = 'block'; // Mostrar el elemento de error
}

// Función para ocultar el mensaje de error en la interfaz de usuario
function clearError(){
    errorMessage.textContent = ''; // Limpiar el mensaje de error
    errorMessage.style.display = 'none'; // Ocultar el elemento de error
}

// Función para obtener la lista de productos desde el servidor y mostrarlos en la tabla
async function getProducts() {
    try{
        const response = await fetch(API_URL); // hacer una solicitud/petición GET a la API
        const products = await response.json(); // convertir la respuesta a JSON
        renderProducts(products); // llamar a la función para renderizar los productos en la tabla
    }catch(error){
        showError('Error al obtener los productos: ' + error.message) // Muestra un mensaje de error si ocurre un error al cargar los productos
    }
}

//Función para mostrar los productos en la tabla HTML
function renderProducts(products){
    productTable.innerHTML = ''; // limpiar la tabla antes de mostrar los productos
    // iterar sobre cada producto y crear una fila en la tabla
    products.forEach(p => {
        const row = document.createElement('tr'); // crear una nueva fila
        row.innerHTML = ` 
        <td>${p.id}</td>
        <td>${p.name}</td>
        <td>${p.price}</td>   
        <td>
            <button class="btn btn-outline-warning btn-sm edit-btn">Editar</button>
            <button class="btn btn-outline-danger btn-sm delete-btn">Eliminar</button>
        </td>
        ` 
        // Agregar la fila a la tabla
        productTable.appendChild(row);
    })
}

getProducts(); // Llamar a la función para obtener los productos al cargar la página