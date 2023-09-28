const express = require("express");
const {soma, parametros} = require("../controller/soma.controller");

const routes = new express.Router;

routes.get("/", soma);

routes.post("/parametros", parametros );


module.exports = routes;