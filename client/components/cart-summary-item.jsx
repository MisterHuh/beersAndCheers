import React from 'react';
import { Card, CardImg, Button, ButtonGroup } from 'reactstrap';

export const CartSummaryItem = props => {

  const imgWrapper = {
    height: '25vh',
    width: '10vw'
  };
  const test = {
    width: '100%',
    height: '100%'
  };
  const imgSize = {
    width: '50%',
    height: '100%'
  };

  const fontSize = {
    fontSize: '150%'
  };

  return (
    <Card className="d-flex flex-row rounded m-3" key={props.key}>

      <div style={imgWrapper} className="border border-success text-center">
        <CardImg src={props.item.image} alt="img" className="img-fluid border border-danger" style={imgSize} />
      </div>

      <div className="w-75  text-center">

        <div className="h-25 border border-dark" style={fontSize}>
          <div className="h-50 font-weight-bold">{props.item.name}</div>
          <div className="h-50 font-weight-bold">{props.item.brewery}</div>
        </div>

        <div className="h-25 border border-dark" style={fontSize}>
          <div className="h-50">{'$' + ((props.item.price) / 100).toFixed(2)}</div>
          <ButtonGroup>
            <Button className="border border-dark ">-</Button>
            <div className="border border-dark d-inline h-100 px-3">{props.item.count}</div>
            <Button className="border border-dark ">+</Button>
          </ButtonGroup>
        </div>

        <div className="h-50 border border-dark">
          <Button color="success" className="m-5">Update</Button>
          <Button color="danger" className="m-5" onClick={() => props.setView('catalog', '')}>Remove</Button>
        </div>

      </div>

    </Card>
  );

};
