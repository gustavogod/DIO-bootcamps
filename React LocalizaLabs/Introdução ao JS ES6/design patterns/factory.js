// Funções factory: funções que retornam um objeto sem precisar chamá-las com o new
// EXEMPLOS
function Pessoa() {
    return {
        name: 'Gustavo',
        lastName: 'Dias'
    }
}

function Pessoa2(name) {
    return {
        name,
        lastName: 'Dias'
    }
}

function Pessoa3(customProperties) {
    // Dá p sobrescrever as propriedades q já tem e também acrescentar outras
    return {
        name: 'Gustavo',
        lastName: 'Dias',
        ...customProperties
    }
}

const p = Pessoa3({name: 'Jailson', age: 25});
console.log(p);