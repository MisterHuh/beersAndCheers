import React from 'react';

function Header() {

  let imgUrl = 'cart.png';

  return (
    <div className="text-center">
      <div className="d-inline display-3 align-middle">Wicked Sales</div>
      <img className="img-fluid w-25 align-middle ml-5" src={imgUrl} alt="logo"/>
    </div>
  );
}

export default Header;
