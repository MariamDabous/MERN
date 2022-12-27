import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { Link, navigate } from '@reach/router';

export default () => {
    const [Authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]); 

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/all')
            .then(res =>{ 
                setAuthors(res.data)
            });
    }, [])




    const createAuthor = author => {
        axios.post('http://localhost:8000/api/new', author)
            .then(res=>{setAuthors([...Authors, res.data]);
                navigate("/")} )
            .catch(err=>{const errorResponse = err.response.data.errors;
                        const errorArr = [];
                        for (const key in errorResponse) { // Loop through all errors and get the messages
                            errorArr.push(errorResponse[key].message)
                        }
                        // Set Errors
                        setErrors(errorArr);
                    })            
            }
    return (
        <div>
            <h1>Favourite authors</h1>
            <Link to='/' >Home</Link>
            
            <h2>Add a new author:</h2>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <AuthorForm onSubmitprop={createAuthor} initialName="" />
        </div>
    )
}

