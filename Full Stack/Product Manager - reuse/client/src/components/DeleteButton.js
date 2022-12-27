import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
    
export default props => {
    
    const { productId,  successCallback } = props;

    const deleteoneProduct =(e)=>{
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {

                successCallback();
                navigate('/all/')
            })
            .catch(err => console.error(err));
    }
    

    
    return (
        <button onClick={deleteoneProduct}>
            Delete
        </button>
    )
}

