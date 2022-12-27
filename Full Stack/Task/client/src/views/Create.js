import React, { useEffect, useState } from 'react'
import axios from 'axios';
import StudentForm from '../components/StudentForm';
import { Link, navigate } from '@reach/router';

export default () => {
    const [Students, setStudents] = useState([]);
    const [errors, setErrors] = useState([]); 

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/all')
            .then(res =>{ 
                setStudents(res.data)
            });
    }, [])




    const createStudent = student => {
        axios.post('http://localhost:8000/api/new', student)
            .then(res=>{setStudents([...Students, res.data]);
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
            <h1>Favourite students</h1>
            <Link to='/' >Home</Link>
            
            <h2>Add a new student:</h2>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <StudentForm onSubmitprop={createStudent} initialName="" />
        </div>
    )
}

