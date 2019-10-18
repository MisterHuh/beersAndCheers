import React from 'react';

export const Confirmation = props => {
  let receipt = props.receipt;

  return (
    <h1>{receipt}</h1>
  );
};
