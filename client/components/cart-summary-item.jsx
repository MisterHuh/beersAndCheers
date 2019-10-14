import React from 'react';
import { Card, CardImg, CardTitle, Button } from 'reactstrap';

export const CartSummaryItem = props => {

  const imgWrapper = {
    height: '40vh',
    width: '20vw'
  };
  const test = {
    width: '100%',
    height: '100%'
  };
  const imgSize = {
    width: '100%',
    height: '100%'
  };

  const fontSize = {
    fontSize: '150%'
  };

  return (
    <Card className="d-flex flex-row border border-dark rounded m-3">
      {/* <div > */}

      <div style={imgWrapper}>
        {/* <div stye={test}> */}
        {/* <div> */}
        <CardImg src={props.indivItem.image} alt="img" className="img-fluid border border-danger" style={imgSize}/>
        {/* </div> */}
      </div>

      <div className="w-75 border border-sucess text-center">

        <div className="h-25 border border-dark" style={fontSize}>
          <div className="h-50 font-weight-bold border border-dark">{props.indivItem.name}</div>
          <div className="h-50 font-weight-bold border border-dark">{props.indivItem.brewery}</div>
        </div>

        <div className="h-25 border border-dark" style={fontSize}>
          <div className="h-50 border border-dark">{'$' + ((props.indivItem.price) / 100).toFixed(2)}</div>
          <Button className="border border-dark ">-</Button>
          <div className="border border-dark d-inline h-100">{props.indivItem.count}</div>
          <Button className="border border-dark ">+</Button>
        </div>

        <div className="h-50 border border-dark">
          <Button color="success" className="align-items-center">Update</Button>
          <Button color="danger" onClick={() => props.setView('catalog', '')}>Remove</Button>
        </div>

      </div>

      {/* </div> */}
    </Card>
  );

};
