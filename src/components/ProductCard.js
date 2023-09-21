import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useCart } from '../store/cartContext';
const ProductCard = ({id, title, price, imageUrl }) => {
  const { cartItems, addToCart, removeFromCart } = useCart(); 
  const handleAddToCart = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      quantity: 1,
    };
    addToCart(item); 
    };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
        <Button variant="primary"onClick={handleAddToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
