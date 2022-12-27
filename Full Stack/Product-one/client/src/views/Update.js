import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate, useParams } from "@reach/router";
import ProductForm from '../components/ProductForm';
    
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setDescription(res.data.description);
                setPrice(res.date.price);
                setLoaded(true);
            })
    }, []);
    
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/product/' + id, product )
            .then(res => navigate('/'))
            .catch(err=>{const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key in errorResponse) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })  
    }
    
    return (
        <div>
            
            <h2>Edit this product:</h2>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            {/* {loaded &&  */}
            (<ProductForm onSubmitprop={updateProduct} initialTitle={title} initialPrice={price} initialDescription={description} />)
            {/* } */}
        </div>
    )
}
    
export default Update;

