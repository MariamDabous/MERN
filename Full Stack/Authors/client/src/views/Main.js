import React, { useEffect, useState } from 'react'
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
    
const Main = (props) => {
    const [people, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/all')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    return (
        <div>
            <hr/>
            {loaded && <AuthorList people={people}/>}
        </div>
    )
}
    
export default Main;
