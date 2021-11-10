// if .... Else

//basico
let temperature = 36

if(temperature >= 37) {
    console.log('Febre')
} else {
    console.log('Sem febre')
}


// mais de uma condição
let temperatura = 37.4

if(temperatura >= 37.5) {
    console.log('Febre alta')
} else if(temperatura < 37.5 && temperatura >= 37) {
    console.log('Febre moderada')
} else {
    console.log('Sem febre')
}
