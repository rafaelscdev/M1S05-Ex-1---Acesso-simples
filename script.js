//const frutas = ["maça, laranja, uva", ];
//console.log(frutas[1])

const prompt = require('prompt-sync')()
const frutas = []

for(let i=0;i<3;i++){
    frutas.push(prompt("Digite o nome das frutas."))
}

console.log(frutas[1])
