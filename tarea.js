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
/*
let num1; let num2; let num3; let numAlto
numAlto=parseInt(prompt("Ingrese un número"))
num2=parseInt(prompt("Ingrese el segundo número"))
num3=parseInt(prompt("Ingrese el tercer número"))

if (numAlto<num2){
    numAlto= num2
}
if (numAlto<num3){
    numAlto=num3
}
console.log("El numero más alto fue " + numAlto)
*/

//Ej 5)
/*
let edad; let genero;
edad= parseInt(prompt("Ingrese su edad"))
genero= prompt("Ingrese su género (M o F)")
genero=genero.toUpperCase() //NO OLVIDARSE LOS PARENTESIS EN EL TOUPPERCASE

while(edad<1|| edad>120){
    edad=parseInt(prompt("ERROR. Ingrese su edad"))
}
while (!(genero =="M" || genero == "F")){
    genero=prompt("ERROR. Ingrese su género (M o F)").toUpperCase()
}

if ((edad>=65 && genero=="M") || (edad>=60 && genero== "F")){
    console.log("Usted esta en edad de jubilarse")
} else {
    console.log("Usted NO esta en edad de jubilarse")
}
*/
//Ej 6)
/*
let edad; let sueldo; let aporte; let extra
edad= parseInt(prompt("Ingrese su edad"))
sueldo=parseInt(prompt("Ingrese su sueldo"))
if(sueldo<=20000){
    aporte=sueldo*0.7/100
}
if(20000<=sueldo && sueldo<30000){
    aporte=1.4/100*sueldo
}
if(30000<=sueldo && sueldo<=40000){
    aporte=sueldo*2.1/100
}
if(40000<sueldo){
    aporte=sueldo*2.8/100
}
if(edad<=30){
    aporte= 30/100*aporte+aporte //deberia dar 509,6
}
aporteFin=aporte.toFixed(2)
console.log ("Su aporte es de " + aporteFin)
*/

//ej 7)
/*
let num1; let num2; let num3
num1=parseInt(prompt("Ingrese el primer numero"))
num2=parseInt(prompt("Ingrese el segundo numero"))
num3=parseInt(prompt("Ingrese el tercer numero"))

if (num1<num2 && num2<num3){
        console.log (num1+" "+num2+" "+num3)
} 
if (num3<num2 && num2<num1){
    console.log (num3+" "+num2+" "+num1)
}
if (num1<num3 && num3<num2){
    console.log (num1+" "+num3+" "+num2)
}
if (num2<num1 && num1<num3){
    console.log (num2+" "+num1+" "+num3)
}
if (num2<num3 && num3<num1){
    console.log (num2+" "+num3+" "+num1)
}
if (num3<num1 && num1<num2){
    console.log (num3+" "+num1+" "+num2)
}
*/

//ej 8)
/*
let num1; let num2; let numMay; let numMin

num1=parseInt(prompt("Ingrese el primer numero"))
num2=parseInt(prompt("Ingrese el segundo numero"))

if (num1<num2){
    numMay= num2
    numMin=num1
} else {
    numMay=num1
    numMin=num2
}
if (numMay % numMin == 0) {
    console.log("El numero mayor es divisible por el menor.\nLa división entre el numero mayor y el menor es de " + numMay/numMin)
} else {
    console.log ("El numero mayor ingresado no es divisible por el menor.")
}
*/

//ej 9
/*
let a;let b;let c;
a=parseInt(prompt("Ingrese el primer lado"))
b=parseInt(prompt("Ingrese el segundo lado"))
c=parseInt(prompt("Ingrese el tercer lado"))

    //Triangulo válido:
if (a+b>=c && a+c>=b && c+b>=a) {
    console.log("El triángulo es posible")
} else {
    console.log ("El triángulo NO es posible")
}

    //Tipo de triángulo
if(a==b==c){
    console.log("Es equilátero")
} else if (a==b && c!=a&b || b==c && a!=c&b|| a==c && b!=c&a){
    console.log("Es isóceles")
} else {
    console.log("Es escaleno")
}
*/

