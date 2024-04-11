import './App.css'
import { Route, Routes } from "react-router-dom";
import React,{ ReactElement, Suspense } from "react";
import { AppProviders } from "./providers";
import Applayout from "./Components/applayout/Applayout.component";
import Home from './Pages/Home.page';
import Brand from './Pages/Brand/Brand.page';
import { Product } from './Pages/Product/Product.page';
import Category from "./Pages/category/Category.jsx";
import CreateNewCategory from "./Pages/category/CreateNewCategory.jsx";
import { CreateProduct } from './Pages/Product/CreateProduct.page';

import Category from './Pages/category/Category.jsx';
import CreateNewCategory from './Pages/category/CreateNewCategory.jsx'


function App() {

  return (
 
     <AppProviders>
    <Applayout>
   <Suspense >
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/brand" element={<Brand />}/>
    <Route path="/category" element={<Category />}/>
    <Route path="/category" element={<Category />}/>
    <Route path="category/createcategory" element={<CreateNewCategory />}/>
    <Route path="/Product" element={<Product />}/>
    <Route path="/CreateProduct" element={<CreateProduct />}/>

  </Routes>
   </Suspense>
   </Applayout>
   </AppProviders>
  )
}

export default App;
