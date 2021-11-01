let weight = 48
console.log(typeof weight)

let name = "Poly"
let age = 22
let stars = 1.2     // float (número quebrado)
let isSubscribed = true

let student = {
    name: "Poly",
    age: 22,
    stars: 1.2,    
    isSubscribed: true
}
console.log(student)
console.log(name + ' de idade', + age + ' pesa', weight + 'Kg.')

let students = []
/*reatribua valor para a variável acima, colocando dentro dela
o objeto student da questão. Não copiar e colar o objeto criado
e inserir ele no array.*/

students = [
    student
]

console.log(students)

// Coloque no console o valor da posição zero do array acima
console.log(students[0])

const joao = {
    name: "João",
    age: 24,
    stars: 1.3,    
    isSubscribed: false
}
students = [
    student,
    joao
]
console.log(students)
