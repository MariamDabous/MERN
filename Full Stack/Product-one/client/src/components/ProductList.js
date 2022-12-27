import React, { useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
    
const ProductList = (props) => {
    const {removeFromDom}= props;
    const [Products, setProducts]= useState([]) ;

    const editProduct= (productid)=>{
        navigate('/product/'+productid+'/edit')
    }

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .then(navigate('/'))  
            .catch(err => console.error(err));
    }
    

    return (
        <div>
            <h1>All Products:</h1>
            <ul>
                {props.Products.map((product, i) =>
                    <li key={i}><Link to= {`/product/${product._id}`}> {product.title} </Link> 
                    <button onClick={(e)=>{editProduct(product._id)}} >Edit</button>  |  
                    <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button> </li>
                
                )}
                
            </ul>
            {/* <table border={1} >
                <tr>
                    <td>Product</td>
                    <td>Actions available</td>
                </tr>
            {props.Products.map( (product, i) =>
                <tr key={i}>
                    <td>{product.name}</td>
                    <td><button onClick={(e)=>{editProduct(product._id)}} >Edit</button>  <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button> </td>
                </tr>
            )}
            </table>  */}
        </div>
    )
}
    
export default ProductList;


