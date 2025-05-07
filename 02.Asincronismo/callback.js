// Asincrono usando callback
// Versión 1: Callback

function descargarArchivoCallback(nombreArchivo, callback){
    console.log(`⏳ Iniciando la descarga de ${nombreArchivo}`);
    //Implementamos un setTimeout para simular la descarga
    //simular un pequeño retraso en la descarga 
    setTimeout(() => {
        const contenido = `Contenido del Archivo ${nombreArchivo}`;
        callback(null,contenido) // primer argumeento es el error y el segundo es el contenido
    },3000); // 3 segundos
}

// uso de la función descargarArchivoCallback
descargarArchivoCallback("Archivo.txt", (error, resultado) => {
    if(error){
        console.error("Error al descargar el archivo:", error);
    }else{
        console.log("Archivo descargado con éxito:", resultado);
    }
})