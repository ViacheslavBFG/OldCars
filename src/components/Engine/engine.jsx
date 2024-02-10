import React, { useState } from 'react';
import { EDiv, Btn } from './engineStyle';
import ModalEngine from '../Modal/modal';

const Engine = ({ enginesData }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <EDiv>
        <Btn onClick={openModal}>Engines</Btn>
      </EDiv>

      {showModal && <ModalEngine showCloseIcon={true} close={closeModal} enginesData={enginesData}  />}
    </div>
  );
};

export default Engine;
