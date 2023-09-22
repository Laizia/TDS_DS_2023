const express = require("express");

const routes = new express.Router;

routes.get("/", (request, response)=>{
    var valor1 = 10;
    var valor2 = 20;
   
    var resultado = valor1 + valor2;

    response.send(`o resultado é: ${resultado}`);
    
});

routes.post("/parametros", (request, response)=> {
    console.log(request.body);
    const valor1 = request.body.valor1;
    const valor2 = request.body.valor2;

    const resultado = valor1 + valor2;

    response.send(`O resultado da soma dos parâmetros é: ${resultado}`)
});


module.exports = routes;