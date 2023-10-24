import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductPage() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    // const [color, setColor] = useState("black")

    useEffect(() => {
        loadProducts();
    }, [products])

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
            loading ? <h1>Loading...</h1> : 
            <div className='div'>
                <table className='table table-bordered'>
                    <thead className='thead'>
                        <tr className='tr'>
                            <th scope='col'>Id</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Unit Price</th>
                            <th scope='col'>Units in Stock</th>
                            <th scope='col'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && products.map(prod => {
                                return(
                                    <tr key={prod?.id} 
                                    style={{ backgroundColor: prod.unitsInStock === 0 ? 'red' : 'inherit' }}>
                                        <td><Link to={'/products/' + prod.id}>{prod.id}</Link></td>
                                        <td>{prod?.name}</td>
                                        <td>{prod?.unitPrice}</td>
                                        <td>{prod?.unitsInStock}</td>
                                        <td><button onClick={() => deleteProduct(prod.id)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        }
    </>)
}

export default ProductPage