function esPrimo(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) { 
      if (num % i === 0) {
        return false; 
      }
    }
    return true;
  }
  
  function obtenerPrimos(array) {
    return array.filter(num => esPrimo(num)); 
  }
  
  let numeros = [19, 2, 5, 4, 3, 6, 7, 8, 9, 10, 11, 13, 17, 1, 20];
  let primos = obtenerPrimos(numeros);
  
  console.log("Números primos:", primos);
  