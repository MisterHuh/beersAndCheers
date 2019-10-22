import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';

export const ProductListItem = props => {

  const testPic = './test.png';
  const test2 = './test2.png';

  const cardSize = {
    height: '40vh',
    backgroundColor: 'rgba(245, 245, 245, 0.6)'
  };
  const imgWrapper = {
    height: '100%'
  };
  const imgSize = {
    width: '50%',
    height: '100%',
    backgroundSize: 'cover'
  };

  /* original */
  // const cardSize = {
  //   height: '35%',
  //   backgroundColor: 'rgba(245, 245, 245, 0.6)'
  // };
  // const imgWrapper = {
  //   height: '80%'
  // };
  // const imgSize = {
  //   width: '100%',
  //   height: '100%',
  //   backgroundSize: 'cover'
  // };

  return (
    <div className="d-flex flex-row flex-wrap justify-content-center text-center pb-5">
      {props.product.map(item => {
        return (
          <Card key={item.id}
            className="col-2 rounded m-3"
            style = {cardSize}
            onClick={() => {
              props.setView('details', item.id);
            }}>
            <div style={imgWrapper}>
              <CardImg src={item.image} alt={item.image} className="m-1 img-fluid" style={imgSize} />
              {/* <CardImg src={test2} alt="img" className="m-1 img-fluid" style={imgSize} /> */}
            </div>
            <CardTitle className="mx-1 mb-1 mt-2 font-weight-bold">{item.name}</CardTitle>
            <CardTitle className="m-1">{item.brewery}</CardTitle>
            <CardTitle className="m-1">{item.type}</CardTitle>
            <CardTitle className="m-1 text-muted">{'$' + ((item.price) / 100).toFixed(2)}</CardTitle>
          </Card>
        );
      })
      }
    </div>
  );
};
