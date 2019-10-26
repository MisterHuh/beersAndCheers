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

    // this is for checkout and confirmatoin
    const cardSize2 = {
      height: '33vh',
      width: '30vw'
    };

    let currentView = this.props.view;
    let item = this.props.item;

    if (currentView === 'cart') {
      return (
        <div className="csiCartViewBody d-flex flex-row mx-auto my-4 border-bottom pb-2" key={this.props.key} >

          <div className="csiImgContainer text-center">
            <img src={item.image} alt="img" className="csiImg img-fluid"/>
          </div>

          <div className=" d-flex flex-column justify-content-center align-items-flex-end ml-2 text-left w-75">

            <div
              onClick={() => this.props.setView('details', item.product_id)}
              className=" font-weight-bold ml-4 my-2 underline-on-hover"
            >{item.name}</div>
            <div className=" font-weight-bold ml-4 my-2">{item.brewery}</div>

            <div className=" mx-3 my-2">
              <div className="d-inline mr-5">
                {'$ ' + ((item.price) / 100).toFixed(2)}
              </div>
              <div className="d-inline ml-5">
                <i onClick={this.decrementQuantity} className="fas fa-minus-square"></i>
                <div className=" d-inline px-2"><strong>{this.state.count}</strong></div>
                <i onClick={this.incrementQuantity} className="fas fa-plus-square"></i>
              </div>
            </div>

            <div className="ml-4 my-2 ">
              <Button
                onClick={() => this.updateCart()}
                outline color="success" className="mr-3 bg-success text-white font-weight-bold">Update</Button>
              <Button
                onClick={() => this.toggle()}
                outline color="danger" className="ml-3 bg-danger text-white font-weight-bold">Remove</Button>
            </div>

            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Remove From Cart</ModalHeader>
              <ModalBody>
                <div className="csiRemoveModal d-flex flex-row">
                  <div className=" w-50 text-center border-right">
                    <img src={item.image} alt="beerImg" className="csiModalImg my-5" />
                  </div>
                  <div className="w-50 text-center">

                    <div className="border-bottom rounded h-25 p-0">
                      <div className="csiRemoveMOdalText h-25">{item.name}</div>
                    </div>
                    <div className="border-bottom rounded h-25 p-0">
                      <div className="csiRemoveMOdalText h-25">{item.brewery} </div>
                    </div>
                    <div className="border-bottom rounded h-25 p-0">
                      <div className="csiRemoveMOdalText h-25">
                        {'$ ' + ((item.price) / 100).toFixed(2)}
                      </div>
                    </div>
                    <div className="rounded h-25 p-0">
                      <div className="csiRemoveMOdalText h-25">Quantity: <strong>{this.state.count}</strong></div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={() => this.closeModal()}
                  color="primary" className="bg-primary text-white font-weight-bold">Keep In Cart</Button>
                <Button
                  onClick={() => this.removeItems()}
                  color="danger" className="bg-danger text-white font-weight-bold">Remove From Cart</Button>
              </ModalFooter>
            </Modal>

          </div>

        </div>
      );
    } else {
      return (
        <div className="csiOtherViewBody d-flex flex-row m-auto p-4 border-bottom" key={this.props.key} style={cardSize2}>
          <div className="csiImgContainer text-center">
            <img src={item.image} alt="img" className="csiImg img-fluid " />
          </div>
          <div className="d-flex flex-column justify-content-center ml-2 text-left w-75">
            <div
              onClick={() => this.props.setView('details', item.product_id)}
              className=" font-weight-bold ml-4 my-2 underline-on-hover"
            >{item.name}</div>
            <div className=" font-weight-bold ml-4 my-2">{item.brewery}</div>
            <div className="ml-4 my-2 d-inline">{'$ ' + ((item.price) / 100).toFixed(2)}
              <div className="d-inline float-right px-2 mr-3">Quantity: <strong>{this.state.count}</strong></div>
            </div>
          </div>
        </div>
      );
    }

  }

}

export default CartSummaryItem;
