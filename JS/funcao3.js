function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('morango', 'hortelã')

console.log(copo)



//function scope
let subject

function createThink(subject) {
    return subject
}

console.log(createThink(subject))
