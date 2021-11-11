/* ## Sistema de gastos 

Crie um objeto que possuirá 2 propriedades, 
ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas 
e despesas e irá mostrar uma mensagem se a familia esta com
saldo positivo ou negativo, seguido do valor do saldo.
*/

let ContasDaCasa = {
    receitas: [3000, 6000, 650],
    despesas: [1002.30, 48, 890.75, 3045]
}

function soma(array) {
    let total = 0;

    for (let valor of array) {
        total += valor
    }
        
    return total
}

function calculoContas () {
    const calcularReceitas = soma(ContasDaCasa.receitas)
    const calcularDespesas = soma(ContasDaCasa.despesas)
    
    const total =  calcularReceitas - calcularDespesas

    const estaOk = total >= 0
    let mensagem = "negativo"

    if (estaOk) {
        mensagem = "positivo"
    } 
    
    console.log(`Seu saldo é ${mensagem}: R$ ${total}`)
    
}

calculoContas()

