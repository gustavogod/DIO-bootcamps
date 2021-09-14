// O conceito explícito de classe foi inserido no ES6
// é mais uma mudança na sintaxe do que nos fundamentos em si
// o código a seguir é o mesmo que o criado anteriormente com prototypes e functions

class Animal {
    constructor(qtdePatas) {
        this.qtdePatas = qtdePatas;
    }
}

class Cachorro extends Animal {
    constructor(morde) {
        //seria o mesmo que Animal.call(this, 4) e sem usar o extends
        super(4); // Já passa o 4 como parâmetro para o construtor de Animal
        this.morde = morde;
    }
}

const pug = new Cachorro(false);

console.log(pug);