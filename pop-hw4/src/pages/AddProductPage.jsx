import axios from 'axios'
import React, { useState } from 'react'

function AddProductPage() {

    const [loading, setLoading] = useState(false)

    const addProduct = () => {
        var name = document.getElementById('name')?.value;
        var unitPrice = document.getElementById('unitPrice')?.value;
        var unitsInStock = document.getElementById('unitsInStock')?.value;

        var newProduct = {
            name: name,
            unitPrice: unitPrice,
            unitsInStock: unitsInStock,
        }

        console.log("new prod", newProduct)
        if(loading)(
            axios.post('https://northwind.vercel.app/api/products', newProduct).then(res => {
                window.alert('Your product is added to our database!');
                setLoading(false)
            }).catch(err => {
                console.log(err)
            }) 
        )

    }

    return (<>
        {
            loading ? <h1>Loading...</h1> : <>
                <div>
                    <div>
                        <label>Name</label>
                        <input type="text" id="name" />
                    </div>
                    
                    <div>
                        <label>Unit Price</label>
                        <input type="text" id="unitPrice" />
                    </div>
                    
                    <div>
                        <label>Stock</label>
                        <input type="text" id="unitsInStock" />
                    </div>
                </div>
                <div>
                    <button onClick={() => {setLoading(true); addProduct()}}>Add</button>
                </div>
            </>
        }
    </>)
}

export default AddProductPage