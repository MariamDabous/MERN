import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import { Link, navigate } from '@reach/router';
import ProductList from '../components/ProductList';

export default () => {
    const [Products, setProducts] = useState([]);
    const [errors, setErrors] = useState([]); 
    const [loaded, setLoaded] = useState(false);

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/all')
            .then(res =>{ 
                setProducts(res.data)
                setLoaded(true);
            });
    }, [])




    const createProduct = product => {
        axios.post('http://localhost:8000/api/new', product)
            .then(res=>{setProducts([...Products, res.data]);
                navigate("/")} )
            .catch(err=>{const errorResponse = err.response.data.errors;
                        const errorArr = [];
                        for (const key in errorResponse) { // Loop through all errors and get the messages
                            errorArr.push(errorResponse[key].message)
                        }
                        // Set Errors
                        setErrors(errorArr);
                    })            
            }
    const removeFromDom = productId => {
        setProducts(Products.filter(product => product._id != productId));
                    }

    return (
        <div>
            <h1>Product Manager</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <ProductForm onSubmitprop={createProduct} initialTitle="" initialPrice="" initialDescription="" />
            <hr></hr>
            { loaded && (<ProductList Products={Products} removeFromDom={removeFromDom} />)}
        </div>
    )
}

