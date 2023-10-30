import { useState } from 'react';
import Modal from 'react-modal';

export const Donation = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    return (
      <div>
        <button onClick={openModal}>Donar</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Donación"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              width: '518px',
              height:'680px',
              margin: 'auto',
              overflow: 'hidden'
            },
          }}
        >
          <iframe
            id="kofiframe"
            src="https://ko-fi.com/mushroom47/?hidefeed=true&widget=true&embed=true&preview=true"
            style={{ border: 'none', width: '100%', padding: '0px', background: '#f9f9f9' }}
            height="712"
            title="mushroom47"
          ></iframe>        
        </Modal>
      </div>
    );
}
