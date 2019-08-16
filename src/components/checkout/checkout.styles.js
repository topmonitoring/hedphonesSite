import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1px auto 0;
  background-color: white;

  button {
    margin-top: 5px;
    height: 50px;
    width: 50%;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 450px;
    button {
      width: 90%;
      height: 35px;
    }
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 800px) {
    width: 22%;
    &:last-child {
      width: 12%;
    }
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  @media screen and (max-width: 800px) {
    margin-top: 15px;
    font-size: 14px;
  }
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
  @media screen and (max-width: 800px) {
    margin-top: 15px;
    font-size: 14px;
  }
`;
