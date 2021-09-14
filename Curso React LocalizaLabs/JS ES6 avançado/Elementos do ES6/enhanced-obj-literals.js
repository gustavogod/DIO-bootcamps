var prop1 = 'Digital Inovation One';

var obj = {
    //prop1 : prop1 -> antes do ES6 tinha que repetir o nome da propriedade 
    // para propriedades q são funções isso também vale
    prop1
};

var obj2 = {
    sum(a, b) { // com o ES6, posso omitir a palavra function para definir como propriedade do obj
        return a + b;
    }
};

var propName = 'test';

var obj = {
    /* antes do ES6, para usar o valor de uma variável para definir o nome de uma propriedade 
    precisaria primeiro terminar a declaração do objeto, para então acrescentar a propriedade,
    com ES6, isso é feito diretamente na declaração o objeto*/
    [propName + 'concat'] : 'prop value'
};

console.log(obj2.sum(1, 2));