function multiply(a, b = 1) { // assim, não preciso fazer a validação especificada abaixo
    //b = typeof b === 'undefined' ? 1 : b;
    // se b não for informado na chamada da função, então atribui 1 como padrão
    //mas com o ES6 isso pode ser feito diretamente na definição dos argumentos
    return a * b;
}

function multiplyV2(a, b = a) { 
    /* também posso referenciar outros argumentos, mas o argumento referenciado não pode ser colocado 
    antes de sua declaração. Ex, não posso fazer (a = b, b)*/
    return a * b;
}

var multiply3 = (a, b = 1) => a * b;

console.log(multiply3(2, 3));