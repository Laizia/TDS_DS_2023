const { listaUsuarios, buscaUsuarioPorID, inserir, atualizar, deletar, loginUsuario } = require('../repository/usuario.repository')

module.exports = {
    buscarUsuario: (require, response)=>{

        listaUsuarios().then((data)=>{
            response.send(data);
        }).catch((error)=>{
            response.status(404).send({message: "Erro ao consultar usuarios!"});
        })
    },

    buscaUserID: (require, response)=>{
        const {id} = require.params;

        buscaUsuarioPorID(id).then((data)=>{
            response.send(data);
        }).catch((error)=>{
            response.status(500).send({message: "Erro ao executar atividade"});
        })
     },

     insert: (require, response)=>{
        const data = {nome, user_name, email} = require.body;

        inserir(data).then((data)=>{
            response.status(200).send({message: "Usuario inserido com sucesso!", data})
        }).catch((error)=>{
            response.status(500).send({message: "Erro ao inserir usuario!"})
        })
     },

     update: (require, response)=>{
        const {id} = require.params;
        const data = require.body;

        if (data.id){
            response.status(400).send({message: "Não é possível enviar o parâmetro ID!"});
        }   

        atualizar(id, data).then((data)=>{
            response.status(200).send({message: "Sucesso ao atualizar!"})
        }).catch((error)=>{
            response.status(500).send({message: "Erro ao atulizar"})
        })
     },

     del: (require, response)=>{
        const {id} = require.params;

        deletar(id).then((data)=>{
            response.status(200).send({message: "Sucesso ao deletar usuário!"})
        }).catch((error)=>{
            response.status(500).send({message: "nao foi possivel deletar o user"})
        })
     },

     login: async (require, response)=>{
        const {user_name, senha} = req.body

        const user = await loginUsuario();

        if(senha == usuario.senha){
            if(user_name == usuario.user_name){
                response.send({message: "Login realizado com sucesso!"})
            }
        }else{
            response.send({message: "Erro ao fazer login"});
        };
     },

     esqueceuSenha: async (require, response)=>{
        const {email} = require.body;

        const user = await conn.select().from("usuario").where({email:email});

        const chave = Math.floor(Math.random() * 100);

        await conn.insert(user.id, chave).into("recuparar_senha");
        
        response.send({chave});
     },
}