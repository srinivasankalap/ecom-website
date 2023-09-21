import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Cart from '../Cart/Cart';

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl:
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl:
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl:
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
];

function Header() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart]=useState(cartElements);

  const openCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  const removeItemFromCartHandler = (index) => {
    const updatedCart  = cartElements.filter((_, i) => i !== index);
    setCart(updatedCart);
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <button className="cart-button" onClick={openCartHandler}>
              Open Cart
            </button>
            <Cart
              cartElements={cart}
              showCart={showCart}
              onCloseCart={closeCartHandler}
              onRemoveFromCart={removeItemFromCartHandler}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;