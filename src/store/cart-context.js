import React from 'react';

const CartContext = React.createContext({
  //Purpose of these below is better autocompletion
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
