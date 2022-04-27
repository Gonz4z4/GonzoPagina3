/* Expresiones que al dar verdaderas repiten su lógica hasta ser falsas */

/* Comenzado el contador en 1:
let veces = 5;
let contador= 1;

while (contador <= veces) {
    console.log (contador +" hola mundo");
    contador = contador + 1
}
console.log ("Adiós")*/

/* Comenzando el contador en 0
let veces = 5;
let contador= 0;

while (contador < veces) {
    console.log (contador +" hola mundo");
    contador = contador + 1
}
console.log ("Adiós") */

/* contador++ es lo mismo que poner contador +1, además de darle una aplicación implícita (se va actualizando) */
/* Comenzando en 1 contador con for:
let veces = 5;
for (let contador = 1; contador <= veces; contador++) {
    console.log (contador +" hola mundo");
}
console.log ("Adiós") */
/* Comenzando en 0 contador con for:
let veces = 5;
for (let contador = 0; contador < veces; contador++) {
    console.log (contador +" hola mundo");
}
console.log ("Adiós")  */

/* el usuario ingresa 4 números, la computadora dice cuál fue el mayor?
ejemplo: ingresa 4753, el mayor fue 7 en la pos 2 */

/* Primer ingreso con el menor número existente en javascript 
let numero;
let maximo = (Number.MIN_SAFE_INTEGER); // el menor valor posible
for (let cont = 1; cont <= 4; cont++) {
    numero = parseInt (prompt("poné un número entero"));
    if (numero > maximo) {
        maximo = numero;
        posMaximo = cont
    }
}
console.log ("El maximo fue " + maximo + " en la posición " + posMaximo) */
/* Primer ingreso "especial" el contador en el loop empieza en 2 para tener el primer número entero afuera 
let numero;
let maximo = parseInt (prompt("poné un número entero"));
for (let cont = 2; cont <= 4; cont++) {
    numero = parseInt (prompt("poné un número entero"));
    if (numero > maximo) {
        maximo = numero;
        posMaximo = cont
    }
}
console.log ("El maximo fue " + maximo + " en la posición " + posMaximo) */

/*El usuario ingresa una edad entre 1 y 120

let edad = parseInt(prompt("Ingresá tu edad"));
    while (edad < 1 || edad > 120) {
        edad = parseInt(prompt("ERROR. Ingresa tu edad"));
    }
console.log ("la edad fue validada. Es: " + edad) */

/*El usuario ingresa un genero
let genero = prompt ("Ingresa tu género (M o F)").toUpperCase();

while (!(genero =="M" || genero == "F")) { //(genero != "M" || genero != "F") tambien puede ser !(genero =="M" || genero == "F")
    genero = prompt ("ERROR. Ingresa tu género (M o F)").toUpperCase();
}
console.log("El género fue validado, este es: " + genero) */

let genero;
do {
    genero = prompt ("Ingresa tu género (M o F)").toUpperCase();
} while (!(genero =="M" || genero == "F"));
console.log("El género fue validado, este es: " + genero)
