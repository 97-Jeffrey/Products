import React from 'react';

import Product from './product';

const Products = ({ products }) =>{

  return (
    <>
     <div className='title'>Product List</div>
     <div className="products">
       {products.map(product=>{
         return (
          <Product 
            key={product.id}
            product = {product}
          />
         )
       })}

     </div>
    </>
  )
}

export default Products;