const usuario = {id: 1,
    name: "Laizia Américo",
    user_name: "Lai",
    password: "123"
}

module.exports = {
    buscarUsuario: (request, response)=>{
        response.send(usuario);
    },
    login: (request, response)=>{
        const user_name = request.body.user_name;
        const password = request.body.password;
    
        if(user_name == usuario.user_name && password == usuario.password){
            response.send("Login correto!");
        }
        else{
            response.send("Login incorreto!")
        }
    }
}