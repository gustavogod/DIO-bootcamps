// Consiste em criar uma instância de uma função construtora e retorná-la sempre que for necessário
// Quando uma instância é criada uma vez, toda vez que o objeto for chamado, deve retornar a mesma instância
// ex de padrão Singleton: jQuery
// EXEMPLOS

//pode ser por ex uma variável global
var SETTINGS = {
    api: 'http://localhost',
    trackJsToken: '12345'
}

function MyApp() {
    // Se ainda não houver uma instância da variável instance, então ela é criada
    if(!MyApp.instance) {
        MyApp.instance = this;
    }
    // Se a instância já existir, então ela é retornada
    return MyApp.instance;
}

//Outro exemplos como o de cima
function Pessoa() {
    if (!Pessoa.instance) {
        Pessoa.instance = this;
    }

    return Pessoa.instance;
}

const p = Pessoa.call({ name: 'Gustavo'});
const p2 = Pessoa.call({ name: 'Astolfo'}); // Vai continuar sendo Gustavo, pq a primeira instância prevalece
console.log(p);
console.log(p2);
