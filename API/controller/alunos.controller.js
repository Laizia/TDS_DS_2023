const { buscaTodos } = require("../repository/alunos.repository")


module.exports = {
    listaAlunos :(request, response)=>{
        const data = buscaTodos();
        console.log(data);
        response.send(data);

    }
}