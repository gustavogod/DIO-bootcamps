var obj = {
    showContext: function showContext() {
        //this = obj
        // antes da Arrow function, era utilizado bind(this) nas função para especificar o contexto
        // com Arrow function, o contexto representado pelo this é sempre o mesmo na qual a função está inserida
        setTimeout(() => { 
            this.log('after 1000ms');
        }, 1000); // essa função executa após 1000 milisegundos
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();

/*
Em arrow functions só for colocar apenas um argumento, não precisa de parênteses
Funções são objetos de primeira classe
*/