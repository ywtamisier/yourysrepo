function fibonacciGenerator(howMany) {
    if (howMany === 0) {
      return console.log([]);
    }
    if (howMany === 1) {
      return console.log([0]);
  
    }
    if (howMany === 2) {
      return console.log([0, 1]);
   
    } else {
      var output = [0, 1];
      while (howMany > output.length) {
       let ultimovalor = output[output.length -1];
       let penultimovalor = output[output.length - 2];
       let soma = ultimovalor + penultimovalor;
        output.push(soma);
      }
      console.log(output);
    }
  }
  