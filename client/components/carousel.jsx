import React from 'react';
import { UncontrolledCarousel, Jumbotron, Container } from 'reactstrap';
import { relative } from 'path';

export const Carousel = () => {
  const img1 = 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';
  const img2 = `https://images.pexels.com/photos/2855291/pexels-photo-2855291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`;
  const img3 = `emptycart.png`;
  const barPic = 'https://images.pexels.com/photos/2599246/pexels-photo-2599246.jpeg?cs=srgb&dl=advertisement-bar-business-2599246.jpg&fm=jpg';
  const open = 'https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  const classyBar = 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  const classyBar2 = 'https://images.pexels.com/photos/2898205/pexels-photo-2898205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

  /* for reactStrap carousel */
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

  const imgWrapper = {
  //   height: '100%'
    height: '50vh'
    // width: '100vw'
  };
  const imgSize = {
    width: '100%',
    height: '100%',
    opacity: '0.9',
    // display: 'block',
    // backgroundSize: 'cover',
    // backgroundPosition: '50% 50%',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover'
  };

  const gitIn = {
    top: '15%',
    right: '10%',
    textShadow: '1px 1px grey'
  };

  return (
  // <div style={wrapper}>
  //   <UncontrolledCarousel items={items} style={carouselSize}/>
  // </div>

    <div>
      <Jumbotron fluid className=" p-0 mb-1">
        {/* <Container fluid className="p-0">
          <div className="border border-danger" style={imgWrapper}> */}
        <Container fluid className="p-0 position-relative" style={imgWrapper}>
          <img src={open} alt="jumbo" style={imgSize} className=""/>
          <h1 className="position-absolute " style={gitIn}>Welcome Back</h1>
          {/* <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
        </Container>
      </Jumbotron>
    </div>
  );
};
