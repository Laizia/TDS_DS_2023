const express = require('express');
const usuarioRoute = require("./usuario.route");

const routes = express.Router();

routes.use("/usuario", usuarioRoute);

module.exports = routes;