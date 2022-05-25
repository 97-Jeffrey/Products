import React from 'react';
import { Card, Button } from 'react-bootstrap'


const Product = ({ product }) =>{

  return(
    <>
      <Card style={{ width: '25rem' }}>
        <Card.Img style={{ height:"25rem"}}variant="top" src={product.image}/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.category}
          </Card.Text>
          <Button variant="primary"> Details</Button>
        </Card.Body>
      </Card>
    </>
  )
}


export default Product;