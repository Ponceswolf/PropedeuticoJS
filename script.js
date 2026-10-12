// script.js

console.log("dato primitivo");
// datos numericos
var edad = 33;
var altura = 1.75;
console.log(typeof edad);
console.log(typeof altura);
//strings
var nombre = "Ricardo";
// var apellido = "Gonzalez";
console.log(typeof nombre);
// console.log(typeof apellido);
//booleanos
var esMayor = true;
var esMenor = false;
console.log(typeof esMayor);
console.log(typeof esMenor);
// Undefined
let apellido;
console.log(typeof apellido);
// Null
let ciudad = null;
console.log(typeof ciudad);
// BigInt
let numero_grande = 1234567890123456789012345678901234567890n;
console.log(typeof numero_grande);
// Symbol
let simbolo = Symbol("simbolo unico");
console.log(typeof simbolo);

console.log("\ndatos completos");
// Objetos
let persona = {
nombre: "Ricardo", 
edad: 47,
altura: 1.93,
casado: false,
es_mayor_de_edad: true
};
//funciones
const sumar = function (a, b) {
    return a + b;
};
console.log("Suma de 5 + 3:", sumar(5, 3));

console.log(typeof sumar);
console.log("\nRarezas de JavaScript");
console.log(typeof null); // object
console.log(typeof NaN);
console.log(NaN == NaN);

console.log([] + []);   // "" (Un string vacío)
console.log([] + {});   // "[object Object]"
console.log({} + []);   // "[object Object]"  (Dentro de console.log)
console.log([] - {});   // NaN

console.log(false == 0); // true
console.log(0 === ""); // false
console.log("" == false); // true

console.log("\ncadena de texto");
let cadena = "hola, soy Ricardo";
console.log(cadena.length + " como estas?");

let pais = "mexico";
console.log(`hola, soy ${nombre} y vivo en ${pais}, como estas?`);
console.log(`el doble de ${edad} es ${edad * 2}`);
console.log("Ricardo".length);
console.log("Ricardo".toUpperCase());
console.log("Ricardo".toLowerCase());
console.log("Ricardo".split(","));

console.log("3" + 5);
console.log(3 + 5);

let a
console.log(a);
let b = null;
console.log(b);
// Object
/*
// 1. Declaración de datos personales
const nombre = "Ricardo";
const nacimiento = 1979;

// 2. Cálculo dinámico del año actual usando el sistema
const anioActual = new Date().getFullYear(); 
let edad = anioActual - nacimiento;

console.log("Nombre:", nombre);
console.log("Edad calculada:", edad);

// 3. Condicional para verificar la mayoría de edad
if (edad >= 18) {
    console.log(`${nombre} es mayor de edad. ✅`);
} else {
    console.log(`${nombre} es menor de edad. ❌`);
}
*/
/*
var <- evitar
let <- variables
const <- constante
*/

/*
var edad = 33;
console.log("Mi edad es: " + edad);
*/
/*
hoola
mundo
*/
/*
console.log("hola mundo");
console.log(40);
console.log("40");
console.log("40 + 40 es igual a " + (40 + 40));
console.log("Tu nombre es: " + prompt("¿Cuál es tu nombre?"));
//n/t/ salto de línea como precionar enter
console.log("n/t/ salto de línea");
console.log('Esto es una información "importante" para la clase');
console.log("La suma de 40 + 40 es igual a " + (40 + 40));
console.log("La resta de 40 - 40 es igual a " + (40 - 40));
*/