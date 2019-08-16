import styled from 'styled-components';
import ReactModal from 'react-modal';

export const CloseModal = styled.div`
  float: right;
  height: 50px;
  width: 50px;
  margin-top: -50px;
  margin-right: -50px;
  align-content: center;
  text-align: center;

  div {
    margin-top: 15px;
  }
`;
export const ModalContent = styled.div`
  display: flex;
  height: 100%;
`;

export const StyledModal = styled(ReactModal)`
  height: 700px;
  width: 80%;
  margin: auto;
  width: 60%;
  margin-top: 130px;
  @media screen and (max-width: 800px) {
    width: 90%;
    height: 40%;
  }
`;
