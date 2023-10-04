const express = require("express");
const { listaAlunos, buscaAlunosPorId } = require("../controller/alunos.controller");


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

routes.get("/(:id)", buscaAlunosPorId);

module.exports = routes;