import React from 'react';
import { Badge, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export const Header = props => {

  const logo = './images/general/logo.png';

  let cartQuantity = props.cartQuantity;
  if (cartQuantity > 99) {
    cartQuantity = '99+';
  }

  return (
    <React.Fragment>
      <Navbar expand="md" className="sticky-top rounded border-bottom">
        <NavbarBrand onClick={() => props.setView('catalog', '')} className="navbarBrand p-0" >
          <img src={logo} className="logo mr-2 mb-2 d-inline"/>
          <div className="d-inline">Beers & Cheers</div>
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink onClick={() => props.setView('about', '')} >About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => props.setView('cart', '')} >Cart <Badge pill>{cartQuantity}</Badge></NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </React.Fragment>
  );

};
