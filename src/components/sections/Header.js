import React from 'react';
import styled from 'styled-components';

import SilideShow from '@components/common/SlideShow';

import { Container } from '@components/global';

const Header = () => (
  <HeaderWrapper>
    <Container>
      <SilideShow />
    </Container>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

export default Header;
