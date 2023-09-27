import { Button, Modal } from "react-bootstrap";
import { useContext} from "react";
import CartItem from "./CartItem";
import stylesheet from "./Cart.module.css";
import CartContext from "../../store/cartContext";
const Cart = (props) => {
  const cartcontext = useContext(CartContext);
  // const cartItemAddHandler = () => {};
  const cardItemList = cartcontext.products.map((product) => (
    <CartItem
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      imageUrl={product.imageUrl}
      quantity={product.quantity}
    />
  ));
  // calulating the total products amount
  let totalAmount = 0;
  cartcontext.products.forEach((product) => {
    totalAmount = totalAmount + Number(product.price * product.quantity);
  });

  return (
    <>
      <Modal
        fullscreen="xxl-down"
        show={props.openCart}
        onHide={props.onHindeCart}
        size="lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>{cardItemList}</Modal.Body>
        <Modal.Footer>
          Total {`₹ ${totalAmount.toFixed(2)}`}
          <Button className={stylesheet["place-order-btn"]}>Place Order</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;