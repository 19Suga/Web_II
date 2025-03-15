function contarParesImpares(array) {
    let resultado = { pares: 0, impares: 0 };
    
    array.forEach(num => {
      num % 2 === 0 ? resultado.pares++ : resultado.impares++;
    });
    
    return resultado;
  }
  
  console.log(contarParesImpares([7, 10, 3, 4, 5, 6,9]));