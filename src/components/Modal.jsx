import { useRef } from 'react';
import '../assets/css/Modal.css';

function Modal({ openButtonText, onClose, children }) {
  const modalRef = useRef();

  return (
    <>
      <button onClick={() => modalRef.current.showModal()} className="open-button">
        {openButtonText}
      </button>
      <dialog ref={modalRef} className="modal-dialog">
        <div className="modal-content">
          {children}
          <button onClick={() => modalRef.current.close()} className="close-button">
            {onClose}
          </button>
        </div>
      </dialog>
    </>
  );
}

export default Modal;
