import React, { useEffect, useState } from  'react';
import './App.css';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'

import Products from './components/products';
import Header from './components/header';

function App() {

  const [products, setProducts] = useState([]);
  useEffect(()=>{
    
    axios.get('https://fakestoreapi.com/products/')
    .then(res=>setProducts(res.data))
  },[])

  return (
    <div className="App">
      <Header />
      <Products products ={products}/>
    </div>
  );
}

export default App;
