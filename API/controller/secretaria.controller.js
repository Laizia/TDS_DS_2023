const { buscaTodos } = require("../repository/secretaria.repositiry");

module.exports ={
  buscaTodos: (require, response) =>{
    buscaTodos().then((data) => {
        response.send(data);
    }).catch((error) =>{
        response.status(500).send({ message: "Erro"});
    })
  }
}