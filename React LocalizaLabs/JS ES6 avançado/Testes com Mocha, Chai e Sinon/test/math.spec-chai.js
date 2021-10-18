const Math = require('../Curso React LocalizaLabs/JS ES6 avançado/Mocha, Chai e Sinon/math.js'); //classe a ser testada
const expect = require('chai').expect; // para usar o CHAI
const sinon = require('sinon'); // para usar o SINON

// USANDO A BIBLIOTECA CHAI NO LUGAR DOS ASSERTS
describe('Math class with mocha', function() {

    // HOOKS -> utilizado para executar código e evitar repetição
    beforeEach(function() { // define uma função a ser executada antes de cada teste
        // implementação da função
    });
    /* OUTROS HOOKS
        - before -> executado uma vez no início dos teste 
        - after
        - afterEach
    */

    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000); //alterando timeout manualmente

        math.sum(5, 5, value => {
            expect(value).to.equal(10); // esperar que value seja igual a 10
            //assert.equal(value, 10);
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
   //it.skip('Multiply two numbers', function () { // pula a execução desse deste a marca como pendente
   it('Multiply two numbers', function () {
       const math = new Math();

       expect(math.multiply(5, 5)).to.equal(25);
       //assert.equal(math.multiply(5, 5), 25);
   });

   // VALIDAÇÃO DE OBJETOS
   it('Validate object', function () {
        const obj = {
            name: 'Gustavo Dias'
        };

        const obj2 = {
            name: 'Gustavo Dias'
        };

        //expect(obj).to.have.property('name'); // apenas checa se a propriedade existe
        expect(obj).to.have.property('name').equal('Gustavo Dias');

        //expect(obj).to.equal(obj2); // não são iguais, pois assim ele compara a referência, e não o objeto em si
        expect(obj).to.deep.equal(obj2); // agora sim compara os objetos e seus valores
   });

   it.only('Using SINON. Calls req with sum and index values', function() {
        const req = {};
        const res = {
            // usado para espionar como as funções foram chamadas e quantas vezes foram chamadas, etc
            load: sinon.spy()
        };

        const math = new Math();

        math.printSum(req, res, 5, 5);

        //expect(res.load.calledOnce).to.be.true;
        expect(res.load.args[0][1]).to.equal(10);
   });
});