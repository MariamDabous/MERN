import React from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
    
const ProductList = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    const editProduct =(productId) =>{
        navigate("/product/"+productId+"/edit")
    }


    return (
        <div>
            <h1>All Products</h1>
            {props.products.map( (product, i) =>
                <p key={i}>
                    <Link to = {`/product/${product._id}`}  >   {product.Title} </Link>
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                    <button onClick={(e)=>{editProduct(product._id)}}>
                        Edit
                    </button>
                </p> 
            )}
        </div>
    )
}
    
export default ProductList;