//ej 10)
/*
let mes= parseInt(prompt("Ingrese el número del mes"))
switch(mes){
    case 1:
        mes= "enero"
        break;
    case 2:
        mes= "febrero"
        break;
    case 3:
        mes= "marzo"
        break;
    case 4:
        mes= "abril"
        break;
    case 5:
        mes= "mayo"
        break;
    case 6:
        mes= "junio"
        break;
    case 7:
        mes= "julio"
        console.log("Este mes es culpa de julio cesar")
        break;
    case 8:
        mes= "agosto"
        console.log("Este mes es culpa de julio cesar")
        break;
    case 9:
        mes= "septiembre"
        break;
    case 10:
        mes= "octubre"
        break;
    case 11:
        mes= "noviembre"
        break;
    case 12:
        mes= "diciembre"
        break;
    default:
        mes= "inexistente"
}
console.log("Ese mes es " + mes)
*/
// ej 11)
/*
let digrom = prompt ("ingresa un digito romano (I, V, X, L, C, D, M)");

switch(digrom) {
    case "I":
        console.log (1);
        break;
    case "V":
        console.log (5);
        break;
    case "X":
        console.log (10);
        break;
    case "L":
        console.log (50);
        break;
    case "C":
        console.log (100);
        break;
    case "D":
            console.log (500);
            break;
    case "M":
        console.log (1000)
        break;
    default:
        console.log ("eso no es un digito romano")
*/

//ej 12)
/*
let mes; let dia; let signo
dia = parseInt(prompt("Ingrese el número del día de su nacimiento"))
mes = parseInt(prompt("Ingrese el número del mes de su nacimiento"))
if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)){
        signo = "Capricornio"}
else if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2)){
        signo = "Acuario"}
if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)){
        signo = "Picis"}
if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)){
        signo = "Aries"}
if ((dia >= 21 && mes == 4) || (dia <= 20 && mes == 5)){
        signo = "Tauro"}
if ((dia >= 21 && mes == 5) || (dia <= 21 && mes == 6)){
        signo = "Geminis"}
if ((dia >= 22 && mes == 6) || (dia <= 22 && mes == 7)){
        signo = "Cancer"}
if ((dia >= 23 && mes == 7) || (dia <= 23 && mes == 8)){
        signo = "Leo"}
if ((dia >= 24 && mes == 8) || (dia <= 22 && mes == 9)){
        signo = "Virgo"}
if ((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)){
        signo = "Libra"}
if ((dia >= 23 && mes == 10) || (dia <= 22 && mes == 11)){
        signo = "Escorpio"}
if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)){
        signo = "Sagitario"}
console.log("Tu signo es "+ signo)
*/



// EJERCICIOS LOOPS
//ej 1)
/*
console.log("Números de 1 al 100")
for (let i = 1; i <= 100; i++) {
    const element = 100[i];
    console.log(i)
}
console.log("Números del 100 al 1")
for (let i = 100; i >= 1 ; i--) {
    const element = 1[i];
    console.log(i)
}
*/
//Ej 2) a)
/*
num1=parseInt(prompt("Ingrese el primer número"))
num2=parseInt(prompt("Ingrese el segundo número"))
while (num1>num2) {
    num1=parseInt(prompt("ERROR, el primer número debe ser menor al segundo. Ingrese el primer número"))
    num2=parseInt(prompt("Ingrese el segundo número"))
}
for (let i = num1; i <= num2; i++) {
    const element = num2[i];
    console.log(i)
}
*/

//Ej 2)b)
/*
num1=parseInt(prompt("Ingrese el primer número"))
num2=parseInt(prompt("Ingrese el segundo número"))
while (num1>num2) {
    num1=parseInt(prompt("ERROR, el primer número debe ser menor al segundo. Ingrese el primer número"))
    num2=parseInt(prompt("Ingrese el segundo número"))
}
for (let i = num1+1; i < num2; i++) {
    const element = num2[i];
    console.log(i)
}
*/

//ej 3)
/*
num=parseInt(prompt("Ingrese un número del 1 al 10"))
while (num<1||num>10) {
    num=parseInt(prompt("ERROR. Ingrese un número del 1 al 10"))
}
for (let cont = 1; cont <= 10; cont++) {
    const element = 10[cont];
    console.log(cont +" x "+ num +" = "+(num*cont))
}
*/

//ej 4)
/*
let a=1
let n=parseInt(prompt("Ingrese cuantos multiplos de 3 y no de 5 quiere ver"))

for (let cont = 1; a <= n;cont++) {
    const element = n[cont];
    let mult = cont*3
    if (mult % 5 !== 0) {
        console.log(mult)
        a++
    }
    
}
*/
// ej 5)
/*
let contMayoresImp=0
for (let i = 0; i < 5; i++) {
    const element = 5[i];
    let edad=parseInt(prompt("Ingrese una edad"))
    if(edad>18 && edad % 2 !== 0 ){
        contMayoresImp++
    }
}
console.log("La cantidad de mayores impares fue "+contMayoresImp)
*/

