let canal: string = 'Gaveta'
let inscritos: number = 1200

//canal = inscritos
console.log(`Canal = ${canal}`)

//let nome = 'Pedro'


//Atrinuição Implicita
function soma(a: any, b: any) {
  return a + b
}

// Atribuição Any
let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'abc'


function saudar(isManha: boolean): string {
  let saudacao: string
  if (isManha) {
    saudacao = 'Bom dia'
  } else {
    saudacao = 'Seja Feliz !'
  }
  return saudacao
}