import React from 'react';
import { Button, Tooltip, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ProductDetails extends React.Component {
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

    let availabilityVerbiage;
    if (!this.state.product) {
      return null;
    } else {
      if (this.state.product.availability === 'Year Round') {
        availabilityVerbiage = 'Available';
      }
    }

    const abvIcon = './images/general/abv.png';
    const ibuIcon = './images/general/ibu.png';

    if (this.state.product) {
      return (

        <div id="mainWrapper" className="p-5">

          <div id="mainWrapper" className="productDetailsWrapper d-flex flex-row border rounded">

            <div id="imgContainer" className="productDetailsImgContainer text-center pb-2 m-auto">
              <img src={product.image} alt="img" className="productDetailsImg img-fluid"/>
            </div>

            <div id="infoWrapper" className="productDetailsInfoWrapper round d-flex flex-column border-left">

              <div id="titleBrewery" className="productDetailsHeaderSize rounded text-center border-bottom">

                <div className="h-50">
                  <div className="pt-2">{product.name}</div>
                </div>

                <div className="h-50 ">
                  <div >{product.brewery}</div>
                </div>
              </div>

              <div id="infoContainer" className="productDetailsStatsSize d-flex flex-row text-center">

                <div className="rounded border-right d-flex flex-column justify-content-space-evenly align-items-center h-100 w-50 p-3">

                  <div className=" w-100 m-auto">{product.abv}%
                    <div className="d-inline ml-2 ">ABV</div>
                    <img id="abvInfo" src={abvIcon} className="productDetailsTooltip ml-2 d-inline fas fa-question-circle"></img>
                    <Tooltip placement="right" isOpen={this.state.abvToolTipOpen} target="abvInfo" toggle={this.abvToggle}>
                      <strong>Alcohol By Volume</strong> measures how much alcohol is in the drink
                    </Tooltip>
                  </div>

                  <div className="  w-100 m-auto">{product.ibu}
                    <div className="d-inline ml-2">IBU</div>
                    <img id="ibuInfo" src={ibuIcon} className="productDetailsTooltip ml-2 d-inline fas fa-question-circle"></img>
                    <Tooltip placement="right" isOpen={this.state.ibuToolTipOpen} target="ibuInfo" toggle={this.ibuToggle}>
                      <strong> International Bitterness Units</strong> are a chemical measurement of the number of bittering compounds
                    </Tooltip>
                  </div>
                  <div className=" w-100 m-auto">{availabilityVerbiage}<div className="d-inline ml-1">{product.availability}</div></div>

                  <div className=" w-100 m-auto">
                    <Button
                      className="w-50 bg-primary text-white font-weight-bold"
                      outline color="primary"
                      onClick={() => { this.props.setView('catalog'); }}>Back To Catalog</Button>
                  </div>
                </div>

                <div className="rounded d-flex flex-column justify-content-space-evenly align-items-center h-100 w-50 p-3">
                  <div className=" w-100 m-auto">{product.type}</div>
                  <div className=" w-100 m-auto">$ <div className="d-inline">{((product.price) / 100).toFixed(2)}</div></div>
                  <div className=" w-100 m-auto">
                    <i onClick={this.decrementQuantity} className="fas fa-minus-square"></i>
                    <div className="d-inline px-3 ">{quantity}</div>
                    <i onClick={this.incrementQuantity} className="fas fa-plus-square"></i>
                  </div>
                  <div className="w-100 m-auto">
                    <Button
                      outline color="success"
                      className="w-50 bg-success text-white font-weight-bold"
                      onClick={this.addToCart}>Add To Cart</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                      <ModalHeader toggle={this.toggle}>Added To Cart!</ModalHeader>
                      <ModalBody className="productDetailsModalBody">
                        <div className="productDetailsModalImgWrapper d-flex flex-row">

                          <div className="productDetailsModalImgContainer w-50 text-center border-right rounded" >
                            <img src={product.image} alt="beerImg" className=" productDetailsModalImg my-5"/>
                          </div>

                          <div className="w-50 text-center">

                            <div className="border-bottom rounded h-25 p-0">
                              <div className="productDetailsModalText">{product.name}</div>
                            </div>

                            <div className="border-bottom rounded h-25">
                              <div className="productDetailsModalText">{product.brewery}</div>
                            </div>

                            <div className="border-bottom rounded h-25">
                              <div className="productDetailsModalText">{'$ ' + ((product.price) / 100).toFixed(2)}</div>
                            </div>

                            <div className="h-25">
                              <div className="productDetailsModalText">Quantity: <strong>{quantity}</strong></div>
                            </div>
                          </div>

                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" className="bg-primary text-white font-weight-bold"
                          onClick={() => this.props.setView('catalog', '')}>Continue Shopping</Button>
                        <Button color="success" className="bg-success text-white font-weight-bold"
                          onClick={() => this.props.setView('cart', '')}>Go To Cart</Button>
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
