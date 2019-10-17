import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export const ShippingForm = props => {
  return (
    <Form>

      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>First Name</Label>
            <Input placeholder="First Name" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>Last Name</Label>
            <Input placeholder="Last Name" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label>E-mail</Label>
        <Input placeholder="E-mail" />
      </FormGroup>
      <FormGroup>
        <Label>Phone Number</Label>
        <Input placeholder="Phone Number" />
      </FormGroup>
      <FormGroup>
        <Label >Street Address</Label>
        <Input placeholder="Street Address"/>
      </FormGroup>

      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label >City</Label>
            <Input placeholder="City" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label >State</Label>
            <Input id="exampleState" placeholder="State" />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label >Zip</Label>
            <Input id="exampleZip" placeholder="Zipcode"/>
          </FormGroup>
        </Col>
      </Row>
    </Form>

  );
};

export const BillingForm = () => {
  return (
    <Form>
      <FormGroup>
        <Label >Credit Card Number</Label>
        <Input placeholder="Card Number" />
      </FormGroup>
      <FormGroup>
        <Label >Full Name</Label>
        <Input placeholder="Full Name" />
      </FormGroup>

      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>MM/YY</Label>
            <Input placeholder="MM/YY" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>CVC</Label>
            <Input placeholder="CVC" />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};
