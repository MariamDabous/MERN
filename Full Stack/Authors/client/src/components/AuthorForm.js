import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(""); 
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new author
        axios.post('http://localhost:8000/api/new', {
            name
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Favourite authors</h1>
            <p>Home</p>
            <h2>Add a new author:</h2>
            <p>
                <label> Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
