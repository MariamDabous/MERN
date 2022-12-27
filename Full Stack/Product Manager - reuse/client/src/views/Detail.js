import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, useParams } from "@reach/router"
import DeleteButton from '../components/DeleteButton';

    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }

    
    return (
        <div>
            <p>Title: {product.Title}</p>
            <p>Price: {product.Price}</p>
            <p>Description: {product.Description}</p>
            <DeleteButton 
            productId= {id}
            successCallback ={()=>removeFromDom(product._id)}
            />
        </div>
    )
}
    
export default Detail;
