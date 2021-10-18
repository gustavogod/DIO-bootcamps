/* Uma função decorator recebe uma outra função como parâmetro e estende o seu comportamento
* sem modificá-la explicitamente
*/
// ex: pode ser usada com TypeScript

/* EXEMPLO
* fazer com que a função só possa ser chamada se o usuário estiver autenticado
* Esse exemplo utiliza a sintaxe do javaScript
*/
//recebe uma função como parâmetro
let loggedIn = true;

function callIfAuthenticated(fn) {
    // Só executa fn se estiver logado
    return !!loggedIn && fn();
}
// função 
function sum(a, b) {
    return a + b;
}
// Só executa a função sum se loggedIn for true
console.log(callIfAuthenticated(() => sum(2, 5)));


//------------------------------------
// EXEMPLO USANDO A SINTAXE DECORATOR
function readOnly(target, name, descriptor) {
    // writable é uma propriedade do objeto
    descriptor.writable = false;
    return descriptor;
}

class Job {
    @readOnly
    title () { return 'CEO' }
    // está alterando a propriedade de title por meio da chamada @readOnly
    // e definindo que title não está mais disponível para escrita
}