import React from 'react';
import { Button, Tooltip, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      quantity: 1,
      modal: false,
      abvToolTipOpen: false,
      ibuToolTipOpen: false
    };
    this.retrieveProduct = this.retrieveProduct.bind(this);
    this.toggle = this.toggle.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.abvToggle = this.abvToggle.bind(this);
    this.ibuToggle = this.ibuToggle.bind(this);
  }

  componentDidMount() {
    this.retrieveProduct(this.props.id);
  }

  abvToggle() {
    this.setState({ abvToolTipOpen: !this.state.abvToolTipOpen });
  }

  ibuToggle() {
    this.setState({ ibuToolTipOpen: !this.state.ibuToolTipOpen });
  }

  addToCart() {
    let product = this.state.product;
    let quantity = this.state.quantity;
    this.props.addToCart(product.id, quantity);
    this.toggle();
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
    let quantity = this.state.quantity;

    const bodyWrapper = {
      height: '50vh'
    };
    const imgContainer = {
      height: '75%',
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
      height: '80%'
    };
    const testSize = {
      position: 'relative',
      top: '34%'
    };

    const cursor = {
      cursor: 'pointer',
      width: '5%'
    };

    let availabilityVerbiage;
    if (!this.state.product) {
      return null;
    } else {
      this.state.product.availability === 'Year Round'
        ? availabilityVerbiage = 'Available'
        : availabilityVerbiage = null;
    }

    const abvIcon = './abv.png';
    const ibuIcon = './ibu.png';

    if (this.state.product) {
      return (

        <div id="mainWrapper" className="p-5">

          <div id="bodyWrapper" className=" d-flex flex-row border rounded k" style={bodyWrapper}>

            <div id="imgContainer" className="text-center pb-2 border-right m-auto rounded" style={imgContainer}>
              <img src={product.image} alt="img" className="img-fluid" style={imgSize}/>
            </div>

            <div id="infoWrapper" className=" d-flex flex-column" style={infoWrapper}>

              <div id="titleBrewery" className="text-center border-bottom rounded" style={headerSize}>
                <div className="h-50 pt-2">{product.name}</div>
                <div className="h-50">{product.brewery}</div>
              </div>

              <div id="infoContainer" className="d-flex flex-row text-center align-items-center" style={statsSize}>

                <div className=" h-100 w-50 border-right rounded">

                  <div className=" my-3">{product.abv}%
                    <div className="d-inline ml-2">ABV</div>
                    {/* <i id="abvInfo" className="ml-2 d-inline fas fa-question-circle" style={cursor}></i> */}
                    <img id="abvInfo" src={abvIcon} className="ml-2 d-inline fas fa-question-circle" style={cursor}></img>
                    <Tooltip placement="right" isOpen={this.state.abvToolTipOpen} target="abvInfo" className="bg-primary" toggle={this.abvToggle}>
                      <strong>Alcohol By Volume</strong> measures how much alcohol is in the drink
                    </Tooltip>
                  </div>

                  <div className=" my-3">{product.ibu}
                    <div className="d-inline ml-2">IBU</div>
                    <img id="ibuInfo" src={ibuIcon} className="ml-2 d-inline fas fa-question-circle" style={cursor}></img>
                    {/* <i id="ibuInfo" className="ml-2 d-inline fas fa-question-circle" style={cursor}></i> */}
                    <Tooltip placement="right" isOpen={this.state.ibuToolTipOpen} target="ibuInfo" className="bg-success" toggle={this.ibuToggle}>
                      <strong> International Bitterness Units</strong> are a chemical measurement of the number of bittering compounds
                    </Tooltip>
                  </div>
                  <div className=" mt-3">{availabilityVerbiage}<div className="d-inline ml-1">{product.availability}</div></div>

                  <div className=" mt-2 ">
                    <Button
                      className="my-3 w-50 bg-primary text-white font-weight-bold"
                      outline color="primary"
                      style={buttonPosition}
                      onClick={() => { this.props.setView('catalog'); }}>Back To Catalog</Button>
                  </div>
                </div>

                <div className=" h-100 w-50 ">
                  <div className=" my-3">{product.type}</div>
                  <div className=" my-3">$ <div className="d-inline">{((product.price) / 100).toFixed(2)}</div></div>
                  <div className=" mt-3">
                    <i onClick={this.decrementQuantity} className="fas fa-minus-square" style={cursor}></i>
                    <div className="d-inline px-3">{quantity}</div>
                    <i onClick={this.incrementQuantity} className="fas fa-plus-square" style={cursor}></i>
                  </div>
                  <div className="mt-2 ">
                    <Button outline color="success" className="my-3 w-50 bg-success text-white font-weight-bold" onClick={this.addToCart}>Add To Cart</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                      <ModalHeader toggle={this.toggle}>Added To Cart!</ModalHeader>
                      <ModalBody style={modalBodyWrapper}>
                        <div className=" d-flex flex-row" style={modalWrapper}>

                          <div className="w-50 text-center border-right rounded" style={modalContainer}>
                            <img src={product.image} alt="beerImg" className="my-5" style={modalImgContainer}/>
                          </div>

                          <div className="w-50 text-center ">

                            <div className="border-bottom rounded h-25 p-0" >
                              <div style={testSize}>{product.name}</div>
                            </div>

                            <div className="border-bottom rounded h-25" >
                              <div style={testSize}>{product.brewery}</div>
                            </div>

                            <div className="border-bottom rounded h-25" >
                              <div style={testSize}>{'$ ' + ((product.price) / 100).toFixed(2)}</div>
                            </div>

                            <div className="h-25" >
                              <div style={testSize}>Quantity: <strong>{quantity}</strong></div>
                            </div>
                          </div>

                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" className="bg-primary text-white font-weight-bold" onClick={() => this.props.setView('catalog', '')}>Continue Shopping</Button>
                        <Button color="success" className="bg-success text-white font-weight-bold" onClick={() => this.props.setView('cart', '')}>Go To Cart</Button>
                      </ModalFooter>
                    </Modal>
                  </div>
                </div>

              </div> {/* end of infoContainer */}

            </div> {/* end of infoWrapper */}

          </div> {/* end of bodyWrapper */}

          <div id="productDesc" className="border-right border-bottom border-left rounded" >
            <div className="py-3 px-5">{product.description}</div>
          </div>

        </div>

      );
    } else {
      return null;
    }
  }

}

export default ProductDetails;
