// o static permite que um determinado método ou atributo de um objeto seja chamado sem ele ser instanciado

'use strict';

// Versão antiga sem suporte a orientação a objetos
function Person() {}

Person.walk = function() {
    console.log('walking...');
}

console.log(Person.walk());

// É O MESMO QUE
// COM ORIENTAÇÃO A OBJETOS E USO DO STATIC
class Person {
    static walk() {
        console.log('walking...');
    }
}

console.log(Person.walk());