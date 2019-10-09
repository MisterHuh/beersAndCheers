import React from 'react';
import Carousel from './carousel';

function Header(props) {

  const imgUrl = 'cheers.png';
  const size = {
    // width: '10vw'
    height: '10vh'
  };
  const headerSize = {
    width: '100vw',
    height: '10vh'
  };

  return (
    <header className="border border-danger py-0 px-0" style={headerSize}>

      <div className="border border-dark d-inline">
        <img className="img-fluid border border-secondary" src={imgUrl} alt="logo" style={size} />
        <div className="d-inline">Beers & Cheers</div>
      </div>

      <div className="border border-secondary float-right">
        <i className="fas fa-shopping-cart" onClick={() => { props.setView('cart', {}); }}><span className="mx-2"></span></i>
      </div>

      <div className="border border-primary float-right">
        <i className="fas fa-beer" onClick={() => { props.setView('catalog', {}); }}><span className="mx-2"></span></i>
      </div>

    </header>
  );
}

export default Header;

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
