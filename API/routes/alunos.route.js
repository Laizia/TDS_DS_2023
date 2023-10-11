const express = require("express");
const { listaAlunos, buscaAlunosPorId, inserir, deletar, atualizar } = require("../controller/alunos.controller");


const routes = new express.Router();

routes.get("/", listaAlunos);
routes.post("/", inserir);

// routes.get("/notas", (request, response)=>{
//     response.send("notas");
// });

// routes.get("/livros", (request, response)=>{
//     response.send("livros");
// });

// routes.get("/perfil", (request, response)=>{
//     response.send("perfil");
// });

routes.put("/(:id([0-9]+))", atualizar);
routes.get("/(:id([0-9]+))", buscaAlunosPorId);
routes.delete("/(:id([0-9]+))", deletar);

module.exports = routes;