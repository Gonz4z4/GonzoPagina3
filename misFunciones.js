function leerEnteroEntre(mensaje, min, max){
    let entero = parseInt(prompt("Ingrese un" +mensaje));
    while (entero<min || entero>max){
        entero = parseInt(prompt("Error. Ingrese un" +mensaje));
    }
    return entero;
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
function cantDivisores(num){
    let contDiv=0
    for (let i = 0; i <= num; i++) {
        if (num%i==0){
            contDiv++
            //console.log(num +" es divisible por "+i+"\n"+"Divisores hasta ahora: "+contDiv)
        }
    }
    //console.log("La cantidad de divisores totales es "+contDiv)
    return contDiv
}

//ej 8)
function esPrimo(num){
    let contDiv=cantDivisores(num)
    if (contDiv>2||contDiv<2) {
        //console.log (num+ " no es primo")
        return false
    } else{
        //console.log(num+" es primo")
        return true
    }
}
//funcion esPrimo pero no optimizada para extra facha
/*
function esPrimo(num){
    let contDiv=0
    for (let i = 0; i < num; i++) {
        if (num%i==0){
            contDiv++
            console.log(num +" es divisible por "+i+"\n"+"Divisores hasta ahora: "+contDiv)
        }
    }
    if (contDiv>1||contDiv<1) {
        console.log (num+ " no es primo")
    } else{
        console.log(num+" es primo")
    }
}
*/
//ej 9)
function mostrarNPrimos(num){
    let contPrimos = 0
    let i=0
    do {if (esPrimo(i)== true){
            console.log(i)
            contPrimos++
        }
        i++
    } while (contPrimos<num)
}

//ej 10)   
function esNumeroPerfecto(num){
    let sum=0
    for (let i = 0; i < num; i++) {
        if(num%i==0){
            sum=sum+i
        }
    }
    if (sum==num){
        console.log(num+" es un número perfecto")
    } else{
        console.log(num+" no es un número perfecto")
    }
}

function edadJub(sexoFoM, edad){
    sexoFoM=sexoFoM.toLowerCase()
    if (sexoFoM=="m"&&edad>=65) {
        rta="mJub"
    } else if (sexoFoM=="f"&&edad>=60){
        rta="fJub"
    } else{
        rta="noJub"
    }
}
