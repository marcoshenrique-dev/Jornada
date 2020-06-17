/*
      Desafio 7 do Módulo de Introdução a WEB
      Curso : Launch Base da Rocktseat 🤩

      Detalhes : Soma de despesas e receitas

*/

const usuarios = [
  {
    nome: "Salvio",
    receitas: [10, 20, 30, 40],
    despesas: [10, 10, 10]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

function calculaSaldo(receitas , despesas) {

    const resultReceitas = somaNumeros(receitas);
    const resultDespesas = somaNumeros(despesas);

    return resultReceitas - resultDespesas;

}

function somaNumeros(numeros) {

  let soma = 0;
  
  for(let i = 0; i < numeros.length; i++){

      soma = soma + numeros[i];
  }

  return soma;
}

function exibiUsuarios(){

  for(let i = 0; i < usuarios.length; i++){

    console.log(calculaSaldo(usuarios[i].receitas , usuarios[i].despesas));
  }

}

exibiUsuarios();