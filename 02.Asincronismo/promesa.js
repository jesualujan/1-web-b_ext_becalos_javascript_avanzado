// Asincrono usando callback
// Versión 2: Promesas

function descargarArchivoPromesa(nombreArchivo){
    console.log(`⏳ Iniciando la descarga de ${nombreArchivo}`);
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const contenido = `Contenido del Archivo: ${nombreArchivo}`;
            resolve(contenido) // Resolvemos la promesa con el contenido del archivo
        },3000); // 3 segundos
    })
}

/// uso de la función descargarArchivoPromesa
descargarArchivoPromesa("Archivo.txt")
 .then((resultado) => { 
    console.log("✅ Archivo descargado con éxito:", resultado);
  })
.catch((error ) => 
  { console.error("❌ Error al descargar el archivo:", error);
    
  })