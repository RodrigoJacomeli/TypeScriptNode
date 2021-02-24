//Exercicio 1 - Class

class Moto {
    public velocidade: number = 0

    constructor(public nome: string) {
        
    }

    buzinar() {
        console.log("Toooooooot!")
    }

    acelerar(delta: number) {
        this.velocidade = this.velocidade + delta
    }
}

const moto = new Moto('Ducati')
moto.buzinar
console.log(moto.velocidade)
moto.acelerar(40)
console.log(moto.velocidade)


//Exercicio 2 - Herança

abstract class Objeto2D {

    constructor(public base: number = 0, public altura: number = 0) {

    }

    abstract area():number
}

class Retangulo extends Objeto2D {
    area(): number {
        return this.base * this.altura    
    }
}

const retangulo = new Retangulo(5, 7)
retangulo.base = 5
//retangulo.altura = 7
console.log(retangulo.area())



//Exercicio 3 - Getters & Setters
class Estagiario {
    private _primeiroNome: string = ''

    get primeiroNome() {
        return this._primeiroNome
    }

    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    }
}

const estagiario = new Estagiario
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Ro'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Rodrigo'
console.log(estagiario.primeiroNome)
