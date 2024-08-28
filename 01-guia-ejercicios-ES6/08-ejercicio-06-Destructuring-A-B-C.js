//==============================================================================
// destructuring
// a) Dado un objeto con propiedades de una persona, usa destructuring para
// extraer el nombre y la edad en variables separadas.
// b) Utiliza destructuring en una función para extraer las propiedades de un
// objeto pasado como argumento.
// c) Dado un array con información de una ciudad (nombre, país, población),
// usa destructuring para asignar cada elemento a una variable.
//==============================================================================

// a) Dado un objeto con propiedades de una persona, usa destructuring para extraer nombre y edad en sep var
//==============================================================================
const persona = {
    nombre: "Maca",
    edad: 30,
    ciudad: "CABA",
};
// Extraer nombre y edad en variables separadas
const { nombre, edad } = persona;
console.log(nombre); // Maca
console.log(edad); // 30

// b) Utiliza destructuring en una función para extraer las propiedades de un objeto pasado como argumento
//==============================================================================
const obtenerInformacion = ({ nombre, edad }) => { // Extraer nombre y edad del objeto
    return `Nombre: ${nombre}, Edad: ${edad}`; // Retornar nombre y edad
};
const persona2 = {
    nombre: "Maca",
    edad: 30,
    ciudad: "CABA",
}; 
console.log(obtenerInformacion(persona2)); // Nombre: Maca, Edad: 30

// c) Dado un array con información de una ciudad (nombre, país, población), usa destructuring para asignar cada elemento a una variable
//==============================================================================
let ciudad = ["Buenos Aires", "Argentina", 40000000]; // Array con información de la ciudad
const [nombreCiudad, pais, poblacion] = ciudad; // Destructuring del array
console.log(nombreCiudad); // Buenos Aires
console.log(pais); // Argentina
console.log(poblacion); // 40000000

