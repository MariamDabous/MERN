import React from 'react'
import axios from 'axios';
import { Link } from "@reach/router"
import { navigate } from '@reach/router'
    
const PersonList = (props) => {
    const { removeFromDom } = props;


    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
            .catch(err => console.error(err));
    }

    const editPerson= (personId) => {
        navigate('/people/'+personId+'/edit')

    }


    return (
        <div>
            {props.people.map( (person, i) =>
                <p key={i}>{person.lastName}, {person.firstName} 
                <button onClick={(e)=>{deletePerson(person._id)}}>
                Delete
                </button>
                <button onClick={(e)=>{editPerson(person._id)}}>
                Edit
                </button>
                </p>
            )}
        </div>
    )
}
    
export default PersonList;

