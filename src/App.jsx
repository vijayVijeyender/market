import './App.css'
import { Route, Routes } from "react-router-dom";
import React,{ ReactElement, Suspense } from "react";
import { AppProviders } from "./providers";
import Applayout from "./components/applayout/Applayout.component";
import Home from './pages/Home.page';
import Brand from './pages/Brand/Brand.page';
import Category from './pages/category/Category'
import CreateNewCategory from './pages/category/CreateNewCategory';

function App() {

  return (
 
     <AppProviders>
    <Applayout>
   <Suspense >
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/brand" element={<Brand />}/>
    <Route path="/category" element={<Category />}/>
    <Route path="category/createcategory" element={<CreateNewCategory />}/>
    <Route path="/Product" element={<Product />}/>

  </Routes>
   </Suspense>
   </Applayout>
   </AppProviders>
  )
}

export default App;
