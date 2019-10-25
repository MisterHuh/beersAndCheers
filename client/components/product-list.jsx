import React from 'react';
import { Jumbotron } from './jumbotron';
import { ProductListItem } from './product-list-item';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      welcomeModal: !localStorage.ageVerified
      // ageVerified: false
    };
    this.getProducts = this.getProducts.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  getProducts() {
    fetch(`/api/products.php`)
      .then(res => res.json())
      .then(products => {
        this.setState({ products });
      });
  }

  toggle() {
    this.setState({ welcomeModal: !this.state.welcomeModal });

    /* upon clicking either YES or NO, set ageVerified to TRUE */
    localStorage.setItem('ageVerified', 'true');
  }

  componentDidMount() {
    this.getProducts();

    // if (localStorage.ageVerified) {
    //   this.setState({ welcomeModal: false });
    // } else {
    //   this.setState({ welcomeModal: true });
    // }

    // if ageVerified is false, that means the user hasn't clicked the disclaimer.
    // if it is false, welcomeModal should be true, to display the modal to verify age
    // if it is true, go to "catalog"

    // localStorage.ageVerified ? this.setState({ welcomeModal: false }) : this.setState({ welcomeModal: true });

    // localStorage.ageVerified === 'true' ? this.setState({ ageVerified: false }) : this.setState({ ageVerified: true });
    // this.state.ageVerified ? this.setState({ welcomeModal: false }) : this.setState({ welcomeModal: false });
  }

  render() {
    const secondRow = {
      fontSize: '400%'
    };

    const thirdRow = {
      fontSize: '200%'
    };

    const lastRow = {
      fontSize: '350%',
      cursor: 'pointer'
    };

    const top = {
      lineHeight: '280%'
    };

    const top2 = {
      lineHeight: '225%',
      fontSize: '200%'
    };
    return (
      <React.Fragment>
        <Modal isOpen={this.state.welcomeModal} backdrop="static" keyboard={false} className="">
          <ModalHeader>Age Verification</ModalHeader>
          <ModalBody>
            <div className="d-flex flex-column align-items-center p-relative">

              <div className="border-bottom pb-3">You must be at least 21 to enter</div>

              <div className="" style={secondRow}>Are you</div>

              <div className="d-flex flex-row">
                <div className="border-top border-bottom" style={top}>over</div>
                <div className="ml-4" style={thirdRow}>Twenty One?</div>
              </div>

              <div className="d-flex flex-row">
                <div onClick={() => this.toggle()}className="text-primary" style={lastRow}>Yes</div>
                <div className="border-top border-bottom mx-4" style={top2}>or</div>
                <div onClick={() => this.toggle()}className="text-danger" style={lastRow}>No</div>
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
