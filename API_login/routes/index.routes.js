const express = require("express");
const loginRoutes = require("./usuario.route");

const routes = express.Router();

routes.use("/usuario", loginRoutes);


module.exports = routes;
