import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import stylesheet from "./AddToCart.module.css";
import CartContext from "../../store/cartContext";

const AddToCart = (props) => {
  const defalutQty = 1;
  const cartcontext = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();
    // const quantity = document.getElementById("amount_ " + props.id).value;

    cartcontext.addProduct({
      ...props.item,
      quantity: defalutQty,
      id: props.id,
    });
  };
  return (
    <>
      <Button
        as="input"
        type="submit"
        className={stylesheet.button}
        defaultValue={defalutQty}
        onClick={addItemToCart}
        value="Add to Cart"
        product={props}
        id={"amount_" + props.id}
      ></Button>
    </>
  );
};

export default AddToCart;