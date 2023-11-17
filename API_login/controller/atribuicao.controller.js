const {listarTodos, insert, update, delet} = require('../repository/atribuicao.repository');

module.exports = {
    buscaTodos: (require, response)=>{

        listarTodos().then((data)=>{
            response.send(data);
        }).catch((error)=>{
            response.status(404).send({message: "Erro ao consultar tabela"});
        })
    },

    insert: (require, response)=>{
        const data = {atribuicao} = require.body;
        var status = {status} = new Boolean;

        insert(data).then((data)=>{
            response.status(200).send({message: "Registro inserido"});
        }).catch((errror)=>{
            response.status(500).send({message: "nao foi posssivel inserir"});
        })
    },

    update: (require, response)=>{
        const {id} = require.params;
        const data = require.body;
   
        if (data.id){
            response.status(400).send({message: "Não deu para enviar enviar o parâmetro"});
        }
   
        update(id, data).then((data)=>{
            response.status(200).send({message: "Sucesso ao atualizar!"});
        }).catch((error)=>{
            console.log(error)
            response.status(200).send({message: "Erro ao atulizar"});
        })
    },

    delet: (require, response)=>{
        const {id} = require.params;

        delet(id).then((data)=>{
            response.status(200).send({message: "Sucesso ao executar função"});
        }).catch((error)=>{
            console.log(error)
            response.status(500).send({message: "Erro ao deletar"});
        })
    }


}