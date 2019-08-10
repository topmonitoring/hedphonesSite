import React, { useState, useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../providers/cart.context';
import { Container } from '../../components/globalSectionContainer';
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './Navbar.style.js';

import { ReactComponent as MenuIcon } from '../../../static/icons/menu.svg';

const NAV_ITEMS = ['About', 'Video', 'Buynow', 'FAQ', 'Contact'];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { hidden } = useContext(CartContext);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => ({
      mobileMenuOpen: !prevState.mobileMenuOpen,
    }));
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
        <Brand>Audiotechnika</Brand>
        <Mobile>
          <button onClick={toggleMobileMenu} style={{ color: 'black' }}>
            <MenuIcon />
          </button>
        </Mobile>
        <Mobile hide>{getNavList({})}</Mobile>
        <CartIcon />
        <div>{hidden ? null : <CartDropdown />}</div>
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
