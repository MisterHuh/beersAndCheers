import React from 'react';
import { Jumbotron } from './jumbotron';
import { ProductListItem } from './product-list-item';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      welcomeModal: true
    };
    this.getProducts = this.getProducts.bind(this);
    this.toggle = this.toggle.bind(this);
    this.showModalOnce = this.showModalOnce.bind(this);
  }

  toggle() {
    this.setState({ welcomeModal: !this.state.welcomeModal });
  }

  getProducts() {
    fetch(`/api/products.php`)
      .then(res => res.json())
      .then(products => {
        this.setState({ products });
      });
  }

  showModalOnce() {
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {

    const modalSize = {
      width: '100vw',
      height: '100vh'
      // backgroundColor: 'black'
    };

    const secondRow = {
      fontSize: '400%'
    };

    const thirdRow = {
      fontSize: '200%'
    };

    const lastRow = {
      fontSize: '350%'
    };

    const top = {
      // position: 'absolute',
      // top: '50%',
      // // left: '50%',
      // transform: 'translateY(- 50%)'
      lineHeight: '280%'
    };

    const top2 = {
      // position: 'absolute',
      // top: '50%',
      // // left: '0',
      // // right: '0',
      // left: '50%',
      // transform: 'translateY(- 50%) translateX(- 50%)',
      lineHeight: '225%',
      fontSize: '200%'
    };
    return (
      <React.Fragment>
        {/* { openingModal } */}
        <Modal isOpen={this.state.welcomeModal} toggle={this.toggle} className="" style={modalSize}>
          <ModalHeader>Age Verification</ModalHeader>
          <ModalBody >
            <div className="d-flex flex-column align-items-center p-relative">

              <div className="border-bottom pb-3">You must be at least 21 to enter</div>

              <div className="" style={secondRow}>Are you</div>

              <div className="d-flex flex-row">
                <div className="border-top border-bottom" style={top}>over</div>
                <div className="ml-4" style={thirdRow}>Twenty One?</div>
              </div>

              <div className="d-flex flex-row">
                <div onClick={() => this.toggle()}className="" style={lastRow}>Yes</div>
                <div className="border-top border-bottom mx-4" style={top2}>or</div>
                <div onClick={() => this.toggle()}className="" style={lastRow}>No</div>
              </div>

            </div>
          </ModalBody>
        </Modal>

        <Jumbotron />
        <ProductListItem product={this.state.products} setView={this.props.setView}/>
      </React.Fragment>
    );
  }

}

export default ProductList;
