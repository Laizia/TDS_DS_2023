// variavel
let teste = 1;
teste = teste + "A";
console.log(typeof teste);

//if else
var situacao = true;

if ((situacao == true)) {
    console.log("Você está ativo!😊");
}
else{
    console.log("Você está inativo!🥹");
}

//laço

const lista = ["D", "L", "O", "D"];
const tamanhoLista = lista.length -1;
console.log("tamanho da lista:" + tamanhoLista);

for(var i = 0; i<= tamanhoLista; i++){
    console.log("Aluno: " + lista[i]);

}

console.log(" WHILE ");
var i2 = 0;
while (i2 <= tamanhoLista) {
    console.log("Aluno: " + lista[i2]);
    i2 ++;

}

console.log(" FOREACH ");
lista.forEach((value, index)=>{
    console.log(index + " - " + value);

});

//switch

const valorDeEntrada = 1:

switch (valorDeEntrada) {
    case 1:
        console.log("O valor é 1");
        break;
    case 2:
        console.log("O valor é 2");
        break;
    case 3:
        console.log("O valor é 3");
        break;
    default:
        console.log("O valor é indefinido");
        break;
}

//object

console.log("OBJECT");
const alunos = [ 
              { nome: "Laízia 1", idade: 17},
              { nome: "Laízia 2", idade: 17},
              { nome: "Laízia 3", idade: 17},
              { nome: "Laízia 4", idade: 17},
              "ola mundo",
];

alunos.forEach ((value) =>{
    if(typeof value == "object"){
    console.log(value.nome, value.idade); 
    }
    else{
        console.log(value);
    }
});
