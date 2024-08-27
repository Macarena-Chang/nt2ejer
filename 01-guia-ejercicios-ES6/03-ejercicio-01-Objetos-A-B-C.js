//==============================================================================
// OBJETOS
// Objetos y cómo acceder a las propiedades
// a) Crea un objeto que represente un libro con propiedades como título,
// autor y año. Accede a cada propiedad e imprímelas.
// b) Dado un objeto que representa una persona, añade una nueva propiedad
// "hobby" y modifica la propiedad "edad".
// c) Crea un objeto que represente una calculadora con métodos para sumar,
// restar, multiplicar y dividir. Utiliza estos métodos con diferentes números
//==============================================================================

//==============================================================================
// Exercise 3A: Crear y acceder a un objeto libro
//==============================================================================

//
let libro = {
    titulo: "Animal Farm",
    autor: "George Orwell",
    año: 1945
};

console.log("Título:", libro.titulo);
console.log("Autor:", libro.autor);
console.log("Año:", libro.año);

//==============================================================================
// Exercise 3b: Modificar un objeto persona
//==============================================================================

let persona = {
    nombre: "Maria",
    edad: 30,
    profesion: "Ingeniera"
};

// Añadir nueva propiedad
persona.hobby = "Running";

// Modificar propiedad existente
persona.edad = 31;

console.log(persona);


//==============================================================================
// Exercise 3c: Crear y utilizar un objeto calculadora
//==============================================================================
let calculadora = {
    sumar: function(a, b) {
        return a + b;
    },
    restar: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        if (b !== 0) { // Verificar que b no sea cero
            return a / b;
        } else {
            return "Err: División por cero";
        }
    }
};

console.log("Suma:" + calculadora.sumar(5, 3));
console.log("Resta:"+calculadora.restar(10, 4));
console.log("Multiplicación:"+ calculadora.multiplicar(6, 2));
console.log("División:"+ calculadora.dividir(15, 3));
console.log("División por cero:"+ calculadora.dividir(10, 0));