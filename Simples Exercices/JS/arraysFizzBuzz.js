// nomeDoArray.includes(variavel) - Vai verificar se o valor existe no array
//.push() - adiciona itens em um array. Sempre coloca no fim do array
//.pop - retira o ultimo número do array

var messageOutput = [];
var numeroInicial = 1;


function confereFizzBuzz (numero) {
  if((numero % 3 === 0) && (numero % 5 === 0)){
    return "FizzBuzz";
  }
  if(numero % 3 === 0) {
    return "Fizz";
  }
  if(numero % 5 === 0) {
    return "Buzz";
  }
  return numero;
}

function printFizzBuzz() {
  let completaArray = confereFizzBuzz(numeroInicial);
  messageOutput.push(completaArray);
  numeroInicial += 1;
  console.log(messageOutput);
}

for (let i=0; i<=100; i++){
  printFizzBuzz();
}