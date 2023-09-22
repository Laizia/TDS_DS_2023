const express = require("express");
const routes = new express.Router();

routes.get("/", (request, response)=>{
    response.send("Professores");
});

routes.get("/atividades", (request, response)=>{
    response.send("atividades");
});

routes.get("/notas", (request, response)=>{
    response.send("notas");
});

routes.get("/material", (request, response)=>{
    response.send("material");
});

module.exports = routes;