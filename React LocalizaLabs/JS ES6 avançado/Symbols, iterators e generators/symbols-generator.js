// SYMBOLS -> uma forma de gerar um identificador único
// um symbol nunca é igual a outro

const uniqueId = Symbol(); // retorna um identificador único
const uniqueId2 = Symbol('Hello'); 
/* A string pode ser utilizada apenas para fins de debug, para saber qual symbol é qual, 
pois não interfere no valor do identificador
*/
const uniqueId3 = Symbol('Hello');
console.log(uniqueId2 === uniqueId3); // false

/* Uma propriedade identificada por um symbol passa a mensagem de que essa propriedade não deve ser 
utilizada ou acessada por outros desenvolvedores, apenas por quem possui o seu identificador correspondente
*/
const obj = {
    [uniqueId]: 'Hello'
};
/* mas não é uma propriedade privada, pois pode ser acessada usando
Object.getOwnPropertySymbols(obj)
*/
console.log(obj); // [Symbol()]: 'Hello'

//-----------------------------------
// Propriedades well known symbols
const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator](); //cria um iterador para o array, ou, uma interface para se fazer iterações

while (true) {
    let { value, done } = it.next();

    if (done) {
        break;
    }

    console.log(value);
}


// GENERATORS

function* hello() { // importante inserir o *
    console.log('Hello');
    yield 1; // usado para criar um ponto de pausa dentro da função
    // o valor passado depois do yield vai ser o value do iterator
    // se não for passado nenhum valor, o value do iterator é sempre undefined
    // a interface de iteração entre os pontos de pausa é feita por meio de um iterator

    console.log('From');
    const outsideValue = yield 2;
    console.log(outsideValue);
}

const it2 = hello();

console.log(it2.next());
console.log(it2.next()); // Se um valor é passado de fora da função, esse valor retorna no yield
console.log(it2.next('Outside!'));

// Ex de uso de generator: gerador de numeros naturais
function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number; // vai ser o valor do value
        number++;
    }
}
const it3 = naturalNumbers(); // criei a interface de iteração

// fazer com que um objeto se torne um objeto iterável
const obj2 = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj2) {
    console.log(value);
}