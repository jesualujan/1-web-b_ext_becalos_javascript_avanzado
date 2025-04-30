// VAMOS A SIMULAR UNA COLA DE EJECUCIÓN DE JAVASCRIPT
// definimos una clase Cola para gestionar una estrcutura tipo
//* F.I.F.O (First In First Out)

class Cola {
    constructor(){
        this.items = []; // inicializamos un array vacio para almacenar los elementos de la pila
    }

    // Método para  simular una cola en javascript
    enqueue(elemento){
        console.log(`Enqueue: Agregando "${elemento}" a la cola`);
        this.items.push(elemento);
    }
    // método para eliminar el primer elemento de la cola
    dequeue(){
        if(this.isEmpty()){
            console.log("Dequeue: la cola está vacía. No se puede eliminar el elemento");
            return null;
        }
        const elemento = this.items.shift(); // eliminamos el primer elemento del array
        console.log(`Dequeue: eliminando "${elemento}" de la cola`);
        return elemento;
    }
    // devuelve el primer elemento de la cola sin eliminarlo de la misma
    front(){
        if(this.isEmpty()){
            console.log("Front: la cola de ejecución está vacía");
            return null;
        }
        console.log(`Front: el primer elemento de la cola es "${this.items[0]}"`);
        return this.items[0]; // accedemos al primer elemento del array
    }
    // Muestra el último elemento de la cola sin eliminarlo de la misma
    back(){
        if(this.isEmpty()){
            console.log("Back: la cola de ejecución está vacía");
            return null;
        }
        const last = this.items[this.items.length - 1 ]// accedemos al último elemento del array
        console.log(`Back: el último elemento de la cola es "${last}"`);
        return last;
    }
     // devuelve el número de elementos de la cola
     size(){
        console.log(`Size: la cola tiene ${this.items.length} elementos`);
        return this.items.length;
    }
    //Imprime todos los elementos de la cola 
    print(){
        if(this.isEmpty()){
            console.log("Print: la cola está vacía");
        }else{
            console.log("Contenido de la cola:" , this.items.join("<-"));
        }
    }
    // método auxiliar
    // verificar si la pila está vacía
    isEmpty(){
        return this.items.length === 0;
    }
}

// === INSTANCIAR UNA COLA DE EJECUCIÓN ===
// === Simulación de operaciones sobre la cola de ejecución ===
console.log("🚀 Creando una nueva instancia de la cola  de ejecución...");
// creamos la instancia de la clase Cola
const miColaEjecucion = new Cola();

miColaEjecucion.enqueue("Tarea 1");
miColaEjecucion.enqueue("Tarea 2");
miColaEjecucion.enqueue("Tarea 3");
miColaEjecucion.enqueue("Tarea 4");
miColaEjecucion.enqueue("Tarea 5");

miColaEjecucion.front(); // debe ser "Tarea 1"
miColaEjecucion.back(); // debe ser "Tarea 5"
miColaEjecucion.print(); // muestra toda la cola

miColaEjecucion.dequeue(); // elimina "Tarea 1"
miColaEjecucion.front(); // debe ser "Tarea 2"
miColaEjecucion.back(); // debe ser "Tarea 5"
miColaEjecucion.print(); // muestra toda la cola

miColaEjecucion.size(); // debe ser 4

console.log("✅ Fin de la simulación");

// === Fin de la simulación ===