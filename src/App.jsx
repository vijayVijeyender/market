import './App.css'
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { AppProviders } from "./providers";
import Applayout from "./Components/applayout/Applayout.component";
import Home from './Pages/Home.page';
import Brand from './Pages/Brand/Brand.page';
import { Product } from './Pages/Product/Product.page';
import Category from "./Pages/category/Category.jsx";
import CreateCategory from "./Pages/category/Components/CreateCategory.jsx";
import { CreateProduct } from './Pages/Product/CreateProduct.page';
import { CreateBrand } from './Pages/Brand/Components/CreateBrand.component.jsx';
import "bootswatch/dist/sketchy/bootstrap.min.css";


function App() {

  return (

    <AppProviders>
      <Applayout>
        <Suspense >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/category" element={<Category />} />
            <Route path="/category" element={<Category />} />
            <Route path="category/createcategory" element={<CreateCategory />} />
            <Route path="/Product" element={<Product />} />
            <Route path="product/createproduct" element={<CreateProduct />} />
            <Route path="product/editproduct" element={<CreateProduct />} />
            <Route path="brand/createbrand" element={<CreateBrand />} />
          </Routes>
        </Suspense>
      </Applayout>
    </AppProviders>
  )
}

export default App;
