/*
      Desafio 6 do Módulo de Introdução a WEB
      Curso : Launch Base da Rocktseat 🤩

      Detalhes : Usuário e tecnologias - busca

*/

let usuarios = [

  { nome : "Marcos" , tecnologias : ["HTML" , "CSS"] },
  { nome : "Mayk" , tecnologias : ["Javacript" , "CSS"] },
  { nome : "Diego" , tecnologias : ["CSS" , "Node.js"] }

];


function checaSeUsuarioUsaCSS(techs) {

   for(let i = 0; i < techs.length; i++){

    if(techs[i] === "CSS"){
     
      return true;

    }

  }

  return false;

}

for (let i = 0; i < usuarios.length; i++) {

  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i].tecnologias);
  
  if (usuarioTrabalhaComCSS) {

    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    
  }
}