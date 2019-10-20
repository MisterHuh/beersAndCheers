import React from 'react';
import { Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, Tooltip } from 'reactstrap';

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
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.retrieveProduct(this.props.id);
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
    // const buttonSize = {
    //   height: '5vh'
    // };
    const testSize = {
      position: 'relative',
      top: '34%'
    };

    if (this.state.product) {
      return (
        <div id="mainWrapper" className="p-5">
          {/* <div id="subWrapper" className="p-5"> */}

          <div id="bodyWrapper" className=" d-flex flex-row border rounded" style={bodyWrapper}>

            <div id="imgContainer" className="text-center pb-2 border-right rounded" style={imgContainer}>
              <img src={product.image} alt="img" className="img-fluid" style={imgSize}/>
            </div>

            <div id="infoWrapper" className=" d-flex flex-column" style={infoWrapper}>

              <div id="titleBrewery" className="text-center border-bottom rounded" style={headerSize}>
                <div className="h-50 pt-2">{product.name}</div>
                <div className="h-50">{product.brewery}</div>
              </div>

              <div id="infoContainer" className="d-flex flex-row text-center align-items-center" style={statsSize}>

                <div className=" h-100 w-50 border-right rounded border border-primary">

                  {/* <div className="my-3 border border-dark">
                    <div className="d-inline border border-danger">ABV </div>
                    <div className="d-inline float-right  border border-success">{product.abv}%</div>
                  </div> */}

                  {/* <div className=" my-3">ABV <div className="d-inline ml-3">{product.abv}%</div></div> */}
                  <div className=" my-3">{product.abv}% <div data-toggle="tooltip" data-placement="right" className="d-inline ml-1">ABV</div></div>

                  <div className=" my-3">{product.ibu} <div className="d-inline ml-1">IBU</div></div>
                  <div className=" mt-3">Available<div className="d-inline ml-1">{product.availability}</div></div>
                  {/* <div className=" mt-3">{product.availability} <div className="d-inline ml-3">Availbility</div></div> */}

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
                    {/* <ButtonGroup> */}
                    <i onClick={this.decrementQuantity} className="fas fa-minus-square"></i>
                    {/* <Button onClick={this.decrementQuantity} className="" >-</Button> */}
                    <div className="d-inline px-3">{quantity}</div>
                    <i onClick={this.incrementQuantity} className="fas fa-plus-square"></i>
                    {/* <Button onClick={this.incrementQuantity} className="" >+</Button> */}
                    {/* </ButtonGroup> */}
                  </div>
                  <div className="mt-2 ">
                    <Button outline color="success" className="my-3 w-50 bg-success text-white font-weight-bold" onClick={this.addToCart}>Add To Cart</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                      <ModalHeader toggle={this.toggle}>Added To Cart!</ModalHeader>
                      {/* <ModalHeader toggle={this.toggle} onClick={this.props.addToCart(product, quantity)}>Added To Cart!</ModalHeader> */}
                      <ModalBody style={modalBodyWrapper}>
                        <div className=" d-flex flex-row" style={modalWrapper}>
                          <div className="w-50 text-center border-right rounded" style={modalContainer}>
                            <img src={product.image} alt="beerImg" className="" style={modalImgContainer}/>
                          </div>
                          <div className="w-50 text-center ">
                            <div className="border-bottom rounded h-25" >
                              <div style={testSize}>{product.name}</div>
                            </div>
                            <div className="border-bottom rounded h-25" >
                              <div style={testSize}>{product.brewery}</div>
                            </div>
                            <div className="border-bottom rounded h-25" >
                              <div style={testSize}>{'$' + ((product.price) / 100).toFixed(2)}</div>
                            </div>
                            <div className="h-25" >
                              <div style={testSize}>Quantity: <strong>{quantity}</strong></div>
                            </div>
                            {/* <div className="border border-dark h-25" style={testSize} >{product.brewery}</div>
                            <div className="border border-dark h-25" style={testSize} >{'$' + ((product.price) / 100).toFixed(2)}</div>
                            <div className="border border-dark h-25" style={testSize} >Quantity: {quantity}</div> */}
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
            <div className="py-3 px-4">{product.description}</div>
          </div>

          {/* </div> */}
        </div>

      );
    } else {
      return null;
    }
  }

}

export default ProductDetails;
