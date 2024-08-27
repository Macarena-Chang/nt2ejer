
//==============================================================================
// Exercise 1-A 
//Declarar un nombre y edad (let y const)
//Reasignar valores, explicar diferencia
//==============================================================================
let edad = 20;
const nombre = "Tomás";
console.log("Nombre: " + nombre);

// Reasignación variables 
edad = 25; //   funciona  bien ✔ 
console.log("Edad: " +edad); // Imprime: 26

// nombre = "Pedro"; //   error 𐄂 
//  TypeError: invalid assignment to const 'nombre'

/*
EXPLICACIÓN:
✔ Variable edad declarada con let puede ser reasignada. 
𐄂 Constante nombre declarada con const no puede ser reasignada, genera un error.
*/


//==============================================================================
// Exercise 1-B
// Crea un bucle que incremente una variable declarada con
// let . ¿Qué pasaría si la declaras con const ?
//==============================================================================
// Con let
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Imprime: 0, 1, 2, 3, 4 ✔

// Con const
/* for (const i = 0; i < 5; i++) {
    console.log(i);
} */
// 𐄂 Error: i no puede ser reasignada luego de inicializada.


//==============================================================================
// Exercise 1-C
// Declara una constante que sea un objeto con tu información personal.
// Intenta modificar una propiedad del objeto. ¿Es esto posible? ¿Por qué?
//==============================================================================
const persona = {
    nombre: "Maca",
    edad: 30,
    ciudad: "Caba"
};
console.log("Nombre 1c original: "+ persona.nombre); // Imprime: 30 ✔

console.log("Edad 1c original: "+ persona.edad); // Imprime: 30 ✔

persona.edad = 31; // funciona
console.log("Edad 1c modificado: "+ persona.edad); // Imprime: 31 ✔

// persona = { nombre: "Camila" }; // error 𐄂
// TypeError: Assignment to a constant variable.

/*EXPLICACIÓN:
✔ La propiedad  de obj persona puede ser modificada.
𐄂 Variable persona no puede ser reasignada porque la referencia es CONSTANTE pero el objeto en si no es inmutable.
*/