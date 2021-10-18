import React, { useEffect } from 'react';

import Portal from './Portal';

import { Overlay, Dialog } from './styles';

// open -> booleano para a modal saber quando estar exposta na tela ou fechada
// onClose -> função que vai manipular o estado de open/close da modal
const Modal = ({ children, open, onClose }) => {
  useEffect(() => {
    function onEsc(e) {
      if (e.keyCode === 27) onClose();
    }
    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
    }
  }, [onClose]);

  if (!open) return null;

  // Para fechar a modal quando ela estiver aberta e alguem clicar fora (na área de Overlay)
  function onOverlayClick() {
    onClose();
  }

  //Quando clicar na modal de fato. Usada para evitar o problema da propagação do evento do click 
  //para que a modal não seja fechada em um momento indesejado
  function onDialogClick(e) {
    e.stopPropagation();
  }

  return (
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDialogClick}>{children}</Dialog>
      </Overlay>
    </Portal>
  );
};

export default Modal;