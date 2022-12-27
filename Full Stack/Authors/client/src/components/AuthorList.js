import React from 'react'
import axios from 'axios';
    
const AuthorList = (props) => {
    return (
        <div>
            <table border={1} >
                <tr>
                    <td>Author</td>
                    <td>Action available</td>
                </tr>
            {props.Authors.map( (author, i) =>
                <tr key={i}>
                    <td>{author.name}</td>
                    <td><button>Edit</button>  <button>Delete</button> </td>
                </tr>
            )}
            </table> 
        </div>
    )
}
    
export default AuthorList;
