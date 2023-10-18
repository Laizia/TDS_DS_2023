const conn = require("../myslq.knex");

module.exports = {
    buscaTodos: async () =>{
        return await conn.from("turmas").innerJoin("professor", "turmas.professores_id", "professores.id")

    }
}