// creacion del constructor o molde que servira de base
class Usuario {
    constructor(nombre, apellido, libros, mascotas) {

            this.nombre = nombre;
            this.apellido = apellido;
            this.libros = [];
            this.mascotas = [];

        }
        //Metos aplicados al constructor:
    getFullName = () => {
        return (`El nombre completo del usuario es: ${this.nombre} ${this.apellido}`)

    }


    addMascota = (mascotas) => {
        this.mascotas.push(mascotas);
    }
    mostrarMascotas = () => { console.log(this.mascotas); }


    countMascotas = () => {
        return (`Cantidad de mascotas: ${this.mascotas.length}`)
    }


    addBook = (nombre, autor) => {
        this.libros.push({ nombre, autor })
    }

    getBookNames = () => {
        return this.libros.map((libro) => { return libro.nombre })
    }


}
let usuario1 = new Usuario("Pepe", "Argento");



usuario1.addMascota("perro");
usuario1.addMascota("rata");
usuario1.addMascota("gato");

usuario1.addBook("Hobbit", "J. R. R. Tolkien");
usuario1.addBook("Harry Potter", "J. K. Rowling");



console.log(usuario1.getFullName());
console.log(usuario1.countMascotas());
usuario1.mostrarMascotas();
console.log("Libros en poder del Usuario: ");
console.log(usuario1.getBookNames());

//Alumno: H. M. Belen Schmid Diaz =)