import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorList from '../components/AuthorList';
import { Link } from "@reach/router"
    
const Main = (props) => {
    const [Authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/all')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    const removeFromDom = authorId => {
        setAuthors(Authors.filter(author => author._id != authorId));
    }
    
    return (
        <div>
        
            {loaded && <AuthorList Authors={Authors} removeFromDom={removeFromDom} />}
        </div>
    )
}
    
export default Main;



// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import PersonForm from '../components/PersonForm';
// import PersonList from '../components/PersonList';


// const Main = (props) => {
//     const [people, setPeople] = useState([]);
//     const [loaded, setLoaded] = useState(false);
    
//     useEffect(()=>{
//         axios.get('http://localhost:8000/api/all')
//             .then(res=>{
//                 setPeople(res.data);
//                 setLoaded(true);
//             })
//             .catch(err => console.error(err));
//     },[]);

//     const removeFromDom = personId => {
//         setPeople(people.filter(person => person._id != personId));
//     }
// // export default () => {
// //     const [ message, setMessage ] = useState("Loading...")
// //     useEffect(()=>{
// //         axios.get("http://localhost:8000/api")
// //             .then(res=>setMessage(res.data.message))       
// //     }, []);
//     return (
//         <div>
//             {/* <h2>Message from the backend: {message}</h2> */}
//             <PersonForm/>
//             <hr></hr>
//             {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
//         </div>
//     )
// }

// export default Main;

