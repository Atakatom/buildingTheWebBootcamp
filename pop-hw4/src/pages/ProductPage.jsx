import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductPage() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadProducts();
    }, [])

    const loadProducts = () => {
        axios.get('https://northwind.vercel.app/api/products').then(res => {
            setProducts(res.data)
            setLoading(false)
        }).catch(err => {
            console.log(err)
        }) 
    }

    const deleteProduct = (id) => {
        var result = window.confirm("Are you sure?")

        if (result) {
            setLoading(true)
            axios.delete(`https://northwind.vercel.app/api/products/${id}`).then(
                res=> {
                    loadProducts()
                }
            )
        }
    }

    return (<>
        {
            loading ? <h1>Loading...</h1> : <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Units in Stock</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.map(prod => {
                            return <tr key={prod?.id}>
                            <td><Link to={'/products/' + prod.id}>{prod.id}</Link></td>
                                <td>{prod?.name}</td>
                                <td>{prod?.unitPrice}</td>
                                <td>{prod?.unitsInStock}</td>
                                <td><button onClick={() => deleteProduct(prod.id)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        }
    </>)
}

export default ProductPage