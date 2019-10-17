import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export const CheckoutForm = props => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Name" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">E-mail</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="E-mail" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Phone Number</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="123) 456 - 7890" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress">Street Address</Label>
        <Input type="text" name="address" id="exampleAddress" />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState" />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip" />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};
