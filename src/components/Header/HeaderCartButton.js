import React from "react";
import { Badge, Button } from "react-bootstrap";
import stylesheet from "./HeaderCartButton.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
const CartButton = (props) => {
  return (
    <>
      <Button className={stylesheet["cart-button"]} onClick={props.onOpenCart}>
        <AiOutlineShoppingCart />
      </Button>
      <Badge pill bg="#ff3f6c" className={stylesheet["total-item"]}>
        {props.totalQuantity}
      </Badge>
    </>
  );
};

export default CartButton;