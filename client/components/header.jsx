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

  const logo = './cheers.png';
  let currentView = props.view;
  let cartQuantity = props.cartQuantity;
  cartQuantity > 99 ? cartQuantity = '99+' : false;

  // let carouselDisplay;
  // currentView === 'catalog' ? carouselDisplay = <Carousel /> : false;
  // uncomment the above line to include carousel

  const imgWrapper = {
    height: '8vh'
  };

  const imgContainer = {
    height: '100%'
  };

  return (
    <React.Fragment>
      <Navbar color="light" light expand="md" className="sticky-top ">
        <NavbarBrand onClick={() => props.setView('catalog', '')} className="border-dark p-0" style={imgWrapper}>
          <img src={logo} className=" border-danger mr-2" style={imgContainer}/>
          Beers & Cheers
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink onClick={() => props.setView('about', '')}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => props.setView('cart', '')}>Cart <Badge pill>{cartQuantity}</Badge></NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      {/* {carouselDisplay} */}
    </React.Fragment>
  );

};
