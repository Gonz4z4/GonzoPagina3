// ej 1)
/*
let nombre
nombre = prompt("ingresá tu nombre")
console.log("Bienvenide " + nombre) 
*/

// ej 2)

/*
let numero
numero = parseInt(prompt("Ingresá un número entero"))
console.log ("El opuesto de tu número es " + numero * -1)
console.log ("El opuesto de tu número es " + 1 / numero)
*/

// ej 3)
/*
let nota1; let nota2; let nota3; let notatot
nota1 = parseFloat(prompt("Ingresá tu PRIMER nota"))
nota2 = parseFloat(prompt("Ingresá tu SEGUNDA nota"))
nota3 = parseFloat(prompt("Ingresá tu TERCER nota"))
notatot= nota1 + nota2 + nota3 
console.log("tu promedio anual es " + notatot / 3) 
*/

// ej 4)
/*
let $hora; let canthoras; let sabado; let horsem
$hora = parseFloat(prompt("Ingresa tu salario por hora"))
canthoras = parseFloat(prompt("Ingresá tus horas diarias de trabajo"))
sabado = canthoras / 2
horsem = canthoras * 5 + sabado
console.log ("Tus horas trabajadas cada dia de semana son " + canthoras + " y los sábados trabajas " + sabado + " . Haciendo tu cantidad de horas semanales " + horsem + " y tu salario por hora es de $" + $hora)
console.log ("Tu sueldo semanal es de $" + horsem * $hora)
*/

//ej 5)
/*
let A; let B; let temp
A = prompt("Ingresá un valor para A")
B = prompt("Ingresá un valor para B")
temp = A
console.log("se muestran A y B " + A +" "+ B)
A = B
B= temp
console.log("se muestran A y B invertidos " + A +" "+ B)
*/

//ej 6)
/*
let valArt; let cantArt; let valAllArts; let suelTot
const sueldoFij = 14000
valArt = parseFloat(prompt ("Ingrese el valor del artículo"))
cantArt = parseInt(prompt("Ingrese la cantidad de articulos vendidos"))
valAllArts = valArt*cantArt*.16
suelTot=(valAllArts +sueldoFij).toFixed(3)

console.log("Con un sueldo fijo de $" + sueldoFij + " y " + cantArt + " artículos vendidos en el mes a $" + valArt + " cada uno, el sueldo total debe ser de $" + suelTot )
*/