/*
let areaNombre =document.getElementById("nombre")

function validar () {
    if (areaNombre.value.length < 50) {
    console.log("El texto mide menos de 50 caracteres");
    } else {
    console.log("El texto mide más de 50 caracteres");
    }
}
*/
let elParrafo=document.getElementById("elParrafo")
let titulo=document.getElementById("titulo")
let inputNombre = document.querySelector("#fname")
let textoAnterior
let form=document.getElementById("form")
function handleClickInParagraph(evt){
    console.log("Llegamos a " + evt.target.id)
    textoAnterior= evt.target.innerHTML
    evt.target.innerHTML= "Estan sobre mi!"
}
function irse(evt){
    console.log("nosfuimos de " + evt.target.id)
    evt.target.innerHTML= textoAnterior
}
function handleChangeName(evt){
    console.log("Algo")
}
function handleForm(evt){
    //logica para enviado del form
    console.log("Formulario enviado")
    return false
}

elParrafo.onclick = handleClickInParagraph
elParrafo.onmouseover = handleClickInParagraph
elParrafo.onmouseleave = irse

titulo.onclick = handleClickInParagraph
titulo.onmouseover = handleClickInParagraph
titulo.onmouseleave = irse