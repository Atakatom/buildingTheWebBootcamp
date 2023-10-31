
import { 
    GridActionsCellItem, 
    DataGrid, 
 } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductGrid() {

    const [products, setProducts] = useState([])
    const [target, setTarget] = useState('')
    const [triggerDelete, setTriggerDelete] = useState(false)
    

    const loadProducts = React.useCallback(() => {
        axios.get('https://northwind.vercel.app/api/products').then(res => {
            setProducts(res.data)
        }).catch(err => {
            console.log(err)
        }) 
    }, [])

    const deleteProduct = React.useCallback((id) => {
        var result = window.confirm("Are you sure?")
        if (result) {
            axios.delete(`https://northwind.vercel.app/api/products/${id}`).then(
                res=> {
                    loadProducts()
                }
            )
        }
    }, [loadProducts])

    
    useEffect(() => {
        loadProducts()
    }, [loadProducts])

    useEffect(() => {
        if(triggerDelete){
            deleteProduct(target)
            setTriggerDelete(false)
        }
    }, [triggerDelete, target, deleteProduct])

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Ürün Adı', width: 150 },
        { field: 'unitPrice', headerName: 'Fiyat', width: 150 },
        { field: 'unitsInStock', headerName: 'Stok', width: 150 },
        {
          field: 'actions',
          type: 'actions',
          width: 80,
          getActions: ({row}) => [
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              onClick={() => {
                setTarget(row.id)
                setTriggerDelete(true)
              }}
            />,
          ],
        },
    ]

    const getCellClassName = (params) => {
        if (params.field === 'city' || params.value == null) {
          return '';
        }
        return params.row.unitsInStock === 0 ? 'red' : 'black';
      };

      const styles = {
        width: '100%',
        '& .black': {
          color: '#000000',
        },
        '& .red': {
          color: '#FF0000',
        },
      };
        
    return (
        <>
    <Box sx={styles}>
      <DataGrid
        rows={products}
        columns={columns}
        getCellClassName={getCellClassName}
      />
    </Box>
        </>
    )
}

export default ProductGrid