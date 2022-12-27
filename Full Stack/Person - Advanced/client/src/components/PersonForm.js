

import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';


export default props => {
    const { initialFirstName, initialLastName, onSubmitProp } = props;
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(initialFirstName); 
    const [lastName, setLastName] = useState(initialLastName);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        onSubmitProp({firstName, lastName})
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
            </p>
            <input type="submit"/>
        </form>
    )
    }
