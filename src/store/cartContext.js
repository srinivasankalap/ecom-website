import React from "react";
const CartContext = React.createContext({
  products: [],
  totalAmount: 0,
  addProduct: (product) => {},
  removeProduct: (id) => {},
});

export default CartContext;