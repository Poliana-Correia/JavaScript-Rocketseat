/*
    Function constructor
    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const poli = new Person("Poli")
const joao = new Person("joão")
console.log(poli.walk())
console.log(joao.walk())
