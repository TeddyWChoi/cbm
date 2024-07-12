import React, { useState } from 'react';
import Modal from 'react-modal';
import Agree from '../Agree/Agree.js';
import '../Agree/Agree.css';

const ModalPopup = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <button class="modalopen" onClick={openModal}>
                <img alt="" class="raphaelnewwindow-icon" src={require('../../assets/images/newwindow.svg').default} />
            </button>

            <Modal
                style={{
                    overlay: {
                        backgroundColor: ' rgba(0, 0, 0, 0.4)',
                        width: '100%',
                        height: '100vh',
                        zIndex: '10',
                        position: 'fixed',
                        top: '0',
                        left: '0',
                    },
                    content: {
                        width: '800px',
                        height: '600px',
                        zIndex: '150',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        borderRadius: '10px',
                        boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        overflow: 'auto',
                    },
                }}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <Agree agree={props.agree} />
                <button class="modal_close" onClick={closeModal} />
            </Modal>
        </div>
    );
};

export default ModalPopup;
