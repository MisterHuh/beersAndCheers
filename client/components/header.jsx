import React from 'react';

function Header(props) {

  const imgUrl = 'cheers.png';
  const size = {
    "width": 50%
    "height": 50%
  }

  return (
    <div className="border border-danger">
      <div className="border border-primary h-50">
        <img className="img-fluid w-25 float-left border border-dark" src={imgUrl} alt="logo" style={size}/>
        <div className="d-inline border border-dark">Beers & Cheers</div>
      </div>

      {/* <div className="d-inline  float-right mt-3">
        <i className="fas fa-shopping-cart" onClick={() => { props.setView('cart', {}); }}></i>
        <span className="mx-2"></span>
        <div className=" w-25 d-inline font-italic h5 mr-2">Items: {props.cartItemCount} </div>
      </div> */}

    </div>
  );
}

export default Header;
