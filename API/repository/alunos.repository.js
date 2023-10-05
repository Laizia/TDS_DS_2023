const conn = require("../myslq.knex");

module.exports = {
    buscaTodos: async ()=>{
        return await conn.select().from("alunos");
        //SELECT * FROM alunos
    }, 

    buscaAlunosPorId: async (id)=>{
        return await conn.select().from("alunos").where({ id: id });
        //SELECT * FROM alunos WHERE id =1;
    },

    inserir: async (data)=>{
        return await conn.insert(data).into("alunos");
        //
    },

    atualizar: async (id, data)=>{

    },

    deletar: async ()=>{

    }
};
