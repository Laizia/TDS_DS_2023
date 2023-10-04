const conn = require("../myslq.knex");

module.exports = {
    buscaTodos: async ()=>{
        return await conn.select().from("alunos");
    }
};