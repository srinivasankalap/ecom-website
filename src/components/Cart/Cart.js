
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CartItem from './CartItem';
import { useCart } from '../../store/cartContext';

const Cart = ({ showCart, onCloseCart }) => {
    const { cartElements, addToCart, removeFromCart } = useCart(); 

  const totalAmount = cartElements.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Modal show={showCart} onHide={onCloseCart}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartElements.map((item, index) => (
          <CartItem
            key={index}
            {...item}
            onRemove={() => removeFromCart(index)}
          />
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseCart}>
          Close
        </Button>
        <Button variant="primary">Order (${totalAmount.toFixed(2)})</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
