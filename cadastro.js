class Personagem {
  constructor(nome, classe, vida) {
    this.nome = nome
    this.classe = classe
    let _vida = vida

    this.atacar = function() {
      console.log(`${this.nome} atacou!`)
    }

    this.mostrarInfo = function() {
      console.log(`Nome: ${this.nome}`)
      console.log(`Classe: ${this.classe}`)
      console.log(`Pontos de Vida: ${_vida}`)
    }

    this.getVida = function() {
      return _vida
    }

    this.setVida = function(novoValor) {
      if (novoValor < 0) {
        console.log("Pontos de vida não podem ser negativos!")
      } else {
        _vida = novoValor
      }
    }
  }
}

const guerreiro = new Personagem('Thor', 'Guerreiro', 100)
const mago = new Personagem('Gandalf', 'Mago', 80)
const arqueiro = new Personagem('Legolas', 'Arqueiro', 70)

guerreiro.atacar()
guerreiro.mostrarInfo()

mago.atacar()
mago.mostrarInfo()

arqueiro.atacar()
arqueiro.mostrarInfo()

guerreiro.vida = 50

guerreiro.setVida(50)
guerreiro.mostrarInfo()
