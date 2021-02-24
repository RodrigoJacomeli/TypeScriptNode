// string
let nome: string = 'Rodrigo'
//console.log(nome)

//numbers
let idade: number = 21
//console.log(idade)

//boolean
let possuiHobbies: boolean = false
//possuiHobbies = 1
//console.log(possuiHobbies)

//Tipo Explícitos
let minhaIdade: number
minhaIdade = 21
//console.log(typeof minhaIdade)
//minhaIdade = 'Idade é 21'
//console.log(typeof minhaIdade)

//Array
let hobbies: any[] = ['Cozinhar', 'Series']
//console.log(hobbies[0])
//console.log(typeof hobbies)

hobbies = [100, 200, 300, 400]
//console.log(hobbies)

//Tuplas
let endereco: [string, number, string] = ['Av Principal', 99, 'Galpão']
//console.log(endereco)

endereco = ['Alameda dos Pintagois', 135, 'Casa']
//console.log(endereco)

//ENUMS
enum Cor {
  Cinza, //0
  Verde = 100, //era 1
  Azul = 2,  //se não definir o valor, seguirá a númeração 101
  Laranja,
  Amarelo,
  Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
//console.log(minhaCor)
//console.log(Cor.Cinza, Cor.Verde, Cor.Azul, Cor.Laranja, Cor.Amarelo, Cor.Vermelho)


//ANY
let carro: any = 'BMW'
//console.log(carro)

carro = { marca: 'BMW', ano: 2009 }
//console.log(carro)


//FUNÇÕES

function retornaMeuNome(): string {
  //return minhaIdade
  return nome
}

//console.log(retornaMeuNome())

function digaOi(): void {
  //console.log('Oi')
}

digaOi()


function multiplicar(NumA: number, NumB: number): number {
  return NumA * NumB
}

//console.log(multiplicar(2, 'Bia'))
//console.log(multiplicar(4.5, 10))


//tipo função
let calculo: (A: number, B: number) => number
//calculo = digaOi
//calculo()

calculo = multiplicar
//console.log(calculo(5, 6))

//Objeto
let usuario: { nome: string, idade: number } = {
  nome: 'Rodrigo',
  idade: 21
}
//console.log(usuario)

/*
usuario = {}

usuario = {
  name: 'Maria',
  age: 21
}
*/


//DESAFIO
/* Criar um objeto funcionário com:
      -Array de strings com os nomes dos supervisores
      - Função de bater ponto, que recebe a hora (número) e retorna uma string
        -> Ponto Normal <= 8
        -> Fora do horário > 8
*/

//Alias
type Funcionario = {
  supervisores: string[],
  baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
  supervisores: ['Ana', 'Fernando'],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto normal'
    } else {
      return 'Fora do horário!'
    }
  }
}

let funcionario2: Funcionario = {
  supervisores: ['Bia', 'Dudu'],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto normal'
    } else {
      return 'Fora do horário!'
    }
  }
}

//console.log(funcionario.supervisores)
//console.log(funcionario.baterPonto(7))
//console.log(funcionario.baterPonto(9))
//console.log(funcionario2.supervisores)
//console.log(funcionario2.baterPonto(7))
//console.log(funcionario2.baterPonto(9))


//Unio Types
let nota: number | string = 10
//console.log(`Minha nota é ${nota}!`)

nota = '8'
//console.log(`Minha nota é ${nota}!`)


// Checando Tipos
let valor = 30

//valor = false

if (typeof valor === "number") {
  console.log("É um number !")
} else {
  console.log(typeof valor)
}

//Type Never

function falha(msg: string): never{
  throw new Error(msg)
}

const produto = {
  nome: 'Sabão',
  preco: 10,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
        falha('Precisa ter um nome')
    }
    if (this.preco <= 0) {
      falha('Preço inválido!')
    }
  }
}

produto.validarProduto()

//Flag Strict Null Check
let altura = 12

//altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null


type Contato = {
  nome: string,
  tel1: string,
  tel2: null | string
}

const contato_1: Contato = {
  nome: 'Fulano 1',
  tel1: '9 88081199',
  tel2: null
}

let podeSerNulo = null
podeSerNulo = 12
podeSerNulo = 'abc'

//DESAFIO 2

type ContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
}

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: string[]
}

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor) {
    this.saldo += valor
  }
}

let correntista: Correntista = {
  nome: 'Rodrigo Jacomeli',
  contaBancaria: contaBancaria,
  contatos: ['9 97194925', '32125102']
}

correntista.contaBancaria.depositar(10000)
console.log(correntista)