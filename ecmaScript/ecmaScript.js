"use strict";
// let & const
let seraQuePode = "?"; // hoisting
//console.log(seraQuePode)
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar casaco!';
    console.log(acao);
}
const cpf = '123.456.000-99';
//cpf = '789.101.132-78'
//console.log(cpf)
var segredo = 'externo';
function revelar() {
    const segredo = 'interno';
    console.log(segredo);
}
revelar();
//console.log(segredo)
{
    {
        const def = 'def';
        console.log(def);
    }
}
for (let i = 0; i < 10; i++) {
    //console.log(i)
}
//console.log(i)
//Arrow Function
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => {
    return n1 - n2;
};
console.log(subtrair(2, 3));
const saudacao = () => console.log("Olá!");
saudacao();
const falarCom = (pessoa) => console.log(`Olá ${pessoa}`);
falarCom('Pia');
//this
/* function normalComThis() {
  console.log(this)
}
normalComThis()

const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' })
normalComThisEspecial()

// This???
console.log(this)
const arrowComThis = () => console.log(this)
arrowComThis()

const arrowComThisEspecial = arrowComThis.bind({ nome: 'Ana' })
arrowComThisEspecial() */
// Parâmetro Padrão
function contagemRefressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log('fim');
}
contagemRefressiva();
contagemRefressiva(3);
//Spread
const numbers = [69, 10, 99, -5, 1024, 2056];
console.log(Math.max(...numbers));
//Rest
const turmaA = ['João', 'Caio', 'Luan', 'Julia'];
const turmaB = ['Jessica', 'Julia B', 'Beatriz', ...turmaA];
console.log(turmaB);
function retornaArray(a, ...agr) {
    console.log(a);
    return agr;
}
const numeros = retornaArray(1, 2, 4, 6, 8, 16, ...numbers);
console.log(numeros);
//Rest & Spread (Tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...param) {
    console.log(Array.isArray(param));
    console.log(`2) ${param[0]} ${param[1]} ${param[2]}`);
}
tuplaParam2(...tupla);
//Destructuring (ARRAY)
const caracteristicas = ["Motor Zetec 1.8", 2020];
/* const motor = caracteristicas[0]
const ano = caracteristicas[1] */
const [motor, ano] = caracteristicas;
console.log(`Motor:${motor}, Ano:${ano}`);
//Destructuring (Objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 350,
    caracteristicas: {
        cor: 'Preto'
    }
};
const nomeItem = item.nome;
const precoItem = item.preco;
const { nome: n, preco: p, caracteristicas: { cor } } = item;
console.log(`${n}, ${p}, ${cor}`);
//TEMPLATE STRING
const usuarioId = 'SuporteCoder';
const notificacoes = '9';
//const BoasVindas = 'Boas Vindas ' + usuarioId + 'Notificações: ' + notificacoes
const BoasVindas = `Boas Vindas ${usuarioId}, Notificações: ${parseInt(notificacoes) > 5 ? '+5' : notificacoes}`;
console.log(BoasVindas);
//Desafios
//Exercicio_1
const dobro = (valor) => valor * 2;
//Exercicio_2
const dizerOla = function (nome = 'Pessoa') {
    console.log(`Olá, ${nome}`);
};
dizerOla();
dizerOla('Rodrigo');
//Exercicio_3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
//Exercicio_4
const array = [55, 20];
array.push(...nums);
console.log(array);
//Exercicio_5
const notas = [8.5, 6.3, 9.4];
const [notas1, notas2, notas3] = notas;
console.log(notas1, notas2, notas3);
//Exercio_6
const cientista = { primeiroNome: 'Will', expeciencia: 12 };
const { primeiroNome, expeciencia } = cientista;
console.log(primeiroNome, expeciencia);
//Promise
function esperar3s(callback) {
    setInterval(() => {
        callback('3s depois .... Callback');
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
function esperar3sPromise() {
    return new Promise((resolve) => {
        setInterval(() => {
            resolve('3s depois promise ...');
        }, 3000);
    });
}
esperar3sPromise()
    .then(dado => console.log(dado));
fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title))
    .catch(error => console.log('Catch !!!' + error));
//# sourceMappingURL=ecmaScript.js.map