const express = require("express");
const { listaProfessores, buscaProfessoresPorId, inserir, deletar, atualizar,} = require("../controller/professores.controller");
const { buscaTodos } = require("../repository/professores.repository");

const routes = new express.Router();

routes.get("/", listaProfessores);
routes.post("/", inserir);

routes.get("/", buscaTodos);

// routes.get("/atividades", (request, response)=>{
//     response.send("atividades");
// });

// routes.get("/notas", (request, response)=>{
//     response.send("notas");
// });

// routes.get("/material", (request, response)=>{
//     response.send("material");
// });

routes.put("/(:id([0-9]+))", atualizar);
routes.get("/(:id([0-9]+))", buscaProfessoresPorId);
routes.delete("/(:id([0-9]+))", deletar);

module.exports = routes;