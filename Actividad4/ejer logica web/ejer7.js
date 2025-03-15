function sumarPropiedad(array, propiedad) {
    return array.reduce((suma, objeto) => suma + (objeto[propiedad] || 0), 0);
}

const objetos = [
    { valor: 9 },
    { valor: 15 },
    { valor: 12 },
    { otro: 5 }
];

console.log(sumarPropiedad(objetos, 'valor')); 