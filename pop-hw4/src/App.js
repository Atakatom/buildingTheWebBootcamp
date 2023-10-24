import React from "react";
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";

function App() {
    return (
        <>
            <div className="jumbotron text-center">
                <h1>Home Page</h1>
            </div>
            <div>
                <div className="col-sm-4">
                    <h3>
                        <Link to='/'>Home Page</Link>
                    </h3>
                </div>
                <div className="col-sm-4">
                    <h3>
                        <Link to='/products'>Product Table</Link>
                    </h3>
                </div>
                <div className="col-sm-4">
                    <h3>
                        <Link to='/addProduct'>Add New Product</Link>
                    </h3>
                </div>
            </div>

            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/products' element={<ProductPage/>} />
                <Route path='/addProduct' element={<AddProductPage/>} />
            </Routes>
        </>

    )
}

export default App