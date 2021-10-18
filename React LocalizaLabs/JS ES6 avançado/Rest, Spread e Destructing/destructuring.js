var arr = ['item1', 'item2', 'item3']

// var [var1, var2, var3] = arr;
var [var1, var2, var3] = ['item1', 'item2', 'item3']; // é o mesmo que fazer isso


console.log(var1, var2, var3);

// destructuring com objetos
var obj = {
    name: 'Gustavo',
    props: {
        age: 26,
        favoriteColors: ['blue', 'red']
    }
};

var { name } = obj;
// ele pega do objeto obj apenas a estrutura passada (name)
var { name: name2 } = obj; // também posso pegar a propriedade e atribuir para uma variável

console.log(name);

name2 = 'João'; // ele cria uma nova variável quando é feito o descructuring, então o objeto original não é modificado
console.log(obj, name2);

// também funciona com propriedades aninhadas
var {
    //props: { age } // acessa a propriedade e faz o descructuring dentro da propriedade
    // props: { age: age2 } // também posso atribuir para outra variável
    //também da p fazer em arrays de propriedades
    props: { age: age2, favoriteColors: [color1, color2] }
} = obj;

console.log(age2);
console.log(color1, color2);

var arr2 = [{ name: 'Apple', type: 'fruit' }];
var [{ name: fruitName }] = arr2; // também dá p usar assim

console.log(fruitName);

// posso utilizar para definir parâmetros de funções e definir default values
function sum([a, b] = [0, 0]) { // default value para a e b são 0
    return a + b;
}
console.log(sum([5, 5]));

// passar objeto
function sum2( { a, b} ) {
    return a + b;
}
console.log(sum2({ a: 5, b: 5}));