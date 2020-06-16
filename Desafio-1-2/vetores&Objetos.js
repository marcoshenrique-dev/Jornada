
const programadores = {

  nome : "Marcos Henrique Silveira Dias",
  
  idade : 14,

  tecnologias : [
    {
      nome : "C++" , especialidade : "Desktop"
    },
    {
      nome : "Python" , especialidade : "Data Science"
    },
    {
      nome : "JavaScript" , especialidade : "Web/Mobile"
    }
  ]

}

console.log(`O usuário ${programadores.nome} tem ${programadores.idade} e usa a tecnologia ${programadores.tecnologias[0].nome} com especialidade em ${programadores.tecnologias[0].especialidade}`);