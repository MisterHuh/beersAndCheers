import React from 'react';
import { Badge, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export const Header = props => {

  const logo = './cheers.png';
  let currentView = props.view;
  let cartQuantity = props.cartQuantity;
  cartQuantity > 99 ? cartQuantity = '99+' : false;

  const imgWrapper = {
    height: '8vh',
    cursor: 'pointer'
  };

  const imgContainer = {
    height: '100%'
  };

  const navBarColor = {
    backgroundColor: '#F4F4F4'
  };

  const cursor = {
    cursor: 'pointer'
  };

  return (
    <React.Fragment>
      <Navbar light expand="md" className="sticky-top" style={navBarColor}>
        <NavbarBrand onClick={() => props.setView('catalog', '')} className="border-dark p-0" style={imgWrapper}>
          <img src={logo} className="mr-2 mb-2 d-inline" style={imgContainer}/>
          <div className="d-inline">Beers & Cheers</div>
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink onClick={() => props.setView('about', '')} style={cursor}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => props.setView('cart', '')} style={cursor}>Cart <Badge pill>{cartQuantity}</Badge></NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </React.Fragment>
  );

};
