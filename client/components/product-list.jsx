import React from 'react';
import { Jumbotron } from './jumbotron';
import { ProductListItem } from './product-list-item';
import { Modal } from 'reactstrap';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      welcomeModal: !localStorage.ageVerified,
      noModal: false,
      refreshModal: false
    };
    this.getProducts = this.getProducts.bind(this);
    this.ageVerified = this.ageVerified.bind(this);
    this.proceed = this.proceed.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  getProducts() {
    fetch(`/api/products.php`)
      .then(res => res.json())
      .then(products => {
        this.setState({ products });
      });
  }

  ageVerified() {
    this.setState({ welcomeModal: !this.state.welcomeModal });
    this.setState({ noModal: !this.state.noModal });
  }

  proceed() {
    localStorage.setItem('ageVerified', 'true');
    this.setState({ noModal: !this.state.noModal });
  }

  refresh() {
    this.setState({ noModal: !this.state.noModal });
    this.setState({ refreshModal: !this.refreshModal });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <React.Fragment>
        <Modal isOpen={this.state.welcomeModal} backdrop="static" keyboard={false} className="">
          <div className="rounded text-center">
            <div className="welcomeModalHeader mt-3">Age Verification</div>
            <div className="welcomeModal d-flex flex-column align-items-center">
              <div className="mt-2">You must be at least 21 to enter</div>
              <div className=" my-3">Are you over 21?</div>
              <div className="d-flex flex-row">
                <div onClick={() => this.ageVerified()} className="welcomeButton rounded text-white font-weight-bold m-auto px-2 py-1 bg-warning">Yes</div>
                <div className="px-5">or</div>
                <div onClick={() => this.refresh()} className="welcomeButton rounded text-white font-weight-bold m-auto px-2 py-1 bg-danger" >No</div>
              </div>
            </div>
          </div>
        </Modal>

        <Modal isOpen={this.state.noModal} backdrop="static" keyboard={false} className="">
          <div className="rounded text-center">
            <div className="welcomeModalHeader mt-3">DISCLAIMER</div>
            <div className="welcomeModal d-flex flex-column align-items-center">
              <div className="mt-2">Please know that this is for</div>
              <div className=" my-3">demonstration purposes only.</div>

              <div className="d-flex flex-row">
                <div onClick={() => this.proceed()} className="welcomeButton rounded text-white font-weight-bold m-auto px-2 py-1 bg-warning">Proceed</div>
              </div>

            </div>
          </div>
        </Modal>

        <Modal isOpen={this.state.refreshModal} backdrop="static" keyboard={false} className="">
          <div className="rounded text-center">
            <div className="welcomeModalHeader mt-3">DISCLAIMER</div>
            <div className="welcomeModal refreshModal d-flex flex-column align-items-center">
              <div className="mt-2">You must be at least <strong>21 years</strong></div>
              <div className=" my-3"><strong>or older</strong> to enter this website</div>
            </div>
          </div>
        </Modal>

        <Jumbotron />
        <ProductListItem product={this.state.products} setView={this.props.setView}/>
      </React.Fragment>
    );
  }
}

export default ProductList;
