// MANIPULANDO STRINGS E NÚMEROS

//Transformar letras minúsculas em maíusculas. Faça o contrário também.
let word = "Programar é muito bacana!!"
console.log(word.toUpperCase())

let text = "EU AMO PROGRAMAR!!!"
console.log(text.toLowerCase())


/* 
Separe um texto que contém espaços, em um novo array onde
cada texto é uma posição do array. Depois disso, transforme
o array em um texto e onde eram espaços, coloque _ 
*/

let phrase = "Eu sou estudande de programação!!"
let myArray = phrase.split(" ")
console.log(myArray)

let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
