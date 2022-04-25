/*console.log("2 + 2");
console.log(2 + 2);
console.log(2>2);
console.log(3>2);
console.log(2>=2)
console.log(2!=3);
/* != es distinto, == es igual (en valores), === es igual (en contextos), <= es menor o igual y >= es mayor o igual */
/*let x = 2;
console.log (x==4)
console.log (x==="2")
console.log (x== "2")

const edadmin = 18
let edad = parseInt(prompt("tu edad?"));
if (edad>edadmin) {
    alert ("sos gay");
}
else {
    alert ("sali de aca");
}
console.log ("nos vemos");


/*Ejercicio */
/*let genero = prompt("tu genero? (f o m)")
if (genero.toUpperCase = "f") {
    if (edad >= 60)
        console.log ("esta en edad de jubilarse")
    else console.log ("no esta en edad de jubilarse")
}
else if (genero.toUpperCase = "m") {
    if (edad >=65) {
        console.log ("esta en edad de jubilarse")}
        else console.log ("no esta en edad de jubilarse")
}
else {
    console.log ("genero invalido") */

/* && es y, || es o, ! es no */
/*let edad = parseInt(prompt("tu edad?"));
let genero = prompt ("tu genero? (f o m)");
genero = genero.toUpperCase();

if ((genero == "M" && edad >= 65) || (genero == "F" && edad >=60)) {
    console.log ("esta en edad de jubilarse");
    } else {
        console.log("no esta en edad de jubilarse");
} 
/* para hacer un if en linea ? sirve como if y : sirve como else */

/*let digrom = prompt ("ingresa un digito romano (I, V, X, L, C, D, M)");
if (digrom == "I") {
    console.log (1)
}
if (digrom == "V") {
    console.log (5)
}  Es largo hacerlo sin switch*/

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
}