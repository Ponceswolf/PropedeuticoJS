// let visitas = 0;

// function registrarVisitas(){
//     visitas = visitas + 1;
// }

// registrarVisitas();
// registrarVisitas();
// console.log(visitas);

// function calcularTotal() {
//     const precio = 100;
//     const impuesto = 0.16;
//     console.log(precio * (1 + impuesto)); // 136
// }

// calcularTotal();
// console.log(precio);

function saludar(nombre) {
    const saludo = "Hola, " + nombre;
    return saludo
}

console.log(saludar("Ricardo"));
console.log(saludar("Eric"));
console.log(saludo);

// { } if for while

if (true) {
    let dentroDelBloque = "ley";
    const tambiendentro = "const";
    var escapa = "var";
}

// console.log(dentroDelBloque);
// console.log(tambiendentro);
//console.log(escapa);

// for(var i = 0; i = 5; i++) {
//     console.log("Interacion", i)
// }

// console.log(i);

const global = "A";

function externa() {
    const externa = "B";

    function interna() {
        const interma = "C";
        console.log(global, externa + interma);
    }
}