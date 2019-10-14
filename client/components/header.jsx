import React from 'react';
import { Carousel } from './carousel';
import {
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

  const imgUrl = 'cheers.png';
  const size = {
    // width: '10vw'
    height: '10vh'
  };
  const headerSize = {
    width: '100vw',
    height: '10vh'
  };

  if (currentView === 'catalog') {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
          {/* <NavbarBrand href="/">Beers & Cheers</NavbarBrand> */}
          <NavbarBrand onClick={() => props.setView('catalog', '')}>Beers & Cheers</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>Cart</NavLink>
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
                <NavLink>Cart</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }

  /* Jae's code */
  // <header className="border border-danger py-0 px-0" style={headerSize}>
  //   <div className="border border-dark d-inline">
  //     <img className="img-fluid border border-secondary" src={imgUrl} alt="logo" style={size} />
  //     <div className="d-inline">Beers & Cheers</div>
  //   </div>
  //   <div className="border border-secondary float-right">
  //     <i className="fas fa-shopping-cart" onClick={() => { props.setView('cart', {}); }}><span className="mx-2"></span></i>
  //   </div>
  //   <div className="border border-primary float-right">
  //     <i className="fas fa-beer" onClick={() => { props.setView('catalog', {}); }}><span className="mx-2"></span></i>
  //   </div>
  // </header>

  /* bootstrap + Jae's code */
  // <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //   <div className="border border-dark d-inline">
  //     <img className="img-fluid border border-secondary" src={imgUrl} alt="logo" style={size} />
  //     <div className="d-inline">Beers & Cheers</div>
  //   </div>

  //   <div className="border border-secondary float-right">
  //     <i className="fas fa-shopping-cart" onClick={() => { props.setView('cart', {}); }}><span className="mx-2"></span></i>
  //   </div>

  //   <div className="border border-primary float-right">
  //     <i className="fas fa-beer" onClick={() => { props.setView('catalog', {}); }}><span className="mx-2"></span></i>
  //   </div>
  // </nav >

  /* bootstrap */
  // <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //   <a className="navbar-brand" href="#">Navbar</a>
  //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //     <span className="navbar-toggler-icon"></span>
  //   </button>
  //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //     <ul className="navbar-nav mr-auto">
  //       <li className="nav-item active">
  //         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
  //       </li>
  //       <li className="nav-item">
  //         <a className="nav-link" href="#">Link</a>
  //       </li>
  //       <li className="nav-item dropdown">
  //         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //           Dropdown
  //         </a>
  //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
  //           <a className="dropdown-item" href="#">Action</a>
  //           <a className="dropdown-item" href="#">Another action</a>
  //           <div className="dropdown-divider"></div>
  //           <a className="dropdown-item" href="#">Something else here</a>
  //         </div>
  //       </li>
  //       <li className="nav-item">
  //         <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
  //       </li>
  //     </ul>
  //     <form className="form-inline my-2 my-lg-0">
  //       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
  //       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  //     </form>
  //   </div>
  // </nav>

};

// export default Header;

// import React from 'react';

// function Header(props) {

//   const size = {
//     width: '277px',
//     height: '277px'
//   };

//   return (
//     <div>
//       <img className="img-fluid w-25 align-middle mx-5 " src={imgUrl} alt="logo" style={size} />
//       <div className="d-inline display-1 align-middle ">Wicked Sales</div>

//       <div className="d-inline  float-right mt-3">
//         <i className="fas fa-shopping-cart" onClick={() => { props.setView('cart', {}); }}></i>
//         <span className="mx-2"></span>
//         <div className=" w-25 d-inline font-italic h5 mr-2">Items: {props.cartItemCount} </div>
//       </div>

//     </div>
//   );
// }

// export default Header;
