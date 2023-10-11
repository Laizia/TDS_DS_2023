const { response } = require("express");
const { buscaTodos, buscaProfessoresPorId, inserir, atualizar, deletar } = require("../repository/professores.repository");
const res = require("express/lib/response");


module.exports = {
    buscaTodos:(request, response)=>{
        buscaTodos().then((data)=> {
            response.send(data);
        }).catch((error)=>{
            response.status(500).send({ message: "Error ao consultar todos os professores"})
        });
    
    }, 

    buscaProfessoresPorId:(request, response)=>{
        const {id} = request.params;

        buscaProfessoresPorId(id).then((data)=>{
            response.send(data);
        }).catch((error)=>{
            console.log(error);
            response.status(500).send({ message: "Erro ao consultar Professor por Id "})
        })
    },

    inserir: (request, response) =>{
        
        const data = {nome, idade, email }= request.body;

        inserir(data).then((data) =>{
            response.status(200).send({ message: "Professor inserirdo com sucesso", data});
        }).catch((error) =>{
            console.log(error)
            response.status(500).send({ message: "Erro ao inserir um novo Professor"});
        })
    },

    atualizar: (request, response) => {

        const { id } = request.params;
        const data = request.body;

        if (data.id) {
            response.status(400).send({ message: "Não é permitido enviar o campo ID" });
        }

        atualizar(id, data).then((data) => {
            response.send({ message: "Professor atualizado com sucesso" })
        }).catch((error) => {
            console.log(error);
            response.status(500).send({ message: "erro ao atualizar o Professor!" })
        })
    },

    deletar: (request, response) => {
        const { id } = request.params;

        deletar(id).then((data) => {
            response.send({ message: "Professor deletado com sucesso!" });
        }).catch((error) => {

            console.log(error);
            response.status(500).send({ message: "erro ao deletar o Professor!" })
        });
 }
}