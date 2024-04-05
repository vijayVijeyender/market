import './App.css'
import { Route, Routes } from "react-router-dom";
import React,{ ReactElement, Suspense } from "react";
import { AppProviders } from "./providers";
import Applayout from "./Components/applayout/Applayout.component";
import Home from './Pages/Home.page';
import Brand from './Pages/Brand/Brand.page';

function App() {

  return (
 
     <AppProviders>
    <Applayout>
   <Suspense >
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/brand" element={<Brand />}/>
  </Routes>
   </Suspense>
   </Applayout>
   </AppProviders>
  )
}

export default App;
