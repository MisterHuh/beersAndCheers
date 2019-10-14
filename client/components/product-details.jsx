import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      quantity: 1,
      modal: false
    };
    this.retrieveProduct = this.retrieveProduct.bind(this);
    this.toggle = this.toggle.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
  }

  componentDidMount() {
    this.retrieveProduct(this.props.id);
  }

  incrementQuantity() {
    let quantity = this.state.quantity;
    let newQuantity = ++quantity;
    this.setState({ quantity: newQuantity });
  }

  decrementQuantity() {
    let quantity = this.state.quantity;
    let newQuantity = --quantity;
    if (this.state.quantity >= 2) {
      this.setState({ quantity: newQuantity });
    }
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
    const buttonPosition = {
      bottom: '50%'
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

    if (this.state.product) {
      return (
        <div id="mainWrapper" className="p-5">
          <div id="subWrapper" className="p-5">

            <div id="bodyWrapper" className="border border-danger d-flex flex-row" style={bodyWrapper}>

              <div id="imgContainer" className="text-center border border-dark" style={imgContainer}>
                <img src={product.image} alt="img" className="img-fluid border border-dark" style={imgSize}/>
              </div>

              <div id="infoWrapper" className="border border-danger d-flex flex-column" style={infoWrapper}>

                <div id="titleBrewery" className="border border-secondary text-center" style={headerSize}>
                  <div className="h-50">{product.name}</div>
                  <div className="h-50">{product.brewery}</div>
                </div>

                <div id="infoContainer" className="border border-success d-flex flex-row text-center align-items-center" style={statsSize}>

                  <div className="border border-dark h-100 w-50">
                    <div className="border border-dark my-3">ABV: {product.abv}</div>
                    <div className="border border-dark my-3">IBU: {product.ibu}</div>
                    <div className="border border-dark mt-3">AVAILABILITY: {product.availability}</div>
                    <div className="border border-dark mt-2 ">
                      <Button className="my-3 w-50"
                        style={buttonPosition}
                        onClick={() => { this.props.setView('catalog'); }}>Back To Catalog</Button>
                    </div>
                  </div>

                  <div className="my-3 border border-dark h-100 w-50">
                    <div className="border border-dark my-3">TYPE:{product.type}</div>
                    <div className="border border-dark my-3">{'$' + ((product.price) / 100).toFixed(2)}</div>
                    <div className="border border-dark mt-3">
                      <Button onClick={this.decrementQuantity} className="border border-dark ">-</Button>
                      <div className="border border-dark d-inline h-100">{this.state.quantity}</div>
                      <Button onClick={this.incrementQuantity} className="border border-dark ">+</Button>
                    </div>
                    <div className="mt-2">
                      <Button className="my-3 w-50" onClick={this.toggle}>Add To Cart</Button>
                      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Added To Cart!</ModalHeader>
                        <ModalBody style={modalBodyWrapper}>
                          <div className="border border-danger d-flex flex-row" style={modalWrapper}>
                            <div className="border border-dark w-50 text-center" style={modalContainer}>
                              <img src={product.image} alt="beerImg" className="border border-dark" style={modalImgContainer}/>
                            </div>
                            <div className="border border-dark w-50 text-center">
                              <div className="border border-dark h-25" >{product.name}</div>
                              <div className="border border-dark h-25">{product.brewery}</div>
                              <div className="border border-dark h-25">{'$' + ((product.price) / 100).toFixed(2)}</div>
                              <div className="border border-dark h-25">Quantity: 1</div>
                            </div>
                          </div>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="primary" onClick={() => this.props.setView('catalog', '')}>Continue Shopping</Button>{' '}
                          <Button color="secondary" onClick={() => this.props.setView('cart', '')}>Go To Cart</Button>
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
