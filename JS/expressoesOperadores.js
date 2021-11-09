/* 
    new
    *criar um novo objeto
 */

let name = new String("Poly")
let age = new Number(22)
console.log(name, age)

let date = new Date('2021-11-09')
console.log(date)

/*
    Operadores unarios
    typeof
    delete
 */

    const person = {
        name: "Gabi",
        age: 15
    }
    delete person.age
    console.log(person)