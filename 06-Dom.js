let areaNombre =document.getElementById("nombre")

function validar () {
    if (areaNombre.value.length < 50) {
    console.log("El texto mide menos de 50 caracteres");
    } else {
    console.log("El texto mide más de 50 caracteres");
    }
}
//No funciona y no se por que