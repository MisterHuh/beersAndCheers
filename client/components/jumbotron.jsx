import React from 'react';
import { Jumbotron as Jumbo, Container } from 'reactstrap';
import { relative } from 'path';

export const Jumbotron = () => {

  const beerClink = './images/general/jumbotron.jpg';

  return (
    <div>
      <Jumbo fluid className="p-0 mb-1">
        <Container fluid className="jumbotronImgContainer p-0 position-relative">
          <img src={beerClink} alt="jumbo" className="jumbotronImg"/>
          <h1 className="jumbotronText position-absolute">Welcome!</h1>
        </Container>
      </Jumbo>
    </div>
  );
};
