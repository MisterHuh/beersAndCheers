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
  // let cart = props.cart;
  let cartQuantity = props.cartQuantity;

  // quantity < 99 ? quantity = '99+' : false;

  if (currentView === 'catalog') {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
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
