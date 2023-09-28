const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index.routes');


const app = new express();

app.use(bodyParser.json());

app.use(routes);


app.post("/soma_parametros", (request, response)=> {
    console.log(request.body);
    const valor1 = request.body.valor1;
    const valor2 = request.body.valor2;

    const resultado = valor1 + valor2;

    response.send(`O resultado da soma dos parâmetros é: ${resultado}`)
});

app.listen(8080, () =>
        console.log("O servidor esta rodando na porta 8080!👍 ")
);