// async/await -> uma maneira de criar promises de maneira mais simples e lidar com promises aninhadas
// async é geralmente usada junto com await
// await -> espera que outras promises sejam resolvidas


const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345); // vai retornar 12345
    }, 1000);
});

// colocar a palavra async transforma a função em uma promise
// da p usar para controlar a execução de funções assíncronas
const simpleFunc = async () => {
    //throw new Error('Oh no!'); // consigo tratar erros na execução da promise
    const data = await asyncTimer(); // espera a asyncTimer() executar
    console.log(data);

    const dataJSON = await fetch('http://localhost/Curso React LocalizaLabs/JS ES6 avançado/Promises e Fetch/data.json')
        .then(resStream => 
                resStream.json()
        );

    return dataJSON;

    // SE QUISESSE FAZER O PROCESSAMENTO EM PARALELO, E NÃO SEQUENCIAL, SERIA ASSIM
/*     const data = await Promise.all([
        asyncTimer(),
        fetch('http://localhost/Curso React LocalizaLabs/JS ES6 avançado/Promises e Fetch/data.json')
            .then(resStream => resStream.json())
    ]);

    return data; */
};

console.log(simpleFunc()); // retorna a promise já resolvida

simpleFunc().then(data => {
        console.log(data); // retorna os dados do return -> 12345
    })
    .catch(err => {
        console.log(err); // tratando erros da promise
    });