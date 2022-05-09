function leerEnteroEntre(mensaje, min, max){
    let entero = parseInt(prompt("Ingrese un" +mensaje));
    while (entero<min || entero>max){
        entero = parseInt(prompt("Error. Ingrese un" +mensaje));
    }
    return entero;
}

function esPar(num){
    return num % 2 == 0;
}

function saludar(nombre){
    console.log("Hola "+ nombre);
}

function mostrarSaltoLinea (){
    console.log("\n") //imprime un salto de linea
}

function anioActual() {
    return new Date().getFullYear();
}


