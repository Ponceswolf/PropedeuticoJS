const titulo = document.getElementById("titulo");
const subtitulo = document.querySelector("#subtitulo");
const primeraTarea = document.querySelector(".item");
const todosLosItems = document.querySelectorAll(".item");

console.log(titulo.textContent);
console.log(todosLosItems.length);
console.log(todosLosItem);

todosLosItems.forEach((todosLosItems, i) => console.log(i, todosLosItems.textContent))

console.log("\nLeer y modificar");
console.log(titulo.textContent);
titulo.textContent = "sesion 7 - scope, DOM y Eventos";

subtitulo.textContent = "Javascript no es nada difícil";

document.querySelector("#descripcion").innerHTML = "Ha!, ya";

const btnsaludar = document.getElementById("btn-saludar");

btnSaludar.setAttribute("Atención", "Da click para saludar")

console.log(btnSaludar.getAttribute("Atención"));

const inputTarea = document.getElementById("nueva-tarea");

inputTarea.value = "PE: Aprender JS...";

console.log("\nModificar estilos");

titulo.style.color = " #F54927";

subtitulo.style.color = " #F54927";

btnSaludar.classList.add("resaltado");

btnSaludar.classList.remove("resaltado");

console.log("\nCrear");

const lista = document.getElementById("lista-tareas");

const nuevoItem = document.createElement("li");

nuevoItem.className = "item";

nuevoItem.textContent = "Realizar una práctica";

lista.appendChild(nuevoItem);

lista.firstElementChild.remove();

console.log("\nEventos con addEventListener");

// elemento.addEventListener("tipo")