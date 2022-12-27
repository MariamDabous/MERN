import React, { useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
export default (props) => {
    const {initialTitle, initialPrice, initialDescription, onSubmitprop}=props;
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice); 
    const [description, setDescription] = useState(initialDescription); 
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        onSubmitprop({title, price, description});

        // navigate("/")
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            
            <p>
                <label> Name</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label> Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label> Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}