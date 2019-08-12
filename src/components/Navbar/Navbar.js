import React, { useState, useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../providers/cart.provider';
import { Container } from '../../components/globalSectionContainer';
import {
  Nav,
  NavItem,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
  SiteLogoContainer,
} from './Navbar.style.js';

import CartIcon from '../cart-icon/cart-icon.component';

import { ReactComponent as MobileMenuIcon } from '../../assets/mobile_menu.svg';

const NAV_ITEMS = ['About', 'Video', 'Buynow', 'FAQ', 'Contact'];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { hidden } = useContext(CartContext);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={closeMobileMenu}>
      {item}
    </AnchorLink>
  );

  const getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );

  return (
    <Nav {...mobileMenuOpen}>
      <StyledContainer>
        <SiteLogoContainer />
        <div style={{ width: '0px' }}>{hidden ? null : <CartDropdown />}</div>
        <Mobile>
          <button onClick={toggleMobileMenu} style={{ color: 'black' }}>
            <MobileMenuIcon />
          </button>
        </Mobile>
        <Mobile hide>{getNavList({})}</Mobile>

        <CartIcon />
      </StyledContainer>
      <Mobile>
        {mobileMenuOpen && (
          <MobileMenu>
            <Container>{getNavList({ mobile: true })}</Container>
          </MobileMenu>
        )}
      </Mobile>
    </Nav>
  );
};

export default Navbar;
