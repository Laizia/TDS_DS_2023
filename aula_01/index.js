//variavel
var teste = 3;
teste = teste + "M";
console.log(typeof teste);


//if-else
var situacao = true;

if (situacao == true) {
    console.log("Você está ativo! 👍");
}

else{
    console.log("Você está inativo! 👎");
}


//laços
const lista = ["Otávio", "Otávio", "Otávio", "Otávio"];
const tamanhoLista = lista.length -1;
console.log("tamanho da lista: " + tamanhoLista);

for (var i= 0; i <= tamanhoLista; i++)  {
    console.log("Aluno: " + lista[i]);
}

console.log("-- - WHILE -- -");
var i2 = 0;
while (i2 <= tamanhoLista) {
    console.log("Aluno: " + lista[i2]);
    i2++;
}

console.log("-- - forEach -- -");
lista.forEach((value, index) => {
    console.log(index + " - " + value);
})


//SWITCH

console.log("-- - switch -- -");
const valorDeEntrada = 1;

switch (valorDeEntrada) {
    case 1:
        console.log("O valor é 1");
        break;

    case 2:
        console.log("O valor é 2");
        break;
        
    case 3:
        console.log("O valor é 3");
    default:
        console.log("Valor indefinido");
        break;
}


//object
console.log("-- - object - --");
const alunos = [
    {nome: "Laizia", idade: 17},
    {nome: "Otávio", idade: 16},
    {nome: "Lavinia", idade: 16},
    "Olá mundo!",
];

alunos.forEach((value) =>{
    if (typeof value == "object") {
    console.log(value.nome, value.idade);
    } else{
        console.log(value);
    }
});