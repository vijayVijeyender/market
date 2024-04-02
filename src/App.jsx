import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import { Home } from './Pages/Home.page';
import React,{ ReactElement, Suspense } from "react";
import { AppProviders } from "./providers";
import Applayout from "./Components/applayout/Applayout.component";


function App() {

  return (
 
     <AppProviders>
    <Applayout>
   <Suspense >
  <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
   </Suspense>
   </Applayout>
   </AppProviders>
  )
}

export default App;
