const { atualizar } = require("../controller/professores.controller");
const conn = require("../myslq.knex");

module.exports = {

    buscaTodos: async ()=>{
        return await conn.select().from("professor");
        //SELECT * FROM professor
    }, 

    buscaProfessoresPorId: async (id)=>{
        return await conn.select().from("professor").where({ id: id });
        //SELECT * FROM professor WHERE id =1;
    },

    inserir: async (data)=>{
        return await conn.insert(data).into("professor");
        //INSERT INTO professor (id,nome,idade, email) values(null,"Guilherme Pires",25,"guilherme.pires@arcansistemas.com.br");
    },

    atualizar: async (id, data) => {
        return await conn("professor").update(data).where({ id: id });
        // UPDATE ALUNOS SET EMAIl="guilherme@gmail.com";
    },

    deletar: async (id) => {
        //DELETE FROM ALUNOS WHERE
        return await conn("professores").where({ id: id }).del();
    }
    
};
