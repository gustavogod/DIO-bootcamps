function clicou(){
    // Consigo retornar elementos html pelo seu ID
    // inner.HTML insere o conteudo ta tag <tag> ... </tag>
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Clicou mesmo hein");
}

//Redirecionar a página para outra página, isso é, abrir uma página
function redirecionar(){
    window.open("https://www.google.com"); // Assim abre em outra aba
    //window.location.href = "https://www.google.com"; // Assim abre na mesma página
}

//Ação disparada quando o mouse é passado sobre algum elemento
function mouseAction(elemento){
    // Trocar o conteúdo interno do elemento HTML a ser manipulado  
    //document.getElementById("mouseMove").innerHTML = "O texto foi trocado";
    // o elemento do conteúdo html (document.getElementByID(mouseAction)) pode ser passado como parâmetro
    // Assim, não preciso pegar o id do elemento toda vez
    elemento.innerHTML = "O texto foi trocado";
    //alert("HELLO!");
}

function voltar(elemento){
    //document.getElementById("mouseMove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function change(elemento){
    console.log(elemento.value); // pegar o valor do elemento
}

/* var d = new Date();

alert("Data" + d.getDate());

// prompt exibe uma caixa para o usuário inserir algo, que pode ser atribuído a uma variável
var idade = prompt("Qual sua idade");

if (idade >= 18){
    alert("maior de idade");
}
else {
    alert("menor de idade");
} */