import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'gatsby';
import { StyledModal, CloseModal, ModalContent } from './modal-pop-up.styles';

ReactModal.setAppElement('#___gatsby');

const PopUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = event => {
    setIsModalOpen(true);
  };

  const handleModalClose = event => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div id="main">
        <Link to="#" onClick={handleModalOpen}>
          Open Modal
        </Link>
      </div>
      <StyledModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Example Modal In Gatsby"
      >
        <CloseModal onClick={handleModalClose}>&#10006;</CloseModal>
        <ModalContent>
          <iframe
            title="youtube-review"
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/7i6enCs52S8"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </ModalContent>
      </StyledModal>
    </>
  );
};

export default PopUp;
