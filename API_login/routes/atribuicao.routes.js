const express = require('express');
const {buscaTodos, listaPorID, insert, update, del} = require("../controller/atribuicao.controller");
const routes = new express.Router();

routes.get("/", buscaTodos);
routes.get("/(:id([0-9]+))", listaPorID);
routes.post("/", insert);
routes.put("/(:id([0-9]+))", update);
routes.delete("/(:id([0-9]+))", del);

module.exports = routes;