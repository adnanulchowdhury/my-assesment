import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { Button, Card, Col, Row } from 'reactstrap'
import img from '../images/placeholder.png'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Card>
      <Row md='auto'>
        {/* <Col sm={4}>
          <Card.Img src={img} />
        </Col> */}
        <Product
          title={product.title}
          price={product.price}
          inventory={product.inventory} />
        <button
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}>
          {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
      </Row>
    </Card>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
