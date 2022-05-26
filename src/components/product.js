import React from 'react';
import { Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';


const Product = ({ product }) =>{

  const navigate = useNavigate();
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
        </Card.Body>
      </Card>
    </>
  )
}


export default Product;