//==============================================================================
// Spread Operator
// a) Crea una función que reciba un número indefinido de argumentos y
// devuelva la suma de todos ellos usando el spread operator.
// b) Dado un array de números, usa el spread operator para encontrar el
// número máximo.
// c) Combina dos objetos en uno solo utilizando el spread operator.
//==============================================================================

// a) Función que recibe un número indefinido de argumentos y devuelve la suma de todos ellos
//==============================================================================

function sumarTodos(...numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }

    return suma;
}
console.log(sumarTodos(1, 2, 3, 4, 5)); // 15

// b) Encontrar el número máximo usando spread operator
//==============================================================================
const numeros = [10, 5, 20, 15, 30]; // Array de números
const max = Math.max(...numeros); // Encontrar el número máximo
console.log(max); // 30

// c) Combinar dos objetos usando spread operator
//==============================================================================
const obj1 = { a: 1, b: 2 }; // Primer objeto
const obj2 = { c: 3, d: 4 }; // Segundo objeto
const objCombinado = { ...obj1, ...obj2 }; // Combinar ambos objetos using spread operator
console.log(objCombinado); // { a: 1, b: 2, c: 3, d: 4 }
