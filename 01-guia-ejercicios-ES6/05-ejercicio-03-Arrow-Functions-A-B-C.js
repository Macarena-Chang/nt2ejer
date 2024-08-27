//==============================================================================
// Arrow Functions
//==============================================================================

// a) Convertir función tradicional a arrow function
//==============================================================================
//STEPS: Convertir función tradicional saludar a una arrow function 

// 1. Eliminar palabra reservada function
// 2. Agregar flecha =>
    // 2.1. Si la función tiene un solo parámetro, se puede omitir el paréntesis

// Función tradicional
function saludar(nombre) {
    return "Hey, " + nombre + "!";
}

// Convertida a arrow function
const saludarArrow = (nombre) => `Hola, ${nombre}!`;

console.log(saludar("Maca")); // Hey, Maca!

//==============================================================================
// b) Arrow function para calcular el cuadrado de un número
//==============================================================================

const cuadrado = (numero) => numero * numero;
console.log(cuadrado(5)); // 25

//==============================================================================
// c) Arrow function devolver el mayor de dos números
//==============================================================================
const obtenerMayor = (a, b) => (a > b ? a : b);
console.log(obtenerMayor(10, 5)); // 10

//  Arrow function sin parámetros
//==============================================================================

const saludo = () => "Hola :)";
console.log(saludo()); // Hola :)

// Arrow function con cuerpo de función
//==============================================================================

const esPar = (numero) => {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(esPar(4)); //   true
console.log(esPar(7)); //  false
