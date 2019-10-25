import React from 'react';
import { Jumbotron as Jumbo, Container } from 'reactstrap';
import { relative } from 'path';

export const Jumbotron = () => {

  const beerClink = './images/general/jumbotron.jpg';

  const imgWrapper = {
    height: '60vh'
  };
  const imgSize = {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover'
  };

  const lineOne = {
    top: '15%',
    right: '10%',
    color: 'white',
    textShadow: '1px 1px grey'
  };

  return (
    <div>
      <Jumbo fluid className=" p-0 mb-1">

        <Container fluid className="p-0 position-relative" style={imgWrapper}>
          <img src={beerClink} alt="jumbo" style={imgSize} className=""/>
          <h1 className="position-absolute " style={lineOne}>Welcome!</h1>
          {/* <h1 className="position-absolute " style={lineTwo}>Open 24/7</h1> */}
        </Container>
      </Jumbo>
    </div>
  );
};
