const conn = require('../mysqk.knex');

module.exports = {
    listaUsuarios: async() =>{
        return await conn.select().from("usuario");
        //SELECT FROM * USUARIO;
    },

    buscaUsuarioPorID: async() =>{
        return await conn.select().from("usuario").where({id:id});
        //SELECT * FROM USUARIO WHERE ID = ID;
    },

    inserir: async() =>{
        return await conn.insert(data).into("usuario");
    },

    atualizar: async()=>{
        return await conn("usuario").update(data).where({id:id});
    },

    deletar: async()=>{
        return await conn("usuario").where({id:id}).del();
    }
}