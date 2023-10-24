import axios from 'axios'
import React, { useState } from 'react'

function AddProductPage() {

    const [loading, setLoading] = useState(false)  
    const [product, setProduct] = useState({
        name: '',
        unitPrice: '',
        unitsInStock: '',
      });
    
    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log("product", product)
        if (!product.name || !product.unitPrice || !product.unitsInStock) {
            alert('Please fill in all fields.');
            return;
        }
      
        console.log("new prod", product)
        if(loading)(
            axios.post('https://northwind.vercel.app/api/products', product).then(res => {
                window.alert('Your product is added to our database!');
                setLoading(false)
            }).catch(err => {
                console.log(err)
            }) 
        )
    }

    return (<>
        {
            loading ? <h1>Loading...</h1> : 
            <form onSubmit={handleSubmit}>
                <div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                        </div>
                        <input 
                            id="name"
                            className='form-control'
                            onChange={(e) => setProduct({ ...product, name: e.target.value })}
                            required
                            type="text" 
                            value={product.name} 
                        />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Unit Price</span>
                        </div>
                        <input 
                            id="unitPrice" 
                            className='form-control'
                            onChange={(e) => setProduct({ ...product, unitPrice: e.target.value })}
                            required
                            type="text" 
                            value={product.unitPrice} 
                        />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Stock</span>
                        </div>
                        <input 
                            id="unitsInStock" 
                            className='form-control'
                            onChange={(e) => setProduct({ ...product, unitsInStock: e.target.value })}
                            required
                            type="text" 
                            value={product.unitsInStock} 
                        />
                    </div>
                </div>
                <div>
                    <button className='btn btn-primary' type="submit">Add</button>
                </div>
            </form>
}
    </>)
}

export default AddProductPage