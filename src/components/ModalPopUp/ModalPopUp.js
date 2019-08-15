import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { StyledModal, CloseModal, ModalContent } from './modal-pop-up.styles';

ReactModal.setAppElement('#___gatsby');

const PopUp = ({ children, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toogleModal = event => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div onClick={toogleModal}>{children}</div>

      <StyledModal
        isOpen={isModalOpen}
        onRequestClose={toogleModal}
        contentLabel="Example Modal In Gatsby"
      >
        <CloseModal onClick={toogleModal}>
          <div>&#10006;</div>
        </CloseModal>
        <ModalContent>{content}</ModalContent>
      </StyledModal>
    </>
  );
};

export default PopUp;
