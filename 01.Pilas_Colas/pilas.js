// VAMOS A SMIULAR UNA PILA DE EJECUCIÓN DE JAVASCRIPT
// definimos una clase Pila para gestionar una estrcutura tipo
//* L.I.F.O (Last In First Out)

class Pila {
    constructor(){
        this.items = []; // inicializamos un array vacio para almacenar los elementos de la pila
    }

    // Método para  simular una pila
    // push: añade un elemento a la pila
    push(elemento){
        console.log(`Push: Agregando "${elemento}" a la pila`);
        this.items.push(elemento);
    }
   // pop: elimina el elemento de la pila (el tope de la pila)
    pop(){
        if(this.isEmpty()){
            console.log("Pop: la pila está vacía. No se puede eliminar el elemento");
            return null;
        }
        const elemento = this.items.pop(); // eliminamos el último elemento del array
        console.log(`Pop: eliminando "${elemento}" de la pila`);
        return elemento;
    }

    // devuelve el último elemento de la pila sin eliminarlo de la misma 
    peek(){
        if(this.isEmpty()){
            console.log("Peek: no se puede ver el último elemento de la pila, la pila está vacía");
            return null;
        }
        const tope = this.items[this.items.length - 1 ] // accedemos al último elemento del array
        console.log(`Peek: el ultimo elemento de la pila es "${tope}"`);
        return tope;
    }

    // devuelve el número de elementos de la pila
    size(){
        console.log(`Size: la pila tiene ${this.items.length} elementos`);
        return this.items.length;
    }

    //Imprime todos los elementos de la pila 
    print(){
        if(this.isEmpty()){
            console.log("Print: la pila está vacía");
        }else{
            console.log("Contenido de la pila:" , this.items.join(","));
        }
    }

    // método auxiliar
    // verificar si la pila está vacía
    isEmpty(){
        return this.items.length === 0;
    }
}

// === INSTANCIAR UNA PILA ===
// CREAR LOS OBJETOS DE LA CLASE Pila
// === Simulación de una pila de ejecución de Javascript ===
console.log("🚀 Creando una nueva instancia de pila...");
// creamos la instancia de la clase Pila
const miPila = new Pila();
miPila.pop(); // debe ser null, ya que la pila está vacía
// agregamos elementos a la pila
miPila.push("Libro 1");
miPila.push("Libro 2");
miPila.push("Libro 3");
miPila.push("Libro 4");
miPila.push("Libro 5");
// consultamos el elemento que está en el tope de la pila
miPila.peek(); 
// consultamos el tamaño de la pila 
miPila.size();
// imprimos el contenido de la pila
miPila.print();
// eliminamos el elemento que está en el tope de la pila
miPila.pop();
// volvemos a consultar el tope y el tamaño actual de la pila
miPila.peek();
miPila.size();
miPila.print();
// vaciamos por completo la pila
miPila.pop(); 
miPila.size();
miPila.pop(); 
miPila.size();
miPila.pop(); 
miPila.size();
miPila.pop();
miPila.size(); // debe ser 0
console.log("✅ Fin de la simulación");

// === Fin de la simulación ===