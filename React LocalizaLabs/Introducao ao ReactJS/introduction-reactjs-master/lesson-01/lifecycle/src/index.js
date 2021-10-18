import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./styles.css"

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }

  // Define oq é feito depois que o componente é montado (consultar o ciclo de vida do react p entender melhor)
  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        copo: 'suco'
      })
    }, 3000)
  }

  alterarCopo = () => {
    // Alterar valor do state
    this.setState({
      copo: 'refrigerante'
    })

    /*Assim altera o valor mas sem alterar a aplicação, mas não é uma boa prática,
    pois não faz o react renderizar novamente */
    //this.state.copo = 'Refrigerante'
  }

  // Pra trabalhar em classe tem q usar o render p colocar no js oq deve ser renderizado
  render() {
    const { clock, copo } = this.state
    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
      </div>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
