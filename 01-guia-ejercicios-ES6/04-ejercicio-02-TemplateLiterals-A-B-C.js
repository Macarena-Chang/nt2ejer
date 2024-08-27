//==============================================================================
// TEMPLATE LITERALS
// a) Usando template literals, crea una cadena que incluya variables para tu
// nombre, edad y profesión.
// b) Crea una función que reciba un producto y su precio, y devuelva una
// frase usando template literals.
// c) Utiliza template literals para crear un mensaje de error que incluya el
// nombre del error y su descripción
//==============================================================================
// a) Cadena con variables usando template literals
//==============================================================================

const nombre = "Maca";
const edad = 28;
const profesion = "Desarrolladora";

const about = `Hola, mi nombre es ${nombre}, tengo ${edad} años y soy ${profesion}.`;

console.log(about); // Hola, mi nombre es Maca, tengo 28 años y soy Desarrolladora.

// b) Función que usa template literals para describir un producto
//==============================================================================

function desProd(producto, precio) {
    return `El producto "${producto}" tiene un precio de $${precio.toFixed(2)}.`;
}
console.log(desProd("Camisa", 20)); // El producto "Camisa" tiene un precio de $20.00.


// c) Mensaje de error usando template literals
//==============================================================================

function createErrorMessage(nombreError, descripcionError) {
    return `
Error: ${nombreError}
Descripción: ${descripcionError}
Contact us for more information.
   `;
}

const mensajeError = createErrorMessage(
    "Error de Conexión",
    "No se pudo establecer conexión con el servidor"
);

console.log(mensajeError);