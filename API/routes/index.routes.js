const express = require("express");
const alunosRoutes = require("./alunos.route");
const professoresRoutes = require("./professores.route");
const somaRoutes = require("./soma.route");

const routes = express.Router();

routes.use("/alunos", alunosRoutes);

routes.use("/professores", professoresRoutes);

routes.use("/soma", somaRoutes);

module.exports = routes;

