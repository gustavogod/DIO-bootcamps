// a classe EventEmitter é disponibilizada por meio do módulo 'events'
// é uma classe exclusiva do node

const EventEmitter = require('events');

// Classe extendendo EventEmitter
class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new Users();

// métodos costumizados 
// p consumir apenas uma vez, é só usar o método .once 
users.on('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Gustavo Dias' });