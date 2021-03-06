"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo("Jão").length);
console.log(echo("24").lenght); // Underfined
console.log(echo({ nome: "Jão", idade: 24 }));
// Usando Generics
function echoMelhor(objeto) {
    return objeto;
}
console.log(echoMelhor("Jão").length);
console.log(echoMelhor(24));
console.log(echoMelhor({ nome: "Jão", idade: 24 }));
// Generics disponiveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5')
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach(elementp => console.log(elementp));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(["1", "2", "3", "Bia"]);
imprimir([
    { nome: "Fulano", idade: 21 },
    { nome: "Cicrano", idade: 26 }
]);
// Tipo Genérico
const chamarEcho = echoMelhor;
console.log(chamarEcho("Alguma Coisa"));
// Classe com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
/* console.log(new OperacaoBinaria('Bom ', 'dia').executar())
console.log(new OperacaoBinaria(3, 7).executar())
console.log(new OperacaoBinaria(3, 'Opa').executar())
console.log(new OperacaoBinaria({}, {}).executar()) */
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(30, 434).executar());
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
//const d1 = new Data(1, 2, 2020)
//const d2 = new Data(5, 2, 2020)
//console.log(new DiferencaEntreDatas(d1, d2).executar())
// Desafio Classe Fila
// Atributo: fila(Array)
// Métodos: entrar, proximo, imprimir
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length >= 0) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        } /*  else {
            return null;
        } */
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila("Gui", "Pedro", "Ana", "Lu");
//fila.imprimir();
//fila.entrar("Rafael");
//fila.imprimir();
//fila.proximo();
//fila.imprimir();
//fila.proximo();
//fila.imprimir();
//const novaFila = new Fila<number>(1, 2, 3)
//console.log(novaFila);
// Desafio Mapa
// Array de objetos (chave/valor) -> itens
// Metodos: obter(chave), colocar({c, v})
// limpar(), imprimir()
/* type Par<C, V> = { chave: C, valor: V }

class Mapa<C, V> {
    itens: Array<Par<C, V>> new Array<Par<C, V>>()
    
    obter(chave: C): Par<C, V> | null{
    
        const resultado = this.itens.filter(i => i.chave === chave)
        
        return resultado ? resultado[0] : null
    }
        
    colocar(par: Par<C, V>) {
        const encontrado = this.obter(par.chave)

        if(encontrado) {
            encontrado.valor = par.valor
        } else {
            this.itens.push(par)
        }
    }
        
        limpar(){
            this.itens = new Array<Par<C, V>>()
    }
        
    imprimir(){
        console.log(this.itens)
    }
} */
//# sourceMappingURL=generics.js.map