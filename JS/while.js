//while

let i = 0;
while(i < 10) {
    console.log(i)

    i++;
}

//for...of
let name = 'Poly'
let names = ['João', 'Lyan', 'Helena']

for(let name of names) {
    console.log(names)
}

//for ... in

let person = {
    nome: 'Poly',
    idade: 22,
    peso: 50
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}