import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

//const modalRoot = document.getElementById('modal');
// switched to sever side rendering

let modalRoot; 

const Modal = ({ children }) => {
  const elRef = useRef(null);
  modalRoot = modalRoot ? modalRoot : document.getElementById('modal');
  
  if(!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    modalRoot.appendChile(elRef.current);
    return () => modalRoot.removeChile(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;