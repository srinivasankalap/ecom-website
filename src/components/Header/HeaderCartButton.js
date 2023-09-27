import React, { useContext } from "react";
import { Badge, Button } from "react-bootstrap";
import stylesheet from "./HeaderCartButton.module.css";
import CartContext from "../../store/cartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
const CartButton = (props) => {
  const cartcontext = useContext(CartContext);
  const quantity = cartcontext.totalQuantity;
  return (
    <>
      <Button className={stylesheet["cart-button"]} onClick={props.onOpenCart}>
        <AiOutlineShoppingCart />
      </Button>
      <Badge pill bg="#ff3f6c" className={stylesheet["total-item"]}>
        {quantity}
      </Badge>
    </>
  );
};

export default CartButton;