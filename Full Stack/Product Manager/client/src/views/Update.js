import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, useParams } from "@reach/router";
    
const Update = (props) => {
    const { id } = useParams();
    const [Title, setTitle] = useState('');
    const [Price, setPrice] = useState('');
    const [Description, setDescription] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.Title);
                setPrice(res.data.Price);
                setDescription(res.data.Description);
            })
    }, []);
    
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            Title,
            Price,
            Description
        })
            .then(res => {console.log(res)
                navigate("/all/")
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="Title" 
                    value={Title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price:</label><br />
                    <input type="number" 
                    name="Price"
                    value={Price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description:</label><br />
                    <input type="text" 
                    name="Description" 
                    value={Description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;
