function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('morango', 'hortelã')

console.log(copo)



//function scope
let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)
