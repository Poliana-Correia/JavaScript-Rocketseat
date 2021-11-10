// Operador Condicional (Ternário)

//Dependendo da condição nos receberemos valores diferentes

//condição então valor 1 se não valor
// condition ? value1 : value2

// exemplos:
//cafe da manha top
let pao = false
let queijo = false

const niceBreakFast = pao || queijo ? 'Café top!' : 'Café ruim.'

console.log(niceBreakFast)

// maior de 18
let age = 22
const canDrive = age >= 18 ? 'Can drive!' : "Can't drive."
console.log(canDrive)