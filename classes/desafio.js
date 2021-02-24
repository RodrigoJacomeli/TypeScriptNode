"use strict";
//Exercicio 1 - Class
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        console.log("Toooooooot!");
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto('Ducati');
moto.buzinar;
console.log(moto.velocidade);
moto.acelerar(40);
console.log(moto.velocidade);
//Exercicio 2 - Herança
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo(5, 7);
retangulo.base = 5;
//retangulo.altura = 7
console.log(retangulo.area());
//Exercicio 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const estagiario = new Estagiario;
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Ro';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Rodrigo';
console.log(estagiario.primeiroNome);
//# sourceMappingURL=desafio.js.map