//ej 6)
/*
let cantVentas; let precio; let precioTot=0; let i = 1
cantVentas= parseInt(prompt("Ingrese la cantidad de ventas a ingresar"))
for (; i <= cantVentas; i++) {
    const element = cantVentas[i];
    precio=parseInt(prompt("Ingrese el precio de la venta "+ i))
    precioTot=precioTot+precio
    console.log("Venta " + i + " fue de $" + precio)
}console.log("Obtuvimos $"+precioTot+" en total")
*/

//ej 7)
/*
let cantJugadores; let estatura; let estaturaTot=0; let i = 1
cantJugadores= parseInt(prompt("Ingrese la cantidad de jugadores"))
for (; i <= cantJugadores; i++) {
    estatura=parseInt(prompt("Ingrese la estatura del jugador "+ i))
    estaturaTot=estaturaTot+estatura
    console.log("La estatura del jugador " + i + " es de " + estatura+"cm")
}
let estaturaProm=(estaturaTot/cantJugadores).toFixed(0)
console.log("La estatura promedio es de "+estaturaProm+"cm")
*/

// ej 8)
/*
let cant; let mayor;let pos
cant=parseInt(prompt("Ingrese la cantidad de numeros que quiere ingresar"))
mayor=(Number.MIN_SAFE_INTEGER)
for (let i = 1; i <= cant; i++) {
    let num=parseInt(prompt("Ingrese un número"))
    if (num>mayor) {
        mayor=num
        pos=i
    }
    console.log("El "+i+"er número fue " +num)
}
console.log("El mayor número fue "+mayor+ " en la posición "+pos)
*/

// ej 9)
/*
let num=parseInt(prompt("Ingrese el número del cual quiere conocer su factorial"))
let factorial=1
for (let i = 1; i <= num; i++) {
    factorial=factorial*i
}
console.log("El factorial de "+num+" es "+ factorial)
*/

//ej 10)
/*
let nota = parseInt(prompt("Ingrese una nota entre 0 y 10"))

while (nota<0 || nota >10) {
    nota = parseInt(prompt("ERROR. Ingrese una nota entre 0 y 10"))
}
console.log("Muchas gracias. Su nota es " +nota)
*/

//ej 11)
/*
let nota = parseInt(prompt("Ingrese una nota entre 0 y 10"))

while ( nota<2 || nota==3|| nota >10) {
    nota = parseInt(prompt("ERROR. Ingrese una nota entre 0 y 10 (recuerde que 1 y 3 no son notas válidas y el 0 le será asignado solo si estuvo ausente"))
}

console.log("Muchas gracias. Su nota es " +nota)
*/

//ej 12)
/*
let rta = prompt("Desea continuar? (S/N)").toUpperCase()
while(!(rta=="S"|| rta=="N")){
    rta = prompt("ERROR, ingrese solo las opciones asignadas. Desea continuar? (S/N)").toUpperCase()
}
console.log("muchas gracias, su respuesta fue "+rta)
*//*
let rta
do{
    rta = prompt("Desea continuar? (S/N)").toUpperCase()
}
while(!(rta=="S"|| rta=="N"))
console.log("muchas gracias, su respuesta fue "+rta)
*/
//ej 13)
/*
let max; let min; let num
max= (Number.MIN_SAFE_INTEGER)
min= (Number.MAX_SAFE_INTEGER)
do{
    num=parseInt(prompt("Ingrese tantos números como desee (para frenar presione 0"))
    if (num>max) {
        max=num
    }
    if(num<min){
        min=num
    }

}
while(num!=0)
console.log("El número maximo fue "+max+ " y el mínimo fue "+min)
*/

//ej 14)
/*
let nombre; let edad; let edadMin; let nombreJov
edadMin=(Number.MAX_SAFE_INTEGER)
do{
    nombre=prompt("Ingrese un Nombre")
    if(nombre!="*"){
        edad=parseInt(prompt("Ingrese la edad de "+nombre))
        if(edad<edadMin){
            edadMin=edad
            nombreJov=nombre
            console.log("nueva edad minima de "+nombreJov+"("+edadMin+")")
    }
    }
    
}
while(nombre!="*")
console.log("bolas")
console.log("La persona más joven fue "+nombreJov+" con "+edadMin+" años.")
*/

//ej 15)
/*
let promedio; let num; let i; let numTot
i=1
numTot=0
do {num=parseInt(prompt("Ingrese un numero"))
    numTot=numTot+num
    promedio=numTot/i
    console.log("i="+i+"\nnumTot="+numTot+"\npromedio="+promedio+"\nnum="+num)
    i++
} while (promedio<20);
*/

