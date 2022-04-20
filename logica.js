/*Asi se hacen comentarios en JavaScript
Console.log(...) muestra cosas en la consola*/
console.log("hola mundo");
console.log(5+5);
console.log(7*8);
console.log(300/6);


/* Definida una variable */
let nombre = "Gonzalo";
/* Inicializada una variable (no definida)*/
let apellido;
/* Definida una variable preinicializada */
apellido = "Arias";
/* usado el + como concatenador */
console.log(nombre + " " + apellido);


/* prompt se usa para entradas */
let color = prompt("¿Cuál es tu color favorito?");
console.log("Tu color favorito es " + color);

const anioActual = new Date().getFullYear();
let anioNac = prompt("¿En qué año naciste?");
anioNac = parseInt(anioNac)
let edad = anioActual - anioNac;
let altura = prompt("¿Cuáno medis?")
altura = parseFloat(altura)

console.log("Hola " + nombre + " " + apellido + " tu edad es " + edad + " años y naciste en " + anioNac + " y medis " + altura + " metros, que son " + (2 - altura) + " metros menor a 2 metros");

