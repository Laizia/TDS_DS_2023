const express = require('express');
const {buscarUsuario, buscaUserID, insert, update, del, login, esqueceuSenha, novaSenha} = require('../controller/usuario.controller');
const routes = new express.Router();


routes.get("/", buscarUsuario);
routes.get("/(:id([0-9]+))", buscaUserID);
routes.post("/", insert);
routes.put("/(:id([0-9]+))", update);
routes.delete("/(:id([0-9]+))", del);
routes.post("/", login);
routes.post("/", esqueceuSenha);
routes.post("/", novaSenha);

module.exports = routes;
