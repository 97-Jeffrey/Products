import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails = () =>{

  const { state } = useLocation()
  const {id, title, price, category, description, image} = state.product;

  return (
    <>
      <div> {title }</div>
      <div> {price }</div>
      <div> {category }</div>
      <div> {description }</div>
    </>
  )
}

export default ProductDetails;