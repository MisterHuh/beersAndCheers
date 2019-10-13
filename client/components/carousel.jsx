import React from 'react';
import { UncontrolledCarousel, Jumbotron, Container } from 'reactstrap';

export const Carousel = () => {
  const img1 = 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';
  const img2 = `https://images.pexels.com/photos/2855291/pexels-photo-2855291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`;
  const img3 = `emptycart.png`;

  const wrapper = {
    height: '50vh'
  };
  const carouselSize = {
    width: '100%',
    height: '30%'
  };

  const items = [
    {
      src: img1,
      altText: 'Slide 1',
      caption: 'Slide 1',
      header: 'Slide 1 Header',
      key: '1'
    },
    {
      src: img2,
      altText: 'Slide 2',
      caption: 'Slide 2',
      header: 'Slide 2 Header',
      key: '2'
    },
    {
      src: img3,
      altText: 'Slide 3',
      caption: 'Slide 3',
      header: 'Slide 3 Header',
      key: '3'
    }
  ];

  const jumbotronSize = {
    height: '50vh'
  };

  const imgWrapper = {
    height: '50vh'
  };
  const imgSize = {
    height: '100%',
    backgroundSize: 'contain'
  };

  return (
  // <div style={wrapper}>
  //   <UncontrolledCarousel items={items} style={carouselSize}/>
  // </div>

    <div>
      <Jumbotron fluid style={jumbotronSize} className="border border-secondary p-0">
        <Container fluid className="p-0">
          <div className="border border-danger" style={imgWrapper}>
            <img src={img2} alt="jumbo" style={imgSize} className="border border-light"/>
          </div>
          {/* <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
        </Container>
      </Jumbotron>
    </div>

  /* JUMBOTRON */
  // <div className="jumbotron mb-2">
  //   <h1>Test Jumbotron</h1>
  //   <p>some quote here</p>
  //   <img className="img-fluid align-middle" src={img1} alt="logo" />
  // </div>

  /* BOOTSTRAP CAROUSEL   data-interval="100" */
  // <div id="myCarousel" className="carousel slide border border-danger" data-ride="carousel">

  //   <ol className="carousel-indicators">
  //     <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
  //     <li data-target="#myCarousel" data-slide-to="1"></li>
  //     <li data-target="#myCarousel" data-slide-to="2"></li>
  //   </ol>

  //   <div className="carousel-inner">
  //     <div className="carousel-item active">
  //       <img className="d-block w-100" src={img1} style={carouselSize} alt="First slide" />
  //     </div>

  //     <div className="carousel-item">
  //       <img className="d-block w-100" src={img2} style={carouselSize} alt="Second slide" />
  //     </div>

  //     <div className="carousel-item">
  //       <img className="d-block w-100" src={img3} style={carouselSize} alt="Third slide" />
  //     </div>
  //   </div>

  //   <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
  //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  //     <span className="sr-only">Previous</span>
  //   </a>

  //   <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
  //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
  //     <span className="sr-only">Next</span>
  //   </a>

  // </div>

  );
};

// export default Carousel;
