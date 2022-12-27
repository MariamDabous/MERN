import React, { useState } from 'react'
import axios from 'axios';
export default (props) => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProb}= props;
    //keep track of what is being typed via useState hook
    const [Title, setTitle] = useState(initialTitle ); 
    const [Price, setPrice] = useState(initialPrice);
    const [Description, setDescription] =useState(initialDescription)
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProb({Title, Price, Description})
        //make a post request to create a new product
        // axios.post('http://localhost:8000/api/new', {
        //     Title,
        //     Price,
        //     Description
        // })
        //     .then(res=>console.log(res))
        //     .catch(err=>console.log(err))
    }
    //onChange to update title and price
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={Title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={Price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={Description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
