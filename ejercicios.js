function evaluarNumero(numero) {
    if (numero % 2 == 0 && numero > 0) {
        return "es un número par";
    } else if (numero % 2 != 0 && numero > 0) {
        return "es un número impar";
    } else {
        return "no es un número es cero o negativo";
    }
}

console.log(evaluarNumero(8));
console.log(evaluarNumero(5));

console.log("\nEjercicio 2");
function sumnarNumeros(a, b) {
    return a + b;
}

const sumarNumerosFlecha = (a, b) => a + b;

console.log(sumnarNumeros(5, 6));
console.log(sumarNumerosFlecha(11, 2));

console.log("\nEjercicio 3");
var operacion = function (a, b, func) {
    return func(a, b);
}

var sumar = function (a, b) {
    return a + b;
}

console.log(operacion(3, 5, sumar));
console.log(operacion(6, 4, function(a, b) { return a - b; }));
console.log(operacion(6, 4, (a, b) => a * b));

console.log("\nEjercicio 4");
console.log("menu");
console.log("1. Ver catalogo");
console.log("2. Buscar");
console.log("3. Salir");

let opcion = 2;
switch (opcion) {
    case 1:
        console.log("Entraste a ver el catalogo");
        break;
    case 2:
        console.log("Escribe lo que deseas buscar");
        break;
    case 3:
        console.log("Adios");
        break;
    default:
        console.log("Opción no válida");
}

console.log("\nEjercicio 5");
function calcularPropina (total, calidad) {

let propina = 0
let totalFinal = 0
if (calidad == 0) {
propina = 0;
totalFinal = total + propina
} else if (calidad == 1) {
propina = total * 0.1;
totalFinal = total + propina
} else if (calidad == 2) {
propina = total * 0.15;
totalFinal = total + propina;
}
return "Pagar $" + totalFinal;
}

//0 - Malo, 1 - Regular, 2 - Buena.
console.log(calcularPropina(250, 0));
console.log(calcularPropina(250, 1));
console.log(calcularPropina(250, 2));

console.log(calcularPropina(4250, 0));
console.log(calcularPropina(750, 1));
console.log(calcularPropina(1550, 2));

console.log("\nEjercicio 6");
function multiplicarPor(factor) {
    return function(numero) {
        return numero * factor;
    };
}

const doble = multiplicarPor(2);
const triple = multiplicarPor(3);

console.log(doble(5)); // 10
console.log(triple(5)); // 15
console.log(multiplicarPor(10)(7)); // 70