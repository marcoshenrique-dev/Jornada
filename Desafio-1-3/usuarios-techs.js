/*
      Desafio 5 do Módulo de Introdução a WEB
      Curso : Launch Base da Rocktseat 🤩

      Detalhes : Usuário e tecnologias

*/

let usuarios = [

   { nome : "Marcos" , tecnologias : ["HTML" , "CSS"] },
   { nome : "Mayk" , tecnologias : ["Javacript" , "CSS"] },
   { nome : "Diego" , tecnologias : ["React.js" , "Node.js"] }

];

 function verify (usuario) {

   for(let i = 0; i < usuario.length; i++){

     console.log(`${usuario[i].nome} trabalha com ${usuario[0].tecnologias} ,${usuario[1].tecnologias} `);
  }

 }

 verify(usuarios);