import { Button, Modal } from "react-bootstrap";
import { useContext} from "react";
import CartItem from "./CartItem";
import stylesheet from "./Cart.module.css";
import CartContext from "../../store/cartContext";
const Cart = (props) => {
  const cartcontext = useContext(CartContext);

  const totalAmount = cartcontext.products? cartcontext.products.reduce(
    (prevValue, currItem) =>{
      const quantity = Number(currItem.quantity)
      const price = Number(currItem.price)
      if(isNaN(quantity)|| isNaN(price)){
        return prevValue
      }
      const itemTotal = quantity * price
      return prevValue + itemTotal
    } ,0
    
  ):0;


  const cardItemList = cartcontext.products.map((product) => (
    <CartItem
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      imageUrl={product.imageUrl}
      quantity={product.quantity}
      onRemove={() => cartcontext.removeProduct(product.id)}
    />
  ));
  

  return (
    <>
      <Modal
        show={props.openCart}
        onHide={props.onHindeCart}
        size="lg"
        scrollable="true"
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