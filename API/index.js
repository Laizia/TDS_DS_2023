const express = require('express');

const app = new express();

app.get("/alunos", (request, response)=>{
    response.send("Alunos");
});

app.get("/professores", (request, response)=>{
    response.send("professores");
});

app.get("/soma", (request, response)=>{
    var valor1 = 10;
    var valor2 = 20;
   
    var resultado = valor1 + valor2;

    response.send(`o resultado é: ${resultado}`);
    
});

app.post("/soma_parametros", (request, response)=> {
    const valor1 = request.body.valor1;
    const valor2 = request.body.valor2;

    const resultado = valor1 + valor2;

    response.send(`O resultado da soma dos parâmetros é: ${resultado}`)
});


app.listen(8080, () =>
        console.log("O servidor esta rodando na porta 8080!👍 ")
);