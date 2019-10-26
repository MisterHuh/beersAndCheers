import React from 'react';
import { Jumbotron } from './jumbotron';
import { ProductListItem } from './product-list-item';
import { Button, Modal } from 'reactstrap';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      welcomeModal: !localStorage.ageVerified
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
    localStorage.setItem('ageVerified', 'true');
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <React.Fragment>
        <Modal isOpen={this.state.welcomeModal} backdrop="static" keyboard={false} className="">
          <div className="rounded text-center">
            <div className="mt-3">Age Verification</div>
            <div className="welcomeModal d-flex flex-column align-items-center">
              <div className="mt-2">You must be at least 21 to enter</div>
              <div className=" my-3">Are you over 21?</div>
              <div className="d-flex flex-row">
                <Button onClick={() => this.toggle()}className="bg-warning">Yes</Button>
                <div className="px-5">or</div>
                <Button onClick={() => this.toggle()}className="bg-danger" >No</Button>
              </div>
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
