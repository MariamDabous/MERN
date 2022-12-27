import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
    
const AuthorList = (props) => {
    const {removeFromDom}= props;
    const [Authors, setAuthors]= useState([]) ;

    const editAuthor= (authorid)=>{
        navigate('/author/'+authorid+'/edit')
    }

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .then(navigate('/'))  
            .catch(err => console.error(err));
    }
    

    return (
        <div>
            <table border={1} >
                <tr>
                    <td>Author</td>
                    <td>Actions available</td>
                </tr>
            {props.Authors.map( (author, i) =>
                <tr key={i}>
                    <td>{author.name}</td>
                    <td><button onClick={(e)=>{editAuthor(author._id)}} >Edit</button>  <button onClick={(e)=>{deleteAuthor(author._id)}}>
                        Delete
                    </button> </td>
                </tr>
            )}
            </table> 
        </div>
    )
}
    
export default AuthorList;


