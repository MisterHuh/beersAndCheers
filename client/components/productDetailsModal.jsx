import React from 'react';
import ReactDOM from 'react-dom';

class ProductDetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  render() {
    return (
      <div className="modal">
        <p>test modal</p>
      </div>
    );
  }
}
