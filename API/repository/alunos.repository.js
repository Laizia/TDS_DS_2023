const conn = require("../myslq.knex");

module.exports = {
    buscaTodos : ()=>{
        return conn.select().from("alunos");
    }
};