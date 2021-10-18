import React from "react";
import PropTypes from 'prop-types';

function PetShop(props) {

  const { dogs, cats, customers, customerName, onClick } = props;

  return (
    <div>
      <h1>Dogs: {dogs}</h1>
      <h1>Cats: {cats}</h1>
      <div>
        Quantidade de clientes: {customers}
      </div>
      <div>
        Nome do cliente: {customerName}
      </div>
      <button onClick={onClick}>Iniciar banho</button>
    </div>
  );
}

//Definir propriedades padrão
//É processado antes da chacagem do propTypes
PetShop.defaultProps = {
  dogs: 0,
  cats: 0,
  customers: []
}

PetShop.propTypes = {
  dogs: PropTypes.number.isRequired,
  cats: PropTypes.number,
  customers: PropTypes.array,
  customerName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, //onClick é uma função e é obrigatória
  status: PropTypes.oneOf(['Completed', 'Disebled']) //Indica que status deve receber um desses valores
}

export default PetShop;