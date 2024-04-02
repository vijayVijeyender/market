import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import React,{ ReactElement, Suspense } from "react";
import { AppProviders } from "./providers";
import Applayout from "./components/applayout/Applayout.component";
import Home from './pages/Home.page';


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
