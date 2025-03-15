function encontrarMasRepetido(array) {
    let contador = {};
  

    for (let i = 0; i < array.length; i++) {
      let num = array[i];
      if (contador[num]) {
        contador[num] += 1; 
      } else {
        contador[num] = 1; 
      }
    }
  
    
    let maxRepeticiones = 0;
    let numeroMasRepetido = null;
  
    for (let num in contador) {
      if (contador[num] > maxRepeticiones) {
        maxRepeticiones = contador[num];
        numeroMasRepetido = num;
      }
    }
  
    return numeroMasRepetido;
  }
  

  let numeros = [0, 33, 2, 99, 5, 0, 7, 99, 5, 99, 3];
  let numeroMasRepetido = encontrarMasRepetido(numeros);
  
  console.log("El número que más se repite es:", numeroMasRepetido);
  