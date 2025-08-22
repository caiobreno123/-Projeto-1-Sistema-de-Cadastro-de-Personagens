class Personagem {
    
    #vida
    constructor(nome, classe, vida) {
        this.nome = nome
        this.classe = classe
        this.#vida = vida
    }
    atacar() {
        switch (this.#classe) {
            case 'Guerreiro':
                console.log(`${this.nome} desferiu um golpe poderoso com sua espada!`)
                break
            case 'Mago':
                console.log(`${this.nome} lançou uma magia de fogo!`)
                break
            case 'Arqueiro':
                console.log(`${this.nome} atirou uma flecha precisa!`)
                break
            default:
                console.log(`${this.nome} atacou!`)
        }
    }
    mostrarInfo() {
        console.log(`📋 Nome: ${this.nome}`)
        console.log(`🏹 Classe: ${this.classe}`)
        console.log(`❤️ Vida: ${this.#vida}`)
    }
}


module.exports = Personagem
