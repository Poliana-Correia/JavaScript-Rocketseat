/*
    Type conversion (typecasting) VS Type coersion
    
    * Alteração de um tipo de dado para outro tipo
*/

console.log('9' + 5) 
//console.log('9' + '5') - conversão coersitiva (type coersion)

console.log(Number('9') + 5) 
//transformando manualmente uma string em number (typecasting)



// MANIPULANDO STRINGS E NÚMEROS

// Transformar strings em números e números em strings
let string = '123'
console.log(Number(string))

let number = 321
console.log(String(number))


// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = "paralelepipedo"
console.log(word.length)

let numbers = 123456
console.log(numbers.length) //number não recebe .length
console.log(String(numbers).length) //transformando um number em string para usar a propriedade length


//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula.
let numero = 345.2348
console.log(numero.toFixed(2).replace(".", ","))//podemos ter uma função atrelada a outra


