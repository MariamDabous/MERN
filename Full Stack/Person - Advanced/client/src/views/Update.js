import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, useParams } from "@reach/router";
import PersonForm from '../components/PersonForm';
    
const Update = (props) => {
    const { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
            })
    }, []);
    
    const updatePerson = person => {
        axios.put('http://localhost:8000/api/people/' + id, person)
            .then(res => console.log(res))
            .then(navigate('/all/'))
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Person</h1>
            <PersonForm 
            initialFirstName={firstName} 
            initialLastName={lastName}
            onSubmitProp ={updatePerson}
            />
        </div>
    )
}
    
export default Update;

