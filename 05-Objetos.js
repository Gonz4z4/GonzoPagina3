let v1 = "Gonzo"
let v2 = 50;
let v3 = 3.14;
let v4 = false;
let v5 = {
    nombre: "Gonzo",
    apellido: "Arias",
    anoNac: 2001,
    tieneHijos: false,
    domicilio: {
        calle:"Calle falsa",
        altura: 123,
        barrio:"Villa buen código",
        comoCadena: function() {
            return this.calle + " " + this.altura + " en " + this.barrio
        }
    },
    nombreCompleto: function(){
        return this.nombre + " " +this.apellido // this sirve para hacer referencia a este objeto
    },
    edad: function() {
        return anioActual() - this.anoNac;
    },
    presentarse: function() {
        console.log("Hola, soy " + this.nombreCompleto() + " y tengo " + this.edad() + " años y vivo en " +this.domicilio.comoCadena() )
    }
};
/*
console.log (typeof v1);
console.log (typeof v2);
console.log (typeof v3);
console.log (typeof v4);
console.log (typeof v5);
*/
console.log (v5.nombre+" "+ v5.apellido);
console.log (v5.nombreCompleto())
console.log (v5.edad())
v5.presentarse()

let gonzo= {
    nombre: "Gonzalo",
    apellido: "Arias",
    sexo: true,
    anioNac: 2001,
    hijos: false,
    habilidades:{
        tetris: true,
        programacion: false,
        otrasCosas: "Quiza"
    }
}