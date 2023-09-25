import { Container, Card, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import AddCartForm from './AddCartForm';

const ProductList = (props) => {
    
    const addCartHandler = (input)=>{
        props.onAddCart(input)
    }
    
    return (
        <>
            <div >
                <Container style={{ width: '400px' }}>
                    <Col key={props.id}>
                    
                        <Card >
                            <Card.Body >
                                <Card.Title>{props.title}</Card.Title>
                                <Card.Text >
                                    <div >
                                        <Image src={props.image} alt='Color Image' />
                                    </div>
                                    <div className=' mt-4 d-flex justify-content-between'>
                                        <span className='bg-white' style={{color:  'black'}}>${props.price}</span>
                                        <AddCartForm onAddCart={addCartHandler}/>
                                    </div>

                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>
                </Container>
            </div>
        </>
    )
}

export default ProductList