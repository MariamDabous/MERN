import React, { useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
export default (props) => {
    const {initialName, initialPosition, onSubmitprop}=props;
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(initialName); 
    const [position, setPosition] = useState(initialPosition); 
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new author
        onSubmitprop({name, position});

        // navigate("/")
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            
            <p style={{marginLeft:35}}>
                <label>Player Name:  </label>
                <input type="text" style={{width:350, }} onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <p>
                <label>Preffered Position: </label>
                <input type="text" style={{width:350}} onChange={(e)=>setPosition(e.target.value)} value={position}/>
            </p>
            <input style={{marginLeft:310, width:180, backgroundColor:"green", color:"white" }} type="submit" value="Add"/>
        </form>
    )
}