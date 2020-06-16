/*
      Desafio 1 do Módulo de Introdução a WEB
      Curso : Launch Base da Rocktseat 🤩

      Detalhes : Calculo de IMC e nível de obesidade

*/

const nome = "Marcos"; // Constante do tipo String

const peso = 44; // Constante do Tipo number

const altura = 1.88; // Constante do Tipo Number

const imc = peso / (altura * altura); // Calculo do IMC

if( imc >= 30){ // se o imc for maior igual a 30

    console.log(`${nome}, você está acima do peso`);

}else if (imc < 29.9) { // senão se o imc for menor que 29.9

  console.log(`${nome}, você não está acima do peso`);
}


