import './App.css'
import { Route, Routes } from "react-router-dom";
import React,{ ReactElement, Suspense } from "react";
import { AppProviders } from "./providers";
import Applayout from "./components/applayout/Applayout.component";
import Brand from './pages/Brand/Brand.page';
import Home from './pages/Home.page';
import Category from './pages/category/Category';


function App() {

  return (
 
     <AppProviders>
    <Applayout>
   <Suspense >
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/brand" element={<Brand />}/>
    <Route path="/category" element={<Category />}/>
  </Routes>
   </Suspense>
   </Applayout>
   </AppProviders>
  )
}

export default App;
