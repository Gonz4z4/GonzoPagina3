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

// ej 7)
/*
let ancho; let largo; let valorM2; let valorTot; let perimetroX3
ancho = parseInt(prompt("Ingrese el ancho del terreno en metros:"))
largo = parseInt(prompt("Ingrese el largo del terreno en metros:"))
valorM2=parseInt(prompt("Ingrese el valor del terreno por metro cuadrado:"))
valorTot= ancho*largo*valorM2
perimetroX3= (largo+ancho)*6

console.log("El valor total son $" +valorTot)
console.log("La cantidad de metros de alambrado necesarios son "+ perimetroX3)
*/

// ej 8)
/*
let num1; let num2
num1= parseInt(prompt("Ingrese un número"))
num2= parseInt(prompt("Ingrese otro número"))
console.log(
    num1 + "+" + num2 + "=" + (num1+num2) +"\n"+
    num1 + "-" + num2 + "=" + (num1-num2) +"\n"+
    num1 + "/" + num2 + "=" + (num1/num2) +"\n"+
    num1 + "*" + num2 + "=" + (num1*num2)
)
*/

//ej 9)
/*
let num1; let num2; let numTot
num1= parseInt(prompt("Ingrese un número entero menor a 180"))
num2= parseInt(prompt("Ingrese otro número entero menor a 180"))
while (num1>180 || num2>180 || (num1+num2)>180) {
    num1=parseInt(prompt("ERROR. Ingrese un número entero menor a 180"))
    num2= parseInt(prompt("Ingrese otro número entero menor a 180"))
}
numTot= 180-num1-num2
console.log("El 3er ángulo debe ser de " + numTot+"º")
*/

//ej 10)
/*
let nomb1; let nomb2; let nomb3; let $1; let $2; let $3; let porc1; let porc2; let porc3; let valTot

nomb1= prompt("Ingrese el nombre del primer aportante")
$1= parseInt(prompt("Ingresa el monto del primer aportante"))
nomb2= prompt("Ingrese el nombre del segundo aportante")
$2= parseInt(prompt("Ingresa el monto del segundo aportante"))
nomb3= prompt("Ingrese el nombre del tercer aportante")
$3= parseInt(prompt("Ingresa el monto del tercer aportante"))
valTot=$1+$2+$3
porc1=(($1/valTot)*100).toFixed(2)
porc2=(($2/valTot)*100).toFixed(2)
porc3=(($3/valTot)*100).toFixed(2)
console.log (
    nomb1 + " aporta $" + $1 + "\n" +
    nomb2 + " aporta $" + $2 + "\n" +
    nomb3 + " aporta $" + $3 + "\n" +
    "El valor total es de $" + valTot + "\n" +
    nomb1 + " aportó un " + porc1 + "%" + "\n" +
    nomb2 + " aportó un " + porc2 + "%" + "\n" +
    nomb3 + " aportó un " + porc3 + "%"
)
*/
// CONDICIONALES
// Ej 1)
/*
let num
num = parseInt(prompt("Ingrese un número"))

if (num % 2 == 0){
    console.log("El número es par")
} else { 
    console.log ("El número es impar")
}
*/

//Ej 2)
/*
let cantInsc; let asientosFalt; let asientosDisp
cantInsc = parseInt(prompt("Ingrese la cantidad de inscriptos"))
asientosDisp = parseInt(prompt("Ingrese la cantidad de asientos disponibles"))
if (cantInsc<=asientosDisp){
    console.log ("Los asientos ("+ asientosDisp +") son suficientes para la cantidad de inscriptos (" +cantInsc +")")
} else {
    asientosFalt = cantInsc - asientosDisp
    console.log ("Los asientos disponibles (" +asientosDisp+ ") no son suficientes para la cantidad de inscriptos (" +cantInsc+ "). \nFaltan " +asientosFalt+ " asientos")
}
*/

//Ej 3)
/*
let num1; let num2
num1= parseInt(prompt("Ingrese un número"))
num2= parseInt(prompt("Ingrese otro número"))
if (num1<num2) {
    console.log ("El mayor es el segundo número ("+ num2+ ")")
} else {
    console.log ("El mayor es el primer número ("+ num1+ ")")
}
*/

//Ej 4)

let num1; let num2; let num3; let numAlto
num1=parseInt(prompt("Ingrese un número"))
num2=parseInt(prompt("Ingrese el segundo número"))
num3=parseInt(prompt("Ingrese el tercer número"))
numAlto= Number.MIN_SAFE_INTEGER

