/**************************************/
/*                                    */
/*         CLASES Y HERENCIAS         */
/*                                    */
/**************************************/

// Creo la clase principal.
class Animal {
    // Añado el constructor de la clase.
    constructor(especie, clase, numeroPatas, sonido) {
        this.especie = especie;
        this.clase = clase;
        this.numeroPatas = numeroPatas;
        this.sonido = sonido;
    }
    // Añado dos métodos.
    describir() {
        console.log(`El ${this.especie} es un animal ${this.clase} que tiene ${this.numeroPatas} patas.`);
    }

    sonidoAnimal() {
        console.log(`"${this.sonido}, ${this.sonido}", dijo el ${this.especie}.`);
    }
}

// Creo las clases que heredan de Animal.
class Perro extends Animal {
    constructor(especie, clase, numeroPatas, sonido) {
        // Para el constructor de la clase, invoco al constructor de la clase Animal.
        super(especie, clase, numeroPatas, sonido);
        // Añado un atributo propio de los perros.
        this.raza = raza;
    }
    // Creo los dos métodos.
    describir() {
        console.log(`Este ${this.especie} es de raza ${this.raza}.`);
    }

    sonidoAnimal() {
        console.log(`"¡${this.sonido}, ${this.sonido}!"`);
    }
}

class Gato extends Animal {
    constructor(especie, clase, numeroPatas, sonido){
        // Para el constructor de la clase, invoco al constructor de la clase Animal.
        super(especie, clase, numeroPatas, sonido);
        // Añado un atributo propio de los gatos.
        this.origen = origen;
    }
    // Creo los dos métodos.
    describir() {
        console.log(`Este ${this.especie} proviene de ${this.origen}`);
    }

    sonidoAnimal() {
        console.log(`"¡${this.sonido}, ${this.sonido}!"`);
    }
}
