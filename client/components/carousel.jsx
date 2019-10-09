import React from 'react';

function Carousel() {
  const img1 = 'wickedLogo.png';
  const img2 = `cart.png`;
  const img3 = `emptycart.png`;
  const carouselSize = {
    width: '100vw',
    height: '40vh'
  };
  // style = { carouselSize }
  return (

  // <div className="jumbotron mb-0">
  //   <h1>Test Jumbotron</h1>
  //   <p>some quote here</p>
  //   <img className="img-fluid w-25 align-middle mx-5" src={imgUrl} alt="logo" />
  // </div>                data-interval="100"

    <div id="myCarousel" className="carousel slide border border-danger" data-ride="carousel">

      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={img1} style={carouselSize} alt="First slide" />
        </div>

        <div className="carousel-item">
          <img className="d-block w-100" src={img2} style={carouselSize} alt="Second slide" />
        </div>

        <div className="carousel-item">
          <img className="d-block w-100" src={img3} style={carouselSize} alt="Third slide" />
        </div>
      </div>

      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>

      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>

    </div>

  );
}

export default Carousel;
