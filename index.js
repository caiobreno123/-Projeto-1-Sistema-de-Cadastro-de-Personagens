const Personagem = require('./class/Personagem.js')

const personagem1 = new Personagem('pruprupatapin', 'Guerreiro', 120)
const personagem2 = new Personagem('loro jose', 'Mago', 70)
const personagem3 = new Personagem('davinst', 'Arqueiro', 95)

console.log("==================")
personagem1.mostrarInfo()
console.log("==================")
personagem1.atacar()
console.log("==================")
personagem2.mostrarInfo()
console.log("==================")
personagem2.atacar()
console.log("==================")
personagem3.mostrarInfo()
console.log("==================")

personagem3.atacar()
