/* ##Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C.

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que  60   - F

*/

let nome = 'Poliana Oliveira'
let nota = 98


if(nota >= 90) {
    console.log(nome + ' alcançou nota A.')
} else if(nota >= 80 && nota <= 89) {
    console.log(nome + ' alcançou nota B.')
}else if(nota >= 70 && nota <= 79) {
    console.log(nome + ' alcançou nota C.')
}else if(nota >= 60 && nota <= 69) {
    console.log(nome + ' alcançou nota D.')
}else if(nota < 60 && nota >= 0) {
    console.log(nome + ' alcançou nota F.')
}else {
    console.log('Nota inválida!')
}