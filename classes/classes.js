"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(24, 8, 1999);
//console.log(aniversario)
const casamento = new Data;
casamento.ano = 2001;
//console.log(casamento)
//Sintax simplificada
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(24, 8, 1999);
//console.log(aniversarioEsperto)
const casamentoEsperto = new DataEsperta;
casamentoEsperto.ano = 2001;
//console.log(casamentoEsperto)
//Desafio Classe Produto
//Atributos: nome, preco e desconto
//Criar o construtor
//Obs 1: Desconto é opcional (valor padrão 0)
//Obs 2: Criar dois produtos: passando dois e três params
//Criar método precoComDesconto
// Quais são os parâmetros e o retorno ?
// Alterar método resumo para mostrar o preço com desconto
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% Off!)`;
    }
}
const prod1 = new Produto("MousePad Logitech preto pequeno", 65.50);
prod1.desconto = 0.1;
console.log(prod1.resumo());
const prod2 = new Produto("Caderno Escolar", 18.80, 0.15);
console.log(prod2.resumo());
//Nivel de acesso
class Carro {
    constructor(marcar, modelo, velocidadeMaxima = 180) {
        this.marcar = marcar;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    freiar() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro("Ford", "Ka", 120);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(18).fill(0).forEach(() => carro1.freiar());
console.log(carro1.freiar());
// simular "Erros"
//carro1.velocidadeAtual = 300
//Herança
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
        //...
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    freiar() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 334);
console.log(`${f40.marcar} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.freiar());
//Get & Set
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
//Não altera pois tem validação
pessoa1.idade = -3;
console.log(pessoa1.idade);
//Atributor e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return this.Pi * raio * raio;
    }
}
Matematica.Pi = 3.1416;
/*
const m1 = new Matematica
console.log(m1.areaCirc(4)) */
console.log(Matematica.areaCirc(4));
// Class Abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
// Singleton
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
//const errado = new Unico()
console.log(Unico.getInstance().agora()); // Formato correto de chamar uma classe singleton
// ATRIBUTOS SOMENTE LEITURA
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('TU-114', 'PT-ACB');
/* turboHelice.modelo = 'DC-8'
turboHelice.prefixo = 'PT-DEF' */
console.log(turboHelice);
//# sourceMappingURL=classes.js.map