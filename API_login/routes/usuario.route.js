const express = require("express");
const {buscarUsuario, login} = require("../controller/usuario.controller");

const routes = new express.Router;


routes.get("/", buscarUsuario);
routes.post("/login", login);

module.exports = routes;