function operacoes(operacao)
{
   var resultado = document.getElementsByClassName('resultado')[0];
   var fnum = document.getElementById('1').value;
   var snum = document.getElementById('2').value;
   
   fnum = Number(fnum);
   snum = Number(snum);

   var resposta;

   if (operacao == '+'){
    resposta = fnum + snum;
   }

   if (operacao == '-'){
    resposta = fnum - snum;
   }
   
   if  ( operacao  ==  '*' ){
    resposta  =  fnum  *  snum ;
   }
   
   if  ( operacao  ==  '/' ){
    resposta =  fnum  /  snum ;
   }

   resultado.innerHTML = resposta
}