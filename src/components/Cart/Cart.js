import { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CartItem from './CartItem';
import CartContext from '../../store/cartContext';

const Cart = (props) => {
    const cartCtx = useContext(CartContext); 

    console.log(cartCtx)
  const totalAmount = cartCtx.title.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Modal show={props.showCart} onHide={props.onCloseCart}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartCtx.title.map((item, index) => (
          <CartItem
            key={index}
            title={item.title}
            price={item.price}
            image={item.imageUrl}
            amount={item.amount}
            onRemove={() => cartCtx.removeItem(index)}
          />
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onCloseCart}>
          Close
        </Button>
        <Button variant="primary">Order (${totalAmount.toFixed(2)})</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
