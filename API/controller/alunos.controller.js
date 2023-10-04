const { response } = require("express");
const { buscaTodos, buscaAlunosPorId } = require("../repository/alunos.repository");
const res = require("express/lib/response");


module.exports = {
    listaAlunos:(request, response)=>{
        buscaTodos().then((data)=> {
            response.send(data);
        }).catch((error)=>{
            response.status(404).send({ message: "Error ao consultar aluno"})
        });
    
    }, 

    buscaAlunosPorId:(request, response)=>{
        const {id} = request.params;

        buscaAlunosPorId(id).then((data)=>{
            response.send(data);
        }).catch((error)=>{
            console.log(error);
            response.status(500).send({ message: "Erro ao consultar aluno por Id "})
        });
    //   response.send(request.params.id);
    }
}