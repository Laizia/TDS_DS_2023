const conn = require('../mysql.knex')

module.exports = {
    listaTodos: async()=>{
        return await conn.select().from('atribuicao');
    },

    listaPorID: async()=>{
        return await conn.select().from('atribuicao').where({id:id});
    },

    inserir: async()=>{
        return await conn.insert(data).into('atribuicao');
    },

    atualizar: async()=>{
        return await conn('atribuicao').update(data).where({id:id});
    },

    deletar: async()=>{
        return await conn('atribuicao').where({id:id}).del();
    }
}