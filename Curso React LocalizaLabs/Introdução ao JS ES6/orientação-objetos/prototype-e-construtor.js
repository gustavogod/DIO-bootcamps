'use strict';

const myText = String('Hello prototype!');
// Toda função construtura tem um prototype atrelado a ela, que tem a referência __proto__ atrelada
// __proto__ -> prototype -> constructor  --> proto aponta para prototype, que é criado a partir da função construtora
// myText.split('') é o mesmo que -> myText.__proto__.split
// __proto__ aponta para o prototype de String
console.log(myText.__proto__.split === String.prototype.split); // true

console.log(myText.constructor === String); // true

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function Cachorro(morde) {
    // em this, é passado o contexto no qual a função Animal é chamada
    // Por ex, const pug = new Cachorro(false); o contexto é o pug, e a qtdePatas vai ser atribuida ao Pug
    Animal.call(this, 4);
    this.morde = morde; 
}

const pug = new Cachorro(false);

console.log(pug);