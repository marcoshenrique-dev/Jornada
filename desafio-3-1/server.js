const express = require('express');

const server = express();
const nunjucks = require('nunjucks');

server.use(express.static('public'));

server.set("view engine" , "njk");

nunjucks.configure("views" , {

    express : server

});

server.get("/" , function (req,res) {

 return res.render("about");
    
});

server.get("/class" , function (req,res) {

  return res.render("class");
     
 });

 server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000 , function () {

    console.log("Servidor rodando!");
});