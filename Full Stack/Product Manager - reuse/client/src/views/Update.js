import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, useParams } from "@reach/router";
import ProductForm from '../components/ProductForm';
    
const Update = (props) => {
    const { id } = useParams();
    const [Title, setTitle] = useState('');
    const [Price, setPrice] = useState('');
    const [Description, setDescription] = useState('');
    const [loaded, setLoaded] = useState(false);   //// I need it to see the information before update written in the form
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.Title);
                setPrice(res.data.Price);
                setDescription(res.data.Description);
                setLoaded(true);
            })
    }, []);
    
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/product/' + id, product)
            .then(res => {
                // setTitle(res.data.Title);
                // setPrice(res.data.Price);
                // setDescription(res.data.Description);
                navigate("/all/")
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
            <ProductForm 
            initialTitle= {Title}
            initialPrice={Price}
            initialDescription ={Description}
            onSubmitProb={updateProduct}
            
            />
            )}
        </div>
            
            
    )}
    
export default Update;
            
