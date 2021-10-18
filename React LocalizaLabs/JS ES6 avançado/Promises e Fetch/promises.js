// Promises
// Utilizada para programação assíncrona

/* Status de um promise
Pending -> Quando está executando
Fulfilled -> Quando já executou
Rejected -> Quando ocorre algum erro
*/
// Nesse exemplo cada função leva 1 segundo para executar, e a execução assíncrona das duas leva 2s
const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('First data');
        }, 1000);
    });

const doOtherThingPromise = () => 
    new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('Second data');
        }, 1000);
    });  

// código para execução assíncrona com tratamento de erro das funções
/* doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error)); // Pega qualquer erro que resultar das promises
 */


//As promises também podem ser executadas em paralelo
// assim, o then só é resolvido depois que as duas executarem
// com as duas funções executando em paralelo, a execução das duas leva 1 segundo
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => { // trata qualquer erro resultando da execução de alguma das funções
    console.log('Ops', err);
});

//race -> com o race, a promise que resolver primeiro é a que vai ter os dados retornados
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data=> {
    console.log(data);
}).catch(err => {
    console.log('Ops', err);
});


//---------------------------------------------------    
// É mais fácil e simples usar promises do que usar callbacks e try catchs, como no código abaixo
// Código equivalente ao que foi feito acima
/* 
function doSomething(callback) {
    setTimeout(function() {
        callback('First data');
    }, 1000);
}

function doOtherSomething(callback) {
    setTimeout(function() {
        callback('Second data');
    }, 1000);
}

function doAll() {
    try {
        doSomething(function(data) {
            var processedData = data.split('');
            try {
                doOtherThingPromise(function(data2) {
                    var processedData2 = data2.split('');

                    try {
                        setTimeout(function() {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch (err) {
                        //handle error
                    }
                });
            } catch (err) {
                // handle error
            }
        });
    } catch (err) {
        // handle error
    }
} */
