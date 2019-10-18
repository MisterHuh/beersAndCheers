import React from 'react';

export const Confirmation = props => {
  let productReceipt = props.productReceipt;
  let shippingReceipt = props.shippingReceipt;
  let billingReceipt = props.billingReceipt;

  console.log('product is: ', productReceipt);
  console.log('shipping is: ', shippingReceipt);
  console.log('billing is: ', billingReceipt);

  return (
    <React.Fragment>
      <h1>display product receipt</h1>
      <h1>display shipping & billing receipt</h1>
      <hr/>
      <h2>End the page like that, and create a separate <strong>About</strong> page, that you can click from there</h2>
      <h3>Also, add a button for <strong>About</strong> page, on the nav bar</h3>
      <h4>maybe display some stats like xxx hours spent working on this</h4>
      <hr/>
      <p>make it about a total # of hours, like total of 80 hours spent</p>
      <a> 40 hours spent on css</a>
      <h2>5 hours spent on php debugging</h2>
      <p>20 hours on front end</p>
      <p>5 hours spent on re-structuring</p>
      <a>10 hours spent on doing research and figma</a>
      <hr/>
      <h4>like 30% back end, 70% front end</h4>
      <h4>and from the front end, about 60% spent on CSS</h4>
      <h4># of times figmas scrapped</h4>
      <h4># of times having to re-factor and re-structure</h4>
      <h5></h5>

    </React.Fragment>

  );
};
