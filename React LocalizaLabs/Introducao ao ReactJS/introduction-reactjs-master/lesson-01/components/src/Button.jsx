import React from 'react'

// Os componentes devem ser o mais abstratos e reaproveitáveis possível, sem atribuição de estados

function Button(props) {

  // destructuring
  const { name, onClick } = props

  return (
    //Nesse caso {onClick} é uma callback a ser recebido e executado
    // Name é uma propriedade a ser retornada
    <button onClick={onClick}>{name}</button>
  )
}

export default Button //Assim o componente pode ser manipulado no js importando o Button
