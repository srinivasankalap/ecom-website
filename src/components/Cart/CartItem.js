import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useCart } from '../../store/cartContext';

const CartItem = ({ title, price, imageUrl, quantity}) => {
    const { cartItems, addToCart, removeFromCart } = useCart(); 
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5>{title}</h5>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
          </div>
          <div>
            <img src={imageUrl} alt={title}/>
          </div>
        </div>
        <Button variant="danger" onClick={removeFromCart}>
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
