import React from "react";
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";

function App() {
    return (
        <>
            <ul>
                <li><Link to='/'>Home Page</Link></li>
                <li><Link to='/products'>Product Table</Link></li>
                <li><Link to='/addProduct'>Add New Product</Link></li>
            </ul>

            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/products' element={<ProductPage/>} />
                <Route path='/addProduct' element={<AddProductPage/>} />
            </Routes>
            
            <h1>Home Page</h1>
        </>

    )
}

export default App