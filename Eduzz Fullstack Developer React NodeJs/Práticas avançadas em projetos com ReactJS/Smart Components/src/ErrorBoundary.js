import React, { Component } from 'react';
import ErrorImg from './Error.png';

class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log('error', error);
    console.log('error info', errorInfo);
    this.setState({
      hasError: true
    });
    // Aqui as informações dos erros podem ser enviadas para o responsáveis 
    //por monitorar os erros da aplicação
    //ex: sendoToService(data)

  }

  render () {
    if(this.state.hasError) { // Se capturar algum erro
      // Em modo de produção, a página direcionaria diretamente para a imagem
      return <img width='100px' height='100px' src={ErrorImg} alt="Erro" />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;