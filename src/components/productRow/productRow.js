import React from 'react';

import Adder from '../common/adder';

import Eggs from '../../images/eggs.jpeg';
import Sausages from '../../images/sausages.jpeg';
import Bananas from '../../images/bananas.jpeg';
import Avocados from '../../images/avocados.jpeg';
import Yams from '../../images/yams.jpeg';

export default (props) => {
  const { name, in_stock, price, origin, quantity } = props.product;
  return (
    <div>
      <p>{in_stock}</p>
      <p>{name}</p>
      <p>{'Yen Bros'}</p>
      <p>{origin}</p>
      <p>{quantity}</p>
      <Adder price={5} />
    </div>
  );
};
