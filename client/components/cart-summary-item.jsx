import React from 'react';
import { Card, CardImg, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.removeItems = this.removeItems.bind(this);
  }

  removeItems() {
    this.props.deleteCartItems(this.props.item);
    this.toggle();
    this.props.setView('cart', '');

  }

  closeModal() {
    this.toggle();
    this.props.setView('cart', '');
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    const imgWrapper = {
      height: '25vh',
      width: '10vw'
    };
    const imgSize = {
      width: '50%',
      height: '100%'
    };

    const fontSize = {
      fontSize: '150%'
    };
    const modalBodyWrapper = {
      height: '50vh'
    };
    const modalWrapper = {
      height: '100%'
    };
    const modalContainer = {
      height: '100%'
    };
    const modalImgContainer = {
      height: '100%'
    };

    return (
      <Card className="d-flex flex-row rounded m-3" key={this.props.key}>

        <div style={imgWrapper} className="border border-success text-center">
          <CardImg src={this.props.item.image} alt="img" className="img-fluid border border-danger" style={imgSize} />
        </div>

        <div className="w-75  text-center">

          <div className="h-25 border border-dark" style={fontSize}>
            <div className="h-50 font-weight-bold">{this.props.item.name}</div>
            <div className="h-50 font-weight-bold">{this.props.item.brewery}</div>
          </div>

          <div className="h-25 border border-dark" style={fontSize}>
            <div className="h-50">{'$' + ((this.props.item.price) / 100).toFixed(2)}</div>
            <ButtonGroup>
              <Button className="border border-dark ">-</Button>
              <div className="border border-dark d-inline h-100 px-3">{this.props.item.count}</div>
              <Button className="border border-dark ">+</Button>
            </ButtonGroup>
          </div>

          <div className="h-50 border border-dark">
            <Button color="success" className="m-5">Update</Button>
            <Button color="danger" className="m-5" onClick={() => this.toggle() }>Remove</Button>

            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Remove From Cart</ModalHeader>
              {/* <ModalHeader toggle={this.toggle} onClick={this.props.addToCart(this.props.item, quantity)}>Added To Cart!</ModalHeader> */}
              <ModalBody style={modalBodyWrapper}>
                <div className="border border-danger d-flex flex-row" style={modalWrapper}>
                  <div className="border border-dark w-50 text-center" style={modalContainer}>
                    <img src={this.props.item.image} alt="beerImg" className="border border-dark" style={modalImgContainer} />
                  </div>
                  <div className="border border-dark w-50 text-center">
                    <div className="border border-dark h-25" >USE THE SAME FORMAT</div>
                    <div className="border border-dark h-25">FROM THE SAME MODAL USED </div>
                    <div className="border border-dark h-25">IN <strong>PRODUCT-DETAILS</strong> COMPONENT</div>
                    <div className="border border-dark h-25">MAYBE MAKE IT SIMPLER
                    AND REMEMBER TO KEEP THE SYTLE ATTRIBUTES THE SAME TOO</div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={() => this.closeModal()}>Keep In Cart</Button>
                <Button color="danger" onClick={() => this.removeItems()}>Remove From Cart</Button>
              </ModalFooter>
            </Modal>

          </div>

        </div>

      </Card>
    );
  }

}

export default CartSummaryItem;
