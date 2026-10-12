// operaciones logicas
// && -> Y
// || -> O
// ! -> NO
// > -> mayor que
// < -> menor que
// >= -> mayor o igual que
// <= -> menor o igual que
// === -> igual que
// !== -> diferente que o desigual que


console.log("pruebas logicas");
console.log("5 es mayor a 2", 5 > 2);
console.log("5 es menor a 2", 5 < 2);
console.log("5 es igual a 2", 5 == 2);
console.log("5 es mayor o igual a 2", 5 >= 2);
console.log("5 es menor o igual a 2", 5 <= 2);  


console.log("\nOperaador Y");
console.log(true && true); // Output: true
console.log(true && false); // Output: false
console.log(false && true); // Output: false
console.log(false && false); // Output: false
console.log("\nOperaador O");
console.log(true || true); // Output: true
console.log(true || false); // Output: true
console.log(false || true); // Output: true
console.log(false || false); // Output: false

console.log("\npruebas logicas");
let edad = 21;

edad = 30;
if (edad >= 21) {
    console.log("Eres mayor de edad. Y puedes beber alcohol");
} else {
    console.log("Eres menor de edad");
}

console.log("\nreconocer dia de la semana");
let dia = "6";

switch (dia) {
    case "1":
        console.log("Hoy es lunes");
        break;
    case "2":
        console.log("Hoy es martes");
        break;
    case "3":
        console.log("Hoy es miércoles");
        break;
    case "4":
        console.log("Hoy es jueves");
        break;
    case "5":
        console.log("Hoy es viernes");
        break;
    case "6":
        console.log("Hoy es sábado");
        break;
    case "7":
        console.log("Hoy es domingo");
        break;

    default:
        console.log("Día no válido");
}

console.log("\nvalores truthy y falsy");
if ("") {console.log("entro 1");}
if ("hola") {console.log("entro 2");}
if (0) {console.log("entro 3");}
if (1) {console.log("entro 4");}

console.log(Boolean(0)); // Output: false
console.log(Boolean(1)); // Output: true
console.log(Boolean("")); // Output: false
console.log(Boolean("hola")); // Output: true

console.log("\nFunciones");
function saludar(nombre) {
    return "Hola, " + nombre;
}

console.log(saludar("Ricardo"));
console.log(saludar("Juan"));
console.log(saludar("María"));
console.log(saludar("Pedro"));

console.log("\nFunciones flechitas");
const sumar = (a, b) => a + b;
const doble = x => x * 2;

console.log(sumar(5, 3));
console.log(doble(4));

