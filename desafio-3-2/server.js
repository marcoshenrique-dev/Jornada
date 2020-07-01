const express = require('express');

const server = express();
const nunjucks = require('nunjucks');
const videos = require("./data");

server.use(express.static('public'));

server.set("view engine" , "njk");

nunjucks.configure("views" , {

    express : server,
    autoscape : false

});

server.get("/" , function (req,res) {

    const data = {

        avatar_url : "/eu.jpeg",
        name : "Marcos Henrique",
        role : "Estudante na <a target='_blank' href='https://rocketseat.com.br'>Rockteseat</a>",
        description : "Programador full-stack focado em compartilhar conhecimento e aprender",
        links : [
            {name : "Github", url : "https://github.com/robotica-desafios"},
            {name : "Youtube", url : "https://www.youtube.com/channel/UC3ZaLCltfI-34EQaZmWFaeg?view_as=subscriber"},
            {name : "Linkedin", url : "https://www.linkedin.com/in/marcos-henrique-1692681a0/"},
        ],
    }

 return res.render("about" , { data });
    
});

server.get("/class" , function (req,res) {

  return res.render("class" , {items : videos});
     
 });

server.listen(5000 , function () {

    console.log("Servidor rodando!");
});