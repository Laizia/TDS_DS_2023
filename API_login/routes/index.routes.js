const express = require('express');
const usuarioRoute = require("./usuario.route");
const atribuicaoRoute = require("./atribuicao.routes");


const routes = express.Router();

routes.use("/usuario", usuarioRoute);
routes.use("/atribuicao", atribuicaoRoute);


module.exports = routes;