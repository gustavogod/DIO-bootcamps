const assert = require('assert'); //Definir o assert, que é um módulo nativo do node
const Math = require('../Curso React LocalizaLabs/JS ES6 avançado/Mocha, Chai e Sinon/math.js'); //classe a ser testada

describe('Math class', function() {
    // dá p usar um try catch no assert
    // o equal é usado p validar se os valores passados nos argumentos são iguais
    /* o erro tbm pode ser disparado manualmente
    throw new Error('Erro detectado!');
    PORÉM 
    com o uso do assert com o mocha esses erros não precisam ser pegos de forma manual, 
    basta usar o assert
    */

    // HOOKS -> utilizado para executar código e evitar repetição
    beforeEach(function() { // define uma função a ser executada antes de cada teste
        // implementação da função
    });
    /* OUTROS HOOKS
        - before -> executado uma vez no início dos teste 
        - after
        - afterEach
    */

    // TESTANDO COM FUNÇÕES ASSÍNCRONAS
    /* -O mocha possui um parâmetro chamado done
        Quando done é utilizado, então é aguardado que a função done seja finalizada para que
        o teste também seja considerado finalizado
        
        - O timeOut máximo padrão tolerado pelo mocha é de 2000ms
        - Com this.timeout(int) esse valor pode ser definido manualmente

        - No mocha não são usadas arrow functions, pois assim se têm acesso ao this (escopo) e à atributos do contexto
        da função que não teria usando arrow function. Ou seja, permite um maior controle do escopo
    */    
    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000); //alterando timeout manualmente

        math.sum(5, 5, value => {
            assert.equal(value, 10);
            done();
        });        
    });
    
    /* 
        Se um teste for descrito sem ser especificado, o mocha irá marcá-lo como pendente
    */
    it('Test to be implemented');

    /* 
        Pode-se escolher apenas um teste para ser executado usando o only
        importante quando se quer focar na execução de apenas um teste

        também dá p pular o teste usando skip, e o teste é marcado como pendente mas não é executado
    */
   //it.only('Multiply two numbers', function () { // executa apenas esse teste
   it.skip('Multiply two numbers', function () { // pula a execução desse deste a marca como pendente
       const math = new Math();

       assert.equal(math.multiply(5, 5), 25);
   });
});