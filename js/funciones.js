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
        console.log(`El ${this.especie} es un animal ${this.clase} que tiene ${this.numeroPatas} patas.`)
    }
}
