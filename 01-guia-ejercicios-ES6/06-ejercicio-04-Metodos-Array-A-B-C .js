//==============================================================================
// Metodos Array
// a) Dado un array de números, utiliza
// filter() para obtener un nuevo array solo con los números pares.
// b) Crea un array de objetos representando estudiantes con propiedades de
// nombre y calificación. Usa
// map() para obtener un nuevo array solo con los nombres de los estudiantes.
// c) Utiliza
// reduce() para calcular la suma de todos los números en un array.
//==============================================================================

// A filter() Filtra los números pares
//==============================================================================

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numPares = nums.filter(num => num % 2 === 0);
console.log("Numeros pares: " + numPares);

// B map() Obtiene los nombres de los estudiantes
//==============================================================================
let estudiantes = [
    { nombre: "Maca", nota: 85 },
    { nombre: "María", nota: 92 },
    { nombre: "Vanesa", nota: 80 }
];
let nombresEst = estudiantes.map(estudiante => estudiante.nombre);
console.log("Nombres de estudiantes: " + nombresEst);

// C reduce() Suma los números en el array
//==============================================================================
let numeros = [1, 2, 3, 4, 5];
let sum = numeros.reduce((acum, numero) => acum + numero, 0);
console.log("Suma de los números: " + sum);
