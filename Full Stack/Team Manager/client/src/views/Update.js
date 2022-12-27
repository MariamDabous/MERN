// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { Link, navigate, useParams } from "@reach/router";
// import AuthorForm from '../components/AuthorForm';
    
// const Update = (props) => {
//     const { id } = useParams();
//     const [Name, setName] = useState('');
//     const [loaded, setLoaded] = useState(false);
//     const [errors, setErrors] = useState([]); 
    
//     useEffect(() => {
//         axios.get('http://localhost:8000/api/author/' + id)
//             .then(res => {
//                 setName(res.data.Name);
//                 setLoaded(true);
//             })
//     }, []);
    
//     const updateAuthor = author => {
//         axios.put('http://localhost:8000/api/author/' + id, author )
//             .then(res => navigate('/'))
//             .catch(err=>{const errorResponse = err.response.data.errors;
//                 const errorArr = [];
//                 for (const key in errorResponse) { // Loop through all errors and get the messages
//                     errorArr.push(errorResponse[key].message)
//                 }
//                 // Set Errors
//                 setErrors(errorArr);
//             })  
//     }
    
//     return (
//         <div>
//             <h1>Favourite authors</h1>
//             <Link to='/' >Home</Link>
            
//             <h2>Edit this author:</h2>
//             {errors.map((err, index) => <p key={index}>{err}</p>)}
//             {loaded && (<AuthorForm
//             initialName={Name}
//             onSubmitprop ={updateAuthor}
//             />)}
//         </div>
//     )
// }
    
// export default Update;

