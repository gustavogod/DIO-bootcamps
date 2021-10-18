// FUNÇÕES ABORDADAS
/* forEach, map, flat, flatMap, keys, values, entries, find, findIndex, filter, indexOf
lastIndexOf, includes, some, every, sort, reverse, join, reduce
*/

const arr = [1, 2, 3, 4, 5];

// primeiro parâmetro é o valor, tanto faz o nome da variável
// segundo parâmetro é o index da posição, tanto faz o nome da variável
// terceiro parâmetro é o próprio array, tanto faz o nome da variável
arr.forEach((value, index, array) => {
    console.log(`${index}: ${value}`, array);
});

// ------------------------
// map
// também itera o array
// retorna um novo array, do mesmo tamanho, iterando cada item de um array
const arr2 = arr.map((value, index) => `${index} - ${value * 2}`);
console.log(arr2);

// -------------------------
// flat
/* Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva
de acordo com a profundidade especificada (depth)
*/
// Aplicável quando se tem arrays dentro de arrays
const arr3 = [1, 2, [3, 4, [10, 9, 8, 7]]];

// se não especificar a profundidade, por padrão ela é 1
console.log(arr3.flat());
console.log(arr3.flat(2));


//--------------------------
//flatMap
// Retorna um novo array como na função map e executa um flat de profundidade 1
console.log( arr.flatMap(value => [value * 2]));

// retorna um array dentro do array, assim da p visualizar melhor o flat sendo feito
console.log( arr.flatMap(value => [[value * 2]]));


//-----------------------------
// keys
// retorna um Array Iterator que contém as chaves para cada elemento do array
// Array Iterator é um objeto utilizado para iterar arrays
const arrIterator = arr.keys();

// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());



//--------------------------------
// values
// retorna um Array Iterator que contém os VALORES para cada elemento do array
const arrIterator2 = arr.values();

// console.log(arrIterator2.next());
// console.log(arrIterator2.next());
// console.log(arrIterator2.next());
// console.log(arrIterator2.next());
// console.log(arrIterator2.next());
// console.log(arrIterator2.next());


//-------------------------------------
// entries
// retorna um Array Iterator que contém os PARES CHAVE/VALOR para cada elemento do array
const arrIterator3 = arr.entries();

// console.log(arrIterator3.next());
// console.log(arrIterator3.next());
// console.log(arrIterator3.next());
// console.log(arrIterator3.next());
// console.log(arrIterator3.next());
// console.log(arrIterator3.next());


//------------------------------------
// find
// retorna o primeiro item de um array que satisfaz uma condição
const firstGreaterThanTwo = arr.find(value => value > 2); // vai percorrer como se fosse um forEach
console.log(firstGreaterThanTwo); // 3


//-------------------------------------
// findIndex
// retorna o INDEX do primeiro item de um array que satisfaz a condição
// é igual o find, mas retorna o index ao invés o valor
const firstGreaterThanTwo2 = arr.findIndex(value => value > 2); // vai percorrer como se fosse um forEach
console.log(firstGreaterThanTwo2); // 3


//-------------------------------------
// filter
// retorna um array com todos os elementos de um array que satisfazem uma condição
const allOdds = arr.filter(value => value % 2); // retorna todos os ímpares
console.log(allOdds);


//-------------------------------------
// indexOf
// retorna o primeiro índice em que um elemento pode ser encontrado no array
const arr4 = [1, 2, 3, 3, 4, 3];

const firstIndexOfItem = arr4.indexOf(3); // index da primeira ocorrência de 3
console.log(firstIndexOfItem); // 2

//-------------------------------------
// lastIndexOf
// retorna o último índice em que um elemento pode ser encontrado no array
const lastIndexOfItem = arr4.lastIndexOf(3); // index da última ocorrência de 3
console.log(lastIndexOfItem); // 5


//---------------------------------------
// includes
// retorna um booleane verificando se determinado elemento existe no array
const hasItemOne = arr4.includes(1); // true
const hasItemSix = arr4.includes(6); // false


//---------------------------------------
// some
// retorna um booleano verificando se pelo menos um item de um array satsfaz a condição
const hasSomeEven = arr4.some(value => value % 2 === 0); // true


//----------------------------------------
// every
// verifica se TODOS os itens de um array satisfazem uma condição
const allNumbersAreEven = arr4.every(value => value % 2 === 0); // false


//----------------------------------------
// sort
// ordena os elementos do array de acordo com a condição
var orderedArray = arr4.sort((current, next) => next - current); // decrescente
console.log(orderedArray);
orderedArray = arr4.sort((current, next) => current - next); // crescente
console.log(orderedArray);


//----------------------------------------
// reverse
// inverte os elementos de um array
// altera o array, não é imutável
console.log(arr.reverse());


//-----------------------------------------
// join
// retorna uma string com a junção de todos os elementos de um array separados por um delimitador
console.log( arr.join('-') ); // "1-2-3-4-5"


//--------------------------------------------
// reduce
// itera o array e retorna um novo tipo de dado para cada posição
// primeiro argumento da função é a variável (tipo de dado) a ser retornada, que começa em 0
// próximos argumentos: item, index, array
const sum = arr.reduce((total, value) => total += value, 0); // no último parâmetro (0), é identificado o tipo a ser retornado
console.log(sum); // 15


//--------------------------------------------------
