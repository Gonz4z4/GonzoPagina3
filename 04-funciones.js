/*
Para invocar a una funcion hay que colocar su nombre y los parentesis
La funcion puede o no retornar un valor
Ej
Let retorno = nombreFunc (args);

Para definirn una funcion:
    Function nombreFunc (param1, param2, paramN){
        //instrucciones
    }
*/

//funcion que no retorna y no recibe parametros
/*
function mostrarSaltoLinea (){
    console.log("\n") //imprime un salto de linea
}
console.log("probando");
mostrarSaltoLinea();
console.log("mi");
mostrarSaltoLinea();
console.log("funcion");
*/

//funcion que no retorna  y recibe un parametro
/*
function saludar(nombre){
    console.log("Hola "+ nombre);
}
mostrarSaltoLinea();
saludar();
mostrarSaltoLinea();
saludar("María");
mostrarSaltoLinea();
saludar("Carlos");
mostrarSaltoLinea();
saludar("Gonzalo");
*/

//funcion que retorna y no recibe parametros
/*
let unRandom=(Math.random());
console.log(unRandom.toFixed(1));
*/
//funcion que retorna y recibe un parametro

function leerEnteroEntre(mensaje, min, max){
    let entero = parseInt(prompt("Ingrese un" +mensaje));
    while (entero<min || entero>max){
        entero = parseInt(prompt("Error. Ingrese un" +mensaje));
    }
    return entero;
}
/*
let edad =leerEnteroEntre("a edad", 1, 120)
console.log("tu edad es "+edad)
let nota=leerEnteroEntre("a nota", 0, 10)
console.log ("tu nota es "+nota)
*/
function esPar(num){
    return num % 2 == 0;
}
let numero = leerEnteroEntre(" numero positivo", 1, 99999999999)
if(esPar(numero)){ // % sirve para saber cuanto es el resto
    console.log("El numero es par")
} else {
    console.log ("El numero es impar")
}
    console.log("Muchas gracias")
