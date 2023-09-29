const express = require("express");
const { listaAlunos } = require("../controller/alunos.controller");

const routes = new express.Router();

routes.get("/", listaAlunos);

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