import React from 'react';

function Carousel() {
  const imgUrl = 'wickedLogo.png';
  return (
    <div className="jumbotron mb-0">
      <h1>Test Jumbotron</h1>
      <p>some quote here</p>
      <img className="img-fluid w-25 align-middle mx-5" src={imgUrl} alt="logo" />
    </div>

  );
}

export default Carousel;