//ej 16)
/*
let rta; let parCnt; let num; let parPrc; let i
i=0
parCnt=0
do {i++
    num=parseInt(prompt("Ingrese un número"))
    if(num % 2 == 0){
        parCnt++
    }
    rta=prompt("Quiere seguir ingresando números? [S/N]").toUpperCase()
    while(!(rta=="S"||rta=="N")){
        rta=prompt("ERROR. Quiere seguir ingresando números? [S/N]").toUpperCase()
    }
} while (rta!=="N");
parPrc=(parCnt/i)*100
console.log("Se ingresaron "+i+" números, de los cuales "+parCnt+" fueron pares.\nEl porcentaje de pares fue "+parPrc+"%")
*/

//ej 17)
/*
let articulo; let precio; let total; let rta;let cantidad
total=0
do {articulo=prompt("Ingrese EL NOMBRE del artículo")
    precio=parseInt(prompt("Ingrese EL PRECIO del artículo"))
    cantidad=parseInt(prompt("Ingrese LA CANTIDAD del artículo"))
    total=total+(precio*cantidad)
    console.log(articulo+": "+(precio*cantidad)+" ("+precio+"xU) ("+cantidad+" unidades).")
    rta=prompt("Quiere seguir ingresando articulos? [S/N]").toUpperCase()
    while(!(rta=="S"||rta=="N")){
        rta=prompt("ERROR. Quiere seguir ingresando articulos? [S/N]").toUpperCase()
    }
} while (rta!=="N")
console.log("Total: "+total)
*/

//ej 18)
/*
let sueldoMes; let sueldoAño; let i
i=0
sueldoAño=0
do {i++
    sueldoMes=parseInt(prompt("Ingresá el sueldo para el mes "+i))
    sueldoAño=sueldoAño+sueldoMes
} while ((sueldoMes>=0)&&(i<12))

console.log("El sueldo anual es de "+sueldoAño)
*/

//ej 19)
/*
let user= "admin"
let pass= "123456"
let inputUser=prompt("Ingresá tu usuario")
let inputPass=prompt("Ingresá tu contraseña")
let i=2
if(user==inputUser&&pass==inputPass){
    console.log("Bienvenido")
} 
else{
    do{ inputUser=prompt("ERROR. Quedan "+i+" intentos. Ingresá tu usuario")
    inputPass=prompt("Ingresá tu contraseña")
    i--
    } while(inputUser!==user&&inputPass!==pass&&i>0)

    if(user==inputUser&&pass==inputPass){
    console.log("Bienvenido")
    } else {
    console.log("Vayase de aca sucio")
    }
}
*/

//TAREA DE FUNCIONES LETS GOOOO
//ej 1)

    function esPar(num){
        return num %2==0
    }


//ej 2)

    function resto (num, div){
        return num%div}


//ej 3)

    function imprimirSimbolo (caracter, veces){
        console.log (caracter.repeat(veces))}


//ej 4)
    function esVocal (letra){
        letra= letra.toLowerCase()
        if (letra.length>1)
            {console.log("Esa es más que una letra")}
            else if (letra == "a"||letra == "e"||letra == "i"||letra == "o"||letra == "u" ) {
            console.log("Es vocal")
            } else{
            console.log ("No es vocal")
            }
    }

//ej 5)
    function mostrarSucesion(num1, num2) {
        if(num1>num2){
            for (let i = num1; i >= num2; i--) {
                console.log(i)
            }
        } else if (num1<num2) {
            for (let i = num1; i <= num2; i++) {
                console.log(i)
        }
        } else {
            console.log(num1)
        } 
    }

//ej 6)
    //no era esta pero me salio divertida xd
    function esDivisible(num1, num2){
        if (num1%num2==0){
            console.log(num1 +" es divisible por "+num2)
        } else if(num2%num1==0){
            console.log(num1 +" no es divisible por "+num2 + ", pero "+num2+" si es divisible por "+num1)
        }
        else {
            console.log(num1 +" no es divisible por "+num2+" :(")
        }
    }
    //esta si
    function esMultiplo(num1, num2){
        if (num1%num2==0){
            console.log(num1 +" es multiplo de "+num2)
        } else if(num2%num1==0){
            console.log(num1 +" no es multiplo de "+num2 + ", pero "+num2+" si es multiplo de "+num1)
        }
        else {
            console.log(num1 +" no es multiplo de "+num2+" :(")
        }
    }

//ej 7)
    function cantDivisores(){
        
    }