import React from 'react';
import { Badge } from 'reactstrap';

export const Header = props => {

  const logo = './images/general/logo.png';

  let cartQuantity = props.cartQuantity;
  if (cartQuantity > 99) {
    cartQuantity = '99+';
  }

  return (
    <React.Fragment>

      <div className="navbarWrapper d-flex flex-row sticky-top rounded border-bottom">

        <div className="navbarContainer d-flex flex-row align-items-center justify-content-center w-50">
          <div onClick={() => props.setView('catalog', '')} className="navbarContainer mr-auto">
            <img src={logo} className="mx-2 logo mb-2 d-inline" />
            <div className="d-inline">Cheers & Beers</div>
          </div>
        </div>

        <div className="d-flex flex-row align-items-center justify-content-center w-50">
          <div className="ml-auto mr-3">
            <div onClick={() => props.setView('about', '')} className="text-align-center">About</div>
          </div>

          <div className="mr-3">
            <div onClick={() => props.setView('cart', '')} className="d-inline">Cart </div>
            <Badge pill className="d-inline">{cartQuantity}</Badge></div>
        </div>

      </div>

    </React.Fragment>
  );

};
