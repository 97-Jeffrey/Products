import React from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';


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
          <Link 
            className='btn btn-primary' 
            to={`/products/${product.id}`}
            state={{ product: product}}
          >
             Product Details
          </Link>

          <Link 
            className='btn btn-primary' 
            to={`/products/create-product`}
          >
            New Product 
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}


export default Product;