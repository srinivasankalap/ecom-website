import React, { useState } from "react";
import CartContext from './cartContext';

const CartProvider = (props) => {
  console.log(props);
  const [cart, setCart] = useState([]);
  // adding product in cart

  const addProductToCardHandler = (product, index) => {
    let cartProducts = [...cart];
    let isProductPresent = false;

    cartProducts.forEach((item) => {
      if (product.id === item.id) {
        isProductPresent = true;
        item.quantity += Number(product.quantity);
      }
    });

    if (isProductPresent) {
      setCart([...cartProducts]);
    } else {
      setCart((prevProducts) => {
        return [...prevProducts, product];
      });
    }
  };
  const totalAmount = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const totalQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const removeProductToCardHandler = (productId) => {
    const newItems = [];

  cart.map((item) => {
    if (item.id === productId) {
      item.quantity !== 1 && newItems.push({ ...item, quantity: item.quantity - 1 });
    } else {
      newItems.push(item);
    }
  });

  setCart(newItems);
};
  const cartContext = {
    products: cart,
    addProduct: addProductToCardHandler,
    removeProduct: removeProductToCardHandler,
    totalAmount: totalAmount,
    totalQuantity: totalQuantity,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;