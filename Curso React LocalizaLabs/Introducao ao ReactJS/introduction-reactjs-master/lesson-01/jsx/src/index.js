import React from "react"
import ReactDom from "react-dom"
import "./styles.css"

function sum(a, b) {
    return a + b;
}

function primeiroJSX() {
    return (
        /* Para usar html dentro do JS tem que ser className, e não class, 
        pois class já é palavra reservada do JS*/
        <div className="teste">
            Gustavo Dias - Introdução ao ReactJS
            <h1>Soma: {sum(10, 20)}</h1>
        </div>
    )
}


const App = () => {

    return (
        /* Se não encapsular dentro de uma div ou outro elemento, apenas um elemento é passado para ser renderizado,
        para passar diversos elementos para renderização, deve-se então colocar dentro de uma div */
        <div className="App">
            {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);