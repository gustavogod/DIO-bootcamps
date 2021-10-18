/* Muito popular com javaScript
- A instância (subscriber) mantém uma coleção de objetos (observers) 
e notifica todos eles quando ocorrem mudanças no estado
- O observer fica procurando por alguma alteração, e quando acontece ele chama todos os subscribers
*/
// exemplos: Vue e RxJs

// EXEMPLO EM JS
/* Observable deve:
1 - Manter uma lista de observers
2 - Ter uma função subscribe para permitir a inserção de novos subscribers nos observers
3 - Ter uma função notify para notificar sempre que ocorrer uma mudança de estado
*/

class Observable {
    constructor() {
        this.observables = [];
    }

    subscribe(fn) {
        this.observables.push(fn);
    }

    notify(data) {
        this.observables.forEach(fn => fn(data));
    }

    unsubscribe(fn) {
        // no filter ele retorna todos menos o que é igual à fn, removendo fn
        this.observables = this.observables.filter(obs => obs !== fn);
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2');