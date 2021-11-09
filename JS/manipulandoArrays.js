// MANIPULANDO ARRAYS

// Contar elementos de um Array

    //ex simplificado
console.log(["a", "b", "c"].length)

    //exemplo complexo
console.log([
    "a",
    {type: "array"},
    function() { return "oi"},
][2]())


//Transformar uma cadeia de caracteres em elementos de um Array
let word = "Trasformação"
console.log(Array.from(word))



