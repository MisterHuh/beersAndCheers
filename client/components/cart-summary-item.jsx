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

    let currentView = this.props.view;
    let item = this.props.item;

    if (currentView === 'cart') {
      return (
        <div className="csiBody d-flex flex-row mx-auto my-4 border-bottom pb-2" key={this.props.key} >

          <div className="csiImgContainer text-center text-align-center">
            <span className="d-inline-block vertical-align-bottom h-50"></span>
            <img src={item.image} alt="img" className="csiImg img-fluid vertical-align-bottom"/>
          </div>

          <div className=" d-flex flex-column justify-content-center align-items-flex-end ml-2 text-left w-75">

            <div
              onClick={() => this.props.setView('details', item.product_id)}
              className=" font-weight-bold ml-4 my-2 underline-on-hover"
            >{item.name}</div>
            <div className=" font-weight-bold ml-4 my-2">{item.brewery}</div>

            <div className=" ml-4 my-2">
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
              <div
                onClick={() => this.updateCart()}
                className="rounded w-50 d-inline px-2 py-2 bg-success text-white font-weight-bold">Update</div>
              <div
                onClick={() => this.toggle()}
                className="rounded w-50 d-inline ml-5 px-2 py-2 bg-danger text-white font-weight-bold">Remove</div>
            </div>

            <Modal id="removeModal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Remove From Cart</ModalHeader>
              <ModalBody>
                <div className="modalBody m-auto d-flex flex-row">
                  <img src={item.image} alt="beerImg" className="modalImg rounded w-50 text-center border-right p-3" />
                  <div className="w-50 text-center">

                    <div className="border-bottom rounded h-25">
                      <div className="modalText h-25">{item.name}</div>
                    </div>
                    <div className="border-bottom rounded h-25">
                      <div className="modalText h-25">{item.brewery} </div>
                    </div>
                    <div className="border-bottom rounded h-25">
                      <div className="modalText h-25">
                        {'$ ' + ((item.price) / 100).toFixed(2)}
                      </div>
                    </div>
                    <div className="rounded h-25">
                      <div className="modalText h-25">Quantity: <strong>{this.state.count}</strong></div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <div
                  onClick={() => this.closeModal()}
                  className="rounded px-2 py-1 bg-primary text-white font-weight-bold">Keep In Cart</div>
                <div
                  onClick={() => this.removeItems()}
                  className="rounded px-2 py-1 bg-danger text-white font-weight-bold">Remove From Cart</div>
              </ModalFooter>
            </Modal>

          </div>

        </div>
      );

    } else {
      return (

        <React.Fragment>
          <div className="csiBody d-flex flex-row my-4 border-bottom pb-2" key={this.props.key} >

            <div className="csiImgContainer text-center text-align-center">
              <span className="d-inline-block vertical-align-bottom h-50"></span>
              <img src={item.image} alt="img" className="csiImg img-fluid vertical-align-bottom" />
            </div>

            <div className=" d-flex flex-column justify-content-center align-items-flex-end ml-2 text-left">

              <div
                onClick={() => this.props.setView('details', item.product_id)}
                className=" font-weight-bold ml-4 my-2 underline-on-hover"
              >{item.name}</div>
              <div className=" font-weight-bold ml-4 my-2">{item.brewery}</div>
              <div className="ml-4 my-2">{'$ ' + ((item.price) / 100).toFixed(2)}</div>
              <div className="ml-4 my-2">Quantity: <strong>{this.state.count}</strong></div>
            </div>

          </div>
        </React.Fragment>
      );
    }

  }

}

export default CartSummaryItem;
