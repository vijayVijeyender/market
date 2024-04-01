import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header/HeaderComponent'
import Home from './pages/Home/Home'


function App() {

  return (
    <>
    <Header/>
     <Home/>
     
     </>
    

  

  )
}

export default App;
