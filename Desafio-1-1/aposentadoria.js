/*
      Desafio 2 do Módulo de Introdução a WEB
      Curso : Launch Base da Rocktseat 🤩

      Detalhes : Calculo de Aposentadoria

*/

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const soma = idade + contribuicao;

if(sexo === "F") {

    if(soma >= 85) console.log(`${nome}, você pode se aposentar`);
    else console.log(`${nome}, você ainda não pode se aposentar`);

}else if (sexo === "M"){

  if(soma >= 95) console.log(`${nome}, você pode se aposentar`);
  else console.log(`${nome}, você ainda não pode se aposentar`);
}