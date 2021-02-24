"use strict";
// string
let nome = 'Rodrigo';
//console.log(nome)
//numbers
let idade = 21;
//console.log(idade)
//boolean
let possuiHobbies = false;
//possuiHobbies = 1
//console.log(possuiHobbies)
//Tipo Explícitos
let minhaIdade;
minhaIdade = 21;
//console.log(typeof minhaIdade)
//minhaIdade = 'Idade é 21'
//console.log(typeof minhaIdade)
//Array
let hobbies = ['Cozinhar', 'Series'];
//console.log(hobbies[0])
//console.log(typeof hobbies)
hobbies = [100, 200, 300, 400];
//console.log(hobbies)
//Tuplas
let endereco = ['Av Principal', 99, 'Galpão'];
//console.log(endereco)
endereco = ['Alameda dos Pintagois', 135, 'Casa'];
//console.log(endereco)
//ENUMS
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
//console.log(minhaCor)
//console.log(Cor.Cinza, Cor.Verde, Cor.Azul, Cor.Laranja, Cor.Amarelo, Cor.Vermelho)
//ANY
let carro = 'BMW';
//console.log(carro)
carro = { marca: 'BMW', ano: 2009 };
//console.log(carro)
//FUNÇÕES
function retornaMeuNome() {
    //return minhaIdade
    return nome;
}
//console.log(retornaMeuNome())
function digaOi() {
    //console.log('Oi')
}
digaOi();
function multiplicar(NumA, NumB) {
    return NumA * NumB;
}
//console.log(multiplicar(2, 'Bia'))
//console.log(multiplicar(4.5, 10))
//tipo função
let calculo;
//calculo = digaOi
//calculo()
calculo = multiplicar;
//console.log(calculo(5, 6))
//Objeto
let usuario = {
    nome: 'Rodrigo',
    idade: 21
};
let funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
let funcionario2 = {
    supervisores: ['Bia', 'Dudu'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
//console.log(funcionario.supervisores)
//console.log(funcionario.baterPonto(7))
//console.log(funcionario.baterPonto(9))
//console.log(funcionario2.supervisores)
//console.log(funcionario2.baterPonto(7))
//console.log(funcionario2.baterPonto(9))
//Unio Types
let nota = 10;
//console.log(`Minha nota é ${nota}!`)
nota = '8';
//console.log(`Minha nota é ${nota}!`)
// Checando Tipos
let valor = 30;
//valor = false
if (typeof valor === "number") {
    console.log("É um number !");
}
else {
    console.log(typeof valor);
}
//Type Never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 10,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
};
produto.validarProduto();
//Flag Strict Null Check
let altura = 12;
//altura = null
let alturaOpcional = 12;
alturaOpcional = null;
const contato_1 = {
    nome: 'Fulano 1',
    tel1: '9 88081199',
    tel2: null
};
let podeSerNulo = null;
podeSerNulo = 12;
podeSerNulo = 'abc';
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Rodrigo Jacomeli',
    contaBancaria: contaBancaria,
    contatos: ['9 97194925', '32125102']
};
correntista.contaBancaria.depositar(10000);
console.log(correntista);
//# sourceMappingURL=type.js.map