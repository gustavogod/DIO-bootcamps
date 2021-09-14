// rest operator -> ...

function sum(...args) {
    // Assim, args recebe um array de argumentos
    // O elemento arguments é um objeto
    // já com o rest operator os argumentos podem ser manipulados como array
    return args.reduce((total, value) => total += value, 0);
    // return args.reduce((total, value) => total + value, 0); -> também funciona
}

// Em Arrow functions, não dá p acessar os argumentos pelo arguments, mas da p acessar com o rest operator

// rest operator também dá p usar p pegar argumentos restantes da função, além dos explicitamente declarados
const sum2 = (a, b, ...rest) => {
    console.log(a, b, rest); //rest armazena apenas os restantes, deixando de fora os declarados explicitamente
};

const multiply = (...args) => args.reduce((total, value) => total * value, 1);

console.log(sum(2, 2, 3, 5, 1));
sum2(2, 3, 1, 1, 1);
console.log(multiply(multiply(2, 3)));

// SPREAD OPERATOR
// separa os items de uma lista
// pode ser usado para strings, arrays, literal objects e objetos iteráveis
// pode ser usado para passar uma lista de argumentos para uma função por exemplo
// pode ser usado para definir um obj e usar a lista de elementos de outro objeto
/* muito usado para gerar clones de outros objetos, pois assim, 
o clone não possui a mesma referência do objeto clonado
-> é uma shadowReference
*/

const str = 'Digital Inovation One';
const arr = [1, 2, 3, 4];

function logArgs(...args) {
    console.log(args);
}

logArgs(...str); // spread operator ...
console.log(sum(...arr)); // spread operator ... , passa cada item do array como argumento p função

// spread pode ser usado para construir arrays
const arr2 = [...arr, 5, 6, 7]; // assim não precisa usar o concat para concatenar os arrays

const arrClone = [...arr2]; // é o mesmo que fazer arrClone = arr2;

// definir um obj e usar a lista de propriedades de outro objeto
const obj = {
    test: 1,
    test2: 2
};

const obj2 = {
    ...obj,
    test3: 3,
    test2: 10 // dá p sobrescerver propriedades, então a ordem de uso do spread importa
};

/* objetos literais não são objetos iteráveis, 
então não dá para usar o spread de um objeto literal em um objeto iterável, e vice versa
ex: const arr = [...obj];  -> não pode
*/

// SHADOW REFERENCE
const objEx = {
    test: 123,
    subObj: {
        test: 123
    }
};

const objEx2 = { ...objEx };

objEx2.subObj.test = 456; // isso altera o sub-objeto de objEx também, então deve ser usado com cuidado
// desta forma, o spread mantém a mesma referência para sub-objetos
// isso acontece devido ao shadow clone

//para resolver isso, basta fazer um spread dos sub-objetos também
const objEx3 = {...objEx, subObj: { ...objEx.subObj } };
objEx3.subObj.test = 999;

console.log(objEx.subObj.test);
console.log(objEx3.subObj.test);