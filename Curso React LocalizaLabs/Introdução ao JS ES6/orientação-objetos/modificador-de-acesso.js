'use strict';

function Person(initialName) {
    // let vai agir como um modificador private, pois assim, name só existe no escopo da função Person
    let name = intialName;

    this.getName = function() {
        return name;
    }

    this.setName = function(newName) {
        name = newName;
    }
}

//-------------------------
// É O MESMO QUE FAZER DA SEGUINTE FORMA COM A ATUALIZAÇÃO 12 DO NODE
// # é o modificador de acesso que determina que a variável é privada
class Person {
    #name = '';

    constructor(initialName) {
        this.#name = initialName;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

class Person {
    #name = '';

    constructor(name) {
        this.#name = name;
    }
    //sobrescreve os métodos get e set
    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
    // Assim, permite chamar as funções get e set direto pelo name
    // ex: n.name -> retorna o get name
    // n.name = "Gustavo" -> chama o set name
}