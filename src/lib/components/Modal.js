import "./Modal.css";
import React, { useState } from "react";


function Modal({id, parameter, message}) {
    // Close
    const [modalClosed, setModalClosed] = useState(false);
    const closeModal = () => {
        setModalClosed(true);
    }

    
    // Template
    return (
        <div>
            {
                modalClosed === false &&
                <div className="modal" id={id} style={parameter}>
                    <div className="modal-content">
                        <span className="modal-close-icon" onClick={closeModal}>✖</span>
                        <span>{message}</span>
                    </div>
                </div>
            }
        </div>
    );
}

export default Modal;