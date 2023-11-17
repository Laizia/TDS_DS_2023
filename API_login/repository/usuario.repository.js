const conn = require('../mysql.knex');

module.exports = {
    listaUsuarios: async() =>{
        return await conn.select().from("usuario");
        //SELECT FROM * USUARIO;
    },

    buscaUsuarioPorID: async(id) =>{
        return await conn.select().from("usuario").where({id:id});
        //SELECT * FROM USUARIO WHERE ID = ID;
    },

    inserir: async(data) =>{
        return await conn.insert(data).into("usuario");
    },

    atualizar: async(id, data)=>{
        return await conn("usuario").update(data).where({id:id});
    },
 
    deletar: async(id)=>{
        return await conn("usuario").where({id:id}).del();
    },
    
    loginUsuario: async(user_name, senha)=>{
        return await conn.select().from("usuario").where({user_name:user_name, senha:senha});
    }
}