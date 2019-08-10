import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'gatsby';

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
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Example Modal In Gatsby"
      >
        <h2>MY modal Content</h2>
        <button onClick={handleModalClose}>Close Modal</button>
      </ReactModal>
    </>
  );
};

export default PopUp;
