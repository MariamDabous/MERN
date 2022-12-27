import React, { useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
export default (props) => {
    const {initialName, onSubmitprop}=props;
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(initialName); 
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new author
        onSubmitprop({name});

        // navigate("/")
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            
            <p>
                <label> Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <input type="submit"/>
        </form>
    )
}