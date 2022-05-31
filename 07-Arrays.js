const cars = ["Saab", "Volvo", "Bmw", "Ford"]
// index: 0 es Saab, 1 es Volvo, 2 es Bmw
/*
console.log(cars)
console.log(cars[0])
console.log(cars[1])
console.log(cars[2])
console.log(cars[3])
console.log(cars[-1])
*/
function recorrerArray(){
    for (let i = 0; i < cars.length; i++) {
        const element = cars[i];
        console.log(element)
    }
}

//cars.push sirve para agregar una nueva marca
//cars.pop sirve para sacar el ultimo elemento 

