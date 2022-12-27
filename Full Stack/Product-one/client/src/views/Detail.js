import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "@reach/router"
import { Link, navigate } from "@reach/router"

    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const [Products, setProducts]= useState([])
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .then(navigate('/'))  
            
            .catch(err => console.error(err));
    }
    const removeFromDom = productId => {
        setProducts(Products.filter(product => product._id != productId));
                    }
    
    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: $ {product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
            {/* <Link to={"/products/" + product._id + "/edit"}>edit</Link> */}
        </div>
    )
}
    
export default Detail;