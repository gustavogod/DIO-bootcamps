'use strict';

function Animal () {}

//A função construtora permite q eu escreva direto no prototype
//Propriedades e funções podem ser adicionadas diretamente no prototype do objeto
//Quando isso acontece, a propriedade é adicionada à todas as instâncias desse objeto
Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {}

function Cachorro(morde) {
    this.qndePatas = 4;
    this.morde = morde;
}

//prototype de Cachorro é derivado do prototype de Animal
Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function() {
    console.log("Au Au");
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);