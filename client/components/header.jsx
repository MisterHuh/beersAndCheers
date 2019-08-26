import React from 'react';

function Header(props) {

  const imgUrl = 'funny_logo.png';
  const size = {
    width: '400px'
  };

  return (
    <div className="text-center">
      <img className="img-fluid w-25 align-middle mr-5" src={imgUrl} alt="logo" style={size}/>
      <div className="d-inline display-3 align-middle">Wicked Sales</div>
      <i className="fas fa-shopping-cart ml-5">{props.cartItemCount}items</i>
    </div>
  );
}

export default Header;
