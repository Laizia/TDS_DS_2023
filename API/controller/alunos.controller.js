const { buscaTodos } = require("../repository/alunos.repository")


module.exports = {
    listaAlunos:(request, response)=>{
        buscaTodos().then((data)=> {
            response.send(data);
        }).catch((error)=>{
            response.status(404).send({ message: "Error ao consultar aluno"})
        });
    
    }
}