import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
    const cardSize = {
      height: '40vh',
      width: '30vw'
    };
    const imgWrapper = {
      width: '10vw'
    };
    const imgSize = {
      width: '100%',
      height: '100%'
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
    const modalCardSize = {
      height: '20vh',
      width: '15vw',
      fontSize: '75%'
    };
    const modalImgWrapper = {
      width: '5vh'
    };
    const modalImgSize = {
      width: '100%',
      height: '100%'
    };

    let currentView = this.props.view;
    // console.log('LOADING COUNTER');

    if (currentView === 'cart') {
      return (

        // <div className="border border-dark m-auto" >
        <div className="d-flex flex-row m-auto border-bottom p-4" key={this.props.key} style={cardSize} > {/* mx-3 p-5 */}

          <div className=" text-center" style={imgWrapper}>
            <img src={this.props.item.image} alt="img" className="img-fluid " style={imgSize} />
          </div>

          <div className=" d-flex flex-column justify-content-center align-items-flex-end pt-5 ml-2 text-left w-75">

            {/* <div className="h-25 " style={fontSize}> */}
            <div className=" font-weight-bold ml-4 my-2">{this.props.item.name}</div>
            <div className=" font-weight-bold ml-4 my-2">{this.props.item.brewery}</div>
            {/* </div> */}

            {/* <div className="h-25 " style={fontSize}> */}
            <div className=" mx-3 my-2">
              <div className="d-inline ml-2">{'$' + ((this.props.item.price) / 100).toFixed(2)}</div>
              <div className="d-inline mr-2 float-right">
                {/* <ButtonGroup> */}
                {/* <Button onClick={this.decrementQuantity} className=" ">-</Button> */}
                <i onClick={this.decrementQuantity} className="fas fa-minus-square"></i>
                <div className=" d-inline px-2"><strong>{this.state.count}</strong></div>
                {/* <Button onClick={this.incrementQuantity} className=" ">+</Button> */}
                <i onClick={this.incrementQuantity} className="fas fa-plus-square"></i>
                {/* </ButtonGroup> */}
              </div>
            </div>
            {/* </div> */}

            {/* <div className="h-50 "> */}
            <div className="ml-4 my-2 ">
              <Button outline color="success" className="mr-4" onClick={() => this.updateCart()}>Update</Button>
              <Button outline color="danger" className="ml-4" onClick={() => this.toggle()}>Remove</Button>
            </div>

            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Remove From Cart</ModalHeader>
              <ModalBody style={modalBodyWrapper}>
                <div className=" d-flex flex-row" style={modalWrapper}>
                  <div className=" w-50 text-center" style={modalContainer}>
                    <img src={this.props.item.image} alt="beerImg" className="" style={modalImgContainer} />
                  </div>
                  <div className=" w-50 text-center">
                    <div className=" h-25" >USE THE SAME FORMAT</div>
                    <div className=" h-25">FROM THE SAME MODAL USED </div>
                    <div className=" h-25">IN <strong>PRODUCT-DETAILS</strong> COMPONENT</div> {/* make sure to use this.state.count for qty */}
                    <div className=" h-25">MAYBE MAKE IT SIMPLER
                    AND REMEMBER TO KEEP THE SYTLE ATTRIBUTES THE SAME TOO</div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => this.closeModal()}>Keep In Cart</Button>
                <Button color="danger" onClick={() => this.removeItems()}>Remove From Cart</Button>
              </ModalFooter>
            </Modal>
            {/* </div> */}

          </div>

        </div>
        // </div>
      );
    } else if (this.props.modalStatus) {
      return (
        <div className="border border-danger d-flex flex-row border-top flex-wrap w-50" key={this.props.key} style={modalCardSize} > {/* mx-3 p-5 */}
          <div className=" text-center" style={modalImgWrapper}>
            <img src={this.props.item.image} alt="img" className="img-fluid " style={modalImgSize} />
          </div>
          <div className="d-flex flex-column justify-content-center ml-2 text-left w-75">
            <div className=" font-weight-bold ml-4 my-2">{this.props.item.name}</div>
            <div className=" font-weight-bold ml-4 my-2">{this.props.item.brewery}</div>
            <div className="ml-4 my-2 d-inline">{'$' + ((this.props.item.price) / 100).toFixed(2)}
              <div className="d-inline float-right px-2 mr-3">Quantity: <strong>{this.state.count}</strong></div>
            </div>
          </div>
        </div>
      );
    } else if (currentView === 'checkout') {
      return (

        // <div className="border border-dark m-auto" >
        <div className="d-flex flex-row m-auto border-top p-4" key={this.props.key} style={cardSize} > {/* mx-3 p-5 */}

          <div className=" text-center" style={imgWrapper}>
            <img src={this.props.item.image} alt="img" className="img-fluid " style={imgSize} />
          </div>

          <div className="d-flex flex-column justify-content-center ml-2 text-left w-75">

            {/* <div className="h-25 " style={fontSize}> */}
            {/* <div className=" font-weight-bold ml-4 my-2">{this.props.item.name}</div> */}
            <div className=" font-weight-bold ml-4 my-2">{this.props.item.name}</div>
            <div className=" font-weight-bold ml-4 my-2">{this.props.item.brewery}</div>
            {/* </div> */}

            {/* <div className="h-25 " style={fontSize}> */}
            <div className="ml-4 my-2 d-inline">{'$' + ((this.props.item.price) / 100).toFixed(2)}
              <div className="d-inline float-right px-2 mr-3">Quantity: <strong>{this.state.count}</strong></div>
            </div>
            {/* <div className="border border-danger ml-4 my-2 d-inline"> */}
            {/* </div> */}
            {/* </div> */}

            {/* </div> */}

          </div>

        </div>
        // </div>
      );
    }

  }

}

export default CartSummaryItem;
