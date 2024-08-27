//==============================================================================
// Exercise 2A
// a) Crea un array con los nombres de cinco frutas. Añade una fruta al
// principio y otra al final usando métodos de array.
//==============================================================================
let fruits = ["manzana", "naranja", "kiwi", "uva", "mango"];

// Usamos unshift() para añadir al principio y push() para añadir al final.
// Añadir fruta al principio
fruits.unshift("pera");
// Añadir fruta al final
fruits.push("frutilla");
console.log(fruits); // Imprime: [ 'pera', 'manzana', 'naranja', 'kiwi', 'uva', 'mango', 'frutilla' ]

//==============================================================================
// Exercise 2B
// b) Dado un array de números del 1 al 5, crea otro array que contenga el
// doble de cada número usando un bucle for
//==============================================================================

let numeros = [1, 2, 3, 4, 5]; // Array de números del 1 al 5
let dobles = []; // Array vacío para guardar los dobles

for (let i = 0; i < numeros.length; i++) {
    dobles.push(numeros[i] * 2); // Multiplicar por 2 y agregar al array dobles
}

console.log(dobles);
// Resultado: [2, 4, 6, 8, 10]

//==============================================================================
// Exercise 2C
// Crea un array con tres colores. Luego, crea otro array con dos colores
// más. Combina ambos arrays en uno solo usando el método concat()
//==============================================================================

let colores1 = ["rojo", "azul", "violeta"];
let colores2 = ["amarillo", "verde"];

let todos  = colores1.concat(colores2); // Concatenar los dos arrays

console.log(todos); // Imprime: [ 'rojo', 'azul', 'violeta', 'amarillo', 'verde' ]