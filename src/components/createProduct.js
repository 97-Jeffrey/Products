import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import { addProduct } from '../Action/product';

const CreateProduct = () =>{

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('');
  const [createSuccess, setCreateSuccess] = useState(false)
  const dispatch = useDispatch();

  const inValidInput = !title || !category || !price || !description || !image;

  const handleProductCreate= async e =>{

    if(inValidInput) return;

    e.preventDefault();
    let res = await axios.post('https://fakestoreapi.com/products',  
      { 
        "title": title,
        "price": price,
        "description": description,
        "category": category,
        "image": image
      }
    );
    if(res.status === 200){
      setCreateSuccess(true)
    }

    dispatch(addProduct(res.data))

  }

  return(
    <>
      <h1 style={{ margin: "30px"}}>
        Create A Product Here
      </h1>
      <Form 
        style={{ width: "70%", marginLeft:"30px", marginTop:"50px"}} 
        onSubmit={handleProductCreate}
      >
        <Form.Group className="mb-4" >
          <Form.Label><h4>Product Name</h4></Form.Label>
          <Form.Control type="text" placeholder="Product Name" value={title} onChange={e=>setTitle(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label><h4>Product Category</h4></Form.Label>
          <Form.Control type="text" placeholder="Category" value={category} onChange={e=>setCategory(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label><h4>Product price</h4></Form.Label>
          <Form.Control type="number" placeholder="price" value={price} 
          onChange={e=>setPrice(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label><h4>Product Description</h4></Form.Label>
          <Form.Control type="text" placeholder="description" value={description} 
          onChange={e=>setDescription(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label><h4>Product Image</h4></Form.Label>
          <Form.Control type="text" placeholder="image URL" value={image}
          onChange={e=>setImage(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>

    <Link 
      to="/products"> Go to Products
    </Link>

    {
      createSuccess
        &&
      <Alert key={"success"} variant="success">
        Product Created Successfully !
      </Alert>}
    </>
  )
}


export default CreateProduct;