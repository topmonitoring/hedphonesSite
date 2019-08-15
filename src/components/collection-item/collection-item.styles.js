import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  width: 16vw;
  display: flex;
  flex-direction: column;
  height: 500px;
  align-items: center;
  position: relative;

  .image {
    width: 95%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }

  &:hover {
    .image {
      opacity: 0.85;
    }

    .button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 95%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  background-color: white;

  .name {
    width: 90%;
    margin-bottom: 15px;
  }

  .price {
    width: 10%;
  }
`;
