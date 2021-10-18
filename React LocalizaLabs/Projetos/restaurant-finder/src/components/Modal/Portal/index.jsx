import ReactDom from 'react-dom';

// O que for recebido em children é oq queremos renderizar

const PortalModal = ({ children }) => {
  const portal = document.getElementById('modal-root');
  return ReactDom.createPortal(children, portal);
  // children -> o que vai ser renderizado
  // portal -> o portal criado no html
};

export default PortalModal;