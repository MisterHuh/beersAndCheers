import React from 'react';
import { Card, CardImg, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      count: 0
    };
    this.toggle = this.toggle.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.removeItems = this.removeItems.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.updatecart = this.updateCart.bind(this);
  }

  incrementQuantity() {
    let currentCount = this.state.count;
    let newCount = ++currentCount;
    this.setState({ count: newCount });
  }

  decrementQuantity() {
    let currentCount = this.state.count;
    let newCount = --currentCount;
    if (this.state.count >= 2) {
      this.setState({ count: newCount });
    }
  }

  updateCart() {
    let item = this.props.item;
    let newCount = this.state.count;
    // need to send the item (for the product_id) and this.state.count, NOT the item.count
    this.props.updateCartItems(item, newCount);
    this.props.retrieveCart();
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

  componentDidMount() {
    let count = parseInt(this.props.item.count);
    this.setState({ count });
  }

  render() {
    // const cardSize = {
    //   height: '50vh'
    // };
    const imgWrapper = {
      height: '30vh',
      width: '18vw'
    };
    const imgSize = {
      width: '50%',
      height: '100%'
    };

    // const countSize = {
    //   width: '5vw'
    // };

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

    let currentView = this.props.view;
    // console.log('current view is: ', currentView);
    console.log('item is: ', this.props.item);

    if (currentView === 'cart') {
      return (
        <Card className="d-flex flex-row rounded mx-3 p-5" key={this.props.key} >

          <div className="border border-success text-center" style={imgWrapper}>
            <CardImg src={this.props.item.image} alt="img" className="img-fluid border border-danger" style={imgSize} />
          </div>

          <div className="w-75 border border-danger text-center p-3">

            {/* <div className="h-25 border border-dark" style={fontSize}> */}
            <div className=" font-weight-bold ">{this.props.item.name}</div>
            <div className=" font-weight-bold ">{this.props.item.brewery}</div>
            {/* </div> */}

            {/* <div className="h-25 border border-dark" style={fontSize}> */}
            <div className="border border-dark">{'$' + ((this.props.item.price) / 100).toFixed(2)}</div>
            <div className="border border-dark">
              {/* <ButtonGroup> */}
              {/* <Button onClick={this.decrementQuantity} className="border border-dark ">-</Button> */}
              <i onClick={this.decrementQuantity} className="fas fa-minus-square"></i>
              <div className="border border-dark d-inline px-2">{this.state.count}</div>
              {/* <Button onClick={this.incrementQuantity} className="border border-dark ">+</Button> */}
              <i onClick={this.incrementQuantity} className="fas fa-plus-square"></i>
              {/* </ButtonGroup> */}
            </div>
            {/* </div> */}

            {/* <div className="h-50 border border-dark"> */}
            <div className="border border-dark">
              <Button outline color="primary" onClick={() => this.updateCart()}>Update</Button>
              <Button outline color="danger" onClick={() => this.toggle()}>Remove</Button>
            </div>

            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Remove From Cart</ModalHeader>
              <ModalBody style={modalBodyWrapper}>
                <div className="border border-danger d-flex flex-row" style={modalWrapper}>
                  <div className="border border-dark w-50 text-center" style={modalContainer}>
                    <img src={this.props.item.image} alt="beerImg" className="border border-dark" style={modalImgContainer} />
                  </div>
                  <div className="border border-dark w-50 text-center">
                    <div className="border border-dark h-25" >USE THE SAME FORMAT</div>
                    <div className="border border-dark h-25">FROM THE SAME MODAL USED </div>
                    <div className="border border-dark h-25">IN <strong>PRODUCT-DETAILS</strong> COMPONENT</div> {/* make sure to use this.state.count for qty */}
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
            {/* </div> */}

          </div>

        </Card>
      );
    } else {
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
                <Button onClick={this.decrementQuantity} className="border border-dark ">-</Button>
                <div className="border border-dark d-inline h-100 px-3">{this.state.count}</div>
                <Button onClick={this.incrementQuantity} className="border border-dark ">+</Button>
              </ButtonGroup>
            </div>

            <div className="h-50 border border-dark">
              <Button color="success" className="m-5" onClick={() => this.updateCart()}>Update</Button>
              <Button color="danger" className="m-5" onClick={() => this.toggle()}>Remove</Button>

              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Remove From Cart</ModalHeader>
                <ModalBody style={modalBodyWrapper}>
                  <div className="border border-danger d-flex flex-row" style={modalWrapper}>
                    <div className="border border-dark w-50 text-center" style={modalContainer}>
                      <img src={this.props.item.image} alt="beerImg" className="border border-dark" style={modalImgContainer} />
                    </div>
                    <div className="border border-dark w-50 text-center">
                      <div className="border border-dark h-25" >USE THE SAME FORMAT</div>
                      <div className="border border-dark h-25">FROM THE SAME MODAL USED </div>
                      <div className="border border-dark h-25">IN <strong>PRODUCT-DETAILS</strong> COMPONENT</div> {/* make sure to use this.state.count for qty */}
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

}

export default CartSummaryItem;
