import React, { useEffect } from 'react';

import Product from './product';
import axios from 'axios';


import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct, fetchProductSuccess } from '../Action/product';

const Products = () =>{

  function getAllProducts(){
    return dispatch =>{
      dispatch(fetchProduct());
      return axios.get('https://fakestoreapi.com/products/')
      .then(res=>{
        dispatch(fetchProductSuccess(res.data))
      })
    }
  }

  const dispatch = useDispatch();
  const products = useSelector(state => state.products)

  useEffect(()=>{
    getAllProducts()(dispatch)
  },[dispatch])

  return (
    <>
     <div className='title'>Product List</div>
     <div className="products">
       {products.map(product=>{
         return (
          <Product 
            key= {product.id}
            product = {product}
          />
         )
       })}

     </div>
    </>
  )
}

export default Products;