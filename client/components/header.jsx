import React from 'react';
import { Carousel } from './carousel';
import {
  Badge,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export const Header = props => {

  let currentView = props.view;
  let cartQuantity = props.cartQuantity;

  cartQuantity > 99 ? cartQuantity = '99+' : false;

  if (currentView === 'catalog') {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md" className="sticky-top">
          <NavbarBrand onClick={() => props.setView('catalog', '')}>Beers & Cheers</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={() => props.setView('cart', '')}>Cart <Badge pill>{cartQuantity}</Badge></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Carousel />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
          {/* <NavbarBrand href="/">Beers & Cheers</NavbarBrand> */}
          <NavbarBrand onClick={() => props.setView('catalog', '')}>Beers & Cheers</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={() => props.setView('cart', '')}>Cart <Badge pill>{cartQuantity}</Badge></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }

};
