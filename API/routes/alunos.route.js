const express = require("express");
const routes = new express.Router();

routes.get("/", (request, response)=>{
    response.send("Alunos");
});

routes.get("/notas", (request, response)=>{
    response.send("notas");
});

routes.get("/livros", (request, response)=>{
    response.send("livros");
});

routes.get("/perfil", (request, response)=>{
    response.send("perfil");
});

module.exports = routes;