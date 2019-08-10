import styled, { css } from 'styled-components';
import ReactModal from 'react-modal';

export const CloseModal = styled.button`
  float: right;
  height: 50px;
  width: 50px;
  margin-top: -50px;
  margin-right: -50px;
`;
export const ModalContent = styled.div`
  display: flex;
`;

const modal = css``;

export const StyledModal = styled(ReactModal)`
  height: 700px;
  width: 80%;
  text-align: center;
  margin: auto;
  width: 60%;
  margin-top: 130px;
  ${modal}
`;
