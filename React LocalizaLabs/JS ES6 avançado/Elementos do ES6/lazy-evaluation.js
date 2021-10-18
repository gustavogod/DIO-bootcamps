//lazy evaluation
function randomNumber() {
    console.log('Generting a random number...');

    return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {
    return a * b;
}

console.log(multiply(2));
console.log(multiply(2));

/* Por conta do lazy evaluation, a função random number só é invocada
quando a verificação é necessária */