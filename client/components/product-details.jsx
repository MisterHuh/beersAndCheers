import React from 'react';
import { Tooltip, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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

        <div className="responsivePadding">

          {/* <div id="mainWrapper" className="productDetailsWrapper d-flex flex-row rounded"> */}
          <div id="mainWrapper" className="productDetailsWrapper border-right border-bottom border-left rounded">

            <div id="imgContainer" className="productDetailsImgContainer border-top text-center mx-auto h-100">
              <img src={product.image} alt="img" className="productDetailsImg img-fluid py-4"/>
            </div>

            <div id="infoWrapper" className="productDetailsInfoWrapper round d-flex flex-column w-100 border-left">

              <div id="titleBrewery" className="productDetailsHeaderSize rounded d-flex flex-column justify-content-space-evenly align-items-center border-top border-bottom">

                <div className="w-100 m-auto text-center">
                  <div className="">{product.name}</div>
                </div>

                <div className="w-100 m-auto text-center">
                  <div className="">{product.brewery}</div>
                </div>
              </div>

              <div id="infoContainer" className="productDetailsStatsSize d-flex flex-row text-center">

                <div className="rounded border-right d-flex flex-column justify-content-space-evenly align-items-center h-100 w-50 pdInfoText">

                  <div className="w-100 m-auto">{product.abv}%
                    <div className="d-inline ml-1">ABV</div>
                    <img id="abvInfo" src={abvIcon} className="productDetailsTooltip ml-1 d-inline fas fa-question-circle"></img>
                    <Tooltip placement="right" isOpen={this.state.abvToolTipOpen} target="abvInfo" toggle={this.abvToggle}>
                      <strong>Alcohol By Volume</strong> measures how much alcohol is in the drink
                    </Tooltip>
                  </div>

                  <div className="w-100 m-auto">{product.ibu}
                    <div className="d-inline ml-1">IBU</div>
                    <img id="ibuInfo" src={ibuIcon} className="productDetailsTooltip ml-1 d-inline fas fa-question-circle"></img>
                    <Tooltip placement="right" isOpen={this.state.ibuToolTipOpen} target="ibuInfo" toggle={this.ibuToggle}>
                      <strong> International Bitterness Units</strong> are a chemical measurement of the number of bittering compounds
                    </Tooltip>
                  </div>
                  <div className="w-100 m-auto"><div className="d-inline">{product.availability}</div></div>

                  <div className="w-100 m-auto">
                    <div
                      className="buttonSize text-align-center rounded w-50 bg-primary text-white font-weight-bold m-auto px-2 py-1"
                      onClick={() => { this.props.setView('catalog'); }}>Back To Catalog</div>
                  </div>
                </div>

                <div className="rounded d-flex flex-column justify-content-space-evenly align-items-center h-100 w-50">
                  <div className="w-100 m-auto">{product.type}</div>
                  <div className="w-100 m-auto">$ <div className="d-inline">{((product.price) / 100).toFixed(2)}</div></div>
                  <div className="w-100 m-auto">
                    <i onClick={this.decrementQuantity} className="fas fa-minus-square"></i>
                    <div className="d-inline px-3 ">{quantity}</div>
                    <i onClick={this.incrementQuantity} className="fas fa-plus-square"></i>
                  </div>
                  <div className="w-100 m-auto">
                    <div
                      className="buttonSize text-align-center rounded w-50 bg-success text-white font-weight-bold m-auto px-2 py-1"
                      onClick={this.addToCart}>Add To Cart</div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                      <ModalHeader toggle={this.toggle}>Added To Cart!</ModalHeader>
                      <ModalBody className="modalBody">
                        <div className="modalContainer d-flex flex-row">

                          <img src={product.image} alt="beerImg" className="modalImg rounded w-50 text-center border-right p-3"/>

                          <div className="w-50 text-center">

                            <div className="border-bottom rounded h-25">
                              <div className="modalText">{product.name}</div>
                            </div>

                            <div className="border-bottom rounded h-25">
                              <div className="modalText">{product.brewery}</div>
                            </div>

                            <div className="border-bottom rounded h-25">
                              <div className="modalText">{'$ ' + ((product.price) / 100).toFixed(2)}</div>
                            </div>

                            <div className="rounded h-25">
                              <div className="modalText">Quantity: <strong>{quantity}</strong></div>
                            </div>

                          </div>

                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <div className="buttonSize rounded px-2 py-1 bg-primary text-white font-weight-bold"
                          onClick={() => this.props.setView('catalog', '')}>Continue Shopping</div>
                        <div className="buttonSize rounded px-2 py-1 bg-success text-white font-weight-bold"
                          onClick={() => this.props.setView('cart', '')}>Go To Cart</div>
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
