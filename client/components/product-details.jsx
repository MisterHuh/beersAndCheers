import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      modal: false
    };
    this.retrieveProduct = this.retrieveProduct.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.retrieveProduct(this.props.id);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  retrieveProduct(props) {
    fetch(`/api/products.php?id=` + this.props.id)
      .then(res => res.json())
      .then(product => { this.setState({ product }); });
  }

  render() {
    const product = this.state.product;

    const bodyWrapper = {
      height: '50vh'
    };
    const imgContainer = {
      height: '100%',
      width: '30%',
      display: 'inline-block'
    };
    const imgSize = {
      height: '100%',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
    };
    const infoWrapper = {
      width: '70%'
    };
    const headerSize = {
      height: '30%',
      width: '100%',
      fontSize: '150%'
    };
    const statsSize = {
      height: '70%',
      fontSize: '125%'
    };

    if (this.state.product) {
      return (
        <div id="mainWrapper" className="p-5">
          <div id="subWrapper" className="p-5">

            <div id="bodyWrapper" className="border border-danger d-flex flex-row" style={bodyWrapper}>

              <div id="imgContainer" className="text-center" style={imgContainer}>
                <img src={product.image} alt="img" className="img-fluid" style={imgSize}/>
              </div>

              <div id="infoWrapper" className="border border-danger d-flex flex-column" style={infoWrapper}>

                <div id="titleBrewery" className="border border-secondary text-center" style={headerSize}>
                  <div className="h-50">{product.name}</div>
                  <div className="h-50">{product.brewery}</div>
                </div>

                <div id="infoContainer" className="border border-success d-flex flex-row text-center align-items-center" style={statsSize}>

                  <div className="border border-dark h-100 w-50">
                    <div className="my-3 border border-success">ABV: {product.abv}</div>
                    <div className="my-3 border border-success">IBU: {product.ibu}</div>
                    <div className="my-3 border border-success">AVAILABILITY: {product.availability}</div>
                    <div className="border border-success">
                      <Button className="my-3 border border-success"
                        onClick={() => { this.props.setView('catalog'); }}>Back To Catalog</Button>
                    </div>
                  </div>

                  <div className="my-3 border border-dark h-100 w-50">
                    <div className="my-3 border border-success">TYPE: {product.type}</div>
                    <div className="my-3 border border-success">{'$' + ((product.price) / 100).toFixed(2)}</div>
                    <div className="my-3 border border-success">- 1 +</div>
                    <div className="border border-success">
                      <Button className="my-3 border border-success" onClick={this.toggle}>Add To Cart</Button>
                      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>{product.name}</ModalHeader>
                        <ModalBody>
                          <div>{product.brewery}</div>
                          <div>{'$' + ((product.price) / 100).toFixed(2)}</div>
                          <div>Quantity: 1</div>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="primary" onClick={() => this.props.setView('catalog', '')}>Continue Shopping</Button>{' '}
                          <Button color="secondary" onClick={this.toggle}>Go To Cart</Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  </div>

                </div> {/* end of infoContainer */}

              </div> {/* end of infoWrapper */}

            </div> {/* end of bodyWrapper */}

            <div id="productDesc" className="border border-info" >
              <div className="border border-warning p-2">{product.description}</div>
            </div>

          </div>
        </div>

      );
    } else {
      return null;
    }
  }

}

export default ProductDetails;
