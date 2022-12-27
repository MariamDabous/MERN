import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';


const Main = (props) => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/all')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId));
    }

    const createPerson =person=> {
        axios.post('http://localhost:8000/api/new', person)
            .then(res=>setPeople([...people, res.data]))
            .catch(err=>console.log(err))
    }
    return (
        <div>
            {/* <h2>Message from the backend: {message}</h2> */}
            <PersonForm
            initialFirstName='' 
            initialLastName=''
            onSubmitProp ={createPerson}
            
            />
            <hr></hr>
            {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;

