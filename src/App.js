import React from  'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Products from './components/products';
import Header from './components/header';
import ProductDetails from './components/productDetails';
import CreateProduct from './components/createProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Products/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:id" element={<ProductDetails/>}/>
          <Route path="/products/create-product" element={<CreateProduct/>}/>
        </Routes>
         {/* <Products products ={products}/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
