const express = require("express");
const alunosRoutes = require("./alunos.route");
const professoresRoutes = require("./professores.route");
const secretariaRoutes = require("./secretaria.route");

const routes = express.Router();

routes.use("/alunos", alunosRoutes);

routes.use("/professores", professoresRoutes);

routes.use("/secretaria", secretariaRoutes);

module.exports = routes;

