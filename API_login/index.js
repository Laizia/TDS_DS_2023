const express = require('express');
const bodyParser = require('body-parser');
const app = new express();

app.use(bodyParser.json());

const usuario = {id: 1,
                 name: "Laizia Américo",
                 user_name: "Lai",
                 password: "123"
}

app.get("/usuario", (request, response)=>{
response.send("usuario");
});

app.post("/login", (request, response)=>{
    const user_name = request.body.user_name;
    const password = request.body.password;

    if(user_name == usuario.user_name && password == usuario.password){
        response.send("Login correto!");
    }
    else{
        response.send("Login incorreto!")
    }
});

app.listen(8080, () =>
        console.log("O servidor esta rodando na porta 8080!👍 ")
);