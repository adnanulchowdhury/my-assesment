import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { Container, Row, Col } from 'reactstrap';

const App = () => (
    <Container>
      <Row>
        <Col>
        <h2>Shopping Cart Example</h2>
        </Col>
        <Col>
        <CartContainer />
        </Col>
      </Row>
      <ProductsContainer />
    </Container>
);

export default App
